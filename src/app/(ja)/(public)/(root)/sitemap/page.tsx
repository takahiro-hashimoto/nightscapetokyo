import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { ALL_LOCALE_SLUGS, LOCALE_LABELS } from "@/lib/types";
import { supabase } from "@/lib/supabase/client";
import { getArticles } from "@/lib/supabase/queries";
import { getAllPostsSummary } from '@/lib/luminar/articles-meta';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "サイトマップ | 東京夜景ナビ",
  description:
    "東京夜景ナビのサイトマップです。エリア別・目的別の夜景スポット一覧をご確認いただけます。",
};

type CategoryWithSpots = {
  slug: string;
  name: string;
  spots: { slug: string; title: string }[];
};

type TagLink = {
  slug: string;
  name: string;
};

const LUMINAR_NOINDEX_SLUGS = new Set(['privacy-policy', 'about']);

async function getSitemapData() {
  const [catRes, tagRes, luminarPosts, articles] = await Promise.all([
    supabase
      .from("categories")
      .select("slug, name, spots:spots(slug, title)")
      .order("name"),
    supabase.from("tags").select("slug, name").order("name"),
    getAllPostsSummary(),
    getArticles(),
  ]);

  const categories = ((catRes.data ?? []) as CategoryWithSpots[]).sort(
    (a, b) => b.spots.length - a.spots.length
  );

  return {
    categories,
    tags: (tagRes.data ?? []) as TagLink[],
    luminarPosts: luminarPosts.filter((p) => !LUMINAR_NOINDEX_SLUGS.has(p.slug)),
    articles,
  };
}

export default async function SitemapPage() {
  const { categories, tags, luminarPosts, articles } = await getSitemapData();

  return (
    <>
      <LanguageSwitcher currentLocale="ja" categorySlug="sitemap" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout
      title="サイトマップ"
      icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>}
      summary="東京夜景ナビに掲載中の全ページへのリンク一覧です。エリア別・目的別に夜景スポットを探せます。"
      topLink={{ href: "/", label: "東京都内の夜景情報一覧" }}
      breadcrumb={[
        
        { label: "サイトマップ" },
      ]}
    >
      {/* エリア別 */}
      <div className="content-card card-padding article-body">

        <h2>エリア別 夜景スポット</h2>
        {categories.map((cat) => (
          <div key={cat.slug} style={{ marginBottom: 24 }}>
            <h3>
              <Link href={`/${cat.slug}`}>{cat.name}</Link>
            </h3>
            {cat.spots.length > 0 && (
              <ul>
                {cat.spots.map((spot) => (
                  <li key={spot.slug}>
                    <Link href={`/${cat.slug}/${spot.slug}`}>
                      {spot.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* 目的別 */}
      <div className="content-card card-padding article-body">

        <h2>目的・テーマ別</h2>
        <ul>
          {tags.map((tag) => (
            <li key={tag.slug}>
              <Link href={`/tag/${tag.slug}`}>{tag.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ブログ記事 */}
      {articles.length > 0 && (
        <div className="content-card card-padding article-body">
          <h2>ブログ記事</h2>
          <ul>
            <li><Link href="/article">記事一覧</Link></li>
            {articles.map((article) => (
              <li key={article.slug}>
                <Link href={`/article/${article.slug}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Luminar Neo */}
      <div className="content-card card-padding article-body">
        <h2>Luminar Neo 関連記事</h2>
        <ul>
          <li><Link href="/luminar">Luminar Neo トップ</Link></li>
          {luminarPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/luminar/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* その他 */}
      <div className="content-card card-padding article-body">

        <h2>その他</h2>
        <ul>
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/search">スポット検索</Link></li>
          <li><Link href="/recommend">おすすめの夜景スポット</Link></li>
          <li><Link href="/time-lapse">タイムラプス映像集</Link></li>
          <li><Link href="/wallpaper">スマホ壁紙</Link></li>
          <li><Link href="/simulator">日の出・日の入り方角シミュレーター</Link></li>
          <li><Link href="/about">運営者情報</Link></li>
          <li><Link href="/contact">お問い合わせ</Link></li>
          <li><Link href="/guidelines">コンテンツ制作ポリシー</Link></li>
          <li><Link href="/caution">利用規約</Link></li>
          <li><Link href="/links">リンク集</Link></li>
          <li><Link href="/privacy-policy">プライバシーポリシー</Link></li>
        </ul>
      </div>
    </ArticleLayout>
    </>
  );
}
