"use server";

import Anthropic from "@anthropic-ai/sdk";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { getTagPageById } from "@/lib/supabase/queries";
import {
  LOCALES,
  translateWithRetry,
} from "@/lib/translate-utils";

/** タグページ翻訳フィールド */
type TagPageTranslationFields = {
  title: string;
  breadcrumb: string;
  pr_notice: string | null;
  lead: string;
  faq_heading: string | null;
  map_heading: string | null;
  map_intro: string | null;
  pr_banner: {
    heading: string;
    body: string[];
    links: { label: string; href: string }[];
  } | null;
  sections: { key: string; heading: string; intro: string | null }[];
  descriptions: Record<string, string>;
  faqs: { question: string; answer: string }[];
};

/** タグページ翻訳用のシステムプロンプト */
const TAG_PAGE_SYSTEM_PROMPT = `You are a professional tourism content localizer for a Tokyo nightscape guide website.
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
- Keep the same number of sentences/paragraphs. Do not add extra sentences.
- Output should be roughly the same length as input — do not pad or shorten significantly.

## Localization philosophy (VERY IMPORTANT)
- Do NOT do word-for-word translation. FULLY rephrase so it reads naturally to a native speaker.
- ALL Japanese text must be fully converted — katakana, kanji, hiragana, everything.
- Building/place names: ALWAYS use the locally established name or a full translation.
- Adapt currency, units, and cultural expressions for the target audience.
- Use the tone of a popular travel blog — friendly, informative, not overly formal.

## Field-specific rules
- "title": SEO page title — FULLY translate, no Japanese characters remaining.
- "breadcrumb": Navigation breadcrumb — short, translated.
- "pr_notice": PR disclosure text — translate naturally.
- "lead": Introduction paragraph — same tone, fully localized.
- "faq_heading": FAQ section heading — translate.
- "map_heading", "map_intro": Map section — translate headings and descriptions.
- "pr_banner": PR promotional content — translate heading, body paragraphs, and link labels. Keep href URLs unchanged.
- "sections": Article sections — translate key descriptions if they are display text, translate headings and intros.
- "descriptions": Spot descriptions keyed by slug — translate each description fully. Keep the slug keys unchanged.
- "faqs": Q&A pairs — translate naturally. Same number of items, same topics.`;

export async function translateTagPage(
  tagPageId: string,
  targetLocales?: string[]
) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return { error: "ANTHROPIC_API_KEY が設定されていません" };
  }

  const tagPage = await getTagPageById(tagPageId);
  if (!tagPage) {
    return { error: "タグページが見つかりません" };
  }

  // Build descriptions map: { spot_slug: description }
  const descriptions: Record<string, string> = {};
  for (const section of tagPage.sections) {
    for (const sectionSpot of section.spots) {
      if (sectionSpot.description && sectionSpot.spot?.slug) {
        descriptions[sectionSpot.spot.slug] = sectionSpot.description;
      }
    }
  }

  const fields: TagPageTranslationFields = {
    title: tagPage.title,
    breadcrumb: tagPage.breadcrumb,
    pr_notice: tagPage.pr_notice,
    lead: tagPage.lead,
    faq_heading: tagPage.faq_heading,
    map_heading: tagPage.map_heading,
    map_intro: tagPage.map_intro,
    pr_banner: tagPage.pr_banner
      ? {
          heading: tagPage.pr_banner.heading,
          body: tagPage.pr_banner.body,
          links: tagPage.pr_banner.links.map((l) => ({
            label: l.label,
            href: l.href,
          })),
        }
      : null,
    sections: tagPage.sections.map((s) => ({
      key: s.key,
      heading: s.heading,
      intro: s.intro,
    })),
    descriptions,
    faqs: tagPage.faqs.map((f) => ({
      question: f.question,
      answer: f.answer,
    })),
  };

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const admin = createAdminClient();

  const localesToTranslate = targetLocales?.length
    ? LOCALES.filter((l) => targetLocales.includes(l))
    : LOCALES;

  const inputJSON = JSON.stringify(fields);

  const results = await Promise.allSettled(
    localesToTranslate.map(async (locale) => {
      const translated = await translateWithRetry<TagPageTranslationFields>(
        anthropic,
        locale,
        inputJSON,
        TAG_PAGE_SYSTEM_PROMPT,
      );
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

    const { error: upsertError } = await admin
      .from("tag_page_translations")
      .upsert(
        {
          tag_page_id: tagPageId,
          locale,
          title: translated.title || null,
          breadcrumb: translated.breadcrumb || null,
          pr_notice: translated.pr_notice || null,
          lead: translated.lead || null,
          faq_heading: translated.faq_heading || null,
          map_heading: translated.map_heading || null,
          map_intro: translated.map_intro || null,
          pr_banner: translated.pr_banner || null,
          sections: translated.sections?.length ? translated.sections : null,
          descriptions:
            translated.descriptions &&
            Object.keys(translated.descriptions).length > 0
              ? translated.descriptions
              : null,
          faqs: translated.faqs?.length ? translated.faqs : null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "tag_page_id,locale" }
      );

    if (upsertError) {
      errors.push(`${locale}: ${upsertError.message}`);
    }
  }

  // Revalidate pages
  const tagSlug = tagPage.tag?.slug;
  if (tagSlug) {
    revalidatePath(`/tag/${tagSlug}`);
    for (const locale of ["en", "ko", "tw", "cn"]) {
      revalidatePath(`/${locale}/tag/${tagSlug}`);
    }
  }

  revalidatePath(`/admin/tag-pages/${tagPageId}/edit`);

  if (errors.length > 0) {
    return { error: `一部の翻訳でエラー: ${errors.join(", ")}` };
  }

  return { success: true };
}
