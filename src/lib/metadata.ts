/**
 * スポット詳細ページ共通のメタデータ構築ヘルパー
 */
import type { Metadata } from "next";
import type { SpotWithRelations } from "./types";
import { SITE_URL, buildHreflangAlternates } from "./types";
import type { ComponentLabels } from "./i18n-labels";

/** OG locale マッピング */
const OG_LOCALE_MAP: Record<string, string> = {
  ja: "ja_JP",
  en: "en_US",
  ko: "ko_KR",
  tw: "zh_TW",
  cn: "zh_CN",
};

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
  const description = labels.seoDescription(spotName, areaName, spot.type);

  const canonicalUrl = localeSlug === "ja"
    ? `${SITE_URL}/${categorySlug}/${spotSlug}`
    : `${SITE_URL}/${localeSlug}/${categorySlug}/${spotSlug}`;

  const ogLocale = OG_LOCALE_MAP[localeSlug] || "ja_JP";
  const ogImages = spot.featured_image
    ? [{ url: spot.featured_image, width: 1200, height: 630, alt: spotName }]
    : undefined;

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
