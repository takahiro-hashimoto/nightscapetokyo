import { Fragment } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getArticleBySlug, getAllArticleSlugs, getRelatedArticles, getSpotImagesBySlugs } from "@/lib/supabase/queries";
import { SITE_URL } from "@/lib/types";
import { sanitizeHtml, toR2Url, replaceWpImagesInHtml, embedYoutubeUrls, injectH3SpotLinks, convertPostLinks, convertShortcodes, wrapTables } from "@/lib/sanitize";
import { prefetchAmazonProducts, type AmazonProduct } from "@/lib/amazon";
import { prefetchOgpData, type OgpData } from "@/lib/ogp";
import { ARTICLE_SPOT_LINKS } from "@/lib/article-spot-links";

function articleThumbnail(url: string | null | undefined): string | null {
  return url ? toR2Url(url) : null;
}
import { buildToc } from "@/lib/toc";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SpotShare from "@/components/spot/SpotShare";
import TwitterEmbed from "@/components/luminar/TwitterEmbed";
import HomeAuthorCard from "@/components/common/HomeAuthorCard";
import TimeLapseCalculatorScript from "@/components/article/TimeLapseCalculatorScript";
import AdSenseUnit from "@/components/ads/AdSenseUnit";
import { ADS } from "@/lib/ads";
import LuminarBridge from "@/components/luminar/LuminarBridge";
import { shouldSkipStaticGenerationForPreview } from "@/lib/vercel";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  if (shouldSkipStaticGenerationForPreview()) {
    return [];
  }

  const slugs = await getAllArticleSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const canonicalUrl = `${SITE_URL}/article/${slug}/`;
  return {
    title: article.title,
    description: article.description ?? undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ja: canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description ?? undefined,
      url: canonicalUrl,
      siteName: "nightscape.tokyo",
      locale: "ja_JP",
      publishedTime: article.published_at ?? article.created_at,
      modifiedTime: article.updated_at,
      images: article.thumbnail
        ? [{ url: articleThumbnail(article.thumbnail)!, width: 1200, height: 630, alt: article.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description ?? undefined,
      images: article.thumbnail ? [articleThumbnail(article.thumbnail)!] : undefined,
    },
  };
}

