import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/lib/supabase/queries";
import { SITE_URL } from "@/lib/types";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "記事一覧",
  description: "nightscape.tokyoの記事一覧です。夜景撮影のコツや東京夜景スポットに関するコラムを掲載しています。",
  alternates: { canonical: `${SITE_URL}/article/` },
  openGraph: {
    title: "記事一覧 | nightscape.tokyo",
    description: "夜景撮影のコツや東京夜景スポットに関するコラムを掲載しています。",
    url: `${SITE_URL}/article/`,
  },
};

export const revalidate = 3600;

export default async function ArticleListPage() {
  const articles = await getArticles();

  return (
    <>
      <div className="l-article-body">
        <div className="l-article-container">
          <Breadcrumb items={[{ label: "記事一覧" }]} />
          <header className="content-card card-padding">
            <h1 className="area-page-heading">記事一覧</h1>
            <p className="area-page-lead">夜景撮影のコツや東京夜景スポットに関するコラムを掲載しています。実際に現地で撮影した経験をもとに、デートや旅行・撮影スポット選びにお役立ていただける情報をお届けします。</p>
          </header>

          {articles.length === 0 ? (
            <p style={{ color: "#64748b" }}>記事はまだありません。</p>
          ) : (
            <div className="area-spot-grid">
              {articles.map((article) => (
                <article key={article.id} className="spot-card">
                  <Link href={`/article/${article.slug}/`} className="spot-card-link">
                    <div className="spot-card-image">
                      {article.thumbnail && (
                        <Image
                          src={article.thumbnail}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                        />
                      )}
                    </div>
                    <div className="spot-card-body">
                      <div className="spot-card-meta">
                        <time
                          className="article-card-date"
                          dateTime={article.published_at ?? article.created_at}
                        >
                          {new Date(article.published_at ?? article.created_at).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                        </time>
                      </div>
                      <h2 className="spot-card-title">{article.title}</h2>
                      {article.description && (
                        <p className="spot-card-lead">{article.description}</p>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer locale={null} />
    </>
  );
}
