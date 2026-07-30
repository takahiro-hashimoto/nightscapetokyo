import type { SpotWithRelations } from "@/lib/types";
import { AUTHOR_PERSON_ID, ORGANIZATION_ID } from "@/lib/json-ld";

/** ロケール別 VideoObject ラベル（キーは BCP 47: LOCALE_CONFIG.htmlLang に対応） */
const VIDEO_LABELS: Record<string, { nameSuffix: string; fallbackDesc: string }> = {
  ja:       { nameSuffix: "の夜景動画",        fallbackDesc: "の夜景・夕景映像" },
  en:       { nameSuffix: " Night View Video", fallbackDesc: " night view footage" },
  ko:       { nameSuffix: " 야경 동영상",       fallbackDesc: " 야경 영상" },
  "zh-Hant": { nameSuffix: " 夜景影片",        fallbackDesc: " 夜景影片" },
  "zh-Hans": { nameSuffix: " 夜景视频",        fallbackDesc: " 夜景视频" },
};

/** 日本語日付文字列 or ISO 文字列を ISO 8601 (YYYY-MM-DD) に正規化 */
function toIsoDate(value: string): string {
  // すでに ISO 形式なら変換不要
  if (/^\d{4}-\d{2}-\d{2}/.test(value)) return value;
  // "2025年3月19日" → "2025-03-19"
  const m = value.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (m) return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
  return value;
}

/**
 * DB の address は「東京都港区海岸1-7-1」のような1本のフリーテキスト。
 * 以前はこれを丸ごと addressLocality に入れていたが、
 * addressLocality は市区町村名を入れる欄なので値として不正だった。
 *
 * ここでは実データから確実に取れるものだけを埋める:
 * - addressCountry: 掲載範囲は日本国内のみなので "JP" 固定
 * - addressRegion:  先頭の「〜都/道/府/県」があればそれを使う
 *                   （東京だけでなく横浜＝神奈川県のスポットもあるため決め打ちしない）
 * - streetAddress:  住所文字列そのもの
 */
function buildPostalAddress(address: string) {
  const region = address.match(/^(.+?[都道府県])/)?.[1];
  return {
    "@type": "PostalAddress",
    addressCountry: "JP",
    ...(region && { addressRegion: region }),
    streetAddress: address,
  };
}

/** YouTube embed HTML から動画IDを抽出 */
export function extractYoutubeId(html: string): string | null {
  const match = html.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : null;
}

