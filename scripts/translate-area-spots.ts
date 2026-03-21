/**
 * 指定エリア（カテゴリ）の全スポットを4言語に一括翻訳するスクリプト
 *
 * 使い方:
 *   npx tsx scripts/translate-area-spots.ts chiyoda
 *   npx tsx scripts/translate-area-spots.ts minato --dry-run
 */
import dotenv from "dotenv";
dotenv.config({ path: ".env.local", override: true });
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import {
  LOCALES,
  LOCALE_NAMES,
  translateWithRetry,
} from "../src/lib/translate-utils";

// ── 環境変数チェック ──
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY!;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("❌ SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY が未設定");
  process.exit(1);
}
if (!ANTHROPIC_API_KEY) {
  console.error("❌ ANTHROPIC_API_KEY が未設定");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

// ── translate-action.ts と同じシステムプロンプト ──
const SPOT_SYSTEM_PROMPT = `You are a professional tourism content localizer for a Tokyo nightscape guide website.
Your job is NOT literal translation. You FULLY LOCALIZE content so it reads as if originally written for the target audience.

## Output format (STRICT)
- Respond with ONLY a raw JSON object starting with { and ending with }
- NO markdown, NO code blocks, NO explanation, NO commentary
- All strings must be valid JSON: escape double quotes as \\", use \\n for newlines
- Do NOT include literal line breaks inside JSON string values
- If source value is null, output null. If source array is empty [], output [].

## Accuracy rules (CRITICAL)
- NEVER add facts, statistics, descriptions, or details not present in the source.
- NEVER invent opening hours, prices, access info, or historical facts.
- If the source says "無料" (free), translate as "free" — do NOT add "but parking costs ¥500" or similar.
- Keep the same number of sentences/paragraphs. Do not add extra sentences.
- Output should be roughly the same length as input — do not pad or shorten significantly.

## Localization philosophy (VERY IMPORTANT)
- Do NOT do word-for-word translation. FULLY rephrase so it reads naturally to a native speaker.
- ALL Japanese text must be fully converted — katakana, kanji, hiragana, everything. No Japanese characters should remain in the output (except inside "address" and when intentionally preserving station names in parentheses).
- Building/place names: ALWAYS use the locally established name or a full translation. Never leave part in Japanese and part translated.
- Adapt currency, units, and cultural expressions for the target audience.
- Use the tone of a popular travel blog — friendly, informative, not overly formal.
- Be consistent: the same Japanese term must map to the same translated term throughout.

## Name translation rules (CRITICAL — do NOT mix languages)
Japanese place names often combine a proper noun + descriptor (e.g. 丸ビル 35階 展望台 = "Maru Building" + "35th floor" + "observation deck"). You must translate THE ENTIRE name — never leave the proper noun in Japanese while translating only the descriptor.

## Field-specific rules
- "title", "name": Proper nouns — FULLY translate/transliterate. Use locally established name. Keep recognizable but do NOT leave any Japanese.
- "lead": Short summary — keep concise and the same tone. Fully localized.
- "report", "content": Long-form with HTML. Preserve ALL HTML tags as-is (<br>, <a>, <strong>, etc.). Natural prose, same paragraph structure.
- "address": Romanize or transliterate. Do NOT change the actual address.
- "station", "parking": Factual transport info — translate labels, keep original Japanese station name in parentheses only for lesser-known names.
- "hours", "holiday": Factual schedule — translate day names and labels only. Do NOT change the actual times/dates.
- "money": Translate labels, adapt currency format per locale rules. Do NOT change the actual prices.
- "height": Translate and convert units per locale rules. Keep original value.
- "official_label", "sns_label", "relation_label": Short link labels — translate naturally.
- "category_name": Area/category name — translate to the locally common form.
- "faqs": Translate Q&A pairs naturally. Same number of items, same topics.
- "image_alts": Short photo descriptions — translate concisely. Same number of items.
- "tag_names": Feature/category tags — translate naturally. Same number of items, same order.`;

type TranslationFields = {
  title: string | null;
  name: string | null;
  lead: string | null;
  report: string | null;
  content: string | null;
  address: string | null;
  station: string | null;
  parking: string | null;
  hours: string | null;
  holiday: string | null;
  money: string | null;
  height: string | null;
  official_label: string | null;
  sns_label: string | null;
  relation_label: string | null;
  category_name: string | null;
  faqs: { question: string; answer: string }[];
  image_alts: string[];
  tag_names: string[];
};

async function translateSpot(spotId: string, spotName: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: spot } = await supabase
    .from("spots")
    .select("*")
    .eq("id", spotId)
    .single() as any;

  if (!spot) {
    console.error(`  ❌ スポット取得失敗: ${spotName}`);
    return;
  }

  // カテゴリ名・FAQ・画像・タグを取得
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: categoryData } = await supabase
    .from("categories")
    .select("name")
    .eq("id", spot.category_id)
    .single() as any;

  const [{ data: faqs }, { data: images }, { data: tagRelations }] = await Promise.all([
    supabase.from("spot_faqs").select("question, answer").eq("spot_id", spotId).order("sort_order"),
    supabase.from("spot_images").select("alt, sort_order").eq("spot_id", spotId).order("sort_order"),
    supabase.from("spot_tags").select("tag:tags(name)").eq("spot_id", spotId),
  ]);

  const imageAlts = (images ?? [])
    .filter((img: { alt: string | null }) => img.alt?.trim())
    .map((img: { alt: string | null }) => img.alt as string);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tagNames = (tagRelations ?? [])
    .map((r: any) => r.tag?.name as string)
    .filter(Boolean);

  const fields: TranslationFields = {
    title: spot.title,
    name: spot.name,
    lead: spot.lead,
    report: spot.report,
    content: spot.content,
    address: spot.address,
    station: spot.station,
    parking: spot.parking,
    hours: spot.hours,
    holiday: spot.holiday,
    money: spot.money,
    height: spot.height,
    official_label: spot.official_label,
    sns_label: spot.sns_label,
    relation_label: spot.relation_label,
    category_name: categoryData?.name ?? null,
    faqs: faqs ?? [],
    image_alts: imageAlts,
    tag_names: tagNames,
  };

  const inputJSON = JSON.stringify(fields);

  // 4言語を並列翻訳
  const results = await Promise.allSettled(
    LOCALES.map(async (locale) => {
      const translated = await translateWithRetry<TranslationFields>(
        anthropic,
        locale,
        inputJSON,
        SPOT_SYSTEM_PROMPT,
      );

      // 画像alt のマッピング
      const sortedImages = (images ?? []).filter(
        (img: { alt: string | null }) => img.alt?.trim()
      );
      const translatedImageAlts = (translated.image_alts ?? []).map(
        (alt: string, i: number) => ({
          sort_order: (sortedImages[i] as { sort_order: number })?.sort_order ?? i,
          alt,
        })
      );

      // タグ名マッピング
      const translatedTags = translated.tag_names ?? [];
      let tagNamesMap: Record<string, string> | null = null;
      if (translatedTags.length > 0 && tagNames.length > 0) {
        const map: Record<string, string> = {};
        tagNames.forEach((orig, i) => {
          if (translatedTags[i]) map[orig] = translatedTags[i];
        });
        tagNamesMap = Object.keys(map).length > 0 ? map : null;
      }

      const { error } = await supabase
        .from("spot_translations")
        .upsert(
          {
            spot_id: spotId,
            locale,
            title: translated.title,
            name: translated.name,
            lead: translated.lead,
            report: translated.report,
            content: translated.content,
            address: translated.address,
            station: translated.station,
            parking: translated.parking,
            hours: translated.hours,
            holiday: translated.holiday,
            money: translated.money,
            height: translated.height,
            official_label: translated.official_label || null,
            sns_label: translated.sns_label || null,
            relation_label: translated.relation_label || null,
            category_name: translated.category_name || null,
            faqs: translated.faqs?.length ? translated.faqs : null,
            image_alts: translatedImageAlts.length > 0 ? translatedImageAlts : null,
            tag_names: tagNamesMap,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "spot_id,locale" }
        );

      if (error) throw new Error(`${LOCALE_NAMES[locale]}: ${error.message}`);
      return locale;
    })
  );

  const succeeded = results.filter((r) => r.status === "fulfilled").length;
  const failed = results.filter((r) => r.status === "rejected");

  if (failed.length === 0) {
    console.log(`  ✅ ${spotName} — ${succeeded}言語完了`);
  } else {
    console.log(`  ⚠️  ${spotName} — ${succeeded}成功, ${failed.length}失敗`);
    for (const f of failed) {
      if (f.status === "rejected") console.log(`     ${f.reason}`);
    }
  }
}

