import { cache } from "react";
import type { SpotWithRelations, SpotListItem, TagPageWithRelations, TagPageTranslation, Article } from "../types";
import { calcRatingAvg, parseJsonField, LOCALE_SLUG_MAP, LOCALE_TO_SLUG } from "../types";
import { dummySpot } from "../dummy-data";

const isSupabaseConfigured =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getSupabaseClient() {
  const { supabase } = await import("./client");
  return supabase;
}

/** Supabase が返す配列リレーションを正規化する共通処理 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeSpotRelations(spot: any): SpotWithRelations {
  return {
    ...spot,
    tags: spot.tags ?? [],
    images: sortByOrder(spot.images),
    faqs: sortByOrder(spot.faqs),
    reviews: sortByDateDesc(spot.reviews),
    hotel: Array.isArray(spot.hotel) ? spot.hotel[0] ?? null : spot.hotel,
    event: Array.isArray(spot.event) ? spot.event[0] ?? null : spot.event,
  };
}

/** sort_order 昇順ソート */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sortByOrder(arr: any): any[] {
  if (!Array.isArray(arr)) return [];
  return [...arr].sort((a, b) => a.sort_order - b.sort_order);
}

/** created_at 降順ソート */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sortByDateDesc(arr: any): any[] {
  if (!Array.isArray(arr)) return [];
  return [...arr].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

/** DB のスポット行を一覧用の SpotListItem に変換 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSpotToListing(s: any): SpotListItem {
  return {
    id: s.id,
    slug: s.slug,
    name: s.name || s.title,
    featured_image: s.featured_image || "",
    category: s.category || { slug: "", name: "" },
    rating_avg: calcRatingAvg(s),
    rating_beautiful: s.rating_beautiful ?? null,
    rating_access: s.rating_access ?? null,
    rating_atmosphere: s.rating_atmosphere ?? null,
    rating_cost: s.rating_cost ?? null,
    lead: s.lead || "",
    closed: s.closed ?? false,
  };
}

/** 一覧クエリ共通の select カラム */
const LISTING_SELECT =
  "id, slug, name, title, lead, featured_image, closed, rating_beautiful, rating_access, rating_atmosphere, rating_cost, category:categories(slug, name)";

/** フルリレーション取得の select カラム */
const FULL_SELECT =
  "*, category:categories(*), images:spot_images(*), faqs:spot_faqs(*), reviews:spot_reviews(*), hotel:spot_hotels(*), event:spot_events(*)";

export const getSpotBySlug = cache(async function getSpotBySlug(
  categorySlug: string,
  spotSlug: string
): Promise<SpotWithRelations | null> {
  if (!isSupabaseConfigured) {
    if (
      dummySpot.slug === spotSlug &&
      dummySpot.category.slug === categorySlug
    ) {
      return dummySpot;
    }
    return null;
  }

  const supabase = await getSupabaseClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: spot, error } = (await supabase
    .from("spots")
    .select(`${FULL_SELECT}, spot_tags(tag:tags(*))`)
    .eq("slug", spotSlug)
    .eq("published", true)
    .single()) as any;

  if (error || !spot || spot.category?.slug !== categorySlug) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tags = spot.spot_tags?.map((r: any) => r.tag) ?? [];

  return normalizeSpotRelations({ ...spot, tags });
});

export async function getAllSpotSlugs(): Promise<
  { category: string; slug: string }[]
> {
  if (!isSupabaseConfigured) {
    return [{ category: dummySpot.category.slug, slug: dummySpot.slug }];
  }

  const supabase = await getSupabaseClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data, error } = (await supabase
    .from("spots")
    .select("slug, category:categories(slug)")
    .eq("published", true)) as any;

  if (error || !data) return [];

  return data.map((item: any) => ({
    category: item.category?.slug ?? "",
    slug: item.slug,
  }));
  /* eslint-enable @typescript-eslint/no-explicit-any */
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = (await supabase
    .from("spots")
    .select("slug, name, title, updated_at, category:categories(slug)")
    .eq("published", true)
    .order("updated_at", { ascending: false })
    .limit(limit)) as any;
  if (!data) return [];
  return data.map((s: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
    slug: s.slug,
    name: s.name || s.title,
    categorySlug: s.category?.slug ?? "",
    updatedAt: s.updated_at?.slice(0, 10).replace(/-/g, "/") ?? "",
  }));
}

export const getTotalSpotCount = cache(async function getTotalSpotCount(): Promise<number> {
  if (!isSupabaseConfigured) return 200;
  const supabase = await getSupabaseClient();
  const { count } = await supabase
    .from("spots")
    .select("*", { count: "exact", head: true })
    .eq("published", true);
  return count ?? 0;
});

