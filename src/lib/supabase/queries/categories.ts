import { cache } from "react";
import { unstable_cache } from "next/cache";
import type { SpotListItem } from "../../types";
import { LOCALE_SLUG_MAP, LOCALE_TO_SLUG } from "../../types";
import {
  isSupabaseConfigured,
  getSupabaseClient,
  buildTranslationMap,
  mapSpotToListing,
  LISTING_SELECT,
  NON_AREA_SLUGS,
} from "./shared";

/** カテゴリslugからカテゴリ情報を取得 */
export const getCategoryBySlug = cache(async function getCategoryBySlug(
  categorySlug: string
): Promise<{ id: string; name: string; slug: string; description: string | null } | null> {
  if (!isSupabaseConfigured) return null;

  const supabase = await getSupabaseClient();

  const { data, error } = (await supabase
    .from("categories")
    .select("id, name, slug, description")
    .eq("slug", categorySlug)
    .single()) as any;

  if (error || !data) {
    const { data: fallback, error: fallbackError } = await supabase
      .from("categories")
      .select("id, name, slug")
      .eq("slug", categorySlug)
      .single();
    if (fallbackError || !fallback) return null;
    return { ...fallback, description: null };
  }

  return { ...data, description: data.description ?? null };
});

/** エリア別カテゴリ（スポット数付き） */
export const getAreas = cache(unstable_cache(async () => {
  if (!isSupabaseConfigured) {
    const { dummyAreas } = await import("../../dummy-home-data");
    return dummyAreas;
  }

  const supabase = await getSupabaseClient();

  const { data } = (await supabase
    .from("categories")
    .select("slug, name, spots!inner(count)")
    .eq("spots.published", true)) as any;

  if (!data?.length) return [];

  const areas = (data as any[])
    .filter((cat) => !NON_AREA_SLUGS.includes(cat.slug))
    .map((cat) => ({
      slug: cat.slug,
      name: cat.name,
      spot_count: (cat.spots as any[])[0]?.count ?? 0,
    }));

  const TAIL_ORDER = ["横浜", "その他エリア"];
  return areas.sort((a, b) => {
    const ai = TAIL_ORDER.indexOf(a.name);
    const bi = TAIL_ORDER.indexOf(b.name);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return 1;
    if (bi !== -1) return -1;
    return b.spot_count - a.spot_count;
  });
}, ["areas"], { revalidate: 86400, tags: ["areas"] }));

/** 翻訳付きエリアデータ取得（ホームページ翻訳版用） */
export const getAreasTranslated = cache(unstable_cache(async (urlSlug: string) => {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  const areas = await getAreas();
  if (!isSupabaseConfigured || !dbLocale) return areas;

  const supabase = await getSupabaseClient();

  const { data } = (await supabase
    .from("spot_translations")
    .select("category_name, spot:spots!inner(category:categories!inner(slug))")
    .eq("locale", dbLocale)
    .not("category_name", "is", null)) as any;

  if (!data?.length) return areas;

  const nameMap = new Map<string, string>();
  for (const d of data) {
    const slug = d.spot?.category?.slug;
    if (slug && d.category_name && !nameMap.has(slug)) {
      nameMap.set(slug, d.category_name);
    }
  }

  return areas.map((a: { slug: string; name: string; spot_count: number }) => ({
    ...a,
    name: nameMap.get(a.slug) || a.name,
  }));
}, ["areas-translated"], { revalidate: 3600, tags: ["areas", "translations"] }));

/** カテゴリslugに属するスポット一覧を取得 */
const _getSpotsByCategoryUncached = async (categorySlug: string): Promise<SpotListItem[]> => {
  if (!isSupabaseConfigured) {
    const { dummyTopSpots } = await import("../../dummy-home-data");
    return dummyTopSpots.filter((s) => s.category.slug === categorySlug);
  }

  const supabase = await getSupabaseClient();

  const { data: cat } = (await supabase
    .from("categories")
    .select("id")
    .eq("slug", categorySlug)
    .single()) as any;

  if (!cat) return [];

  const { data } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("published", true)
    .eq("category_id", cat.id)
    .order("rating_beautiful", { ascending: false })) as any;

  if (!data) return [];

  return data.map(mapSpotToListing);
};

