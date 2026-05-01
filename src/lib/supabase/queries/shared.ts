import { cache } from "react";
import { unstable_cache } from "next/cache";
import type { SpotWithRelations, SpotListItem } from "../../types";
import { calcRatingAvg, LOCALE_SLUG_MAP, LOCALE_TO_SLUG } from "../../types";

export { cache, unstable_cache, LOCALE_SLUG_MAP, LOCALE_TO_SLUG };

export const isSupabaseConfigured =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function getSupabaseClient() {
  const { supabase } = await import("../client");
  return supabase;
}

/** Supabase が返す配列リレーションを正規化する共通処理 */
export function normalizeSpotRelations(spot: any): SpotWithRelations {
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

/** spot_id をキーとした翻訳マップを生成 */
export function buildTranslationMap(translations: any[]): Map<string, any> {
  const map = new Map<string, any>();
  for (const t of translations) map.set(t.spot_id, t);
  return map;
}

/** sort_order 昇順ソート */
export function sortByOrder(arr: any): any[] {
  if (!Array.isArray(arr)) return [];
  return [...arr].sort((a, b) => a.sort_order - b.sort_order);
}

/** created_at 降順ソート */
export function sortByDateDesc(arr: any): any[] {
  if (!Array.isArray(arr)) return [];
  return [...arr].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

/** DB のスポット行を一覧用の SpotListItem に変換 */
export function mapSpotToListing(s: any): SpotListItem {
  return {
    id: s.id,
    slug: s.slug,
    name: s.name || s.title,
    featured_image: s.featured_image || "",
    category: s.category || { slug: "", name: "" },
    address: s.address ?? null,
    station_names: s.station_names ?? null,
    rating_avg: calcRatingAvg(s),
    rating_beautiful: s.rating_beautiful ?? null,
    rating_access: s.rating_access ?? null,
    rating_atmosphere: s.rating_atmosphere ?? null,
    rating_cost: s.rating_cost ?? null,
    lead: s.lead || "",
    closed: s.closed ?? false,
    updated_at: s.updated_at ?? undefined,
  };
}

/** 一覧クエリ共通の select カラム */
export const LISTING_SELECT =
  "id, slug, name, title, lead, featured_image, closed, updated_at, address, station_names, rating_beautiful, rating_access, rating_atmosphere, rating_cost, category:categories(slug, name)";

/** フルリレーション取得の select カラム */
export const FULL_SELECT =
  "*, category:categories(id, slug, name), images:spot_images(id, spot_id, url, alt, sort_order), faqs:spot_faqs(id, spot_id, question, answer, sort_order), reviews:spot_reviews(id, spot_id, name, rating, title, content, created_at), hotel:spot_hotels(id, spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4), event:spot_events(id, spot_id, start_date, end_date, place, event_hour)";

/** エリア別カテゴリ除外スラッグ */
export const NON_AREA_SLUGS = ["article", "pickup", "event"];
