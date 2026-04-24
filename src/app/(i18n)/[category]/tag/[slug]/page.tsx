import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TagArticle from "@/components/tag/TagArticle";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import DevEditLink from "@/components/layout/DevEditLink";
import {
  getSpotsBySlugsTranslated,
  getSpotListByTagSlugTranslated,
  getTagPageBySlugWithTranslation,
  getAvailableTagPageLocales,
  getMapSpotsByTag,
  getPurposeTags,
} from "@/lib/supabase/queries";
import { shouldSkipStaticGenerationForPreview } from "@/lib/vercel";
import {
  SITE_URL,
  ALL_LOCALE_SLUGS,
  LOCALE_LABELS,
  OG_LOCALE_MAP,
  buildTagHreflangAlternates,
} from "@/lib/types";
import type { SpotWithRelations, TagPageTranslation } from "@/lib/types";
import { tagPageContents, dummyTagSpots } from "@/lib/dummy-tag-data";
import type { TagPageContent } from "@/lib/dummy-tag-data";

/*
 * URL: /en/tag/date, /tw/tag/date
 * Next.js params: { category: "en", slug: "date" }
 *
 * "category" param = URL locale slug (en, ko, tw, cn)
 */

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

/** DB の TagPageWithRelations + Translation → TagPageContent に変換 */
function dbToTranslatedContent(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dbPage: any,
  translation: TagPageTranslation
): TagPageContent {
  const descriptions: Record<string, string> = {};

  // ベースのセクション情報を取得
  const baseSections = (dbPage.sections ?? []).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (s: any) => {
      const spotSlugs: string[] = [];
      for (const sp of s.spots ?? []) {
        const slug = sp.spot?.slug;
        if (slug) {
          spotSlugs.push(slug);
          if (sp.description) {
            descriptions[slug] = sp.description;
          }
        }
      }
      return {
        key: s.key,
        heading: s.heading,
        intro: s.intro ?? "",
        spotSlugs,
      };
    }
  );

  // セクション見出し・イントロの翻訳
  const translatedSections = baseSections.map(
    (base: { key: string; heading: string; intro: string; spotSlugs: string[] }) => {
      const tSection = translation.sections?.find((ts) => ts.key === base.key);
      return {
        ...base,
        heading: tSection?.heading ?? base.heading,
        intro: tSection?.intro ?? base.intro,
      };
    }
  );

  // 翻訳されたスポット説明文でオーバーレイ
  if (translation.descriptions) {
    for (const [spotSlug, desc] of Object.entries(translation.descriptions)) {
      descriptions[spotSlug] = desc;
    }
  }

  // PRバナーの翻訳
  const basePrBanner = dbPage.pr_banner;
  let translatedPrBanner: TagPageContent["prBanner"] | undefined;
  if (basePrBanner) {
    const tBanner = translation.pr_banner;
    translatedPrBanner = {
      heading: tBanner?.heading ?? basePrBanner.heading,
      image: basePrBanner.image ?? "",
      body: tBanner?.body ?? basePrBanner.body ?? [],
      links: tBanner?.links ??
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (basePrBanner.links ?? []).map((l: any) => ({
          label: l.label,
          href: l.href,
        })),
    };
  }

  return {
    title: translation.title ?? dbPage.title,
    breadcrumb: translation.breadcrumb ?? dbPage.breadcrumb,
    heroImage: dbPage.hero_image ?? undefined,
    updatedAt: dbPage.updated_at_label ?? "",
    prNotice: translation.pr_notice ?? dbPage.pr_notice ?? "",
    lead: translation.lead ?? dbPage.lead,
    prBanner: translatedPrBanner,
    sections: translatedSections,
    descriptions,
    mapEmbed:
      dbPage.map_heading
        ? {
            heading: translation.map_heading ?? dbPage.map_heading,
            intro: translation.map_intro ?? dbPage.map_intro ?? "",
            iframeHtml: dbPage.map_iframe_html ?? "",
          }
        : undefined,
    faqHeading: translation.faq_heading ?? undefined,
    faqs:
      translation.faqs && translation.faqs.length > 0
        ? translation.faqs
        : dbPage.faqs?.length > 0
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ? dbPage.faqs.map((f: any) => ({
              question: f.question,
              answer: f.answer,
            }))
          : undefined,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: localeSlug, slug: tagSlug } = await params;
  if (!ALL_LOCALE_SLUGS.includes(localeSlug)) return {};

  // 翻訳が存在しない locale/tag は noindex fallback を返さず、メタデータなしとする
  const translationResult = await getTagPageBySlugWithTranslation(tagSlug, localeSlug);
  if (!translationResult) return {};

  const { translation, page } = translationResult;
  const title = translation.title ?? tagSlug;
  const description = (translation.lead ?? "").split("\n")[0];
  const heroImage = page.hero_image ?? undefined;

  const canonicalUrl = `${SITE_URL}/${localeSlug}/tag/${tagSlug}/`;
  const availableLocales = await getAvailableTagPageLocales(tagSlug);

  const ogLocale = OG_LOCALE_MAP[localeSlug] ?? "en_US";
  const alternateOgLocales = availableLocales
    .map((s) => OG_LOCALE_MAP[s])
    .filter((l): l is string => Boolean(l) && l !== ogLocale);
  if (!alternateOgLocales.includes(OG_LOCALE_MAP.ja)) {
    alternateOgLocales.unshift(OG_LOCALE_MAP.ja);
  }

  const languages = buildTagHreflangAlternates(SITE_URL, tagSlug, availableLocales);

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      siteName: "nightscape.tokyo",
      locale: ogLocale,
      alternateLocale: alternateOgLocales,
      images: heroImage
        ? [{ url: heroImage, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: heroImage ? [heroImage] : undefined,
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
  };
}