export async function getTopSpots(limit = 6): Promise<SpotListItem[]> {
  if (!isSupabaseConfigured) {
    const { dummyTopSpots } = await import("../dummy-home-data");
    return dummyTopSpots.slice(0, limit);
  }

  const supabase = await getSupabaseClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("type", "spot")
    .eq("published", true)) as any;

  if (!data) return [];

  return data
    .map(mapSpotToListing)
    .sort((a: SpotListItem, b: SpotListItem) => b.rating_avg - a.rating_avg)
    .slice(0, limit);
}

export type TimeLapseSpot = {
  slug: string;
  name: string;
  categorySlug: string;
  movie: string;
};

export const getTimeLapseSpots = cache(async function getTimeLapseSpots(): Promise<TimeLapseSpot[]> {
  if (!isSupabaseConfigured) return [];
  const supabase = await getSupabaseClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = (await supabase
    .from("spots")
    .select("slug, name, title, movie, category:categories(slug)")
    .eq("published", true)
    .not("movie", "is", null)
    .order("published_at", { ascending: false })) as any;

  if (!data) return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((s: any) => ({
    slug: s.slug,
    name: s.name || s.title,
    categorySlug: s.category?.slug ?? "",
    movie: s.movie,
  }));
});

export type SearchSpotItem = SpotListItem & {
  matchedFields: string[];
};

type FieldLabels = {
  spotName: string;
  address: string;
  station: string;
  report: string;
  lead: string;
  tag: string;
  category: string;
};

const DEFAULT_FIELD_LABELS: FieldLabels = {
  spotName: "スポット名",
  address: "住所",
  station: "最寄り駅",
  report: "訪問レポート",
  lead: "紹介文",
  tag: "タグ",
  category: "エリア",
};

// 形態素解析でクエリをトークン分割
const STOP_WORDS = new Set([
  "が", "の", "な", "を", "に", "は", "で", "と", "も", "か",
  "て", "だ", "た", "する", "い", "ある", "する", "れる", "られる",
  "よう", "こと", "もの", "ため", "ところ", "さん", "くん",
  "the", "a", "an", "is", "are", "was", "were", "in", "on", "at",
  "to", "for", "of", "with", "and", "or", "not", "from", "by",
]);

function tokenizeQuery(query: string): string[] {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const TinySegmenter = require("tiny-segmenter");
  const segmenter = new TinySegmenter();
  const tokens: string[] = segmenter.segment(query.trim());
  return tokens
    .map((t: string) => t.trim().toLowerCase())
    .filter((t: string) => t.length > 0 && !STOP_WORDS.has(t));
}