export const revalidate = 86400;
export const fetchCache = "force-cache";

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const publishedDate = article.published_at ?? article.created_at;
  const thumbnail = article.thumbnail ? toR2Url(article.thumbnail) : null;
  const rawContent = article.content ?? "";
  const hasTwitterEmbed = rawContent.includes("twitter-tweet");
  const h3SpotLinks = ARTICLE_SPOT_LINKS[slug] ?? {};

  // スポットスラグを収集（同期）
  const allSpotSlugs = [
    ...new Set(
      Object.values(h3SpotLinks)
        .flat()
        .map((s) => s.href.split("/").filter(Boolean).pop() ?? "")
        .filter(Boolean)
    ),
  ];

  const ogpTimeout = new Promise<Map<string, OgpData>>((resolve) =>
    setTimeout(() => resolve(new Map()), 300)
  );
  const amazonTimeout = new Promise<Map<string, AmazonProduct>>((resolve) =>
    setTimeout(() => resolve(new Map()), 500)
  );

  // 関連記事・スポット画像・Amazon・OGP を並列取得
  const [related, spotImages, amazonProducts, ogpData] = await Promise.all([
    getRelatedArticles(slug, 6),
    allSpotSlugs.length > 0 ? getSpotImagesBySlugs(allSpotSlugs) : Promise.resolve({} as Record<string, string>),
    Promise.race([prefetchAmazonProducts(rawContent), amazonTimeout]),
    Promise.race([prefetchOgpData(rawContent), ogpTimeout]),
  ]);

  // h3SpotLinks に画像を付与
  const enrichedH3SpotLinks = Object.fromEntries(
    Object.entries(h3SpotLinks).map(([h3Text, links]) => [
      h3Text,
      links.map((link) => ({
        ...link,
        image: spotImages[link.href.split("/").filter(Boolean).pop() ?? ""] ?? "",
      })),
    ])
  );

  const { html: processedContent, toc } = buildToc(
    injectH3SpotLinks(
      wrapTables(
        embedYoutubeUrls(
          replaceWpImagesInHtml(
            sanitizeHtml(
              convertPostLinks(
                convertShortcodes(rawContent, amazonProducts, ogpData),
                ogpData
              )
            )
          )
        )
      ),
      enrichedH3SpotLinks
    )
  );

  // リード文（最初のh2より前）と本文（h2以降）に分割
  const firstH2Index = processedContent.search(/<h2[\s>]/i);
  const leadHtml = firstH2Index > 0 ? processedContent.slice(0, firstH2Index) : "";
  const bodyHtml = firstH2Index > 0 ? processedContent.slice(firstH2Index) : processedContent;

  return (
    <>
      {hasTwitterEmbed && <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />}
      {hasTwitterEmbed && <TwitterEmbed />}
      {slug === "create-timelapse" && <TimeLapseCalculatorScript />}
      <div className="l-article-body">
        <div className="l-article-container">
          <Breadcrumb
            locale={null}
            items={[
              { label: "記事一覧", href: "/article/" },
              { label: article.title, href: `/article/${slug}/` },
            ]}
          />

          <article itemScope itemType="https://schema.org/Article">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  headline: article.title,
                  ...(article.description && { description: article.description }),
                  url: `${SITE_URL}/article/${slug}/`,
                  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/article/${slug}/` },
                  ...(thumbnail && {
                    image: [{ "@type": "ImageObject", url: thumbnail, width: 1200, height: 630 }],
                  }),
                  datePublished: publishedDate,
                  dateModified: article.updated_at,
                  inLanguage: "ja",
                  author: { "@type": "Person", name: "タカヒロ", url: `${SITE_URL}/about/` },
                  publisher: {
                    "@type": "Organization",
                    name: "nightscape.tokyo",
                    url: SITE_URL,
                    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
                  },
                }),
              }}
            />

            {/* ① firstVisual: ヒーロー画像 + ヘッダー + リード文 */}
            <div className="firstVisual">
              {thumbnail && (
                <figure className="firstVisual-image">
                  <Image
                    src={thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 800px"
                    itemProp="image"
                  />
                </figure>
              )}
              <header className="firstVisual-header">
                <h1 className="firstVisual-title" itemProp="name">{article.title}</h1>
                <div className="firstVisual-meta">
                  <time className="firstVisual-date" dateTime={article.updated_at} itemProp="dateModified">
                    最終更新: {new Date(article.updated_at).toLocaleDateString("ja-JP", {
                      year: "numeric", month: "2-digit", day: "2-digit",
                    })}
                  </time>
                  <span className="firstVisual-badge">一部PRを含みます</span>
                </div>
              </header>
              {leadHtml && (
                <div
                  className="firstVisual-body article-body"
                  dangerouslySetInnerHTML={{ __html: leadHtml }}
                />
              )}
            </div>

            {/* ② 目次カード */}
            {toc.length >= 3 && (
              <nav className="toc content-card card-padding" aria-label="目次">
                <p className="toc-title">タップできる目次</p>
                <ol className="toc-list">
                  {(() => {
                    const groups: { parent: (typeof toc)[0]; children: (typeof toc)[0][] }[] = [];
                    let current: { parent: (typeof toc)[0]; children: (typeof toc)[0][] } | null = null;
                    for (const item of toc) {
                      if (item.level === 2) {
                        current = { parent: item, children: [] };
                        groups.push(current);
                      } else if (item.level === 3 && current) {
                        current.children.push(item);
                      }
                    }
                    return groups.map(({ parent, children }) => (
                      <li key={parent.id}>
                        <a href={`#${parent.id}`}>{parent.text}</a>
                        {children.length > 0 && (
                          <ol className="toc-sublist">
                            {children.map((child) => (
                              <li key={child.id}>
                                <a href={`#${child.id}`}>{child.text}</a>
                              </li>
                            ))}
                          </ol>
                        )}
                      </li>
                    ));
                  })()}
                </ol>
              </nav>
            )}

            {/* ③ 本文カード（h2セクションごとに1カード） */}
            {bodyHtml && bodyHtml.split(/(?=<h2[\s>])/i).filter(s => s.trim()).map((section, i) => (
              <Fragment key={i}>
                <section
                  className="content-card card-padding article-body"
                  dangerouslySetInnerHTML={{ __html: section }}
                />
                {/* H2セクション2つ目の直後にインアーティクル広告を挿入 */}
                {i === 1 && (
                  <AdSenseUnit {...ADS.ARTICLE_IN} className="my-4" />
                )}
              </Fragment>
            ))}
          </article>

          {/* Luminar への橋渡し */}
          <LuminarBridge />

          {/* 関連記事の直前：Multiplex 広告 */}
          <AdSenseUnit {...ADS.ARTICLE_MULTI} className="my-6" />

          {related.length > 0 && (
            <aside className="related-articles" style={{ contentVisibility: "auto", containIntrinsicSize: "0 400px" }}>
              <h2 className="related-articles-heading">関連記事</h2>
              <ul className="article-list-grid">
                {related.map((r) => (
                  <li key={r.id}>
                    <Link href={`/article/${r.slug}/`} className="article-card">
                      {r.thumbnail && (
                        <div className="article-card-thumb">
                          <Image
                            src={r.thumbnail}
                            alt={r.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 240px"
                          />
                        </div>
                      )}
                      <div className="article-card-body">
                        <h3 className="article-card-title">{r.title}</h3>
                        {r.description && (
                          <p className="article-card-desc">{r.description}</p>
                        )}
                        <time className="article-card-date" dateTime={r.published_at ?? r.created_at}>
                          {new Date(r.published_at ?? r.created_at).toLocaleDateString("ja-JP", {
                            year: "numeric", month: "2-digit", day: "2-digit",
                          })}
                        </time>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
          <HomeAuthorCard authorLabel="この記事の著者" />
        </div>
      </div>
      <SpotShare
        url={`${SITE_URL}/article/${slug}/`}
        title={article.title}
        labels={{ heading: "この記事が役に立ったらシェアしてください", x: "ポスト", line: "LINE", hatena: "はてブ", copy: "URLコピー", copied: "コピーしました" }}
      />
    </>
  );
}
