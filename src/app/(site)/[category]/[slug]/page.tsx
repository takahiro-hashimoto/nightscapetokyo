import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SpotArticle from "@/components/spot/SpotArticle";
import TranslatedAreaContent from "@/components/area/TranslatedAreaContent";
import {
  getSpotBySlug,
  getAllSpotSlugs,
  getAvailableTranslations,
  getRelatedSpots,
  getSpotsByCategoryTranslated,
  getCategoryBySlug,
  getTranslatedAreaSlugs,
  getAvailableAreaLocales,
  getMapSpotsByCategory,
  getTopSpots,
} from "@/lib/supabase/queries";
import { TOKYO_AREA_SLUGS } from "@/lib/constants";
import { ALL_LOCALE_SLUGS, SITE_URL, buildAreaHreflangAlternates, OG_LOCALE_MAP, SITE_NAMES } from "@/lib/types";
import { getComponentLabels } from "@/lib/i18n-labels";
import { buildSpotMetadata } from "@/lib/metadata";
import { shouldSkipStaticGenerationForPreview } from "@/lib/vercel";

/*
 * このルートは2つのケースを処理する:
 * 1. スポット詳細ページ: /chiyoda/wadakura-park (category=chiyoda, slug=wadakura-park)
 * 2. 翻訳エリアページ: /en/chiyoda (category=en, slug=chiyoda)
 *    → categoryがロケールスラッグの場合
 */

type Props = {
  params: Promise<{ category: string; slug: string }>;
};


export async function generateStaticParams() {
  if (shouldSkipStaticGenerationForPreview()) {
    return [];
  }

  // Pattern A: スポット詳細 → { category: "chiyoda", slug: "wadakura-park" }
  // Pattern B: 翻訳エリア  → { category: "en",      slug: "chiyoda" }
  const [spotSlugs, areaSlugs] = await Promise.all([
    getAllSpotSlugs(),
    getTranslatedAreaSlugs(),
  ]);

  return [
    ...spotSlugs.map((s) => ({ category: s.category, slug: s.slug })),
    ...areaSlugs.map((s) => ({ category: s.locale,    slug: s.category })),
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
    if (!cat || !availableLocales.includes(category)) return {};

    const translatedAreaName = spots[0]?.category.name ?? cat.name;
    const labels = getComponentLabels(category);
    const areaTitle = labels.areaPage.title(translatedAreaName);
    const siteName = SITE_NAMES[category] ?? "Tokyo Night View Guide";
    const title = `${areaTitle} | ${siteName}`;
    const description = labels.areaPage.lead(translatedAreaName, spots);
    const canonicalUrl = `${SITE_URL}/${category}/${slug}/`;

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

  const translations = await getAvailableTranslations(spot.id);
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
    if (!cat || !availableLocales.includes(category)) notFound();

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

  const [translations, relatedSpots, topSpots] = await Promise.all([
    getAvailableTranslations(spot.id),
    getRelatedSpots(spot.category_id, spot.id, 8),
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
    />
  );
}