export async function searchSpots(query: string, fieldLabels?: FieldLabels, localeSlug?: string): Promise<SearchSpotItem[]> {
  if (!isSupabaseConfigured || !query.trim()) return [];

  const labels = { ...DEFAULT_FIELD_LABELS, ...fieldLabels };
  const supabase = await getSupabaseClient();
  const searchSelect = `${LISTING_SELECT}, address, station, report`;

  // 形態素解析でトークン分割し、元のクエリも含める
  const tokens = tokenizeQuery(query);
  const allKeywords = [query.trim(), ...tokens.filter((t) => t !== query.trim().toLowerCase())];

  // 各トークンごとにスポットを検索し、ヒット情報を集約
  // spotId → { spot data, matchedFields set, matchedTokens (トークン別ヒット数), titleMatchTokens (タイトルにマッチしたトークン数) }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spotMap = new Map<string, { spot: any; matchedFields: Set<string>; matchedTokens: Set<string>; titleMatchTokens: Set<string> }>();

  for (const keyword of allKeywords) {
    const kw = keyword.toLowerCase();
    const q = `%${keyword}%`;

    // 1. テキストフィールド検索
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: textHits } = (await supabase
      .from("spots")
      .select(searchSelect)
      .eq("published", true)
      .or(`title.ilike.${q},name.ilike.${q},address.ilike.${q},station.ilike.${q},report.ilike.${q},lead.ilike.${q}`)) as any;

    // 2. タグ名マッチ
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: matchedTags } = (await supabase
      .from("tags")
      .select("id, name")
      .ilike("name", q)) as any;

    let tagSpotIds: string[] = [];
    if (matchedTags && matchedTags.length > 0) {
      const tagIds = matchedTags.map((t: { id: string }) => t.id);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data: tagRelations } = (await supabase
        .from("spot_tags")
        .select("spot_id, tag_id")
        .in("tag_id", tagIds)) as any;
      if (tagRelations) {
        tagSpotIds = tagRelations.map((r: { spot_id: string }) => r.spot_id);
      }
    }

    // 3. カテゴリ名マッチ
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: matchedCategories } = (await supabase
      .from("categories")
      .select("id, name")
      .ilike("name", q)) as any;

    let categorySpotIds: string[] = [];
    if (matchedCategories && matchedCategories.length > 0) {
      const catIds = matchedCategories.map((c: { id: string }) => c.id);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data: catSpots } = (await supabase
        .from("spots")
        .select("id")
        .eq("published", true)
        .in("category_id", catIds)) as any;
      if (catSpots) {
        categorySpotIds = catSpots.map((s: { id: string }) => s.id);
      }
    }

    // テキスト検索にないタグ・カテゴリヒットを追加取得
    const textHitIds = new Set((textHits ?? []).map((s: { id: string }) => s.id));
    const extraIds = [...new Set([...tagSpotIds, ...categorySpotIds])].filter(
      (id) => !textHitIds.has(id)
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let extraSpots: any[] = [];
    if (extraIds.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data } = (await supabase
        .from("spots")
        .select(searchSelect)
        .eq("published", true)
        .in("id", extraIds)) as any;
      extraSpots = data ?? [];
    }

    const tagSpotIdSet = new Set(tagSpotIds);
    const categorySpotIdSet = new Set(categorySpotIds);
    const allSpots = [...(textHits ?? []), ...extraSpots];

    for (const s of allSpots) {
      let entry = spotMap.get(s.id);
      if (!entry) {
        entry = { spot: s, matchedFields: new Set(), matchedTokens: new Set(), titleMatchTokens: new Set() };
        spotMap.set(s.id, entry);
      }

      let hit = false;
      const titleMatch = (s.title || "").toLowerCase().includes(kw) || (s.name || "").toLowerCase().includes(kw);
      if (titleMatch) { entry.matchedFields.add(labels.spotName); entry.titleMatchTokens.add(kw); hit = true; }
      if ((s.address || "").toLowerCase().includes(kw)) { entry.matchedFields.add(labels.address); hit = true; }
      if ((s.station || "").toLowerCase().includes(kw)) { entry.matchedFields.add(labels.station); hit = true; }
      if ((s.report || "").toLowerCase().includes(kw)) { entry.matchedFields.add(labels.report); hit = true; }
      if ((s.lead || "").toLowerCase().includes(kw)) { entry.matchedFields.add(labels.lead); hit = true; }
      if (tagSpotIdSet.has(s.id)) { entry.matchedFields.add(labels.tag); hit = true; }
      if (categorySpotIdSet.has(s.id)) { entry.matchedFields.add(labels.category); hit = true; }
      if (hit) entry.matchedTokens.add(kw);
    }
  }

  // トークンが複数ある場合は2つ以上マッチしたスポットのみ表示
  const minTokens = tokens.length >= 2 ? 2 : 1;

  const results: SearchSpotItem[] = [];
  for (const { spot, matchedFields, matchedTokens } of spotMap.values()) {
    if (matchedTokens.size >= minTokens) {
      results.push({ ...mapSpotToListing(spot), matchedFields: [...matchedFields] });
    }
  }

  // ソート優先順: タイトルマッチトークン数 → 全体マッチトークン数 → 評価
  const sorted = results.sort((a, b) => {
    const ta = spotMap.get(a.id)!.titleMatchTokens.size;
    const tb = spotMap.get(b.id)!.titleMatchTokens.size;
    if (tb !== ta) return tb - ta;
    const sa = spotMap.get(a.id)!.matchedTokens.size;
    const sb = spotMap.get(b.id)!.matchedTokens.size;
    if (sb !== sa) return sb - sa;
    return b.rating_avg - a.rating_avg;
  });

  // ロケールが指定されている場合、翻訳を適用
  const dbLocale = localeSlug ? LOCALE_SLUG_MAP[localeSlug] : null;
  if (dbLocale && sorted.length > 0) {
    const spotIds = sorted.map((s) => s.id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: translations } = (await supabase
      .from("spot_translations")
      .select("spot_id, name, lead, category_name")
      .eq("locale", dbLocale)
      .in("spot_id", spotIds)) as any;

    if (translations?.length) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const tMap = new Map<string, any>();
      for (const t of translations) tMap.set(t.spot_id, t);

      return sorted.map((s) => {
        const t = tMap.get(s.id);
        if (!t) return s;
        return {
          ...s,
          name: t.name || s.name,
          lead: t.lead || s.lead,
          category: t.category_name
            ? { ...s.category, name: t.category_name }
            : s.category,
        };
      });
    }
  }

  return sorted;
}

export async function getSpotCount(): Promise<number> {
  if (!isSupabaseConfigured) return 0;
  const supabase = await getSupabaseClient();
  const { count } = await supabase
    .from("spots")
    .select("*", { count: "exact", head: true })
    .eq("type", "spot")
    .eq("published", true);
  return count ?? 0;
}

export async function getHotelSpots(limit = 4): Promise<SpotListItem[]> {
  if (!isSupabaseConfigured) {
    const { dummyHotelSpots } = await import("../dummy-home-data");
    return dummyHotelSpots.slice(0, limit);
  }

  const supabase = await getSupabaseClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("type", "hotel")
    .eq("published", true)
    .order("rating_beautiful", { ascending: false })
    .limit(limit)) as any;

  if (!data) return [];

  return data.map(mapSpotToListing);
}