/** スポットページ用 JSON-LD 構造化データを生成 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildSpotJsonLd(spot: SpotWithRelations, canonicalUrl: string, locale = "ja", categorySlug = ""): Record<string, any>[] {
  const name = spot.name || spot.title;
  const isEvent = categorySlug === "event";

  // ページ内の各エンティティに @id を振り、どれが主役かを機械的に示す。
  // 以前は Place / Article / VideoObject / FAQPage が全部同じ url を持つだけで
  // @id が無く、Google からは「同じ URL の別物が4つある」ようにしか見えなかった
  const mainId = `${canonicalUrl}#${isEvent ? "event" : "place"}`;

  const images = [
    spot.featured_image,
    ...spot.images.map((img) => img.url),
  ].filter(Boolean);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mainSchema: Record<string, any>;

  if (isEvent && spot.event) {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "@id": mainId,
      name,
      url: canonicalUrl,
      inLanguage: locale,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      ...(spot.lead && { description: spot.lead }),
      ...(images.length > 0 && { image: images }),
      ...(spot.event.start_date && { startDate: toIsoDate(spot.event.start_date) }),
      ...(spot.event.end_date && { endDate: toIsoDate(spot.event.end_date) }),
    };

    const locationName = spot.event.place || spot.address;
    if (locationName) {
      mainSchema.location = {
        "@type": "Place",
        name: locationName,
        ...(spot.address && { address: buildPostalAddress(spot.address) }),
        ...(spot.latitude != null && spot.longitude != null && {
          geo: { "@type": "GeoCoordinates", latitude: spot.latitude, longitude: spot.longitude },
        }),
      };
    }
  } else {
    // @type は TouristAttraction 単独にする。
    // 以前は LocalBusiness / LodgingBusiness を併記していたが、
    // これらは「事業者」としての実体（正規化された住所・電話番号・
    // 機械可読な営業時間・価格帯など）を前提にする型で、DB が持っているのは
    // フリーテキストの住所と営業時間だけ。実体の伴わない事業者ノードに
    // aggregateRating / review をぶら下げるのが GSC の指摘の原因なので、
    // 「夜景を見る場所」として確実に説明できる TouristAttraction のみに絞る。
    // ホテルも spot_hotels が持つのは checkin/checkout 程度で
    // LodgingBusiness を名乗るには足りないため同じ扱いにする。
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "@id": mainId,
      name,
      url: canonicalUrl,
      inLanguage: locale,
      ...(spot.lead && { description: spot.lead }),
      ...(images.length > 0 && { image: images }),
      ...(spot.published_at && { datePublished: spot.published_at }),
      ...(spot.updated_at && { dateModified: spot.updated_at }),
    };

    if (spot.address) {
      mainSchema.address = buildPostalAddress(spot.address);
    }

    if (spot.latitude != null && spot.longitude != null) {
      mainSchema.geo = {
        "@type": "GeoCoordinates",
        latitude: spot.latitude,
        longitude: spot.longitude,
      };
      mainSchema.hasMap = `https://www.google.com/maps?q=${spot.latitude},${spot.longitude}`;
    }

    // openingHours は "Mo-Su 09:00-17:00" という決まった書式しか受け付けないが、
    // spot.hours は「10:00〜22:00（最終入場21:30）<br>※季節により変動」のような
    // HTML 混じりのフリーテキスト。営業日（曜日）の情報も別カラム(holiday)に
    // 散っていて機械可読に復元できないため、構造化データには出力しない。
    // 営業時間は SpotInfo の表示側（sanitizeHtml 経由）で人間向けに見せる。

    // AggregateRating はユーザーレビューの集計のみに使う。
    // 編集部評価（rating_beautiful 等）を集計として出すと
    // Google の自己申告レビュー禁止ポリシーに抵触するリスクがある
    if (spot.reviews.length > 0) {
      const avg =
        spot.reviews.reduce((sum, r) => sum + r.rating, 0) / spot.reviews.length;
      mainSchema.aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: Math.round(avg * 10) / 10,
        bestRating: 5,
        worstRating: 1,
        ratingCount: spot.reviews.length,
      };
    }

    if (spot.reviews.length > 0) {
      mainSchema.review = spot.reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
        name: r.title,
        reviewBody: r.content,
        datePublished: r.created_at,
      }));
    }
  }

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    headline: name,
    ...(spot.lead && { description: spot.lead }),
    url: canonicalUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    // この記事が何について書かれたものかを @id で明示し、
    // ページの主役が Place/Event 側であることを Google に伝える
    about: { "@id": mainId },
    ...(images.length > 0 && { image: images }),
    datePublished: spot.published_at ?? spot.created_at,
    dateModified: spot.updated_at,
    inLanguage: locale,
    // 著者・発行元の実体は Organization / Organization.founder 側で
    // 定義済み（レイアウトで全ページに出力）。ここは @id 参照 + 表示名のみ
    author: { "@type": "Person", "@id": AUTHOR_PERSON_ID, name: "タカヒロ" },
    publisher: { "@type": "Organization", "@id": ORGANIZATION_ID, name: "nightscape.tokyo" },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schemas: Record<string, any>[] = [mainSchema, article];

  if (spot.movie) {
    const youtubeId = extractYoutubeId(spot.movie);
    if (youtubeId) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "@id": `${canonicalUrl}#video`,
        name: `${name}${(VIDEO_LABELS[locale] ?? VIDEO_LABELS.ja).nameSuffix}`,
        description: spot.lead ?? `${name}${(VIDEO_LABELS[locale] ?? VIDEO_LABELS.ja).fallbackDesc}`,
        thumbnailUrl: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
        uploadDate: spot.published_at ?? spot.created_at,
        contentUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
        embedUrl: `https://www.youtube.com/embed/${youtubeId}`,
        inLanguage: locale,
      });
    }
  }

  if (spot.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      inLanguage: locale,
      mainEntity: spot.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return schemas;
}
