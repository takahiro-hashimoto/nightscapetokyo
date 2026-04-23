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

  const [catsResult, spotsResult] = await Promise.all([
    supabase.from("categories").select("id, slug, name") as any,
    supabase.from("spots").select("category_id").eq("published", true) as any,
  ]);

  const categories: { id: string; slug: string; name: string }[] = catsResult.data ?? [];
  const spots: { category_id: string }[] = spotsResult.data ?? [];

  if (!categories.length) return [];

  const catMap = new Map<string, { slug: string; name: string; count: number }>();
  for (const cat of categories) {
    if (!NON_AREA_SLUGS.includes(cat.slug)) {
      catMap.set(cat.id, { slug: cat.slug, name: cat.name, count: 0 });
    }
  }
  for (const s of spots) {
    const entry = catMap.get(s.category_id);
    if (entry) entry.count++;
  }

  const areas = [...catMap.values()]
    .filter((v) => v.count > 0)
    .map(({ slug, name, count }) => ({ slug, name, spot_count: count }));

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
export const getSpotsByCategory = cache(async function getSpotsByCategory(
  categorySlug: string
): Promise<SpotListItem[]> {
  if (!isSupabaseConfigured) {
    const { dummyTopSpots } = await import("../../dummy-home-data");
    return dummyTopSpots.filter((s) => s.category.slug === categorySlug);
  }

  const [supabase, category] = await Promise.all([
    getSupabaseClient(),
    getCategoryBySlug(categorySlug),
  ]);
  if (!category) return [];

  const { data } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("published", true)
    .eq("category_id", category.id)
    .order("rating_beautiful", { ascending: false })) as any;

  if (!data) return [];

  return data.map(mapSpotToListing);
});

/** カテゴリslugに属する翻訳済みスポット一覧を取得 */
export async function getSpotsByCategoryTranslated(
  categorySlug: string,
  urlSlug: string
): Promise<SpotListItem[]> {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!isSupabaseConfigured || !dbLocale) return [];

  const [supabase, category] = await Promise.all([
    getSupabaseClient(),
    getCategoryBySlug(categorySlug),
  ]);
  if (!category) return [];

  const [{ data: spots }, { data: translations }] = await Promise.all([
    supabase
      .from("spots")
      .select(LISTING_SELECT)
      .eq("published", true)
      .eq("category_id", category.id) as any,
    supabase
      .from("spot_translations")
      .select("spot_id, name, lead, category_name")
      .eq("locale", dbLocale) as any,
  ]);

  if (!spots?.length || !translations?.length) return [];

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
}

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
export const getAvailableAreaLocales = cache(async function getAvailableAreaLocales(
  categorySlug: string
): Promise<string[]> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  const { data } = (await supabase
    .from("spot_translations")
    .select("locale, spot:spots!inner(category:categories!inner(slug))")
  ) as any;

  if (!data) return [];

  const locales = new Set<string>();
  for (const d of data) {
    if (d.spot?.category?.slug === categorySlug) {
      const urlSlug = LOCALE_TO_SLUG[d.locale];
      if (urlSlug) locales.add(urlSlug);
    }
  }

  return Array.from(locales);
});
