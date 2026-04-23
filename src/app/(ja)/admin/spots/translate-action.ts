/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import Anthropic from "@anthropic-ai/sdk";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { revalidateSpotCaches } from "@/lib/cache-invalidation";
import {
  LOCALES,
  translateWithRetry,
} from "@/lib/translate-utils";

/** 長文・創作的フィールド（自然な文体が重要） */
type ProseFields = {
  title: string | null;
  name: string | null;
  lead: string | null;
  recommend_description: string | null;
  report: string | null;
  content: string | null;
  faqs: { question: string; answer: string }[];
};

/** 構造化・事実情報フィールド（正確性が重要） */
type StructuredFields = {
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
  image_alts: string[];
  tag_names: string[];
};

type TranslationFields = ProseFields & StructuredFields;

/** 長文・創作コンテンツ用プロンプト */
const PROSE_SYSTEM_PROMPT = `You are a professional tourism content writer for a Tokyo nightscape guide website.
Your job is NOT literal translation. You FULLY LOCALIZE content so it reads as if originally written for the target audience by a native speaker.

## Output format (STRICT)
- Respond with ONLY a raw JSON object starting with { and ending with }
- NO markdown, NO code blocks, NO explanation, NO commentary
- All strings must be valid JSON: escape double quotes as \\", use \\n for newlines
- Do NOT include literal line breaks inside JSON string values
- If source value is null, output null. If source array is empty [], output [].

## Accuracy rules (CRITICAL)
- NEVER add facts, statistics, descriptions, or details not present in the source.
- NEVER invent opening hours, prices, access info, or historical facts.
- Keep the same number of sentences/paragraphs. Do not add extra sentences.
- Output should be roughly the same length as input — do not pad or shorten significantly.

## Localization philosophy
- FULLY rephrase so it reads naturally to a native speaker — not word-for-word translation.
- ALL Japanese text must be fully converted — katakana, kanji, hiragana, everything. No Japanese characters should remain.
- Building/place names: ALWAYS use the locally established name or a full translation. Never leave part in Japanese and part translated.
- Use the tone of a popular travel blog — friendly, informative, vivid, not overly formal.
- Be consistent: the same Japanese term must map to the same translated term throughout.

## Name translation rules (CRITICAL — do NOT mix languages)
Japanese place names often combine a proper noun + descriptor. You must translate THE ENTIRE name.

Good examples (English):
- 丸ビル 35階 展望台 → "Marunouchi Building 35F Observation Deck" ✓
- タワーホール船堀 → "Tower Hall Funabori" ✓
- 恵比寿ガーデンプレイスタワー → "Yebisu Garden Place Tower" ✓

Bad examples (NEVER do this):
- 丸ビル 35th Floor Observation Deck ✗  (丸ビル left in Japanese)
- 恵比寿Garden Place Tower ✗ (mixed)

## Field-specific rules
- "title", "name": Proper nouns — FULLY translate/transliterate. Use locally established name. No Japanese remaining.
- "lead": Short summary — keep concise and vivid. Fully localized.
- "recommend_description": Short description for recommend page. If null, output null. Otherwise translate concisely and naturally, similar tone to "lead".
- "report", "content": Long-form with HTML. Preserve ALL HTML tags as-is (<br>, <a>, <strong>, etc.). Natural prose, same paragraph structure.
- "faqs": Translate Q&A pairs naturally. Same number of items, same topics.`;

/** 構造化・事実情報フィールド用プロンプト */
const STRUCTURED_SYSTEM_PROMPT = `You are a professional tourism content localizer for a Tokyo nightscape guide website.
Your job is to accurately localize factual, structured information while preserving all specific values (times, prices, distances).

## Output format (STRICT)
- Respond with ONLY a raw JSON object starting with { and ending with }
- NO markdown, NO code blocks, NO explanation, NO commentary
- All strings must be valid JSON: escape double quotes as \\", use \\n for newlines
- Do NOT include literal line breaks inside JSON string values
- If source value is null, output null. If source array is empty [], output [].

## Accuracy rules (CRITICAL — never change factual values)
- Do NOT change actual times, prices, dates, or distances.
- Do NOT add information not present in the source.
- Translate only the labels and descriptors around factual values.
- "hours", "holiday": Translate day names and labels only. Times/dates stay unchanged.
- "money": Translate labels, adapt currency format per locale rules. Actual prices stay unchanged.
- "height": Translate and convert units per locale rules. Keep original value.

## Field-specific rules
- "address": Romanize or transliterate. Do NOT change the actual address structure.
- "station", "parking": Translate labels; keep original Japanese station name in parentheses only for lesser-known names.
- "official_label", "sns_label", "relation_label": Short link labels — translate naturally and concisely.
- "category_name": Area/category name — translate to the locally common form.
- "image_alts": Short photo descriptions — translate concisely. Same number of items, same order.
- "tag_names": Feature/category tags — translate naturally. Same number of items, same order.`;