export const getSpotsByCategory = cache(
  unstable_cache(_getSpotsByCategoryUncached, ["spots-by-category"], {
    revalidate: 86400,
    tags: ["spots"],
  })
);

/** カテゴリslugに属する翻訳済みスポット一覧を取得 */
const _getSpotsByCategoryTranslatedUncached = async (
  categorySlug: string,
  urlSlug: string
): Promise<SpotListItem[]> => {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!isSupabaseConfigured || !dbLocale) return [];

  const supabase = await getSupabaseClient();

  const { data: cat } = (await supabase
    .from("categories")
    .select("id")
    .eq("slug", categorySlug)
    .single()) as any;

  if (!cat) return [];

  const { data: spots } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("published", true)
    .eq("category_id", cat.id)) as any;

  if (!spots?.length) return [];

  const spotIds = spots.map((s: any) => s.id);
  const { data: translations } = (await supabase
    .from("spot_translations")
    .select("spot_id, name, lead, category_name")
    .eq("locale", dbLocale)
    .in("spot_id", spotIds)) as any;

  if (!translations?.length) return [];

  const tMap = buildTranslationMap(translations);

  return spots
    .filter((s: any) => tMap.has(s.id))
    .map((s: any) => {
      const t = tMap.get(s.id);
      const base = mapSpotToListing(s);
      return {
        ...base,
        name: t.name || base.name,
        category: t.category_name
          ? { slug: s.category?.slug ?? "", name: t.category_name }
          : base.category,
        lead: t.lead || base.lead,
      };
    })
    .sort((a: SpotListItem, b: SpotListItem) => b.rating_avg - a.rating_avg);
};

export const getSpotsByCategoryTranslated = cache(
  unstable_cache(_getSpotsByCategoryTranslatedUncached, ["spots-by-category-translated"], {
    revalidate: 86400,
    tags: ["spots", "translations"],
  })
);

/** 翻訳済みエリアページのSSGパラメータを取得 */
export async function getTranslatedAreaSlugs(): Promise<
  { locale: string; category: string }[]
> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  const { data } = (await supabase
    .from("spot_translations")
    .select("locale, spot:spots(category:categories(slug))")
  ) as any;

  if (!data) return [];

  const seen = new Set<string>();
  const results: { locale: string; category: string }[] = [];

  for (const d of data) {
    const catSlug = d.spot?.category?.slug;
    const urlSlug = LOCALE_TO_SLUG[d.locale];
    if (!catSlug || !urlSlug || NON_AREA_SLUGS.includes(catSlug)) continue;
    const key = `${urlSlug}:${catSlug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    results.push({ locale: urlSlug, category: catSlug });
  }

  return results;
}

/** 指定カテゴリで翻訳が存在するロケール一覧を取得 */
export const getAvailableAreaLocales = cache(
  unstable_cache(
    async (categorySlug: string): Promise<string[]> => {
      if (!isSupabaseConfigured) return [];

      const supabase = await getSupabaseClient();

      const { data: catData } = (await supabase
        .from("categories")
        .select("id")
        .eq("slug", categorySlug)
        .single()) as any;

      if (!catData) return [];

      const { data: spots } = (await supabase
        .from("spots")
        .select("id")
        .eq("published", true)
        .eq("category_id", catData.id)) as any;

      const spotIds: string[] = (spots ?? []).map((s: any) => s.id);
      if (spotIds.length === 0) return [];

      const { data: translations } = (await supabase
        .from("spot_translations")
        .select("locale")
        .in("spot_id", spotIds)) as any;

      const locales = new Set<string>();
      for (const d of translations ?? []) {
        const urlSlug = LOCALE_TO_SLUG[d.locale];
        if (urlSlug) locales.add(urlSlug);
      }

      return Array.from(locales);
    },
    ["available-area-locales"],
    { revalidate: 86400, tags: ["spots", "translations"] }
  )
);