/** 翻訳付きトップスポット取得（ホームページ翻訳版用） */
export async function getTopSpotsTranslated(
  urlSlug: string,
  limit = 8,
  allowedCategorySlugs?: Set<string>
): Promise<SpotListItem[]> {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!isSupabaseConfigured || !dbLocale) return [];

  const supabase = await getSupabaseClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: spots } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("type", "spot")
    .eq("published", true)) as any;

  if (!spots?.length) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spotIds = spots.map((s: any) => s.id);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: translations } = (await supabase
    .from("spot_translations")
    .select("spot_id, name, lead, category_name")
    .eq("locale", dbLocale)
    .in("spot_id", spotIds)) as any;

  if (!translations?.length) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tMap = new Map<string, any>();
  for (const t of translations) tMap.set(t.spot_id, t);

  return spots
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((s: any) => tMap.has(s.id))
    .map(mapSpotToListing)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((s: SpotListItem) => !allowedCategorySlugs || allowedCategorySlugs.has(s.category.slug))
    .sort((a: SpotListItem, b: SpotListItem) => b.rating_avg - a.rating_avg)
    .slice(0, limit)
    .map((base: SpotListItem) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const orig = spots.find((s: any) => s.id === base.id);
      const t = tMap.get(base.id);
      return {
        ...base,
        name: t.name || base.name,
        category: t.category_name
          ? { slug: orig?.category?.slug ?? base.category.slug, name: t.category_name }
          : base.category,
        lead: t.lead || base.lead,
      };
    });
}

/** 翻訳付きホテルスポット取得（ホームページ翻訳版用） */
export async function getHotelSpotsTranslated(
  urlSlug: string,
  limit = 4
): Promise<SpotListItem[]> {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!isSupabaseConfigured || !dbLocale) return [];

  const supabase = await getSupabaseClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: spots } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("type", "hotel")
    .eq("published", true)
    .order("rating_beautiful", { ascending: false })) as any;

  if (!spots?.length) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spotIds = spots.map((s: any) => s.id);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: translations } = (await supabase
    .from("spot_translations")
    .select("spot_id, name, lead, category_name")
    .eq("locale", dbLocale)
    .in("spot_id", spotIds)) as any;

  if (!translations?.length) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tMap = new Map<string, any>();
  for (const t of translations) tMap.set(t.spot_id, t);

  return spots
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((s: any) => tMap.has(s.id))
    .slice(0, limit)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

/** 翻訳付きエリアデータ取得（ホームページ翻訳版用） */
export async function getAreasTranslated(urlSlug: string) {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  const areas = await getAreas();
  if (!isSupabaseConfigured || !dbLocale) return areas;

  const supabase = await getSupabaseClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = (await supabase
    .from("spot_translations")
    .select("category_name, spot:spots!inner(category:categories!inner(slug))")
    .eq("locale", dbLocale)
    .not("category_name", "is", null)) as any;

  if (!data?.length) return areas;

  const nameMap = new Map<string, string>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
}

export async function getRelatedSpots(
  categoryId: string,
  excludeId: string,
  limit = 4
): Promise<SpotListItem[]> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  // 同じタグを持つスポットIDを取得（自分自身は除外）と全スポット一覧を並列取得
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [{ data: tagLinks }, { data: allSpots }] = await Promise.all([
    supabase
      .from("spot_tags")
      .select("spot_id, tag_id")
      .in("tag_id", tagIds)
      .neq("spot_id", spotId) as any,
    supabase
      .from("spots")
      .select(LISTING_SELECT)
      .eq("published", true)
      .eq("type", "spot")
      .neq("category_id", categoryId) as any,
  ]);

  if (!tagLinks?.length) return [];

  // タグの一致数でスコアリング
  const scoreMap = new Map<string, number>();
  for (const link of tagLinks) {
    scoreMap.set(link.spot_id, (scoreMap.get(link.spot_id) || 0) + 1);
  }

  const candidateIds = new Set(scoreMap.keys());
  const spots = allSpots?.filter((s: any) => candidateIds.has(s.id)) ?? [];

  if (!spots?.length) return [];

  return spots
    .map(mapSpotToListing)
    .sort((a: SpotListItem, b: SpotListItem) => {
      const scoreA = scoreMap.get(a.id) || 0;
      const scoreB = scoreMap.get(b.id) || 0;
      if (scoreB !== scoreA) return scoreB - scoreA;
      return b.rating_avg - a.rating_avg;
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: translations } = (await supabase
    .from("spot_translations")
    .select("spot_id, name, lead, category_name")
    .eq("locale", dbLocale)
    .in("spot_id", spotIds)) as any;

  if (!translations?.length) return spots;

  const tMap = new Map(translations.map((t: any) => [t.spot_id, t]));

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: spots } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("category_id", categoryId)
    .eq("published", true)
    .neq("id", excludeId)
    .order("rating_beautiful", { ascending: false })
    .limit(limit * 3)) as any;

  if (!spots?.length) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spotIds = spots.map((s: any) => s.id);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: translations } = (await supabase
    .from("spot_translations")
    .select("spot_id, name, lead, category_name")
    .eq("locale", dbLocale)
    .in("spot_id", spotIds)) as any;

  if (!translations?.length) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tMap = new Map<string, any>();
  for (const t of translations) tMap.set(t.spot_id, t);

  return spots
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((s: any) => tMap.has(s.id))
    .slice(0, limit)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

