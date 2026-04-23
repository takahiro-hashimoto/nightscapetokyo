/**
 * 翻訳共通ユーティリティ
 * spot / tag-page 両方の translate-action から使用する。
 */
import Anthropic from "@anthropic-ai/sdk";

export const LOCALES = ["en", "ko", "zh-Hant", "zh-Hans"] as const;

export const LOCALE_NAMES: Record<string, string> = {
  en: "English",
  ko: "한국어",
  "zh-Hant": "繁體中文",
  "zh-Hans": "简体中文",
};

/** 言語ごとのローカライズ指示 */
export const LOCALE_INSTRUCTIONS: Record<string, string> = {
  en: `Target audience: International English-speaking tourists visiting Tokyo.
- Convert Japanese yen amounts: keep ¥ original AND add approximate USD in parentheses, e.g. "¥1,500 (approx. $10)"
- Heights in meters: also add feet, e.g. "115m (377 ft)"
- Use well-known English names for landmarks when they exist (e.g. "Tokyo Skytree", "Shibuya Crossing")
- Station/train line names: keep original romanized name + add line color or helpful context, e.g. "Funabori Station (Toei Shinjuku Line)"
- Use natural, travel-guide style English — not stiff or overly formal
- For addresses, keep the Japanese format but romanize naturally`,

  ko: `Target audience: Korean tourists visiting Tokyo.
- Japanese yen (¥) is widely understood in Korea; keep ¥ as-is, optionally add approximate ₩ for large amounts, e.g. "¥1,500 (약 15,000원)"
- Heights in meters (no conversion needed)
- Use Korean reading of kanji place names where conventionally used (e.g. 도쿄, 시부야), keep proper nouns in original when no standard Korean form exists
- Station names: keep Japanese name in parentheses if helpful, e.g. "후나보리역 (船堀駅)"
- Use natural Korean travel-guide style — 해요체 (polite informal)`,

  "zh-Hant": `Target audience: Taiwanese tourists visiting Tokyo.
- Keep Japanese yen ¥ as-is; optionally add approximate NT$ for reference, e.g. "¥1,500（約NT$330）"
- Heights in meters (no conversion needed)
- Use Traditional Chinese characters throughout (繁體字)
- Use Taiwanese phrasing and vocabulary (e.g. 捷運 for metro concepts when explaining, 公車 not 公共汽車)
- Place names: use common Traditional Chinese readings (e.g. 東京晴空塔, 澀谷), keep original Japanese in parentheses for lesser-known places
- Natural travel-blog style, reader-friendly`,

  "zh-Hans": `Target audience: Mainland Chinese tourists visiting Tokyo.
- Keep Japanese yen ¥ as-is; optionally add approximate CNY for reference, e.g. "日元1,500（约合人民币72元）"
- Use "日元" to distinguish from CNY ¥ where ambiguous
- Heights in meters (no conversion needed)
- Use Simplified Chinese characters throughout (简体字)
- Use Mainland Chinese phrasing (e.g. 地铁 for subway, 公交 for bus)
- Place names: use common Simplified Chinese readings (e.g. 东京晴空塔, 涩谷), keep original Japanese for lesser-known places
- Natural travel-guide style, informative and practical`,
};

/**
 * LLM が生成した JSON 文字列値内のリテラル改行・制御文字・
 * エスケープされていない二重引用符を修正する。
 *
 * 二重引用符の判定ロジック:
 *   文字列値の内部で " に遭遇した場合、直後の非空白文字が
 *   JSON 構造文字 ( , } ] : ) または入力末尾であれば
 *   「文字列の終端」と判定し、それ以外は埋め込み引用符として \" にエスケープする。
 */
