import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";
import { SITE_URL } from "@/lib/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getDb() {
  if (!supabaseUrl || !supabaseKey) return null;
  return createClient(supabaseUrl, supabaseKey);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const db = await getDb();
  const entries: MetadataRoute.Sitemap = [];

  // トップページ
  entries.push({
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  });

  if (!db) return entries;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Row = Record<string, any>;

  // エリア（カテゴリ）ページ
  const { data: categories } = await db
    .from("categories")
    .select("slug") as { data: Row[] | null };

  for (const cat of categories ?? []) {
    entries.push({
      url: `${SITE_URL}/${cat.slug}`,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // スポット詳細ページ
  const { data: spots } = await db
    .from("spots")
    .select("slug, updated_at, category:categories(slug)")
    .eq("published", true) as { data: Row[] | null };

  for (const spot of spots ?? []) {
    const catSlug = Array.isArray(spot.category)
      ? spot.category[0]?.slug
      : spot.category?.slug;
    if (!catSlug) continue;
    entries.push({
      url: `${SITE_URL}/${catSlug}/${spot.slug}`,
      lastModified: spot.updated_at ? new Date(spot.updated_at) : undefined,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // タグページ
  const { data: tagPages } = await db
    .from("tag_pages")
    .select("updated_at, tag:tags(slug)")
    .eq("published", true) as { data: Row[] | null };

  for (const tp of tagPages ?? []) {
    const tagSlug = Array.isArray(tp.tag) ? tp.tag[0]?.slug : tp.tag?.slug;
    if (!tagSlug) continue;
    entries.push({
      url: `${SITE_URL}/tag/${tagSlug}`,
      lastModified: tp.updated_at ? new Date(tp.updated_at) : undefined,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // タグ一覧（タグページがないタグも含む）
  const tagPageSlugs = new Set(
    (tagPages ?? []).map((tp) => {
      const tag = Array.isArray(tp.tag) ? tp.tag[0] : tp.tag;
      return tag?.slug;
    }).filter(Boolean)
  );

  const { data: tags } = await db
    .from("tags")
    .select("slug") as { data: Row[] | null };

  for (const tag of tags ?? []) {
    if (tagPageSlugs.has(tag.slug)) continue; // 既に追加済み
    entries.push({
      url: `${SITE_URL}/tag/${tag.slug}`,
      changeFrequency: "weekly",
      priority: 0.5,
    });
  }

  return entries;
}