export const revalidate = 86400;

export async function generateStaticParams() {
  if (shouldSkipStaticGenerationForPreview()) return [];
  const tags = await getPurposeTags();
  const tagSlugs = Array.from(
    new Set([...tags.map((t) => t.slug), ...Object.keys(tagPageContents)])
  );
  // 翻訳が実在する locale/slug 組み合わせのみ生成する
  const results = await Promise.all(
    tagSlugs.map(async (slug) => {
      const locales = await getAvailableTagPageLocales(slug);
      return locales.map((locale) => ({ category: locale, slug }));
    })
  );
  return results.flat();
}

export default async function TranslatedTagPage({ params }: Props) {
  const { category: localeSlug, slug: tagSlug } = await params;
  if (!ALL_LOCALE_SLUGS.includes(localeSlug)) notFound();

  // 翻訳が存在しない locale/tag は 404
  const translationResult = await getTagPageBySlugWithTranslation(tagSlug, localeSlug);
  if (!translationResult) notFound();

  const content = dbToTranslatedContent(translationResult.page, translationResult.translation);
  const pageId = translationResult.page.id;

  const allSpotSlugs = content.sections.flatMap((s) => s.spotSlugs);

  const [spotsBySlugs, otherSpots, availableLocales, mapSpots] = await Promise.all([
    allSpotSlugs.length > 0 ? getSpotsBySlugsTranslated(allSpotSlugs, localeSlug) : Promise.resolve([]),
    getSpotListByTagSlugTranslated(tagSlug, allSpotSlugs, localeSlug),
    getAvailableTagPageLocales(tagSlug),
    getMapSpotsByTag(tagSlug),
  ]);

  // DB に存在しないスポットはダミーデータからフォールバック
  const dbSlugs = new Set(spotsBySlugs.map((s) => s.slug));
  const missingSlugs = allSpotSlugs.filter((s) => !dbSlugs.has(s));
  const dummySpots = dummyTagSpots[tagSlug] ?? [];
  const fallbackSpots = missingSlugs.length > 0
    ? dummySpots.filter((s) => missingSlugs.includes(s.slug))
    : [];
  const allSpots: SpotWithRelations[] = [...spotsBySlugs, ...fallbackSpots];

  const tagName = tagSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <>
      {pageId && <DevEditLink href={`/admin/tag-pages/${pageId}/edit`} />}
      <LanguageSwitcher
        currentLocale={localeSlug}
        categorySlug={`tag/${tagSlug}`}
        availableLocales={availableLocales}
        localeLabels={LOCALE_LABELS}
      />
      <TagArticle
        tagName={tagName}
        content={content}
        allSpots={allSpots}
        otherSpots={otherSpots}
        mapSpots={mapSpots}
        locale={localeSlug}
        spotHeadingLevel="h3"
        shareUrl={`${SITE_URL}/${localeSlug}/tag/${tagSlug}/`}
        compactCards
      />
    </>
  );
}
