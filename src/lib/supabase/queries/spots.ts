import { cache } from "react";
import { unstable_cache } from "next/cache";
import type { SpotWithRelations, SpotListItem } from "../../types";
import { LOCALE_SLUG_MAP, LOCALE_TO_SLUG, parseJsonField } from "../../types";
import { dummySpot } from "../../dummy-data";
import { TOKYO_AREA_SLUGS } from "@/lib/constants";
import {
  isSupabaseConfigured,
  getSupabaseClient,
  normalizeSpotRelations,
  buildTranslationMap,
  mapSpotToListing,
  LISTING_SELECT,
  FULL_SELECT,
} from "./shared";

const _getSpotBySlugUncached = async (
  categorySlug: string,
  spotSlug: string
): Promise<SpotWithRelations | null> => {
  if (!isSupabaseConfigured) {
    if (dummySpot.slug === spotSlug && dummySpot.category.slug === categorySlug) {
      return dummySpot;
    }
    return null;
  }

  const supabase = await getSupabaseClient();

  const { data: spot, error } = (await supabase
    .from("spots")
    .select(`${FULL_SELECT}, spot_tags(tag:tags(id, slug, name))`)
    .eq("slug", spotSlug)
    .eq("published", true)
    .single()) as any;

  if (error || !spot || spot.category?.slug !== categorySlug) return null;

  const tags = spot.spot_tags?.map((r: any) => r.tag) ?? [];
  return normalizeSpotRelations({ ...spot, tags });
};

export const getSpotBySlug = cache(
  unstable_cache(_getSpotBySlugUncached, ["spot-by-slug"], {
    revalidate: 86400,
    tags: ["spots"],
  })
);

export async function getAllSpotSlugs(): Promise<
  { category: string; slug: string }[]
> {
  if (!isSupabaseConfigured) {
    return [{ category: dummySpot.category.slug, slug: dummySpot.slug }];
  }

  const supabase = await getSupabaseClient();

  const { data, error } = (await supabase
    .from("spots")
    .select("slug, category:categories(slug)")
    .eq("published", true)) as any;

  if (error || !data) return [];

  return data.map((item: any) => ({
    category: item.category?.slug ?? "",
    slug: item.slug,
  }));
}

export type RecentSpotItem = {
  slug: string;
  name: string;
  categorySlug: string;
  updatedAt: string;
};

export async function getRecentSpots(limit = 10): Promise<RecentSpotItem[]> {
  if (!isSupabaseConfigured) return [];
  const supabase = await getSupabaseClient();
  const { data } = (await supabase
    .from("spots")
    .select("slug, name, title, updated_at, category:categories(slug)")
    .eq("published", true)
    .order("updated_at", { ascending: false })
    .limit(limit)) as any;
  if (!data) return [];
  return data.map((s: any) => ({
    slug: s.slug,
    name: s.name || s.title,
    categorySlug: s.category?.slug ?? "",
    updatedAt: s.updated_at?.slice(0, 10).replace(/-/g, "/") ?? "",
  }));
}

export const getTotalSpotCount = cache(unstable_cache(async (): Promise<number> => {
  if (!isSupabaseConfigured) return 200;
  const supabase = await getSupabaseClient();
  const { count } = await supabase
    .from("spots")
    .select("*", { count: "exact", head: true })
    .eq("published", true);
  return count ?? 0;
}, ["spot-count"], { revalidate: 3600, tags: ["spots"] }));

/** limit によらず共有できる上位100件のキャッシュ */
const _getTopSpotsAll = unstable_cache(async (): Promise<SpotListItem[]> => {
  if (!isSupabaseConfigured) {
    const { dummyTopSpots } = await import("../../dummy-home-data");
    return dummyTopSpots;
  }

  const supabase = await getSupabaseClient();

  const { data } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("type", "spot")
    .eq("published", true)
    .order("rating_beautiful", { ascending: false })
    .limit(100)) as any;

  if (!data) return [];

  const seen = new Set<string>();
  return data
    .map(mapSpotToListing)
    .filter((s: SpotListItem) => {
      if (seen.has(s.id)) return false;
      seen.add(s.id);
      return true;
    })
    .sort((a: SpotListItem, b: SpotListItem) => b.rating_avg - a.rating_avg);
}, ["top-spots"], { revalidate: 3600, tags: ["spots"] });