/** カテゴリslugに属する翻訳済みスポット一覧を取得 */
export async function getSpotsByCategoryTranslated(
  categorySlug: string,
  urlSlug: string
): Promise<SpotListItem[]> {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!isSupabaseConfigured || !dbLocale) return [];

  const supabase = await getSupabaseClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: spots } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("published", true)) as any;

  if (!spots?.length) return [];

  const categorySpots = spots.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (s: any) => s.category?.slug === categorySlug
  );
  if (!categorySpots.length) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spotIds = categorySpots.map((s: any) => s.id);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: translations } = (await supabase
    .from("spot_translations")
    .select("spot_id, name, lead, category_name")
    .eq("locale", dbLocale)
    .in("spot_id", spotIds)) as any;

  if (!translations?.length) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tMap = new Map<string, any>();
  for (const t of translations) tMap.set(t.spot_id, t);

  return categorySpots
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((s: any) => tMap.has(s.id))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data } = (await supabase
    .from("spot_translations")
    .select("locale, spot:spots(category:categories(slug))")
  ) as any;
  /* eslint-enable @typescript-eslint/no-explicit-any */

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

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data } = (await supabase
    .from("spot_translations")
    .select("locale, spot:spots!inner(category:categories!inner(slug))")
  ) as any;
  /* eslint-enable @typescript-eslint/no-explicit-any */

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

/** カテゴリslugに属するスポット一覧を取得 */
export const getSpotsByCategory = cache(async function getSpotsByCategory(
  categorySlug: string
): Promise<SpotListItem[]> {
  if (!isSupabaseConfigured) {
    const { dummyTopSpots } = await import("../dummy-home-data");
    return dummyTopSpots.filter((s) => s.category.slug === categorySlug);
  }

  const supabase = await getSupabaseClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = (await supabase
    .from("spots")
    .select(LISTING_SELECT)
    .eq("published", true)) as any;

  if (!data) return [];

  return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((s: any) => s.category?.slug === categorySlug)
    .map(mapSpotToListing)
    .sort((a: SpotListItem, b: SpotListItem) => b.rating_avg - a.rating_avg);
});

