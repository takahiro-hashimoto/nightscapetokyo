import { buildListPageMetadata } from "@/lib/metadata";
import { calcRatingAvg } from "@/lib/types";
import type { SpotWithRelations } from "@/lib/types";
import type { TagPageContent } from "@/lib/dummy-tag-data";
import type { MapSpotItem } from "@/lib/supabase/queries";

export const RECOMMEND_HERO_IMAGE =
  "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/02/skytree-02.jpg";

type RecommendMetadataOptions = {
  title: string;
  description: string;
  localeSlug?: string;
  availableLocales: readonly string[];
};

type RecommendPageDataOptions = {
  spots: SpotWithRelations[];
  title: string;
  breadcrumb: string;
  leadText: string;
  faqs: { question: string; answer: string }[];
};

export function buildRecommendMetadata({
  title,
  description,
  localeSlug = "ja",
  availableLocales,
}: RecommendMetadataOptions) {
  const prefix = localeSlug === "ja" ? "" : `/${localeSlug}`;
  return buildListPageMetadata({
    title,
    description,
    path: `${prefix}/recommend/`,
    heroImage: RECOMMEND_HERO_IMAGE,
    localeSlug,
    availableLocales,
    hreflangSlug: "recommend",
  });
}

function formatUpdatedAt(value: string | null, fallbackYear: number): string {
  if (!value) return `${fallbackYear}.01.01`;

  const date = new Date(value);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

export function buildRecommendPageData({
  spots,
  title,
  breadcrumb,
  leadText,
  faqs,
}: RecommendPageDataOptions): { content: TagPageContent; mapSpots: MapSpotItem[] } {
  const currentYear = new Date().getFullYear();
  const latestUpdatedAt = spots.reduce<string | null>(
    (max, spot) => (max == null || spot.updated_at > max ? spot.updated_at : max),
    null
  );

  const content: TagPageContent = {
    title,
    breadcrumb,
    heroImage: RECOMMEND_HERO_IMAGE,
    updatedAt: formatUpdatedAt(latestUpdatedAt, currentYear),
    prNotice: "",
    lead: leadText,
    sections: [
      {
        key: "all",
        heading: "",
        intro: "",
        spotSlugs: spots.map((spot) => spot.slug),
      },
    ],
    descriptions: Object.fromEntries(
      spots.map((spot) => [spot.slug, spot.recommend_description || spot.lead || ""])
    ),
    faqs,
  };

  const mapSpots: MapSpotItem[] = spots
    .filter((spot) => spot.latitude != null && spot.longitude != null)
    .map((spot) => ({
      id: spot.id,
      slug: spot.slug,
      name: spot.name || spot.title,
      featured_image: spot.featured_image || "",
      categorySlug: spot.category?.slug ?? "",
      categoryName: spot.category?.name ?? "",
      latitude: spot.latitude as number,
      longitude: spot.longitude as number,
      rating_avg: calcRatingAvg(spot),
    }));

  return { content, mapSpots };
}