export const getTopSpots = cache(async (limit = 6): Promise<SpotListItem[]> => {
  const all = await _getTopSpotsAll();
  return all.slice(0, limit);
});

/** /recommend 用: FAQ・レビュー・イベントを除いた軽量フルデータ */
export const getTopSpotsForRecommend = cache(unstable_cache(async (limit = 60): Promise<SpotWithRelations[]> => {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  const { data } = (await supabase
    .from("spots")
    .select("*, category:categories(id, slug, name), images:spot_images(id, spot_id, url, alt, sort_order), hotel:spot_hotels(id, spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4)")
    .eq("type", "spot")
    .eq("published", true)
    .order("rating_beautiful", { ascending: false })
    .limit(limit)) as any;

  if (!data) return [];

  const seen = new Set<string>();
  return data
    .map((spot: any) => normalizeSpotRelations({ ...spot, tags: [] }))
    .filter((spot: SpotWithRelations) => {
      if (seen.has(spot.id)) return false;
      seen.add(spot.id);
      return true;
    });
}, ["top-spots-recommend"], { revalidate: 3600, tags: ["spots"] }));

/** おすすめバッジ判定用の軽量 slug 一覧 */
const _getRecommendedSpotSlugs = unstable_cache(async (): Promise<string[]> => {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  const { data } = (await supabase
    .from("spots")
    .select("slug, closed, category:categories(slug)")
    .eq("type", "spot")
    .eq("published", true)
    .order("rating_beautiful", { ascending: false })
    .limit(60)) as any;

  if (!data) return [];

  return data
    .filter((spot: any) => TOKYO_AREA_SLUGS.has(spot.category?.slug ?? "") && !spot.closed)
    .slice(0, 30)
    .map((spot: any) => spot.slug);
}, ["recommended-spot-slugs"], { revalidate: 3600, tags: ["spots", "areas"] });

export const getRecommendedSpotSlugs = cache(_getRecommendedSpotSlugs);



export const getHotelSpots = cache(unstable_cache(async (limit = 4): Promise<SpotListItem[]> => {
  if (!isSupabaseConfigured) {
    const { dummyHotelSpots } = await import("../../dummy-home-data");
    return dummyHotelSpots.slice(0, limit);
  }

  const supabase = await getSupabaseClient();

  const { data } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("type", "hotel")
    .eq("published", true)
    .order("rating_beautiful", { ascending: false })
    .limit(limit)) as any;

  if (!data) return [];

  return data.map(mapSpotToListing);
}, ["hotel-spots"], { revalidate: 3600, tags: ["spots"] }));

/** 翻訳付きトップスポット取得（ホームページ翻訳版用） */
const _getTopSpotsTranslatedUncached = async (
  urlSlug: string,
  limit: number,
  allowedCategorySlugsSorted: string[] | null
): Promise<SpotListItem[]> => {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!isSupabaseConfigured || !dbLocale) return [];

  const supabase = await getSupabaseClient();
  const allowedSet = allowedCategorySlugsSorted ? new Set(allowedCategorySlugsSorted) : null;

  const { data: spots } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("type", "spot")
    .eq("published", true)
    .order("rating_beautiful", { ascending: false })
    .limit(100)) as any;

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
    .map(mapSpotToListing)
    .filter((s: SpotListItem) => (!allowedSet || allowedSet.has(s.category.slug)) && !s.closed)
    .sort((a: SpotListItem, b: SpotListItem) => b.rating_avg - a.rating_avg)
    .slice(0, limit)
    .map((base: SpotListItem) => {
      const t = tMap.get(base.id);
      return {
        ...base,
        name: t.name || base.name,
        category: t.category_name
          ? { slug: base.category.slug, name: t.category_name }
          : base.category,
        lead: t.lead || base.lead,
      };
    });
};

const _getTopSpotsTranslatedCached = unstable_cache(
  _getTopSpotsTranslatedUncached,
  ["top-spots-translated"],
  { revalidate: 86400, tags: ["spots", "translations"] }
);

