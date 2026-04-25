/** i18n エリアページ共通の Next.js Props 型 */
export type CategoryPageProps = { params: Promise<{ category: string }> };

export type Category = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
};

export type Tag = {
  id: string;
  name: string;
  slug: string;
  image_url: string | null;
};

export type SpotImage = {
  id: string;
  spot_id: string;
  url: string;
  alt: string | null;
  sort_order: number;
};

export type SpotFaq = {
  id: string;
  spot_id: string;
  question: string;
  answer: string;
  sort_order: number;
};

export type SpotHotel = {
  id: string;
  spot_id: string;
  checkin: string | null;
  checkout: string | null;
  amenity: string | null;
  affiliate_1: string | null;
  affiliate_2: string | null;
  affiliate_3: string | null;
  affiliate_4: string | null;
};

export type SpotEvent = {
  id: string;
  spot_id: string;
  start_date: string | null;
  end_date: string | null;
  place: string | null;
  event_hour: string | null;
};

export type SpotReview = {
  id: string;
  spot_id: string;
  name: string;
  rating: number;
  title: string;
  content: string;
  created_at: string;
};

export type Spot = {
  id: string;
  slug: string;
  title: string;
  type: "spot" | "hotel" | "event";
  category_id: string;
  content: string | null;
  name: string | null;
  lead: string | null;
  recommend_description?: string | null;
  report: string | null;
  address: string | null;
  official_url: string | null;
  official_label: string | null;
  sns_url: string | null;
  sns_label: string | null;
  relation_url: string | null;
  relation_label: string | null;
  hours: string | null;
  holiday: string | null;
  money: string | null;
  station: string | null;
  parking: string | null;
  map: string | null;
  height: string | null;
  movie: string | null;
  asoview: string | null;
  asoview_02: string | null;
  latitude: number | null;
  longitude: number | null;
  rating_beautiful: number | null;
  rating_access: number | null;
  rating_atmosphere: number | null;
  rating_cost: number | null;
  featured_image: string | null;
  closed?: boolean;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type SpotTranslation = {
  id: string;
  spot_id: string;
  locale: string;
  title: string | null;
  name: string | null;
  lead: string | null;
  report: string | null;
  content: string | null;
  address: string | null;
  station: string | null;
  parking: string | null;
  hours: string | null;
  holiday: string | null;
  money: string | null;
  height: string | null;
  category_name: string | null;
  faqs: { question: string; answer: string }[] | null;
  image_alts: { sort_order: number; alt: string }[] | null;
  tag_names: Record<string, string> | null;
  created_at: string;
  updated_at: string;
};

/** Admin画面用のロケール表示名（DBロケールキー版） */
export const LOCALE_DISPLAY_NAMES: Record<string, string> = {
  en: "English",
  ko: "한국어",
  "zh-Hant": "繁體中文",
  "zh-Hans": "简体中文",
};

/** サポートするロケール定数 — 新しい言語はここに追加するだけ */
export const LOCALE_SLUGS = ["en", "ko", "tw", "cn"] as const;
/** URL スラッグ用のロケール型（ja を含まない） */
export type LocaleSlug = (typeof LOCALE_SLUGS)[number];
/** ja + 全ロケール — ラベル定義など ja を含む場面で使用 */
export type SiteLocale = "ja" | LocaleSlug;

export const SITE_URL = "https://nightscape.tokyo";

/**
 * ロケール設定の単一の真実の情報源。
 * 新しい言語を追加する場合はここだけを変更すれば良い。
 * LOCALE_SLUG_MAP / LOCALE_TO_SLUG / OG_LOCALE_MAP / LOCALE_HTML_LANG /
 * LOCALE_LABELS / SITE_NAMES はすべてここから自動導出される。
 */
export const LOCALE_CONFIG = {
  en: { dbLocale: "en",       htmlLang: "en",      ogLocale: "en_US", label: "English",  siteName: "Tokyo Night View Guide" },
  ko: { dbLocale: "ko",       htmlLang: "ko",      ogLocale: "ko_KR", label: "한국어",    siteName: "도쿄 야경 가이드"         },
  tw: { dbLocale: "zh-Hant",  htmlLang: "zh-Hant", ogLocale: "zh_TW", label: "繁體中文",  siteName: "東京夜景導覽"              },
  cn: { dbLocale: "zh-Hans",  htmlLang: "zh-Hans", ogLocale: "zh_CN", label: "简体中文",  siteName: "东京夜景导航"              },
} satisfies Record<LocaleSlug, { dbLocale: string; htmlLang: string; ogLocale: string; label: string; siteName: string }>;

/** URL slug ↔ DB locale mapping（LOCALE_CONFIG から自動導出） */
export const LOCALE_SLUG_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(LOCALE_CONFIG).map(([slug, c]) => [slug, c.dbLocale])
);

