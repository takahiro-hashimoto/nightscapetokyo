import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

/**
 * 訪問レポートを200〜300文字に要約する
 */
export async function summarizeReport(report: string): Promise<string> {
  if (!report?.trim()) return "";

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 512,
    messages: [
      {
        role: "user",
        content: `以下の夜景スポット訪問レポートを200〜300文字に要約してください。

【文体ルール】
- 「〜ます。〜ます。〜ます。」のように同じ語尾が連続するのはNG
- 「〜です。」「〜ます。」「体言止め。」をバランスよく組み合わせること
- 例：「〜が広がります。都内随一の絶景。〜にもおすすめです。」のようなリズム感を意識すること
- スポットの魅力・特徴・おすすめポイントが伝わる内容にすること

要約テキストのみを返してください。

${report}`,
      },
    ],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";
  return text.trim();
}
