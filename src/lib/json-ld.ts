import { SITE_URL, LOCALE_CONFIG, calcRatingAvg, buildSpotUrl } from "@/lib/types";
import type { SpotListItem, SpotWithRelations } from "@/lib/types";

/** BCP 47 language codes for schema.org inLanguage（LOCALE_CONFIG から自動導出） */
const LOCALE_LANGUAGE_MAP: Record<string, string> = {
  ja: "ja",
  ...Object.fromEntries(Object.entries(LOCALE_CONFIG).map(([slug, c]) => [slug, c.htmlLang])),
};

export function localeToLanguage(locale: string): string {
  return LOCALE_LANGUAGE_MAP[locale] ?? locale;
}

/** FAQ answer の動的プレースホルダーをプレーンテキストに解決 */
function addMinutes(time: string, minutes: number): string {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + minutes;
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

export function resolveFaqAnswerText(
  answer: string,
  sunsetTime: string | null
): string {
  if (answer === "__SUNSET_DYNAMIC__") {
    if (!sunsetTime) return "日没後30〜40分が夜景の見頃です。";
    const from = addMinutes(sunsetTime, 20);
    const to = addMinutes(sunsetTime, 40);
    return `本日の東京都の日没時間は${sunsetTime}です。${from}〜${to}が夜景が綺麗に見える時間になります。`;
  }
  if (answer === "__SIMULATOR_LINK__") {
    return "日の出・日の入り方角シミュレーターを利用すると簡単に夕日が沈む方向をチェックすることができます。";
  }
  if (answer === "__TWILIGHT_LINK__") {
    return "日没とともに点灯を始めるライトアップが多く、空に夕焼け色が残る「マジックアワー」から深い青に染まる「ブルーアワー」にかけてが夜景鑑賞・撮影の黄金時間です。詳しくはマジックアワーとは？夜景鑑賞・撮影の黄金時間を解説（/article/twilight/）をご覧ください。";
  }
  return answer;
}

/** WebSite + SearchAction（サイト全体に1つ） */
export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "nightscape.tokyo",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Organization（サイト全体に1つ） */
export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "nightscape.tokyo",
    url: SITE_URL,
    description:
      "Tokyo night view spot guide operated by a night view photographer. 200,000–300,000 monthly visitors.",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
    founder: {
      "@type": "Person",
      name: "タカヒロ",
      jobTitle: "Web Director / Blogger / Photographer",
      url: `${SITE_URL}/about/`,
      sameAs: [
        "https://www.youtube.com/@nightscape-tokyo",
        "https://twitter.com/takahiro__1202",
        "https://www.instagram.com/nightscape.tokyo/",
        "https://www.tiktok.com/@nightscape_tokyo",
      ],
    },
    sameAs: [
      "https://www.youtube.com/@nightscape-tokyo",
      "https://twitter.com/takahiro__1202",
      "https://www.instagram.com/nightscape.tokyo/",
      "https://www.tiktok.com/@nightscape_tokyo",
      "https://www.pinterest.jp/nightscape_tokyo/",
      "https://used-lab.jp/",
      "https://digital-style.jp/",
    ],
  };
}

/** SiteNavigationElement（サイト全体に1つ） */
export function buildSiteNavigationJsonLd() {
  const navLinks = [
    { name: "おすすめ夜景スポット", url: `${SITE_URL}/recommend/` },
    { name: "港区の夜景スポット", url: `${SITE_URL}/minato/` },
    { name: "渋谷区の夜景スポット", url: `${SITE_URL}/shibuya/` },
    { name: "千代田区の夜景スポット", url: `${SITE_URL}/chiyoda/` },
    { name: "新宿区の夜景スポット", url: `${SITE_URL}/shinjuku/` },
    { name: "中央区の夜景スポット", url: `${SITE_URL}/chuo/` },
    { name: "墨田区の夜景スポット", url: `${SITE_URL}/sumida/` },
    { name: "豊島区の夜景スポット", url: `${SITE_URL}/toshima/` },
    { name: "品川区の夜景スポット", url: `${SITE_URL}/shinagawa/` },
    { name: "無料夜景スポット", url: `${SITE_URL}/tag/free/` },
    { name: "デート向け夜景スポット", url: `${SITE_URL}/tag/date/` },
    { name: "展望台夜景スポット", url: `${SITE_URL}/tag/observatory/` },
    { name: "運営者について", url: `${SITE_URL}/about/` },
    { name: "お問い合わせ", url: `${SITE_URL}/contact/` },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: navLinks.map((l) => l.name),
    url: navLinks.map((l) => l.url),
  };
}