/** DB locale → URL slug (reverse) */
export const LOCALE_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(LOCALE_CONFIG).map(([slug, c]) => [c.dbLocale, slug])
);

export const ALL_LOCALE_SLUGS: readonly string[] = LOCALE_SLUGS;

/** 言語切替ボタン用の表示名（URLスラッグ → 表示ラベル） */
export const LOCALE_LABELS: Record<string, string> = Object.fromEntries(
  Object.entries(LOCALE_CONFIG).map(([slug, c]) => [slug, c.label])
);

/** URL slug → OG locale 形式 (og:locale / og:locale:alternate で使用) */
export const OG_LOCALE_MAP: Record<string, string> = {
  ja: "ja_JP",
  ...Object.fromEntries(Object.entries(LOCALE_CONFIG).map(([slug, c]) => [slug, c.ogLocale])),
};

/** 全 OG locale 値の配列 */
export const ALL_OG_LOCALES: readonly string[] = Object.values(OG_LOCALE_MAP);

/** og:locale:alternate 用: ja を除いた非日本語 OG locale 値（LOCALE_CONFIG から自動導出） */
export const LOCALE_OG_ALTERNATES: readonly string[] = Object.values(LOCALE_CONFIG).map((c) => c.ogLocale);

/** URL slug → HTML lang 属性値 (非 ja ページの lang 属性で使用) */
export const LOCALE_HTML_LANG: Record<string, string> = Object.fromEntries(
  Object.entries(LOCALE_CONFIG).map(([slug, c]) => [slug, c.htmlLang])
);

/** 各言語のサイト名（ヘッダーロゴ・パンくずで使用） */
export const SITE_NAMES: Record<string, string> = Object.fromEntries(
  Object.entries(LOCALE_CONFIG).map(([slug, c]) => [slug, c.siteName])
);

/* ------------------------------------------------------------------ */
/* URL ビルダー — 全ページの URL 生成はここに集約する                       */
/* 将来ロケールを追加しても、このファイルだけを見ればよい構造にする。          */
/* ------------------------------------------------------------------ */

/** スポット詳細 URL（JA: /{area}/{spot}/, 翻訳: /{locale}/{area}/{spot}/） */
export function buildSpotUrl(categorySlug: string, spotSlug: string, localeSlug = "ja"): string {
  const prefix = localeSlug === "ja" ? "" : `/${localeSlug}`;
  return `${SITE_URL}${prefix}/${categorySlug}/${spotSlug}/`;
}

/** エリアトップ URL（JA: /{area}/, 翻訳: /{locale}/{area}/） */
export function buildAreaUrl(categorySlug: string, localeSlug = "ja"): string {
  const prefix = localeSlug === "ja" ? "" : `/${localeSlug}`;
  return `${SITE_URL}${prefix}/${categorySlug}/`;
}

/** タグページ URL（JA: /tag/{tag}/, 翻訳: /{locale}/tag/{tag}/） */
export function buildTagUrl(tagSlug: string, localeSlug = "ja"): string {
  const prefix = localeSlug === "ja" ? "" : `/${localeSlug}`;
  return `${SITE_URL}${prefix}/tag/${tagSlug}/`;
}

