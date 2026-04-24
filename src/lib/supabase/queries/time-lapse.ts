import { cache } from "react";
import { LOCALE_SLUG_MAP } from "../../types";
import { isSupabaseConfigured, getSupabaseClient } from "./shared";

export type TimeLapseSpot = {
  slug: string;
  name: string;
  categorySlug: string;
  movie: string;
};

export const getTimeLapseSpots = cache(async function getTimeLapseSpots(localeSlug?: string): Promise<TimeLapseSpot[]> {
  if (!isSupabaseConfigured) return [];
  const supabase = await getSupabaseClient();
  const query = supabase
    .from("spots")
    .select("id, slug, name, title, movie, category:categories(slug)")
    .eq("published", true)
    .not("movie", "is", null)
    .order("published_at", { ascending: false });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = (await query) as any;

  if (!data) return [];

  const dbLocale = localeSlug ? LOCALE_SLUG_MAP[localeSlug] : null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tMap = new Map<string, any>();
  if (dbLocale) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spotIds = (data as any[]).map((s) => s.id);
    const transQuery = supabase
      .from("spot_translations")
      .select("spot_id, name")
      .eq("locale", dbLocale)
      .in("spot_id", spotIds);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: translations } = (await transQuery) as any;
    if (translations?.length) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      for (const t of translations as any[]) tMap.set(t.spot_id, t);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data as any[]).map((s) => ({
    slug: s.slug,
    name: tMap.get(s.id)?.name || s.name || s.title,
    categorySlug: s.category?.slug ?? "",
    movie: s.movie,
  }));
});