export async function translateSpot(spotId: string, targetLocales?: string[]) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return { error: "ANTHROPIC_API_KEY が設定されていません" };
  }

  const admin = createAdminClient();

  // Fetch spot data
  const { data: spot, error: spotError } = await admin
    .from("spots")
    .select("*")
    .eq("id", spotId)
    .single();

  if (spotError || !spot) {
    return { error: "スポットが見つかりません" };
  }

  // Fetch category name, FAQs, images, and tags
  const { data: categoryData } = await admin
    .from("categories")
    .select("name")
    .eq("id", spot.category_id)
    .single() as any;
  const categoryName: string | null = categoryData?.name ?? null;

  const [{ data: faqs }, { data: images }, { data: tagRelations }] = await Promise.all([
    admin
      .from("spot_faqs")
      .select("question, answer")
      .eq("spot_id", spotId)
      .order("sort_order"),
    admin
      .from("spot_images")
      .select("alt, sort_order")
      .eq("spot_id", spotId)
      .order("sort_order"),
    admin
      .from("spot_tags")
      .select("tag:tags(name)")
      .eq("spot_id", spotId),
  ]);

  // Extract non-empty alt texts for translation
  const imageAlts = (images ?? [])
    .filter((img: { alt: string | null }) => img.alt?.trim())
    .map((img: { alt: string | null }) => img.alt as string);

  // Extract tag names for translation
  const tagNames = (tagRelations ?? [])
    .map((r: any) => r.tag?.name as string)
    .filter(Boolean);

  const proseFields: ProseFields = {
    title: spot.title,
    name: spot.name,
    lead: spot.lead,
    recommend_description: spot.recommend_description ?? null,
    report: spot.report,
    content: spot.content,
    faqs: faqs ?? [],
  };

  const structuredFields: StructuredFields = {
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
    category_name: categoryName,
    image_alts: imageAlts,
    tag_names: tagNames,
  };

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const localesToTranslate = targetLocales?.length
    ? LOCALES.filter((l) => targetLocales.includes(l))
    : LOCALES;

  const proseJSON = JSON.stringify(proseFields);
  const structuredJSON = JSON.stringify(structuredFields);

  const results = await Promise.allSettled(
    localesToTranslate.map(async (locale) => {
      // 長文フィールドと構造化フィールドを並列で翻訳
      const [prose, structured] = await Promise.all([
        translateWithRetry<ProseFields>(anthropic, locale, proseJSON, PROSE_SYSTEM_PROMPT),
        translateWithRetry<StructuredFields>(anthropic, locale, structuredJSON, STRUCTURED_SYSTEM_PROMPT),
      ]);
      const translated: TranslationFields = { ...prose, ...structured };
      return { locale, translated };
    })
  );

  const errors: string[] = [];

  for (const result of results) {
    if (result.status === "rejected") {
      errors.push(String(result.reason));
      continue;
    }

    const { locale, translated } = result.value;

    // Map translated alt texts back to sort_order
    const sortedImages = (images ?? []).filter(
      (img: { alt: string | null }) => img.alt?.trim()
    );
    const translatedImageAlts = (translated.image_alts ?? []).map(
      (alt: string, i: number) => ({
        sort_order: (sortedImages[i] as { sort_order: number })?.sort_order ?? i,
        alt,
      })
    );

    const { error: upsertError } = await admin
      .from("spot_translations")
      .upsert(
        {
          spot_id: spotId,
          locale,
          title: translated.title,
          name: translated.name,
          lead: translated.lead,
          recommend_description: translated.recommend_description || null,
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
          image_alts: translatedImageAlts.length > 0
            ? translatedImageAlts
            : null,
          tag_names: (() => {
            const translatedTags = translated.tag_names ?? [];
            if (translatedTags.length === 0 || tagNames.length === 0) return null;
            const map: Record<string, string> = {};
            tagNames.forEach((orig, i) => {
              if (translatedTags[i]) map[orig] = translatedTags[i];
            });
            return Object.keys(map).length > 0 ? map : null;
          })(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: "spot_id,locale" }
      );

    if (upsertError) {
      errors.push(`${locale}: ${upsertError.message}`);
    }
  }

  // Revalidate translated pages
  const { data: catData } = await admin
    .from("spots")
    .select("slug, category:categories(slug)")
    .eq("id", spotId)
    .single();

  if (catData) {
    const catSlug = (catData as any).category?.slug;
    if (catSlug) {
      for (const locale of LOCALES) {
        revalidatePath(`/${locale}/${catSlug}/${catData.slug}`);
      }
    }
  }

  revalidateSpotCaches();
  revalidatePath(`/admin/spots/${spotId}/edit`);

  if (errors.length > 0) {
    return { error: `一部の翻訳でエラー: ${errors.join(", ")}` };
  }

  return { success: true };
}