export const getTopSpotsTranslated = cache(
  async (urlSlug: string, limit = 8, allowedCategorySlugs?: Set<string>) => {
    const sortedSlugs = allowedCategorySlugs ? [...allowedCategorySlugs].sort() : null;
    return _getTopSpotsTranslatedCached(urlSlug, limit, sortedSlugs);
  }
);

/** 翻訳付きホテルスポット取得（ホームページ翻訳版用） */
export const getHotelSpotsTranslated = cache(
  unstable_cache(
    async (urlSlug: string, limit = 4): Promise<SpotListItem[]> => {
      const dbLocale = LOCALE_SLUG_MAP[urlSlug];
      if (!isSupabaseConfigured || !dbLocale) return [];

      const supabase = await getSupabaseClient();

      const { data: spots } = (await supabase
        .from("spots")
        .select(LISTING_SELECT)
        .eq("type", "hotel")
        .eq("published", true)
        .order("rating_beautiful", { ascending: false })
        .limit(limit * 5)) as any;

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
        .slice(0, limit)
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
        });
    },
    ["hotel-spots-translated"],
    { revalidate: 86400, tags: ["spots", "translations"] }
  )
);

export async function getRelatedSpots(
  categoryId: string,
  excludeId: string,
  limit = 4
): Promise<SpotListItem[]> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  const { data } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("category_id", categoryId)
    .eq("published", true)
    .neq("id", excludeId)
    .order("rating_beautiful", { ascending: false })
    .limit(limit)) as any;

  if (!data) return [];

  return data.map(mapSpotToListing);
}

/** タグが類似するおすすめスポットを取得 */
export async function getRecommendedSpotsByTags(
  spotId: string,
  categoryId: string,
  tagIds: string[],
  limit = 8
): Promise<SpotListItem[]> {
  if (!isSupabaseConfigured || tagIds.length === 0) return [];

  const supabase = await getSupabaseClient();

  const { data: tagLinks } = (await supabase
    .from("spot_tags")
    .select("spot_id, tag_id")
    .in("tag_id", tagIds)
    .neq("spot_id", spotId)) as any;

  if (!tagLinks?.length) return [];

  const scoreMap = new Map<string, number>();
  for (const link of tagLinks) {
    scoreMap.set(link.spot_id, (scoreMap.get(link.spot_id) || 0) + 1);
  }

  const candidateIds = [...scoreMap.keys()];
  const { data: spots } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .in("id", candidateIds)
    .eq("published", true)
    .eq("type", "spot")
    .neq("category_id", categoryId)
    .eq("closed", false)) as any;

  if (!spots?.length) return [];

  return spots
    .map(mapSpotToListing)
    .sort((a: SpotListItem, b: SpotListItem) => {
      const scoreA = (scoreMap.get(a.id) || 0) * 2 + a.rating_avg;
      const scoreB = (scoreMap.get(b.id) || 0) * 2 + b.rating_avg;
      return scoreB - scoreA;
    })
    .slice(0, limit);
}

/** タグが類似するおすすめスポットを取得（翻訳版） */
export async function getRecommendedSpotsByTagsTranslated(
  spotId: string,
  categoryId: string,
  tagIds: string[],
  urlSlug: string,
  limit = 8
): Promise<SpotListItem[]> {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!isSupabaseConfigured || !dbLocale || tagIds.length === 0) return [];

  const spots = await getRecommendedSpotsByTags(spotId, categoryId, tagIds, limit);
  if (!spots.length) return [];

  const supabase = await getSupabaseClient();
  const spotIds = spots.map((s) => s.id);

  const { data: translations } = (await supabase
    .from("spot_translations")
    .select("spot_id, name, lead, category_name")
    .eq("locale", dbLocale)
    .in("spot_id", spotIds)) as any;

  if (!translations?.length) return spots;

  const tMap = buildTranslationMap(translations);

  return spots.map((base) => {
    const t: any = tMap.get(base.id);
    if (!t) return base;
    return {
      ...base,
      name: t.name || base.name,
      category: t.category_name
        ? { slug: base.category.slug, name: t.category_name }
        : base.category,
      lead: t.lead || base.lead,
    };
  });
}

