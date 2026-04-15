import { SITE_URL } from "@/lib/types";
import type { SpotListItem } from "@/lib/types";

/** BCP 47 language codes for schema.org inLanguage */
const LOCALE_LANGUAGE_MAP: Record<string, string> = {
  ja: "ja",
  en: "en",
  ko: "ko",
  tw: "zh-TW",
  cn: "zh-CN",
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
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
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
      "夜景フォトグラファーが運営する東京の夜景スポット情報サイト。月間20〜30万PV。",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
    founder: {
      "@type": "Person",
      name: "タカヒロ",
      jobTitle: "Webディレクター / ブロガー / フォトグラファー",
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
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(name ? { name } : {}),
    inLanguage,
    itemListElement: spots.map((spot, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}${localePrefix}/${spot.category.slug}/${spot.slug}`,
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
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(name ? { name } : {}),
    inLanguage,
    itemListElement: spots
      .sort((a, b) => b.rating_avg - a.rating_avg)
      .map((spot, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/${categorySlug}/${spot.slug}`,
        name: spot.name,
        ...(spot.featured_image ? { image: spot.featured_image } : {}),
      })),
  };
}
