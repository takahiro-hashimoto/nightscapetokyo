import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase/queries/shared";
import { LOCALE_SLUG_MAP } from "@/lib/types";

export const runtime = "nodejs";

export type SuggestItem = {
  slug: string;
  name: string;
  categorySlug: string;
};

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.trim() ?? "";
  const localeSlug = req.nextUrl.searchParams.get("locale") ?? "";
  const dbLocale = LOCALE_SLUG_MAP[localeSlug] ?? null; // e.g. "en", "ko", "zh-Hant"

  if (!isSupabaseConfigured || q.length < 1) {
    return NextResponse.json({ spots: [] });
  }

  const supabase = await getSupabaseClient();
  const pattern = `%${q}%`;

  // メインスポットテーブルとi18n翻訳テーブルを並列検索
  const [mainRes, transRes] = await Promise.all([
    supabase
      .from("spots")
      .select("id, slug, name, title, category:categories(slug)")
      .eq("published", true)
      .or(`name.ilike.${pattern},title.ilike.${pattern}`)
      .limit(8),
    dbLocale
      ? supabase
          .from("spot_translations")
          .select("spot_id, name, spot:spots!inner(id, slug, published, category:categories(slug))")
          .eq("locale", dbLocale)
          .ilike("name", pattern)
          .eq("spots.published", true)
          .limit(8)
      : Promise.resolve({ data: [] }),
  ]);

  const seen = new Set<string>();
  const spots: SuggestItem[] = [];

  // メイン検索結果を追加
  type SpotRow = { slug: string; name?: string; title?: string; category?: { slug: string } | { slug: string }[] };
  type TransRow = { name: string; spot: SpotRow | SpotRow[] };

  for (const s of (mainRes.data ?? []) as SpotRow[]) {
    if (seen.has(s.slug)) continue;
    seen.add(s.slug);
    const cat = Array.isArray(s.category) ? s.category[0] : s.category;
    spots.push({ slug: s.slug, name: s.name || s.title || "", categorySlug: cat?.slug ?? "" });
  }

  // 翻訳テーブルのヒットを追加（重複除去）
  for (const t of (transRes.data ?? []) as TransRow[]) {
    const spotRow = Array.isArray(t.spot) ? t.spot[0] : t.spot;
    if (!spotRow?.slug || seen.has(spotRow.slug)) continue;
    seen.add(spotRow.slug);
    const cat = Array.isArray(spotRow.category) ? spotRow.category[0] : spotRow.category;
    spots.push({ slug: spotRow.slug, name: t.name, categorySlug: cat?.slug ?? "" });
  }

  return NextResponse.json(
    { spots: spots.slice(0, 8) },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } }
  );
}
