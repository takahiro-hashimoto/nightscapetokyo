import { cache } from "react";
import { unstable_cache } from "next/cache";
import type { SpotWithRelations, SpotListItem } from "../../types";
import { LOCALE_SLUG_MAP, calcRatingAvg } from "../../types";
import {
  isSupabaseConfigured,
  getSupabaseClient,
  buildTranslationMap,
  normalizeSpotRelations,
  mapSpotToListing,
  LISTING_SELECT,
  FULL_SELECT,
} from "./shared";

/** 目的別タグ（スポット数付き） */
export const getPurposeTags = cache(unstable_cache(async () => {
  if (!isSupabaseConfigured) {
    return [];
  }

  const supabase = await getSupabaseClient();

  const { data: tags } = (await supabase
    .from("tags")
    .select("slug, name, image_url, spot_tags(count)")) as any;

  if (!tags) return [];

  const result = (tags as any[])
    .map((t) => ({
      slug: t.slug as string,
      name: t.name as string,
      image_url: (t.image_url || null) as string | null,
      spot_count: (t.spot_tags?.[0]?.count ?? 0) as number,
    }))
    .filter((t) => t.spot_count > 0);

  return result.sort((a, b) => b.spot_count - a.spot_count);
}, ["purpose-tags"], { revalidate: 86400, tags: ["tags"] }));

/** タグ情報をslugで取得 */
export const getTagBySlug = cache(async function getTagBySlug(tagSlug: string) {
  if (!isSupabaseConfigured) {
    const tagMap: Record<string, { name: string; slug: string }> = {
      "tokyo-tower": { name: "東京タワーが見える", slug: "tokyo-tower" },
      "tokyo-sky-tree": { name: "東京スカイツリーが見える", slug: "tokyo-sky-tree" },
      "tokyo-station": { name: "東京駅が見える", slug: "tokyo-station" },
      "observatory": { name: "展望台", slug: "observatory" },
      "hotel": { name: "夜景が綺麗なホテル", slug: "hotel" },
      "rainbow-bridge": { name: "レインボーブリッジが見える", slug: "rainbow-bridge" },
      "scramble-intersection": { name: "スクランブル交差点が見える", slug: "scramble-intersection" },
      "illumination": { name: "イルミネーション", slug: "illumination" },
      "cherry-blossoms": { name: "夜桜", slug: "cherry-blossoms" },
    };
    return tagMap[tagSlug] ?? null;
  }

  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("tags")
    .select("id, name, slug, image_url")
    .eq("slug", tagSlug)
    .single();

  if (error || !data) return null;
  return data;
});

/** タグに紐づくスポットを取得（typeフィルタ可） */
export async function getSpotsByTagSlug(
  tagSlug: string,
  type?: "spot" | "hotel" | "event"
): Promise<SpotWithRelations[]> {
  if (!isSupabaseConfigured) {
    const { dummyTagSpots } = await import("../../dummy-tag-data");
    const spots = dummyTagSpots[tagSlug] ?? [];
    if (type) return spots.filter((s) => s.type === type);
    return spots;
  }

  const supabase = await getSupabaseClient();

  const { data: tagData } = (await supabase
    .from("tags")
    .select("id, spot_tags(spot_id)")
    .eq("slug", tagSlug)
    .single()) as any;

  if (!tagData) return [];

  const spotIds: string[] = (tagData.spot_tags ?? []).map((r: { spot_id: string }) => r.spot_id);
  if (spotIds.length === 0) return [];

  let query = supabase
    .from("spots")
    .select(FULL_SELECT)
    .in("id", spotIds)
    .eq("published", true);

  if (type) {
    query = query.eq("type", type);
  }

  const { data: spots } = (await query) as any;

  if (!spots) return [];

  return spots.map((spot: any) => normalizeSpotRelations({ ...spot, tags: [] }));
}

/**
 * タグに紐づくスポットを SpotListItem（軽量）で取得。
 * excludeSlugs に含まれるスポット（記事セクション掲載済み）は除外する。
 */
export async function getSpotListByTagSlug(
  tagSlug: string,
  excludeSlugs: string[] = [],
): Promise<SpotListItem[]> {
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

  const { data: spots } = await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .in("id", spotIds)
    .eq("published", true);

  if (!spots) return [];

  const excludeSet = new Set(excludeSlugs);

  return (spots as any[])
    .filter((s) => !excludeSet.has(s.slug))
    .map((s) => ({
      id: s.id,
      slug: s.slug,
      name: s.name || s.title,
      featured_image: s.featured_image ?? "",
      category: s.category
        ? { slug: s.category.slug, name: s.category.name }
        : { slug: "", name: "" },
      rating_avg: calcRatingAvg(s),
      rating_beautiful: s.rating_beautiful ?? null,
      rating_access: s.rating_access ?? null,
      rating_atmosphere: s.rating_atmosphere ?? null,
      rating_cost: s.rating_cost ?? null,
      lead: s.lead ?? "",
      closed: s.closed ?? false,
    }));
}

/**
 * タグに紐づくスポットを SpotListItem（翻訳済み）で取得。
 * excludeSlugs に含まれるスポット（記事セクション掲載済み）は除外する。
 */
export async function getSpotListByTagSlugTranslated(
  tagSlug: string,
  excludeSlugs: string[] = [],
  urlSlug: string,
): Promise<SpotListItem[]> {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!isSupabaseConfigured || !dbLocale) return [];

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

  const { data: spots } = await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .in("id", spotIds)
    .eq("published", true);

  if (!spots) return [];

  const excludeSet = new Set(excludeSlugs);
  const filteredSpots = (spots as any[]).filter((s) => !excludeSet.has(s.slug));
  if (filteredSpots.length === 0) return [];

  const filteredIds = filteredSpots.map((s) => s.id);
  const { data: translations } = (await supabase
    .from("spot_translations")
    .select("spot_id, name, lead, category_name")
    .eq("locale", dbLocale)
    .in("spot_id", filteredIds)) as any;

  const tMap = buildTranslationMap(translations ?? []);

  return filteredSpots.map((s: any) => {
    const t = tMap.get(s.id);
    const base = mapSpotToListing(s);
    if (!t) return base;
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