/** ロケール別ナビゲーションリンク定義 */
const SITE_NAV_BY_LOCALE: Record<string, { name: string; path: string }[]> = {
  en: [
    { name: "Tokyo Night View Spots", path: "/en/" },
    { name: "Minato Ward Night View", path: "/en/minato/" },
    { name: "Shibuya Ward Night View", path: "/en/shibuya/" },
    { name: "Chiyoda Ward Night View", path: "/en/chiyoda/" },
    { name: "Shinjuku Ward Night View", path: "/en/shinjuku/" },
    { name: "Chuo Ward Night View", path: "/en/chuo/" },
    { name: "Sumida Ward Night View", path: "/en/sumida/" },
    { name: "Toshima Ward Night View", path: "/en/toshima/" },
    { name: "Shinagawa Ward Night View", path: "/en/shinagawa/" },
    { name: "Free Night View Spots", path: "/en/tag/free/" },
    { name: "Date Night View Spots", path: "/en/tag/date/" },
    { name: "Observatory Night View", path: "/en/tag/observatory/" },
    { name: "Contact", path: "/en/contact/" },
  ],
  ko: [
    { name: "도쿄 야경 스폿", path: "/ko/" },
    { name: "미나토구 야경 스폿", path: "/ko/minato/" },
    { name: "시부야구 야경 스폿", path: "/ko/shibuya/" },
    { name: "치요다구 야경 스폿", path: "/ko/chiyoda/" },
    { name: "신주쿠구 야경 스폿", path: "/ko/shinjuku/" },
    { name: "주오구 야경 스폿", path: "/ko/chuo/" },
    { name: "스미다구 야경 스폿", path: "/ko/sumida/" },
    { name: "도시마구 야경 스폿", path: "/ko/toshima/" },
    { name: "시나가와구 야경 스폿", path: "/ko/shinagawa/" },
    { name: "무료 야경 스폿", path: "/ko/tag/free/" },
    { name: "데이트 야경 스폿", path: "/ko/tag/date/" },
    { name: "전망대 야경 스폿", path: "/ko/tag/observatory/" },
    { name: "문의하기", path: "/ko/contact/" },
  ],
  tw: [
    { name: "東京夜景景點", path: "/tw/" },
    { name: "港區夜景景點", path: "/tw/minato/" },
    { name: "澀谷區夜景景點", path: "/tw/shibuya/" },
    { name: "千代田區夜景景點", path: "/tw/chiyoda/" },
    { name: "新宿區夜景景點", path: "/tw/shinjuku/" },
    { name: "中央區夜景景點", path: "/tw/chuo/" },
    { name: "墨田區夜景景點", path: "/tw/sumida/" },
    { name: "豐島區夜景景點", path: "/tw/toshima/" },
    { name: "品川區夜景景點", path: "/tw/shinagawa/" },
    { name: "免費夜景景點", path: "/tw/tag/free/" },
    { name: "約會夜景景點", path: "/tw/tag/date/" },
    { name: "展望台夜景景點", path: "/tw/tag/observatory/" },
    { name: "聯絡我們", path: "/tw/contact/" },
  ],
  cn: [
    { name: "东京夜景景点", path: "/cn/" },
    { name: "港区夜景景点", path: "/cn/minato/" },
    { name: "涩谷区夜景景点", path: "/cn/shibuya/" },
    { name: "千代田区夜景景点", path: "/cn/chiyoda/" },
    { name: "新宿区夜景景点", path: "/cn/shinjuku/" },
    { name: "中央区夜景景点", path: "/cn/chuo/" },
    { name: "墨田区夜景景点", path: "/cn/sumida/" },
    { name: "丰岛区夜景景点", path: "/cn/toshima/" },
    { name: "品川区夜景景点", path: "/cn/shinagawa/" },
    { name: "免费夜景景点", path: "/cn/tag/free/" },
    { name: "约会夜景景点", path: "/cn/tag/date/" },
    { name: "展望台夜景景点", path: "/cn/tag/observatory/" },
    { name: "联系我们", path: "/cn/contact/" },
  ],
};

