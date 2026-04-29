import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getArticlesBySlugs } from "@/lib/supabase/queries";
import { LUMINAR_ARTICLE } from "@/lib/featured-articles";

const ARTICLE_SLUGS = [
  "how-to-camera-setting",
  "airos-skyview",
  "my-photographic-equipment",
  "camera-beginner-item",
  "how-to-night-photo",
];

export default async function HomeArticles() {
  const fetched = await getArticlesBySlugs(ARTICLE_SLUGS).catch(() => []);
  const articles = [LUMINAR_ARTICLE, ...fetched];

  if (articles.length === 0) return null;

  return (
    <section className="home-section" id="articles">
      <div className="home-container">
        <h2 className="home-section-heading">夜景関連のおすすめ記事</h2>
        <p className="home-section-desc">
          夜景を綺麗に撮影する方法や愛用の機材などをご紹介します。
        </p>
        <div className="area-spot-grid">
          {articles.map((article) => (
            <article key={article.id} className="spot-card">
              <Link href={article.href ?? `/article/${article.slug}/`} className="spot-card-link">
                <div className="spot-card-image">
                  {article.thumbnail && (
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) calc(50vw - 28px), 320px"
                    />
                  )}
                </div>
                <div className="spot-card-body">
                  <h3 className="spot-card-title">{article.title}</h3>
                  {article.description && (
                    <p className="spot-card-lead">{article.description}</p>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="home-section-more">
          <Link href="/article/" className="home-more-link">
            記事一覧を見る
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