export function sanitizeJSONText(raw: string): string {
  let result = "";
  let inString = false;
  let escape = false;

  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];

    if (escape) {
      result += ch;
      escape = false;
      continue;
    }

    if (ch === "\\") {
      result += ch;
      if (inString) escape = true;
      continue;
    }

    if (ch === '"') {
      if (!inString) {
        // 文字列の開始
        inString = true;
        result += ch;
        continue;
      }
      // 文字列内部で " に遭遇 — 終端か埋め込みかを判定
      let j = i + 1;
      while (j < raw.length && " \t\n\r".includes(raw[j])) j++;
      const next = j < raw.length ? raw[j] : "";
      if (next === "" || next === "," || next === "}" || next === "]" || next === ":") {
        // JSON 構造文字が続く → 文字列の終端
        inString = false;
        result += ch;
      } else {
        // それ以外 → 埋め込み引用符をエスケープ
        result += '\\"';
      }
      continue;
    }

    if (inString) {
      if (ch === "\n") { result += "\\n"; continue; }
      if (ch === "\r") { result += ""; continue; }
      if (ch === "\t") { result += "\\t"; continue; }
      const code = ch.charCodeAt(0);
      if (code < 0x20) {
        result += `\\u${code.toString(16).padStart(4, "0")}`;
        continue;
      }
    }

    result += ch;
  }
  return result;
}

export function extractJSON(text: string): unknown {
  // Try direct parse first
  try {
    return JSON.parse(text.trim());
  } catch {
    // noop
  }

  // Try after sanitizing control characters inside strings
  try {
    return JSON.parse(sanitizeJSONText(text.trim()));
  } catch {
    // noop
  }

  // Try extracting from markdown code block
  const codeBlock = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (codeBlock) {
    try {
      return JSON.parse(sanitizeJSONText(codeBlock[1].trim()));
    } catch {
      // noop
    }
  }

  // Try finding first { to last }
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    try {
      return JSON.parse(
        sanitizeJSONText(text.slice(firstBrace, lastBrace + 1))
      );
    } catch {
      // noop
    }
  }

  throw new Error("Failed to parse JSON from API response");
}

/**
 * Claude API を呼び出して翻訳 JSON を取得する。
 * systemPrompt はスポット用 / タグページ用で異なるため引数で渡す。
 */
export async function callTranslateAPI(
  client: Anthropic,
  locale: string,
  langName: string,
  inputJSON: string,
  systemPrompt: string,
): Promise<string> {
  const localeInstructions = LOCALE_INSTRUCTIONS[locale] ?? "";

  const stream = await client.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 32768,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: `Localize this Japanese content to ${langName}.

${localeInstructions ? `Locale-specific instructions:\n${localeInstructions}\n\n` : ""}CRITICAL REMINDER: In "title" and "name"-like fields, convert ALL Japanese characters (katakana, kanji, hiragana) to the target language. Do NOT leave any part in Japanese.\n\nReturn the same JSON structure with localized values. Translate what exists — do NOT add any information not in the source.\n\n${inputJSON}`,
      },
      {
        role: "assistant",
        content: "{",
      },
    ],
  });

  const response = await stream.finalMessage();

  if (response.stop_reason === "max_tokens") {
    throw new Error(`Response truncated (max_tokens). Content may be too long.`);
  }

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";

  return "{" + text;
}

/**
 * 翻訳 + JSON パース（リトライ付き）
 */
export async function translateWithRetry<T>(
  client: Anthropic,
  locale: string,
  inputJSON: string,
  systemPrompt: string,
): Promise<T> {
  const langName = LOCALE_NAMES[locale] || locale;

  for (let attempt = 0; attempt < 2; attempt++) {
    const text = await callTranslateAPI(client, locale, langName, inputJSON, systemPrompt);
    try {
      return extractJSON(text) as T;
    } catch {
      if (attempt === 1) {
        let parseDetail = "";
        try {
          JSON.parse(sanitizeJSONText(text.trim()));
        } catch (pe) {
          parseDetail = pe instanceof SyntaxError ? pe.message : String(pe);
        }
        const snippet = text.slice(0, 300);
        throw new Error(
          `${langName} JSON parse failed: ${parseDetail} | snippet: "${snippet}..."`
        );
      }
    }
  }

  throw new Error(`${langName} translation failed`);
}
