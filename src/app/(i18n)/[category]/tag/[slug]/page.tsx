import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TagArticle from "@/components/tag/TagArticle";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import DevEditLink from "@/components/layout/DevEditLink";
import {
  getTagBySlug,
  getSpotsBySlugsTranslated,
  getSpotListByTagSlugTranslated,
  getTagPageBySlug,
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

/** DB の TagPageWithRelations → TagPageContent に変換（翻訳なし） */
function dbToContent(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dbPage: any
): TagPageContent {
  const descriptions: Record<string, string> = {};
  const sections = (dbPage.sections ?? []).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (s: any) => {
      const spotSlugs: string[] = [];
      for (const sp of s.spots ?? []) {
        const slug = sp.spot?.slug;
        if (slug) {
          spotSlugs.push(slug);
          if (sp.description) descriptions[slug] = sp.description;
        }
      }
      return { key: s.key, heading: s.heading, intro: s.intro ?? "", spotSlugs };
    }
  );
  return {
    title: dbPage.title,
    breadcrumb: dbPage.breadcrumb,
    heroImage: dbPage.hero_image ?? undefined,
    updatedAt: dbPage.updated_at_label ?? "",
    prNotice: dbPage.pr_notice ?? "",
    lead: dbPage.lead,
    prBanner: dbPage.pr_banner
      ? {
          heading: dbPage.pr_banner.heading,
          image: dbPage.pr_banner.image ?? "",
          body: dbPage.pr_banner.body ?? [],
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          links: (dbPage.pr_banner.links ?? []).map((l: any) => ({ label: l.label, href: l.href })),
        }
      : undefined,
    sections,
    descriptions,
    mapEmbed: dbPage.map_heading
      ? { heading: dbPage.map_heading, intro: dbPage.map_intro ?? "", iframeHtml: dbPage.map_iframe_html ?? "" }
      : undefined,
    faqs: dbPage.faqs?.length > 0
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ? dbPage.faqs.map((f: any) => ({ question: f.question, answer: f.answer }))
      : undefined,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: localeSlug, slug: tagSlug } = await params;
  if (!ALL_LOCALE_SLUGS.includes(localeSlug)) return {};

  // 翻訳ありページ → 翻訳なしDBページ → ダミーデータの順でフォールバック
  const translationResult = await getTagPageBySlugWithTranslation(tagSlug, localeSlug);
  let title: string;
  let description: string;
  let heroImage: string | undefined;
  const hasTranslation = Boolean(translationResult);

  if (translationResult) {
    const { translation, page } = translationResult;
    title = translation.title ?? tagSlug;
    description = (translation.lead ?? "").split("\n")[0];
    heroImage = page.hero_image ?? undefined;
  } else {
    const basePage = await getTagPageBySlug(tagSlug);
    const fallback = basePage ? dbToContent(basePage) : tagPageContents[tagSlug];
    if (fallback) {
      title = fallback.title;
      description = fallback.lead.split("\n")[0];
      heroImage = fallback.heroImage;
    } else {
      // タグページコンテンツがない場合はスラッグからシンプルなメタデータを生成
      const tag = await getTagBySlug(tagSlug);
      if (!tag) return {};
      title = tagSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      description = "";
      heroImage = undefined;
    }
  }

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
    // 翻訳が存在しないページは言語不一致コンテンツになるため noindex にする
    ...(!hasTranslation && { robots: { index: false, follow: false } }),
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
  return ALL_LOCALE_SLUGS.flatMap((locale) =>
    tagSlugs.map((slug) => ({ category: locale, slug }))
  );
}

export default async function TranslatedTagPage({ params }: Props) {
  const { category: localeSlug, slug: tagSlug } = await params;
  if (!ALL_LOCALE_SLUGS.includes(localeSlug)) notFound();

  // 翻訳ありDBページ → 翻訳なしDBページ → ダミーデータの順でフォールバック
  const translationResult = await getTagPageBySlugWithTranslation(tagSlug, localeSlug);
  let content: TagPageContent | null = null;
  let pageId: string | null = null;

  if (translationResult) {
    content = dbToTranslatedContent(translationResult.page, translationResult.translation);
    pageId = translationResult.page.id;
  } else {
    const basePage = await getTagPageBySlug(tagSlug);
    if (basePage) {
      content = dbToContent(basePage);
      pageId = basePage.id;
      // ダミーデータのdescriptionsでフォールバック（ja のみ）
      const dummyContent = tagPageContents[tagSlug];
      if (dummyContent) {
        for (const [slug, desc] of Object.entries(dummyContent.descriptions)) {
          if (!content.descriptions[slug]) content.descriptions[slug] = desc;
        }
      }
    } else {
      content = tagPageContents[tagSlug] ?? null;
    }
    // 翻訳なしフォールバック時は日本語のスポット説明文をクリアし、
    // 各スポット自身の翻訳済み lead を使用する
    if (content) content.descriptions = {};
  }

  // リッチコンテンツがない場合はシンプルなスポット一覧にフォールバック
  if (!content) {
    const [tag, fallbackSpots, mapSpots] = await Promise.all([
      getTagBySlug(tagSlug),
      getSpotListByTagSlugTranslated(tagSlug, [], localeSlug),
      getMapSpotsByTag(tagSlug),
    ]);

    if (!tag && fallbackSpots.length === 0) notFound();

    const tagName = tagSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    const simpleContent: TagPageContent = {
      title: tagName,
      breadcrumb: tagName,
      lead: "",
      sections: [],
      descriptions: {},
      updatedAt: "",
      prNotice: "",
    };

    return (
      <>
        <LanguageSwitcher
          currentLocale={localeSlug}
          categorySlug={`tag/${tagSlug}`}
          availableLocales={ALL_LOCALE_SLUGS}
          localeLabels={LOCALE_LABELS}
        />
        <TagArticle
          tagName={tagName}
          content={simpleContent}
          allSpots={[]}
          otherSpots={fallbackSpots}
          mapSpots={mapSpots}
          locale={localeSlug}
          spotHeadingLevel="h3"
          shareUrl={`${SITE_URL}/${localeSlug}/tag/${tagSlug}/`}
        />
      </>
    );
  }

  // セクション内のスポットslugsからスポットデータを取得
  const allSpotSlugs = content.sections.flatMap((s) => s.spotSlugs);

  const [tag, spotsBySlugs, otherSpots, availableLocales, mapSpots] = await Promise.all([
    getTagBySlug(tagSlug),
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

  // 非日本語ロケールでは tag.name が日本語のためスラッグから表示名を生成する
  const tagName = localeSlug === "ja"
    ? (tag?.name ?? tagSlug)
    : tagSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

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
        shareUrl={`${SITE_URL}/${localeSlug}/tag/${tagSlug}`}
        compactCards
      />
    </>
  );
}
