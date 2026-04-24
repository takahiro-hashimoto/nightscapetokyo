import type { SpotWithRelations } from "@/lib/types";
import { SITE_URL } from "@/lib/types";

/** ロケール別 VideoObject ラベル（キーは BCP 47: LOCALE_CONFIG.htmlLang に対応） */
const VIDEO_LABELS: Record<string, { nameSuffix: string; fallbackDesc: string }> = {
  ja:       { nameSuffix: "の夜景動画",        fallbackDesc: "の夜景・夕景映像" },
  en:       { nameSuffix: " Night View Video", fallbackDesc: " night view footage" },
  ko:       { nameSuffix: " 야경 동영상",       fallbackDesc: " 야경 영상" },
  "zh-Hant": { nameSuffix: " 夜景影片",        fallbackDesc: " 夜景影片" },
  "zh-Hans": { nameSuffix: " 夜景视频",        fallbackDesc: " 夜景视频" },
};

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
      name,
      url: canonicalUrl,
      inLanguage: locale,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      ...(spot.lead && { description: spot.lead }),
      ...(images.length > 0 && { image: images }),
      ...(spot.event.start_date && { startDate: spot.event.start_date }),
      ...(spot.event.end_date && { endDate: spot.event.end_date }),
    };

    const locationName = spot.event.place || spot.address;
    if (locationName) {
      mainSchema.location = {
        "@type": "Place",
        name: locationName,
        ...(spot.address && {
          address: { "@type": "PostalAddress", addressLocality: spot.address },
        }),
        ...(spot.latitude != null && spot.longitude != null && {
          geo: { "@type": "GeoCoordinates", latitude: spot.latitude, longitude: spot.longitude },
        }),
      };
    }
  } else {
    const isHotel = spot.type === "hotel";
    mainSchema = {
      "@context": "https://schema.org",
      "@type": isHotel ? "LodgingBusiness" : "TouristAttraction",
      name,
      url: canonicalUrl,
      inLanguage: locale,
      ...(spot.lead && { description: spot.lead }),
      ...(images.length > 0 && { image: images }),
      ...(spot.published_at && { datePublished: spot.published_at }),
      ...(spot.updated_at && { dateModified: spot.updated_at }),
    };

    if (spot.address) {
      mainSchema.address = { "@type": "PostalAddress", addressLocality: spot.address };
    }

    if (spot.latitude != null && spot.longitude != null) {
      mainSchema.geo = {
        "@type": "GeoCoordinates",
        latitude: spot.latitude,
        longitude: spot.longitude,
      };
      mainSchema.hasMap = `https://www.google.com/maps?q=${spot.latitude},${spot.longitude}`;
    }

    if (spot.hours) {
      mainSchema.openingHours = spot.hours;
    }

    const ratingValues = [
      spot.rating_beautiful,
      spot.rating_access,
      spot.rating_atmosphere,
      spot.rating_cost,
    ].filter((v): v is number => v != null);

    if (ratingValues.length > 0) {
      const avg = ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length;
      mainSchema.aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: Math.round(avg * 10) / 10,
        bestRating: 5,
        worstRating: 1,
        ratingCount: ratingValues.length,
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
    headline: name,
    ...(spot.lead && { description: spot.lead }),
    url: canonicalUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    ...(spot.featured_image && { image: spot.featured_image }),
    datePublished: spot.published_at ?? spot.created_at,
    dateModified: spot.updated_at,
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: "タカヒロ",
      url: `${SITE_URL}/about/`,
    },
    publisher: {
      "@type": "Organization",
      name: "nightscape.tokyo",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schemas: Record<string, any>[] = [mainSchema, article];

  if (spot.movie) {
    const youtubeId = extractYoutubeId(spot.movie);
    if (youtubeId) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "VideoObject",
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