/** 検索 URL（trailingSlash: true に合わせ /search/?q=... 形式） */
export function buildSearchUrl(query: string, localeSlug = "ja"): string {
  const prefix = localeSlug === "ja" ? "" : `/${localeSlug}`;
  return `${SITE_URL}${prefix}/search/?q=${encodeURIComponent(query)}`;
}

/** ロケールホーム URL（JA: /, 翻訳: /{locale}/） */
export function buildLocaleHomeUrl(localeSlug = "ja"): string {
  return localeSlug === "ja" ? `${SITE_URL}/` : `${SITE_URL}/${localeSlug}/`;
}

/** 記事 URL（JA のみ: /article/{slug}/） */
export function buildArticleUrl(slug: string): string {
  return `${SITE_URL}/article/${slug}/`;
}

/* ------------------------------------------------------------------ */
/* 共通ユーティリティ                                                    */
/* ------------------------------------------------------------------ */

/** スポットの4項目レーティングの平均を算出 */
export function calcRatingAvg(spot: {
  rating_beautiful: number | null;
  rating_access: number | null;
  rating_atmosphere: number | null;
  rating_cost: number | null;
}): number {
  const vals = [
    spot.rating_beautiful,
    spot.rating_access,
    spot.rating_atmosphere,
    spot.rating_cost,
  ].filter((v): v is number => v != null);
  return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
}

/** jsonb フィールドが文字列にシリアライズされていた場合にパースする */
export function parseJsonField<T>(field: unknown): T | null {
  if (field == null) return null;
  if (typeof field === "string") {
    try {
      return JSON.parse(field) as T;
    } catch {
      return null;
    }
  }
  return field as T;
}

/* ------------------------------------------------------------------ */
/* 一覧用スポット型                                                      */
/* ------------------------------------------------------------------ */

export type SpotListItem = {
  id: string;
  slug: string;
  name: string;
  featured_image: string;
  category: { slug: string; name: string };
  rating_avg: number;
  rating_beautiful: number | null;
  rating_access: number | null;
  rating_atmosphere: number | null;
  rating_cost: number | null;
  lead: string;
  closed?: boolean;
  updated_at?: string;
};

/**
 * hreflang alternate links を生成するヘルパー
 * 日本語版＋翻訳済み言語＋x-default を含む Record を返す
 */
export function buildHreflangAlternates(
  siteUrl: string,
  categorySlug: string,
  spotSlug: string,
  availableLocales: readonly string[] // URL slugs: en, ko, tw, cn
): Record<string, string> {
  const jaUrl = `${siteUrl}/${categorySlug}/${spotSlug}/`;
  const languages: Record<string, string> = {
    ja: jaUrl,
    "x-default": jaUrl,
  };

  for (const urlSlug of availableLocales) {
    const hreflang = LOCALE_SLUG_MAP[urlSlug]; // tw → zh-Hant, cn → zh-Hans
    if (hreflang) {
      languages[hreflang] = `${siteUrl}/${urlSlug}/${categorySlug}/${spotSlug}/`;
    }
  }

  return languages;
}

/**
 * エリアページ用 hreflang alternate links を生成
 * ja: /{category}/, 各locale: /{locale}/{category}/, x-default: ja版
 */
export function buildAreaHreflangAlternates(
  siteUrl: string,
  categorySlug: string,
  availableLocales: readonly string[] // URL slugs: en, ko, tw, cn
): Record<string, string> {
  const jaUrl = `${siteUrl}/${categorySlug}/`;
  const languages: Record<string, string> = {
    ja: jaUrl,
    "x-default": jaUrl,
  };

  for (const urlSlug of availableLocales) {
    const hreflang = LOCALE_SLUG_MAP[urlSlug];
    if (hreflang) {
      languages[hreflang] = `${siteUrl}/${urlSlug}/${categorySlug}/`;
    }
  }

  return languages;
}

/**
 * トップページ用 hreflang alternate links を生成
 * ja: /, 各locale: /{locale}/, x-default: /
 */
