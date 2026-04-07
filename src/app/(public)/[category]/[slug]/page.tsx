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
} from "@/lib/supabase/queries";
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
    const title = labels.areaPage.title(translatedAreaName);
    const description = labels.areaPage.lead(translatedAreaName);
    const canonicalUrl = `${SITE_URL}/${category}/${slug}`;

    return {
      title,
      description,
      openGraph: {
        type: "website",
        title,
        description,
        url: canonicalUrl,
        siteName: "nightscape.tokyo",
        locale: OG_LOCALE_MAP[category] ?? "en_US",
      },
      twitter: {
        card: "summary_large_image",
        title,
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

  const translations = await getAvailableTranslations(spot.id);
  const labels = getComponentLabels("ja");

  return buildSpotMetadata(spot, labels, category, slug, "ja", translations.map((t) => t.locale));
}

export const revalidate = 3600;

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
  const [translations, relatedSpots, recommendedSpots] = await Promise.all([
    getAvailableTranslations(spot.id),
    getRelatedSpots(spot.category_id, spot.id, 8),
    getRecommendedSpotsByTags(spot.id, spot.category_id, tagIds, 8),
  ]);
  const labels = getComponentLabels("ja");

  return (
    <SpotArticle
      spot={spot}
      labels={labels}
      currentLocale={null}
      categorySlug={category}
      spotSlug={slug}
      availableLocales={translations.map((t) => t.locale)}

      relatedSpots={relatedSpots}
      recommendedSpots={recommendedSpots}
    />
  );
}
