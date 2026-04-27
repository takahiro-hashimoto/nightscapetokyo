import { cache } from "react";
import { unstable_cache } from "next/cache";
import { calcRatingAvg, LOCALE_SLUG_MAP } from "../../types";
import {
  isSupabaseConfigured,
  getSupabaseClient,
} from "./shared";

export type MapSpotItem = {
  id: string;
  slug: string;
  name: string;
  featured_image: string;
  categorySlug: string;
  categoryName: string;
  latitude: number;
  longitude: number;
  rating_avg: number;
};

export const getSpotsForMap = cache(unstable_cache(async (): Promise<MapSpotItem[]> => {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  const { data } = (await supabase
    .from("spots")
    .select(
      "id, slug, name, title, featured_image, latitude, longitude, rating_beautiful, rating_access, rating_atmosphere, rating_cost, category:categories(slug, name)"
    )
    .eq("published", true)
    .not("latitude", "is", null)
    .not("longitude", "is", null)) as any;

  if (!data) return [];

  const seenMap = new Set<string>();
  return data.reduce((acc: MapSpotItem[], s: any) => {
    if (seenMap.has(s.id)) return acc;
    seenMap.add(s.id);
    acc.push({
      id: s.id,
      slug: s.slug,
      name: s.name || s.title,
      featured_image: s.featured_image || "",
      categorySlug: s.category?.slug ?? "",
      categoryName: s.category?.name ?? "",
      latitude: s.latitude,
      longitude: s.longitude,
      rating_avg: calcRatingAvg(s),
    });
    return acc;
  }, []);
}, ["map-spots"], { revalidate: 3600, tags: ["spots"] }));

const SPOT_SELECT =
  "id, slug, name, title, featured_image, latitude, longitude, rating_beautiful, rating_access, rating_atmosphere, rating_cost, category:categories(slug, name)";

const _getSpotsForMapTranslatedCached = unstable_cache(
  async (localeSlug: string): Promise<MapSpotItem[]> => {
    const dbLocale = LOCALE_SLUG_MAP[localeSlug];
    if (!isSupabaseConfigured || !dbLocale) return [];

    const supabase = await getSupabaseClient();

    const [{ data }, { data: translations }] = await Promise.all([
      supabase
        .from("spots")
        .select(SPOT_SELECT)
        .eq("published", true)
        .not("latitude", "is", null)
        .not("longitude", "is", null) as any,
      supabase
        .from("spot_translations")
        .select("spot_id, name, category_name")
        .eq("locale", dbLocale) as any,
    ]);

    if (!data) return [];

    const tMap = new Map<string, { name: string; category_name: string }>(
      (translations ?? []).map((t: any) => [t.spot_id, t])
    );

    const seen = new Set<string>();
    return data.reduce((acc: MapSpotItem[], s: any) => {
      if (seen.has(s.id)) return acc;
      seen.add(s.id);
      const t = tMap.get(s.id);
      acc.push({
        id: s.id,
        slug: s.slug,
        name: t?.name || s.name || s.title,
        featured_image: s.featured_image || "",
        categorySlug: s.category?.slug ?? "",
        categoryName: t?.category_name || (s.category?.name ?? ""),
        latitude: s.latitude,
        longitude: s.longitude,
        rating_avg: calcRatingAvg(s),
      });
      return acc;
    }, []);
  },
  ["map-spots-translated"],
  { revalidate: 3600, tags: ["spots", "translations"] }
);

export async function getSpotsForMapTranslated(localeSlug: string): Promise<MapSpotItem[]> {
  return _getSpotsForMapTranslatedCached(localeSlug);
}

const _getMapSpotsByCategoryUncached = async (categorySlug: string): Promise<MapSpotItem[]> => {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  const { data: cat } = (await supabase
    .from("categories")
    .select("id")
    .eq("slug", categorySlug)
    .single()) as any;

  if (!cat) return [];

  const { data } = (await supabase
    .from("spots")
    .select(SPOT_SELECT)
    .eq("published", true)
    .eq("category_id", cat.id)
    .not("latitude", "is", null)
    .not("longitude", "is", null)) as any;

  if (!data) return [];

  return data.map((s: any) => ({
    id: s.id,
    slug: s.slug,
    name: s.name || s.title,
    featured_image: s.featured_image || "",
    categorySlug: s.category?.slug ?? "",
    categoryName: s.category?.name ?? "",
    latitude: s.latitude,
    longitude: s.longitude,
    rating_avg: calcRatingAvg(s),
  }));
};

export const getMapSpotsByCategory = cache(
  unstable_cache(_getMapSpotsByCategoryUncached, ["map-spots-by-category"], {
    revalidate: 3600,
    tags: ["spots"],
  })
);

export async function getMapSpotsByTag(tagSlug: string): Promise<MapSpotItem[]> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  const { data: tag } = await supabase
    .from("tags")
    .select("id")
    .eq("slug", tagSlug)
    .single();

  if (!tag) return [];

  const { data: relations } = await supabase
    .from("spot_tags")
    .select("spot_id")
    .eq("tag_id", tag.id);

  if (!relations || relations.length === 0) return [];

  const spotIds = relations.map((r) => r.spot_id);

  const { data } = (await supabase
    .from("spots")
    .select(
      "id, slug, name, title, featured_image, latitude, longitude, rating_beautiful, rating_access, rating_atmosphere, rating_cost, category:categories(slug, name)"
    )
    .in("id", spotIds)
    .eq("published", true)
    .not("latitude", "is", null)
    .not("longitude", "is", null)) as any;

  if (!data) return [];

  return data.map((s: any) => ({
    id: s.id,
    slug: s.slug,
    name: s.name || s.title,
    featured_image: s.featured_image || "",
    categorySlug: s.category?.slug ?? "",
    categoryName: s.category?.name ?? "",
    latitude: s.latitude,
    longitude: s.longitude,
    rating_avg: calcRatingAvg(s),
  }));
}