/** カテゴリslugからカテゴリ情報を取得 */
export const getCategoryBySlug = cache(async function getCategoryBySlug(
  categorySlug: string
): Promise<{ id: string; name: string; slug: string; description: string | null } | null> {
  if (!isSupabaseConfigured) return null;

  const supabase = await getSupabaseClient();

  // description カラムがまだ存在しない場合にフォールバック
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = (await supabase
    .from("categories")
    .select("id, name, slug, description")
    .eq("slug", categorySlug)
    .single()) as any;

  if (error || !data) {
    // description カラムが無い場合は無しで再取得
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
const NON_AREA_SLUGS = ["article", "pickup", "event"];

export const getAreas = cache(async function getAreas() {
  if (!isSupabaseConfigured) {
    const { dummyAreas } = await import("../dummy-home-data");
    return dummyAreas;
  }

  const supabase = await getSupabaseClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data: spots } = (await supabase
    .from("spots")
    .select("category:categories(slug, name)")
    .eq("published", true)) as any;

  if (!spots) return [];

  const countMap = new Map<string, { name: string; count: number }>();
  for (const s of spots) {
    const slug = s.category?.slug;
    if (!slug || NON_AREA_SLUGS.includes(slug)) continue;
    const existing = countMap.get(slug);
    if (existing) {
      existing.count++;
    } else {
      countMap.set(slug, { name: s.category.name, count: 1 });
    }
  }

  const areas = [...countMap.entries()].map(([slug, v]) => ({
    slug,
    name: v.name,
    spot_count: v.count,
  }));
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const TAIL_ORDER = ["横浜", "その他エリア"];
  return areas.sort((a, b) => {
    const ai = TAIL_ORDER.indexOf(a.name);
    const bi = TAIL_ORDER.indexOf(b.name);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return 1;
    if (bi !== -1) return -1;
    return b.spot_count - a.spot_count;
  });
});

/** 目的別タグ（スポット数付き） */
export const getPurposeTags = cache(async function getPurposeTags() {
  if (!isSupabaseConfigured) {
    return [];
  }

  const supabase = await getSupabaseClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data: relations } = (await supabase
    .from("spot_tags")
    .select("tag:tags(slug, name, image_url)")) as any;

  if (!relations) return [];

  const countMap = new Map<string, { name: string; image_url: string | null; count: number }>();
  for (const r of relations) {
    const slug = r.tag?.slug;
    if (!slug) continue;
    const existing = countMap.get(slug);
    if (existing) {
      existing.count++;
    } else {
      countMap.set(slug, { name: r.tag.name, image_url: r.tag.image_url || null, count: 1 });
    }
  }

  const result = [...countMap.entries()].map(([slug, v]) => ({
    slug,
    name: v.name,
    image_url: v.image_url,
    spot_count: v.count,
  }));
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return result.sort((a, b) => b.spot_count - a.spot_count);
});

/** タグ情報をslugで取得 */
export const getTagBySlug = cache(async function getTagBySlug(tagSlug: string) {
  if (!isSupabaseConfigured) {
    // ダミーデータから探す
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
    const { dummyTagSpots } = await import("../dummy-tag-data");
    const spots = dummyTagSpots[tagSlug] ?? [];
    if (type) return spots.filter((s) => s.type === type);
    return spots;
  }

  const supabase = await getSupabaseClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  // まずタグに紐づくspot_idを取得
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

  let query = supabase
    .from("spots")
    .select(FULL_SELECT)
    .in("id", spotIds)
    .eq("published", true);

  if (type) {
    query = query.eq("type", type);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: spots } = (await query) as any;

  if (!spots) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return spots.map((spot: any) => normalizeSpotRelations({ ...spot, tags: [] }));
}

/** スラッグ一覧からフル情報のスポットを取得 */
export async function getSpotsBySlugs(
  slugs: string[]
): Promise<SpotWithRelations[]> {
  if (!isSupabaseConfigured || slugs.length === 0) return [];

  const supabase = await getSupabaseClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: spots } = (await supabase
    .from("spots")
    .select(FULL_SELECT)
    .in("slug", slugs)
    .eq("published", true)) as any;

  if (!spots) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return spots.map((spot: any) => normalizeSpotRelations({ ...spot, tags: [] }));
}

/** スポット + 翻訳をマージして取得 (urlSlug = "tw", "cn", "en", "ko") */
export const getSpotWithTranslation = cache(async function getSpotWithTranslation(
  categorySlug: string,
  spotSlug: string,
  urlSlug: string
): Promise<SpotWithRelations | null> {
  const dbLocale = LOCALE_SLUG_MAP[urlSlug];
  if (!isSupabaseConfigured || !dbLocale) return null;

  // まず日本語版を取得
  const spot = await getSpotBySlug(categorySlug, spotSlug);
  if (!spot) return null;

  const supabase = await getSupabaseClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data: translation } = (await supabase
    .from("spot_translations")
    .select("*")
    .eq("spot_id", spot.id)
    .eq("locale", dbLocale)
    .single()) as any;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  if (!translation) return null;

  // 翻訳をマージ（翻訳がないフィールドは日本語のまま）
  const merged = { ...spot };
  const fields = [
    "title", "name", "lead", "report", "content",
    "address", "station", "parking", "hours", "holiday", "money", "height",
    "official_label", "sns_label", "relation_label",
  ] as const;

  for (const field of fields) {
    if (translation[field]) {
      (merged as any)[field] = translation[field]; // eslint-disable-line @typescript-eslint/no-explicit-any
    }
  }

  if (translation.category_name) {
    merged.category = { ...merged.category, name: translation.category_name };
  }

  // FAQ翻訳をマージ
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

  // 画像alt翻訳をマージ
  const parsedAlts = parseJsonField<{ sort_order: number; alt: string }[]>(translation.image_alts);
  if (parsedAlts) {
    const altMap = new Map<number, string>();
    for (const item of parsedAlts) altMap.set(item.sort_order, item.alt);
    merged.images = merged.images.map((img: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
      const translatedAlt = altMap.get(img.sort_order);
      return translatedAlt ? { ...img, alt: translatedAlt } : img;
    });
  }

  // タグ名翻訳をマージ
  const parsedTagNames = parseJsonField<Record<string, string>>(translation.tag_names);
  if (parsedTagNames && !Array.isArray(parsedTagNames)) {
    merged.tags = (merged.tags ?? []).map((tag: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
      ...tag,
      name: parsedTagNames[tag.name] ?? tag.name,
    }));
  }

  // Google Maps embed の表示言語をロケールに合わせる
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
export const getAvailableTranslations = cache(async function getAvailableTranslations(
  spotId: string
): Promise<{ locale: string }[]> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();
  const { data } = await supabase
    .from("spot_translations")
    .select("locale")
    .eq("spot_id", spotId);

  return (data ?? [])
    .filter((d) => LOCALE_TO_SLUG[d.locale])
    .map((d) => ({ locale: LOCALE_TO_SLUG[d.locale] }));
});

