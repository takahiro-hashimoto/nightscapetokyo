import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SpotArticle from "@/components/spot/SpotArticle";
import TranslatedAreaContent from "@/components/area/TranslatedAreaContent";
import {
  getSpotBySlug,
  getAllSpotSlugs,
  getAvailableTranslations,
  getRelatedSpots,
  getRecommendedSpotsByTags,
  getSpotsByCategoryTranslated,
  getCategoryBySlug,
  getTranslatedAreaSlugs,
  getAvailableAreaLocales,
  getMapSpotsByCategory,
  getTopSpots,
} from "@/lib/supabase/queries";
import { TOKYO_AREA_SLUGS } from "@/lib/constants";
import { ALL_LOCALE_SLUGS, SITE_URL, buildAreaHreflangAlternates, LOCALE_LABELS } from "@/lib/types";
import { getComponentLabels } from "@/lib/i18n-labels";
import { buildSpotMetadata } from "@/lib/metadata";

/*
 * このルートは2つのケースを処理する:
 * 1. スポット詳細ページ: /chiyoda/wadakura-park (category=chiyoda, slug=wadakura-park)
 * 2. 翻訳エリアページ: /en/chiyoda (category=en, slug=chiyoda)
 *    → categoryがロケールスラッグの場合
 */

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

const OG_LOCALE_MAP: Record<string, string> = {
  en: "en_US",
  ko: "ko_KR",
  tw: "zh_TW",
  cn: "zh_CN",
};

const LOCALE_SITE_NAME: Record<string, string> = {
  en: "Tokyo Night View Guide",
  ko: "도쿄 야경 가이드",
  tw: "東京夜景導覽",
  cn: "东京夜景导览",
};

export async function generateStaticParams() {
  const [spotSlugs, areaSlugs] = await Promise.all([
    getAllSpotSlugs(),
    getTranslatedAreaSlugs(),
  ]);

  return [
    ...spotSlugs.map((s) => ({ category: s.category, slug: s.slug })),
    ...areaSlugs.map((s) => ({ category: s.locale, slug: s.category })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;

  // 翻訳エリアページ
  if (ALL_LOCALE_SLUGS.includes(category)) {
    const [cat, spots, availableLocales] = await Promise.all([
      getCategoryBySlug(slug),
      getSpotsByCategoryTranslated(slug, category),
      getAvailableAreaLocales(slug),
    ]);
    if (!cat) return {};

    const translatedAreaName = spots[0]?.category.name ?? cat.name;
    const labels = getComponentLabels(category);
    const areaTitle = labels.areaPage.title(translatedAreaName);
    const siteName = LOCALE_SITE_NAME[category] ?? "Tokyo Night View Guide";
    const title = `${areaTitle} | ${siteName}`;
    const description = labels.areaPage.lead(translatedAreaName, spots);
    const canonicalUrl = `${SITE_URL}/${category}/${slug}`;

    return {
      title: { absolute: title },
      description,
      openGraph: {
        type: "website",
        title: areaTitle,
        description,
        url: canonicalUrl,
        siteName,
        locale: OG_LOCALE_MAP[category] ?? "en_US",
      },
      twitter: {
        card: "summary_large_image",
        title: areaTitle,
        description,
      },
      alternates: {
        canonical: canonicalUrl,
        languages: buildAreaHreflangAlternates(SITE_URL, slug, availableLocales),
      },
    };
  }

  // スポット詳細ページ
  const spot = await getSpotBySlug(category, slug);
  if (!spot) return {};

  // getSpotBySlug は react.cache でメモ化済みのため page component と重複しない
  const [translations] = await Promise.all([
    getAvailableTranslations(spot.id),
  ]);
  const labels = getComponentLabels("ja");

  return buildSpotMetadata(spot, labels, category, slug, "ja", translations.map((t) => t.locale));
}

export const revalidate = 86400;
export const fetchCache = "force-cache";

export default async function SpotOrAreaPage({ params }: Props) {
  const { category, slug } = await params;

  // 翻訳エリアページ: /en/chiyoda, /ko/minato, etc.
  if (ALL_LOCALE_SLUGS.includes(category)) {
    const [cat, spots, availableLocales, mapSpots] = await Promise.all([
      getCategoryBySlug(slug),
      getSpotsByCategoryTranslated(slug, category),
      getAvailableAreaLocales(slug),
      getMapSpotsByCategory(slug),
    ]);
    if (!cat) notFound();

    const translatedAreaName = spots[0]?.category.name ?? cat.name;
    const labels = getComponentLabels(category);

    return (
      <TranslatedAreaContent
        localeSlug={category}
        categorySlug={slug}
        areaName={translatedAreaName}
        spots={spots}
        areaLabels={labels.areaPage}
        availableLocales={availableLocales}
        mapSpots={mapSpots}
      />
    );
  }

  // スポット詳細ページ: /chiyoda/wadakura-park
  const spot = await getSpotBySlug(category, slug);
  if (!spot) notFound();

  const tagIds = spot.tags.map((t) => t.id);
  const [translations, relatedSpots, recommendedSpots, topSpots] = await Promise.all([
    getAvailableTranslations(spot.id),
    getRelatedSpots(spot.category_id, spot.id, 8),
    getRecommendedSpotsByTags(spot.id, spot.category_id, tagIds, 8),
    getTopSpots(60).catch(() => []),
  ]);

  const recommendSlugs = new Set(
    topSpots
      .filter((s) => TOKYO_AREA_SLUGS.has(s.category.slug) && !s.closed)
      .slice(0, 30)
      .map((s) => s.slug)
  );
  const isRecommended = recommendSlugs.has(spot.slug);

  const labels = getComponentLabels("ja");

  return (
    <SpotArticle
      spot={spot}
      labels={labels}
      currentLocale={null}
      categorySlug={category}
      spotSlug={slug}
      availableLocales={translations.map((t) => t.locale)}
      isRecommended={isRecommended}
      relatedSpots={relatedSpots}
      recommendedSpots={recommendedSpots}
    />
  );
}
