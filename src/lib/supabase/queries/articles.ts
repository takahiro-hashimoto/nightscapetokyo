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

// 自動スコアリングで関連記事と見なす最低スコア。
// 0点は共通キーワードがゼロ = 完全に無関係な記事なので除外する。
const RELATED_ARTICLE_MIN_SCORE = 1;

export async function getRelatedArticles(
  currentSlug: string,
  limit = 4
): Promise<Article[]> {
  // getArticles() は unstable_cache でキャッシュ済みのため追加クエリ不要
  const allArticles = await getArticles();
  const current = allArticles.find((a) => a.slug === currentSlug);
  const candidates = allArticles.filter((a) => a.slug !== currentSlug);

  // 1. 手動定義があればそのスラッグを優先（定義順を保持）
  const manualSlugs = ARTICLE_RELATED_MAP[currentSlug] ?? [];
  const manualSet = new Set(manualSlugs);
  const manualArticles = manualSlugs
    .map((s) => candidates.find((a) => a.slug === s))
    .filter((a): a is Article => !!a);

  // 2. 手動定義で枠が埋まらない場合のみ自動スコアリングで補完
  const remaining = limit - manualArticles.length;
  if (remaining <= 0) return manualArticles.slice(0, limit);

  const autoArticles = candidates
    .filter((a) => !manualSet.has(a.slug))
    .map((a) => ({
      article: a,
      score: computeArticleRelatedScore(
        { slug: currentSlug, title: current?.title, description: current?.description },
        { slug: a.slug, title: a.title, description: a.description }
      ),
    }))
    .filter((r) => r.score >= RELATED_ARTICLE_MIN_SCORE)
    .sort((a, b) => b.score - a.score)
    .slice(0, remaining)
    .map((r) => r.article);

  return [...manualArticles, ...autoArticles];
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
