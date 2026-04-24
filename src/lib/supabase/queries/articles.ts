import { cache } from "react";
import { unstable_cache } from "next/cache";
import type { Article } from "../../types";
import {
  isSupabaseConfigured,
  getSupabaseClient,
} from "./shared";
import { ARTICLE_RELATED_MAP, computeArticleRelatedScore } from "@/lib/article-spot-links";

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
  return unstable_cache(
    async () => {
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
    },
    [`article`, slug],
    { revalidate: 3600, tags: ["articles", `article-${slug}`] }
  )();
});

export async function getRelatedArticles(
  currentSlug: string,
  limit = 4
): Promise<Article[]> {
  // getArticles() は unstable_cache でキャッシュ済みのため追加クエリ不要
  const allArticles = await getArticles();
  const current = allArticles.find((a) => a.slug === currentSlug);
  const candidates = allArticles.filter((a) => a.slug !== currentSlug);

  // 1. 手動定義があればそのスラッグを優先
  const manualSlugs = ARTICLE_RELATED_MAP[currentSlug] ?? [];
  const manualSet = new Set(manualSlugs);
  const manualArticles = manualSlugs
    .map((s) => candidates.find((a) => a.slug === s))
    .filter((a): a is Article => !!a);

  // 2. 残り枠をスラッグ・タイトル・説明文キーワードの複合スコアで選択
  const rest = candidates
    .filter((a) => !manualSet.has(a.slug))
    .map((a) => ({
      article: a,
      score: computeArticleRelatedScore(
        { slug: currentSlug, title: current?.title, description: current?.description },
        { slug: a.slug, title: a.title, description: a.description }
      ),
    }))
    .sort((a, b) => b.score - a.score);

  return [
    ...manualArticles,
    ...rest.map((r) => r.article),
  ].slice(0, limit);
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
