import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TagArticle from "@/components/tag/TagArticle";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import DevEditLink from "@/components/layout/DevEditLink";
import {
  getTagBySlug,
  getSpotsByTagSlug,
  getSpotsBySlugs,
  getTagPageBySlugWithTranslation,
  getAvailableTagPageLocales,
  getMapSpotsByTag,
} from "@/lib/supabase/queries";
import {
  SITE_URL,
  ALL_LOCALE_SLUGS,
  LOCALE_SLUG_MAP,
  LOCALE_LABELS,
  OG_LOCALE_MAP,
} from "@/lib/types";
import type { SpotWithRelations, TagPageTranslation } from "@/lib/types";
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
          // ベースの説明文
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

  // 翻訳データでオーバーレイ
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

  const result = await getTagPageBySlugWithTranslation(tagSlug, localeSlug);
  if (!result) return {};

  const { translation } = result;
  const title = translation.title ?? tagSlug;
  const description = (translation.lead ?? "").split("\n")[0];
  const canonicalUrl = `${SITE_URL}/${localeSlug}/tag/${tagSlug}`;
  const heroImage = result.page.hero_image;
  const availableLocales = await getAvailableTagPageLocales(tagSlug);

  // og:locale / og:locale:alternate
  const ogLocale = OG_LOCALE_MAP[localeSlug] ?? "en_US";
  const alternateOgLocales = availableLocales
    .map((s) => OG_LOCALE_MAP[s])
    .filter((l): l is string => Boolean(l) && l !== ogLocale);
  // ja も常に alternate に含める
  if (!alternateOgLocales.includes(OG_LOCALE_MAP.ja)) {
    alternateOgLocales.unshift(OG_LOCALE_MAP.ja);
  }

  // hreflang alternates
  const jaUrl = `${SITE_URL}/tag/${tagSlug}`;
  const languages: Record<string, string> = {
    ja: jaUrl,
    "x-default": jaUrl,
  };
  for (const urlSlug of availableLocales) {
    const hl = LOCALE_SLUG_MAP[urlSlug];
    if (hl) {
      languages[hl] = `${SITE_URL}/${urlSlug}/tag/${tagSlug}`;
    }
  }

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

export default async function TranslatedTagPage({ params }: Props) {
  const { category: localeSlug, slug: tagSlug } = await params;
  if (!ALL_LOCALE_SLUGS.includes(localeSlug)) notFound();

  const result = await getTagPageBySlugWithTranslation(tagSlug, localeSlug);
  if (!result) notFound();

  const { page, translation } = result;
  const content = dbToTranslatedContent(page, translation);

  // セクション内のスポットslugsからスポットデータを取得
  const allSpotSlugs = content.sections.flatMap((s) => s.spotSlugs);

  const [tag, spotsBySlugs, spotsByTag, availableLocales, mapSpots] = await Promise.all([
    getTagBySlug(tagSlug),
    allSpotSlugs.length > 0 ? getSpotsBySlugs(allSpotSlugs) : Promise.resolve([]),
    getSpotsByTagSlug(tagSlug),
    getAvailableTagPageLocales(tagSlug),
    getMapSpotsByTag(tagSlug),
  ]);

  // slugs指定で取得したものを優先し、タグ紐付け分もマージ（重複除去）
  const seenIds = new Set(spotsBySlugs.map((s) => s.id));
  const allSpots: SpotWithRelations[] = [
    ...spotsBySlugs,
    ...spotsByTag.filter((s) => !seenIds.has(s.id)),
  ];

  const tagName = tag?.name ?? tagSlug;

  return (
    <>
      <DevEditLink href={`/admin/tag-pages/${page.id}/edit`} />
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
        mapSpots={mapSpots}
        locale={localeSlug}
        spotHeadingLevel="h3"
        shareUrl={`${SITE_URL}/${localeSlug}/tag/${tagSlug}`}
      />
    </>
  );
}