export function buildHomeHreflangAlternates(
  siteUrl: string,
  availableLocales: readonly string[] // URL slugs: en, ko, tw, cn
): Record<string, string> {
  const languages: Record<string, string> = {
    ja: siteUrl,
    "x-default": siteUrl,
  };

  for (const urlSlug of availableLocales) {
    const hreflang = LOCALE_SLUG_MAP[urlSlug];
    if (hreflang) {
      languages[hreflang] = `${siteUrl}/${urlSlug}/`;
    }
  }

  return languages;
}

/**
 * タグページ用 hreflang alternate links を生成
 * ja: /tag/{tagSlug}/, 各locale: /{locale}/tag/{tagSlug}/, x-default: ja版
 */
export function buildTagHreflangAlternates(
  siteUrl: string,
  tagSlug: string,
  availableLocales: readonly string[]
): Record<string, string> {
  const jaUrl = `${siteUrl}/tag/${tagSlug}/`;
  const languages: Record<string, string> = {
    ja: jaUrl,
    "x-default": jaUrl,
  };
  for (const urlSlug of availableLocales) {
    const hreflang = LOCALE_SLUG_MAP[urlSlug];
    if (hreflang) {
      languages[hreflang] = `${siteUrl}/${urlSlug}/tag/${tagSlug}/`;
    }
  }
  return languages;
}

export type SpotWithRelations = Spot & {
  category: Category;
  tags: Tag[];
  images: SpotImage[];
  faqs: SpotFaq[];
  reviews: SpotReview[];
  hotel: SpotHotel | null;
  event: SpotEvent | null;
};

/* ------------------------------------------------------------------ */
/* Tag Page 関連型                                                      */
/* ------------------------------------------------------------------ */

export type TagPage = {
  id: string;
  tag_id: string;
  title: string;
  breadcrumb: string;
  hero_image: string | null;
  updated_at_label: string | null;
  pr_notice: string | null;
  lead: string;
  map_heading: string | null;
  map_intro: string | null;
  map_iframe_html: string | null;
  faq_heading: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type TagPagePrBanner = {
  id: string;
  tag_page_id: string;
  heading: string;
  image: string | null;
  body: string[];
  links: TagPagePrBannerLink[];
};

export type TagPagePrBannerLink = {
  id: string;
  pr_banner_id: string;
  label: string;
  href: string;
  sort_order: number;
};

export type TagPageSection = {
  id: string;
  tag_page_id: string;
  key: string;
  heading: string;
  intro: string | null;
  sort_order: number;
  spots: TagPageSectionSpot[];
};

export type TagPageSectionSpot = {
  id: string;
  section_id: string;
  spot_id: string;
  description: string | null;
  sort_order: number;
  /** join 結果 */
  spot?: { slug: string; title: string; name: string | null; featured_image: string | null };
};

export type TagPageFaq = {
  id: string;
  tag_page_id: string;
  question: string;
  answer: string;
  sort_order: number;
};

export type TagPageTranslation = {
  id: string;
  tag_page_id: string;
  locale: string;
  title: string | null;
  breadcrumb: string | null;
  pr_notice: string | null;
  lead: string | null;
  faq_heading: string | null;
  map_heading: string | null;
  map_intro: string | null;
  pr_banner: {
    heading: string;
    body: string[];
    links: { label: string; href: string }[];
  } | null;
  sections: { key: string; heading: string; intro: string | null }[] | null;
  descriptions: Record<string, string> | null;
  faqs: { question: string; answer: string }[] | null;
  created_at: string;
  updated_at: string;
};

/* ------------------------------------------------------------------ */
/* Article 関連型                                                       */
/* ------------------------------------------------------------------ */

export type Article = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  thumbnail: string | null;
  content: string | null;
  published: boolean;
  is_pr: boolean | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  href?: string;
};

/** TagPage + 全リレーション */
export type TagPageWithRelations = TagPage & {
  tag: Tag;
  pr_banner: TagPagePrBanner | null;
  sections: TagPageSection[];
  faqs: TagPageFaq[];
  translations?: TagPageTranslation[];
};
