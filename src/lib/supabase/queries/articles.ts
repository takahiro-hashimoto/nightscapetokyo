import { cache } from "react";
import { unstable_cache } from "next/cache";
import type { Article } from "../../types";
import {
  isSupabaseConfigured,
  getSupabaseClient,
} from "./shared";

export const getArticles = cache(unstable_cache(async (): Promise<Article[]> => {
  if (!isSupabaseConfigured) return [];
  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("articles")
    .select("id, slug, title, description, thumbnail, published, published_at, created_at, updated_at")
    .eq("published", true)
    .order("published_at", { ascending: false });
  if (error || !data) return [];
  return data as Article[];
}, ["articles"], { revalidate: 3600, tags: ["articles"] }));

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