async function main() {
  const areaSlug = process.argv[2];
  const dryRun = process.argv.includes("--dry-run");

  if (!areaSlug) {
    console.error("使い方: npx tsx scripts/translate-area-spots.ts <area-slug>");
    console.error("例:     npx tsx scripts/translate-area-spots.ts chiyoda");
    process.exit(1);
  }

  // カテゴリ取得
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: cat } = await supabase
    .from("categories")
    .select("id, name")
    .eq("slug", areaSlug)
    .single() as any;

  if (!cat) {
    console.error(`❌ エリア "${areaSlug}" が見つかりません`);
    process.exit(1);
  }

  console.log(`\n📍 ${cat.name} (${areaSlug}) の翻訳を開始\n`);

  // 公開済みスポット取得
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: spots } = await supabase
    .from("spots")
    .select("id, slug, name, title")
    .eq("category_id", cat.id)
    .eq("published", true)
    .order("slug") as any;

  if (!spots || spots.length === 0) {
    console.log("公開済みスポットがありません");
    return;
  }

  // 既に翻訳済みのスポットを確認
  const spotIds = spots.map((s: { id: string }) => s.id);
  const { data: existingTranslations } = await supabase
    .from("spot_translations")
    .select("spot_id, locale")
    .in("spot_id", spotIds);

  const translatedMap = new Map<string, Set<string>>();
  for (const t of existingTranslations ?? []) {
    if (!translatedMap.has(t.spot_id)) translatedMap.set(t.spot_id, new Set());
    translatedMap.get(t.spot_id)!.add(t.locale);
  }

  // 未翻訳スポットを特定
  const needsTranslation = spots.filter((s: { id: string }) => {
    const locales = translatedMap.get(s.id);
    return !locales || locales.size < LOCALES.length;
  });

  const alreadyDone = spots.length - needsTranslation.length;
  console.log(`全${spots.length}スポット中、${alreadyDone}件は翻訳済み、${needsTranslation.length}件を翻訳します\n`);

  if (dryRun) {
    console.log("--dry-run: 対象スポット一覧:");
    for (const s of needsTranslation) {
      console.log(`  - ${s.name || s.title} (${s.slug})`);
    }
    return;
  }

  // 1件ずつ順番に翻訳（API レート制限を考慮）
  for (let i = 0; i < needsTranslation.length; i++) {
    const s = needsTranslation[i];
    const name = s.name || s.title;
    console.log(`[${i + 1}/${needsTranslation.length}] ${name}`);
    try {
      await translateSpot(s.id, name);
    } catch (e) {
      console.error(`  ❌ エラー: ${e}`);
    }
  }

  console.log(`\n🎉 ${cat.name} の翻訳が完了しました！`);
  console.log(`   翻訳版ページ: /en/${areaSlug}, /ko/${areaSlug}, /tw/${areaSlug}, /cn/${areaSlug}`);
}

main().catch(console.error);
