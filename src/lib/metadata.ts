/**
 * ページ共通のメタデータ構築ヘルパー
 */
import type { Metadata } from "next";
import type { SpotWithRelations } from "./types";
import { SITE_URL, OG_LOCALE_MAP, buildSpotUrl, buildArticleUrl, buildHreflangAlternates, buildAreaHreflangAlternates } from "./types";
import type { ComponentLabels } from "./i18n-labels";

/**
 * 一覧・タグ・おすすめページ共通の Metadata を生成する。
 */
export function buildListPageMetadata(options: {
  title: string;
  description: string;
  /** /recommend/ や /tag/free/ など、SITE_URL に続くパス（先頭・末尾の / 含む） */
  path: string;
  heroImage?: string;
  localeSlug?: string;
  /** hreflang に載せるロケール一覧（"en", "ko" etc.） */
  availableLocales?: readonly string[];
  /** hreflang の path prefix ("recommend", "tag/free" など) */
  hreflangSlug?: string;
}): Metadata {
  const { title, description, path, heroImage, localeSlug = "ja", availableLocales = [], hreflangSlug } = options;
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogLocale = OG_LOCALE_MAP[localeSlug] || "ja_JP";
  const alternateLocale = availableLocales
    .filter((l) => l !== localeSlug)
    .map((l) => OG_LOCALE_MAP[l])
    .filter((l): l is string => Boolean(l));
  const ogImages = heroImage ? [{ url: heroImage, width: 1200, height: 630, alt: title }] : undefined;

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
      ...(alternateLocale.length > 0 ? { alternateLocale } : {}),
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(heroImage ? { images: [heroImage] } : {}),
    },
    alternates: {
      canonical: canonicalUrl,
      ...(hreflangSlug && availableLocales.length > 0
        ? { languages: buildAreaHreflangAlternates(SITE_URL, hreflangSlug, availableLocales) }
        : {}),
    },
  };
}

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

  const canonicalUrl = buildSpotUrl(categorySlug, spotSlug, localeSlug);

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

/**
 * 記事詳細ページの Metadata を生成する（日本語専用）。
 */
export function buildArticleMetadata(options: {
  slug: string;
  title: string;
  description?: string | null;
  thumbnail?: string | null;
  publishedTime?: string | null;
  modifiedTime?: string;
}): Metadata {
  const { slug, title, description, thumbnail, publishedTime, modifiedTime } = options;
  const canonicalUrl = buildArticleUrl(slug);
  return {
    title,
    description: description ?? undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: { ja: canonicalUrl, "x-default": canonicalUrl },
    },
    openGraph: {
      type: "article",
      title,
      description: description ?? undefined,
      url: canonicalUrl,
      siteName: "nightscape.tokyo",
      locale: "ja_JP",
      publishedTime: publishedTime ?? undefined,
      modifiedTime,
      images: thumbnail
        ? [{ url: thumbnail, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description ?? undefined,
      images: thumbnail ? [thumbnail] : undefined,
    },
  };
}
