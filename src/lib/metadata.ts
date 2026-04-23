/**
 * スポット詳細ページ共通のメタデータ構築ヘルパー
 */
import type { Metadata } from "next";
import type { SpotWithRelations } from "./types";
import { SITE_URL, OG_LOCALE_MAP, buildHreflangAlternates } from "./types";
import type { ComponentLabels } from "./i18n-labels";

/**
 * スポット詳細ページの Metadata を生成する。
 * 日本語ページ / 翻訳ページの両方で使用する。
 */
export function buildSpotMetadata(
  spot: SpotWithRelations,
  labels: ComponentLabels,
  categorySlug: string,
  spotSlug: string,
  localeSlug: string,
  availableLocales: string[]
): Metadata {
  const spotName = spot.name || spot.title;
  const pageTitle = labels.seoH1(spotName);
  const areaName = spot.category?.name || categorySlug;
  const description = labels.seoDescription(spotName, areaName, spot.type, spot.lead ?? null);

  const canonicalUrl = localeSlug === "ja"
    ? `${SITE_URL}/${categorySlug}/${spotSlug}/`
    : `${SITE_URL}/${localeSlug}/${categorySlug}/${spotSlug}/`;

  const ogLocale = OG_LOCALE_MAP[localeSlug] || "ja_JP";
  const ogImages = spot.featured_image
    ? [{ url: spot.featured_image, width: 1200, height: 630, alt: spotName }]
    : undefined;

  // og:locale:alternate: ja + 翻訳済みロケールのうち現在ロケール以外
  const allLocalesForPage = ["ja", ...availableLocales];
  const alternateLocale = allLocalesForPage
    .filter((l) => l !== localeSlug)
    .map((l) => OG_LOCALE_MAP[l])
    .filter((l): l is string => Boolean(l));

  return {
    title: pageTitle,
    description,
    openGraph: {
      type: "article",
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: "nightscape.tokyo",
      locale: ogLocale,
      alternateLocale,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: spot.featured_image ? [spot.featured_image] : undefined,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: buildHreflangAlternates(
        SITE_URL,
        categorySlug,
        spotSlug,
        availableLocales
      ),
    },
  };
}