/** SiteNavigationElement ロケール版（i18n ページ用） */
export function buildSiteNavigationJsonLdForLocale(locale: string) {
  const links = SITE_NAV_BY_LOCALE[locale];
  if (!links) return buildSiteNavigationJsonLd();

  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: links.map((l) => l.name),
    url: links.map((l) => `${SITE_URL}${l.path}`),
  };
}

/** FAQPage（トップ・エリアページ等で使用） */
export function buildFaqJsonLd(
  faqs: { question: string; answer: string }[],
  options: { sunsetTime?: string | null; inLanguage?: string } = {}
) {
  const { sunsetTime = null, inLanguage = "ja" } = options;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: resolveFaqAnswerText(faq.answer, sunsetTime),
      },
    })),
  };
}

/**
 * ItemList（ランキング・スポット一覧で使用）
 * - home ranking: localePrefix="" or "/en" etc., spots have category.slug
 * - area page: localePrefix="/{areaSlug}", spots have category.slug
 */
export function buildItemListJsonLd(
  spots: SpotListItem[],
  options: {
    localePrefix?: string;
    name?: string;
    inLanguage?: string;
  } = {}
) {
  const { localePrefix = "", name, inLanguage = "ja" } = options;
  const localeSlug = localePrefix ? localePrefix.slice(1) : "ja";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(name ? { name } : {}),
    inLanguage,
    itemListElement: spots.map((spot, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: buildSpotUrl(spot.category.slug, spot.slug, localeSlug),
      name: spot.name,
      ...(spot.featured_image ? { image: spot.featured_image } : {}),
    })),
  };
}

/**
 * エリアページ用 ItemList
 * spots はカテゴリ内スポットなので URL は /{areaSlug}/{spotSlug}
 */
export function buildAreaItemListJsonLd(
  spots: SpotListItem[],
  categorySlug: string,
  options: { name?: string; inLanguage?: string } = {}
) {
  const { name, inLanguage = "ja" } = options;
  const sorted = [...spots].sort((a, b) => b.rating_avg - a.rating_avg);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(name ? { name } : {}),
    numberOfItems: spots.length,
    inLanguage,
    itemListElement: sorted.map((spot, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/${categorySlug}/${spot.slug}/`,
      name: spot.name,
      ...(spot.featured_image ? { image: spot.featured_image } : {}),
    })),
  };
}

/**
 * タグページ用 ItemList（SpotWithRelations[] を使用する場合）
 * TagArticle.tsx から利用。SpotListItem[] 版とは型が異なるため分離。
 */
export function buildTagItemListJsonLd(
  spots: SpotWithRelations[],
  options: {
    localePrefix?: string;
    name?: string;
    description?: string;
    inLanguage?: string;
  } = {}
) {
  const { localePrefix = "", name, description, inLanguage = "ja" } = options;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    inLanguage,
    ...(name ? { name } : {}),
    ...(description ? { description } : {}),
    itemListElement: spots
      .map((s) => ({ spot: s, rating: calcRatingAvg(s) }))
      .sort((a, b) => b.rating - a.rating)
      .map(({ spot }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}${localePrefix}/${spot.category?.slug ?? ""}/${spot.slug}/`,
        name: spot.name || spot.title,
        ...(spot.featured_image ? { image: spot.featured_image } : {}),
      })),
  };
}

/** CollectionPage（エリアページ用） */
export function buildCollectionPageJsonLd(options: {
  name: string;
  description: string;
  url: string;
  numberOfItems?: number;
  inLanguage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: options.name,
    description: options.description,
    url: options.url,
    inLanguage: options.inLanguage ?? "ja",
    ...(options.numberOfItems != null ? { numberOfItems: options.numberOfItems } : {}),
  };
}