/** 翻訳済みの全スポットスラッグを取得（SSG用） */
export async function getAllTranslatedSlugs(): Promise<
  { locale: string; category: string; slug: string }[]
> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data } = (await supabase
    .from("spot_translations")
    .select("locale, spot:spots!inner(slug, published, category:categories(slug))")
    .eq("spot.published", true)) as any;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  if (!data) return [];

  return data
    .filter((d: any) => d.spot?.category?.slug && d.spot?.slug && LOCALE_TO_SLUG[d.locale])
    .map((d: any) => ({
      locale: LOCALE_TO_SLUG[d.locale],
      category: d.spot.category.slug,
      slug: d.spot.slug,
    }));
}

/* ------------------------------------------------------------------ */
/* Tag Page クエリ                                                      */
/* ------------------------------------------------------------------ */

/** タグページの翻訳済みロケールを取得 */
export async function getAvailableTagPageLocales(
  tagSlug: string
): Promise<string[]> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data: tagPage } = (await supabase
    .from("tag_pages")
    .select("id, tag:tags!inner(slug)")
    .eq("tag.slug", tagSlug)
    .single()) as any;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  if (!tagPage) return [];

  const { data: translations } = await supabase
    .from("tag_page_translations")
    .select("locale")
    .eq("tag_page_id", tagPage.id);

  if (!translations) return [];

  // DB locale (en, ko, zh-Hant, zh-Hans) → URL slug (en, ko, tw, cn)
  return translations
    .map((t) => LOCALE_TO_SLUG[t.locale])
    .filter((s): s is string => !!s);
}

/** タグページ一覧（管理画面用） */
/** フッター用: 公開済みタグページ一覧（名前とslugのみ） */
export async function getPublishedTagPages(): Promise<
  { name: string; slug: string }[]
> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data, error } = (await supabase
    .from("tag_pages")
    .select("tag:tags(name, slug)")
    .eq("published", true)
    .order("updated_at", { ascending: false })) as any;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  if (error || !data) return [];
  return data.map((d: { tag: { name: string; slug: string } }) => d.tag).filter(Boolean);
}

export async function getTagPages(): Promise<
  { id: string; title: string; published: boolean; tag: { name: string; slug: string }; updated_at: string }[]
> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data, error } = (await supabase
    .from("tag_pages")
    .select("id, title, published, updated_at, tag:tags(name, slug)")
    .order("updated_at", { ascending: false })) as any;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  if (error || !data) return [];
  return data;
}

/** タグページ詳細（管理画面 edit / 公開ページ共通） */
export async function getTagPageById(
  tagPageId: string
): Promise<TagPageWithRelations | null> {
  if (!isSupabaseConfigured) return null;

  const supabase = await getSupabaseClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data: page, error } = (await supabase
    .from("tag_pages")
    .select("*, tag:tags(*)")
    .eq("id", tagPageId)
    .single()) as any;

  if (error || !page) return null;

  // PR Banner
  const { data: prBannerRow } = (await supabase
    .from("tag_page_pr_banners")
    .select("*")
    .eq("tag_page_id", tagPageId)
    .maybeSingle()) as any;

  let prBanner = null;
  if (prBannerRow) {
    const { data: links } = (await supabase
      .from("tag_page_pr_banner_links")
      .select("*")
      .eq("pr_banner_id", prBannerRow.id)
      .order("sort_order")) as any;
    prBanner = { ...prBannerRow, links: links ?? [] };
  }

  // Sections + section spots
  const { data: sectionsRaw } = (await supabase
    .from("tag_page_sections")
    .select("*")
    .eq("tag_page_id", tagPageId)
    .order("sort_order")) as any;

  const sections = [];
  for (const sec of sectionsRaw ?? []) {
    const { data: sectionSpots } = (await supabase
      .from("tag_page_section_spots")
      .select("*, spot:spots(slug, title, name, featured_image)")
      .eq("section_id", sec.id)
      .order("sort_order")) as any;
    sections.push({ ...sec, spots: sectionSpots ?? [] });
  }

  // FAQs
  const { data: faqs } = (await supabase
    .from("tag_page_faqs")
    .select("*")
    .eq("tag_page_id", tagPageId)
    .order("sort_order")) as any;

  // Translations
  const { data: translations } = (await supabase
    .from("tag_page_translations")
    .select("*")
    .eq("tag_page_id", tagPageId)) as any;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return {
    ...page,
    pr_banner: prBanner,
    sections,
    faqs: faqs ?? [],
    translations: translations ?? [],
  };
}