/** 翻訳済みの関連スポットを取得（同エリア＋翻訳あり） */
export async function getRelatedSpotsTranslated(
  categoryId: string,
  excludeId: string,
  urlSlug: string,
  limit = 8
): Promise<SpotListItem[]> {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!isSupabaseConfigured || !dbLocale) return [];

  const supabase = await getSupabaseClient();

  const { data: spots } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("category_id", categoryId)
    .eq("published", true)
    .neq("id", excludeId)
    .order("rating_beautiful", { ascending: false })
    .limit(limit * 3)) as any;

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
    .slice(0, limit)
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
    });
}

/** スラッグ一覧からフル情報のスポットを取得 */
export async function getSpotsBySlugs(
  slugs: string[]
): Promise<SpotWithRelations[]> {
  if (!isSupabaseConfigured || slugs.length === 0) return [];

  const supabase = await getSupabaseClient();

  const { data: spots } = (await supabase
    .from("spots")
    .select(FULL_SELECT)
    .in("slug", slugs)
    .eq("published", true)) as any;

  if (!spots) return [];

  return spots.map((spot: any) => normalizeSpotRelations({ ...spot, tags: [] }));
}

/** スラッグ一覧からフル情報のスポットを取得し翻訳をマージ (urlSlug = "en", "ko", "tw", "cn") */
const _getSpotsBySlugsTranslatedCached = unstable_cache(
  async (slugsSorted: string[], urlSlug: string): Promise<SpotWithRelations[]> => {
    return _getSpotsBySlugsTranslatedCore(slugsSorted, urlSlug);
  },
  ["spots-by-slugs-translated"],
  { revalidate: 86400, tags: ["spots", "translations"] }
);

export const getSpotsBySlugsTranslated = cache(
  async (slugs: string[], urlSlug: string): Promise<SpotWithRelations[]> => {
    if (slugs.length === 0) return [];
    return _getSpotsBySlugsTranslatedCached([...slugs].sort(), urlSlug);
  }
);

async function _getSpotsBySlugsTranslatedCore(
  slugs: string[],
  urlSlug: string
): Promise<SpotWithRelations[]> {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!dbLocale) return getSpotsBySlugs(slugs);

  const spots = await getSpotsBySlugs(slugs);
  if (spots.length === 0) return spots;

  const supabase = await getSupabaseClient();
  const spotIds = spots.map((s) => s.id);

  const { data: translations } = (await supabase
    .from("spot_translations")
    .select("spot_id, name, title, lead, recommend_description, report, content, address, station, parking, hours, holiday, money, height, official_label, sns_label, relation_label, category_name, image_alts")
    .eq("locale", dbLocale)
    .in("spot_id", spotIds)) as any;

  if (!translations?.length) return spots;

  const tMap = buildTranslationMap(translations);

  const fields = [
    "title", "name", "lead", "recommend_description", "report", "content",
    "address", "station", "parking", "hours", "holiday", "money", "height",
    "official_label", "sns_label", "relation_label",
  ] as const;

  return spots.map((spot) => {
    const t = tMap.get(spot.id);
    if (!t) return spot;

    const merged: any = { ...spot };
    for (const field of fields) {
      if (t[field]) merged[field] = t[field];
    }
    if ("recommend_description" in t) {
      merged.recommend_description = t.recommend_description ?? null;
    }
    if (t.category_name) {
      merged.category = { ...spot.category, name: t.category_name };
    }

    const parsedAlts = parseJsonField<{ sort_order: number; alt: string }[]>(t.image_alts);
    if (parsedAlts) {
      const altMap = new Map<number, string>(parsedAlts.map((a) => [a.sort_order, a.alt]));
      merged.images = spot.images.map((img) => {
        const translatedAlt = altMap.get((img as any).sort_order);
        return translatedAlt ? { ...img, alt: translatedAlt } : img;
      });
    }

    return merged as SpotWithRelations;
  });
}

