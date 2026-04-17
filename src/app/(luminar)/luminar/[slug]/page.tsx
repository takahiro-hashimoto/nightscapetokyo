import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LuminarCtaSale from '@/components/luminar/LuminarCtaSale'
import LuminarAuthorBox from '@/components/luminar/LuminarAuthorBox'
import LuminarRelatedPosts from '@/components/luminar/LuminarRelatedPosts'
import LuminarSaleCurrentSection from '@/components/luminar/LuminarSaleCurrentSection'
import LuminarCouponScript from '@/components/luminar/LuminarCouponScript'
import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
  getCategoryIds,
  normalizePost,
  normalizePostSummary,
} from '@/lib/luminar/wp-api'
import { generateToc } from '@/lib/luminar/toc'
import { LUMINAR_SITE_NAME, LUMINAR_SITE_URL } from '@/lib/luminar/config'

type Props = {
  params: Promise<{ slug: string }>
}

/**
 * WP [luminar_sale] ショートコードのレンダリング出力を除去する。
 * 非セール時: <p class="m-no-sale">...</p> + 直後の <p>
 * セール時: <h2>【最新】現在開催中のLuminar Neoセール情報</h2> から次の <h2> まで
 */
function stripLuminarSaleShortcode(html: string): string {
  // 非セール時パターン
  let result = html.replace(/<p class="m-no-sale">[\s\S]*?<\/p>\s*(<p>[\s\S]*?<\/p>)?/g, '')
  // セール時パターン（見出しから次のセクションまで）
  result = result.replace(
    /<h2[^>]*>【最新】現在開催中のLuminar Neoセール情報<\/h2>[\s\S]*?(?=<h2|$)/,
    '',
  )
  return result
}

function formatDate(isoString: string): string {
  const d = new Date(isoString)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

const NOINDEX_SLUGS = ['privacy-policy', 'about']

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const raw = await getPostBySlug(slug)
  if (!raw) return {}

  const article = normalizePost(raw)
  const url = `${LUMINAR_SITE_URL}/${slug}/`

  return {
    title: article.title,
    description: article.description,
    ...(NOINDEX_SLUGS.includes(slug) && {
      robots: { index: false, follow: true },
    }),
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.description,
      ...(article.featuredImage && {
        images: [
          {
            url: article.featuredImage.src,
            width: article.featuredImage.width,
            height: article.featuredImage.height,
            alt: article.featuredImage.alt,
          },
        ],
      }),
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
    twitter: {
      images: article.featuredImage ? [article.featuredImage.src] : [],
    },
    alternates: { canonical: url },
  }
}

export default async function LuminarArticlePage({ params }: Props) {
  const { slug } = await params
  const raw = await getPostBySlug(slug)
  if (!raw) notFound()

  const article = normalizePost(raw)
  const articleUrl = `${LUMINAR_SITE_URL}/${slug}/`

  // 関連記事（同カテゴリ）
  const categoryIds = getCategoryIds(raw)
  const relatedRaw = await getRelatedPosts(categoryIds, raw.id, 4)
  const relatedArticles = relatedRaw.map(normalizePostSummary)

  // sale-and-coupon-info ページ: WP ショートコード出力を除去して動的コンポーネントに差し替え
  const isSalePage = slug === 'sale-and-coupon-info'
  const articleContent = isSalePage
    ? stripLuminarSaleShortcode(article.content)
    : article.content

  // TOC をコンテンツに注入
  const { contentWithIds } = generateToc(articleContent)

  return (
    <>
      {/* ── パンくず ── */}
      <nav className="m-breadcrumb" aria-label="パンくずリスト">
        <div className="l-container">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li
              itemScope
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
            >
              <Link href="/luminar/" itemProp="item">
                <span itemProp="name">{LUMINAR_SITE_NAME}</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <span className="m-breadcrumb__separator" aria-hidden="true">›</span>
            <li
              itemScope
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
            >
              <span
                className="m-breadcrumb__current"
                itemProp="name"
                dangerouslySetInnerHTML={{ __html: article.title }}
              />
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <main className="l-main" id="main" role="main">
        <div className="l-container">
          <div className="l-content">

            <article
              className="h-entry"
              itemScope
              itemType="https://schema.org/Article"
            >
              <meta itemProp="mainEntityOfPage" content={articleUrl} />

              {/* ── 記事ヘッダー ── */}
              <header className="m-article-header">
                <h1
                  className="m-article-header__title p-name"
                  itemProp="headline"
                  dangerouslySetInnerHTML={{ __html: article.title }}
                />

                <div className="m-article-header__meta">
                  <div className="m-article-header__dates">
                    <span className="m-article-header__date">
                      <i className="fa-regular fa-clock" aria-hidden="true"></i>
                      <time
                        className="dt-published"
                        dateTime={article.publishedAt}
                        itemProp="datePublished"
                      >
                        {formatDate(article.publishedAt)}
                      </time>
                    </span>
                    <span className="m-article-header__separator" aria-hidden="true">|</span>
                    <span className="m-article-header__date">
                      <i className="fa-solid fa-rotate" aria-hidden="true"></i>
                      <time
                        className="dt-updated"
                        dateTime={article.updatedAt}
                        itemProp="dateModified"
                      >
                        {formatDate(article.updatedAt)}
                      </time>
                    </span>
                  </div>
                  <span className="m-meta-pr">広告</span>
                </div>
              </header>

              {/* ── アイキャッチ画像 ── */}
              {article.featuredImage && (
                <figure
                  className="m-featured-image"
                  itemProp="image"
                  itemScope
                  itemType="https://schema.org/ImageObject"
                >
                  <Image
                    src={article.featuredImage.src}
                    alt={article.featuredImage.alt}
                    width={article.featuredImage.width}
                    height={article.featuredImage.height}
                    style={{ width: '100%', height: 'auto' }}
                    priority
                    itemProp="url"
                  />
                  <meta itemProp="width" content={String(article.featuredImage.width)} />
                  <meta itemProp="height" content={String(article.featuredImage.height)} />
                </figure>
              )}

              {/* ── 記事本文（TOC含む） ── */}
              {isSalePage && <LuminarSaleCurrentSection />}
              <div
                className="entry-content e-content"
                itemProp="articleBody"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />

              {/* ── タグ ── */}
              {article.tags.length > 0 && (
                <footer className="m-article-footer">
                  <div className="m-article-tags" role="list" aria-label="タグ">
                    {article.tags.map((tag) => (
                      <span className="m-article-tag" role="listitem" key={tag}>
                        <span aria-hidden="true">#</span>{tag}
                      </span>
                    ))}
                  </div>
                </footer>
              )}

              {/* ── CTA ── */}
              <LuminarCtaSale />

              {/* ── 著者 ── */}
              <LuminarAuthorBox />

            </article>

            {/* ── 関連記事 ── */}
            <LuminarRelatedPosts articles={relatedArticles} />

          </div>
        </div>
      </main>

      <LuminarCouponScript />

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.description,
            url: articleUrl,
            datePublished: article.publishedAt,
            dateModified: article.updatedAt,
            author: {
              '@type': 'Person',
              name: 'タカヒロ',
              url: 'https://nightscape.tokyo/',
            },
            publisher: {
              '@type': 'Organization',
              name: LUMINAR_SITE_NAME,
              url: `${LUMINAR_SITE_URL}/`,
            },
            ...(article.featuredImage && {
              image: {
                '@type': 'ImageObject',
                url: article.featuredImage.src,
                width: article.featuredImage.width,
                height: article.featuredImage.height,
              },
            }),
          }),
        }}
      />
    </>
  )
}