/** タグslugからタグページを取得（公開ページ用） */
export const getTagPageBySlug = cache(async function getTagPageBySlug(
  tagSlug: string
): Promise<TagPageWithRelations | null> {
  if (!isSupabaseConfigured) return null;

  const supabase = await getSupabaseClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { data: tag } = await supabase
    .from("tags")
    .select("id")
    .eq("slug", tagSlug)
    .single();

  if (!tag) return null;

  const { data: page } = (await supabase
    .from("tag_pages")
    .select("id")
    .eq("tag_id", tag.id)
    .eq("published", true)
    .single()) as any;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  if (!page) return null;

  return getTagPageById(page.id);
});

/** タグページの翻訳ステータス取得（管理画面用） */
export async function getTagPageTranslationStatus(
  tagPageId: string
): Promise<{ locale: string; updated_at: string }[]> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();
  const { data } = await supabase
    .from("tag_page_translations")
    .select("locale, updated_at")
    .eq("tag_page_id", tagPageId);

  return data ?? [];
}

/** タグslugとロケールから翻訳済みタグページを取得（公開ページ用） */
export const getTagPageBySlugWithTranslation = cache(async function getTagPageBySlugWithTranslation(
  tagSlug: string,
  localeSlug: string
): Promise<{ page: TagPageWithRelations; translation: TagPageTranslation } | null> {
  const dbLocale = LOCALE_SLUG_MAP[localeSlug];
  if (!dbLocale) return null;

  const page = await getTagPageBySlug(tagSlug);
  if (!page) return null;

  const translation = page.translations?.find((t) => t.locale === dbLocale);
  if (!translation) return null;

  return { page, translation };
});

/* =========================================
   Map — spots with coordinates (area-filtered)
   ========================================= */
export async function getMapSpotsByCategory(categorySlug: string): Promise<MapSpotItem[]> {
  const all = await getSpotsForMap();
  return all.filter((s) => s.categorySlug === categorySlug);
}

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

/* =========================================
   Map page — spots with coordinates
   ========================================= */
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

export async function getSpotsForMap(): Promise<MapSpotItem[]> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = (await supabase
    .from("spots")
    .select(
      "id, slug, name, title, featured_image, latitude, longitude, rating_beautiful, rating_access, rating_atmosphere, rating_cost, category:categories(slug, name)"
    )
    .eq("type", "spot")
    .eq("published", true)
    .not("latitude", "is", null)
    .not("longitude", "is", null)) as any;

  if (!data) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

/* ------------------------------------------------------------------ */
/* Article クエリ                                                       */
/* ------------------------------------------------------------------ */

export const getArticles = cache(async function getArticles(): Promise<Article[]> {
  if (!isSupabaseConfigured) return [];
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("articles")
    .select("id, slug, title, description, thumbnail, published, published_at, created_at, updated_at")
    .eq("published", true)
    .order("published_at", { ascending: false });
  if (error || !data) return [];
  return data as Article[];
});

export const getArticleBySlug = cache(async function getArticleBySlug(
  slug: string
): Promise<Article | null> {
  if (!isSupabaseConfigured) return null;
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  if (error || !data) return null;
  return data as Article;
});

export async function getRelatedArticles(
  currentSlug: string,
  limit = 4
): Promise<Article[]> {
  if (!isSupabaseConfigured) return [];
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("articles")
    .select("id, slug, title, description, thumbnail, published_at, created_at, updated_at, published")
    .eq("published", true)
    .neq("slug", currentSlug)
    .order("published_at", { ascending: false })
    .limit(limit);
  if (error || !data) return [];
  return data as Article[];
}

export async function getArticlesBySlugs(slugs: string[]): Promise<Article[]> {
  if (!isSupabaseConfigured || slugs.length === 0) return [];
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("articles")
    .select("id, slug, title, description, thumbnail, published, published_at, created_at, updated_at")
    .eq("published", true)
    .in("slug", slugs);
  if (error || !data) return [];
  return (data as Article[]).sort(
    (a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug)
  );
}

export async function getAllArticleSlugs(): Promise<{ slug: string }[]> {
  if (!isSupabaseConfigured) return [];
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("articles")
    .select("slug")
    .eq("published", true);
  if (error || !data) return [];
  return data;
}

/** スラッグ一覧から featured_image を軽量取得 */
export async function getSpotImagesBySlugs(
  slugs: string[]
): Promise<Record<string, string>> {
  if (!isSupabaseConfigured || slugs.length === 0) return {};
  const supabase = await getSupabaseClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = (await supabase
    .from("spots")
    .select("slug, featured_image")
    .in("slug", slugs)) as any;
  if (!data) return {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.fromEntries(data.map((s: any) => [s.slug, s.featured_image ?? ""]));
}