/** スポット + 翻訳をマージして取得 (urlSlug = "tw", "cn", "en", "ko") */
export const getSpotWithTranslation = cache(async function getSpotWithTranslation(
  categorySlug: string,
  spotSlug: string,
  urlSlug: string
): Promise<SpotWithRelations | null> {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!isSupabaseConfigured || !dbLocale) return null;

  const spot = await getSpotBySlug(categorySlug, spotSlug);
  if (!spot) return null;

  const supabase = await getSupabaseClient();

  const { data: translation } = (await supabase
    .from("spot_translations")
    .select("spot_id, name, title, lead, report, content, address, station, parking, hours, holiday, money, height, official_label, sns_label, relation_label, category_name, image_alts, faqs, tag_names")
    .eq("spot_id", spot.id)
    .eq("locale", dbLocale)
    .single()) as any;

  if (!translation) return null;

  const merged = { ...spot };
  const fields = [
    "title", "name", "lead", "report", "content",
    "address", "station", "parking", "hours", "holiday", "money", "height",
    "official_label", "sns_label", "relation_label",
  ] as const;

  for (const field of fields) {
    if (translation[field]) {
      (merged as any)[field] = translation[field];
    }
  }

  if (translation.category_name) {
    merged.category = { ...merged.category, name: translation.category_name };
  }

  const parsedFaqs = parseJsonField<{ question: string; answer: string }[]>(translation.faqs);
  if (parsedFaqs) {
    merged.faqs = parsedFaqs.map((faq, i) => ({
      id: merged.faqs[i]?.id ?? `faq-${i}`,
      spot_id: spot.id,
      question: faq.question,
      answer: faq.answer,
      sort_order: i,
    }));
  }

  const parsedAlts = parseJsonField<{ sort_order: number; alt: string }[]>(translation.image_alts);
  if (parsedAlts) {
    const altMap = new Map<number, string>();
    for (const item of parsedAlts) altMap.set(item.sort_order, item.alt);
    merged.images = merged.images.map((img: any) => {
      const translatedAlt = altMap.get(img.sort_order);
      return translatedAlt ? { ...img, alt: translatedAlt } : img;
    });
  }

  const parsedTagNames = parseJsonField<Record<string, string>>(translation.tag_names);
  if (parsedTagNames && !Array.isArray(parsedTagNames)) {
    merged.tags = (merged.tags ?? []).map((tag: any) => ({
      ...tag,
      name: parsedTagNames[tag.name] ?? tag.name,
    }));
  }

  const LOCALE_TO_GMAP_LANG: Record<string, string> = {
    en: "en",
    ko: "ko",
    "zh-Hant": "zh-TW",
    "zh-Hans": "zh-CN",
  };
  if (merged.map) {
    const gmapLang = LOCALE_TO_GMAP_LANG[dbLocale];
    if (gmapLang) {
      merged.map = merged.map.replace(/!1sja!2sjp/g, `!1s${gmapLang}!2sjp`);
    }
  }

  return merged;
});

/** スポットの利用可能な翻訳言語を取得 */
export const getAvailableTranslations = cache(
  unstable_cache(
    async (spotId: string): Promise<{ locale: string }[]> => {
      if (!isSupabaseConfigured) return [];

      const supabase = await getSupabaseClient();
      const { data } = await supabase
        .from("spot_translations")
        .select("locale")
        .eq("spot_id", spotId);

      return (data ?? [])
        .filter((d) => LOCALE_TO_SLUG[d.locale])
        .map((d) => ({ locale: LOCALE_TO_SLUG[d.locale] }));
    },
    ["available-translations"],
    { revalidate: 86400, tags: ["translations"] }
  )
);


/** スラッグ一覧から featured_image を軽量取得 */
export const getSpotImagesBySlugs = unstable_cache(
  async (slugs: string[]): Promise<Record<string, string>> => {
    if (!isSupabaseConfigured || slugs.length === 0) return {};
    const supabase = await getSupabaseClient();
    const { data } = (await supabase
      .from("spots")
      .select("slug, featured_image")
      .in("slug", slugs)) as any;
    if (!data) return {};
    return Object.fromEntries(data.map((s: any) => [s.slug, s.featured_image ?? ""]));
  },
  ["spot-images-by-slugs"],
  { revalidate: 86400, tags: ["spots"] }
);
