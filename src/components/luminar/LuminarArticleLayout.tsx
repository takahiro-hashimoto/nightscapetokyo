import type { Metadata } from 'next'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import Breadcrumb from '@/components/layout/Breadcrumb'
import LuminarCtaSale from '@/components/luminar/LuminarCtaSale'
import LuminarRelatedPosts from '@/components/luminar/LuminarRelatedPosts'
import LuminarCouponScript from '@/components/luminar/LuminarCouponScript'
import LuminarComparisonScript from '@/components/luminar/LuminarComparisonScript'
import SpotShare from '@/components/spot/SpotShare'
import HomeAuthorCard from '@/components/common/HomeAuthorCard'
import { getRelatedPosts, normalizePostSummary } from '@/lib/luminar/articles-meta'
import type { TocItem } from '@/lib/luminar/toc'
import { LUMINAR_SITE_NAME, LUMINAR_SITE_URL } from '@/lib/luminar/config'

type Props = {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt: string
  featuredImage?: { src: string; alt: string; width: number; height: number }
  categoryIds?: number[]
  toc?: TocItem[]
  lead?: React.ReactNode
  children: React.ReactNode
}

function formatDate(isoString: string): string {
  const d = new Date(isoString)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

export function buildArticleMetadata({
  slug,
  title,
  description,
  publishedAt,
  updatedAt,
  featuredImage,
}: {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt: string
  featuredImage?: { src: string; alt: string; width: number; height: number }
}): Metadata {
  const url = `${LUMINAR_SITE_URL}/${slug}/`

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      ...(featuredImage && {
        images: [{
          url: featuredImage.src,
          width: featuredImage.width,
          height: featuredImage.height,
          alt: featuredImage.alt,
        }],
      }),
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
    },
    twitter: {
      images: featuredImage ? [featuredImage.src] : [],
    },
    alternates: { canonical: url },
  }
}

export default async function LuminarArticleLayout({
  slug,
  title,
  description,
  publishedAt,
  updatedAt,
  featuredImage,
  categoryIds = [],
  toc = [],
  lead,
  children,
}: Props) {
  const articleUrl = `${LUMINAR_SITE_URL}/${slug}/`

  const relatedRaw = await getRelatedPosts(categoryIds, slug, 6)
  const relatedArticles = relatedRaw.map((p) => {
    const s = normalizePostSummary(p)
    return { ...s, featuredImage: s.featuredImage ?? undefined }
  })

  return (
    <>
      <div className="l-article-body">
        <div className="l-article-container">

          {/* パンくず */}
          <Breadcrumb
            items={[
              { label: LUMINAR_SITE_NAME, href: '/luminar/' },
              { label: title },
            ]}
          />

          <article itemScope itemType="https://schema.org/Article">
            <meta itemProp="mainEntityOfPage" content={articleUrl} />
            <meta itemProp="datePublished" content={publishedAt} />

            {/* ① firstVisual: ヒーロー画像 + タイトル + メタ + リード文 */}
            <div className="firstVisual">
              {featuredImage && (
                <figure className="firstVisual-image" style={{ margin: 0 }}>
                  <Image
                    src={featuredImage.src}
                    alt={featuredImage.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 960px"
                    itemProp="image"
                  />
                </figure>
              )}
              <header className="firstVisual-header">
                <h1 className="firstVisual-title" itemProp="headline">
                  {title}
                </h1>
                <div className="firstVisual-meta">
                  <time
                    className="firstVisual-date"
                    dateTime={updatedAt}
                    itemProp="dateModified"
                  >
                    最終更新: {formatDate(updatedAt)}
                  </time>
                  <span className="firstVisual-badge">一部広告を含みます</span>
                </div>
              </header>
              {lead && (
                <div className="firstVisual-body article-body">
                  {lead}
                </div>
              )}
            </div>

            {/* ② 目次 */}
            {toc.length >= 3 && (
              <nav className="toc content-card card-padding" aria-label="目次">
                <p className="toc-title">タップできる目次</p>
                <ol className="toc-list">
                  {(() => {
                    const groups: { parent: TocItem; children: TocItem[] }[] = []
                    let current: { parent: TocItem; children: TocItem[] } | null = null
                    for (const item of toc) {
                      if (item.level === 2) {
                        current = { parent: item, children: [] }
                        groups.push(current)
                      } else if (item.level === 3 && current) {
                        current.children.push(item)
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
                    ))
                  })()}
                </ol>
              </nav>
            )}

            {/* ③ 本文 */}
            {children}

            {/* CTA */}
            <LuminarCtaSale />
          </article>

          {/* 関連記事 */}
          <LuminarRelatedPosts articles={relatedArticles} />

          {/* 運営者情報 */}
          <div className="mt-8">
            <HomeAuthorCard authorLabel="この記事の著者" />
          </div>

        </div>
      </div>

      <LuminarCouponScript />
      <LuminarComparisonScript />
      <SpotShare
        url={articleUrl}
        title={title}
        labels={{
          heading: 'この記事をシェアする',
          x: 'X (Twitter)',
          line: 'LINE',
          hatena: 'はてな',
          copy: 'URLをコピー',
          copied: 'コピーしました！',
        }}
        locale="ja"
      />
      <Footer locale={null} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description,
            url: articleUrl,
            datePublished: publishedAt,
            dateModified: updatedAt,
            author: { '@type': 'Person', name: 'タカヒロ', url: 'https://nightscape.tokyo/' },
            publisher: { '@type': 'Organization', name: LUMINAR_SITE_NAME, url: `${LUMINAR_SITE_URL}/` },
            ...(featuredImage && {
              image: {
                '@type': 'ImageObject',
                url: featuredImage.src,
                width: featuredImage.width,
                height: featuredImage.height,
              },
            }),
          }),
        }}
      />
    </>
  )
}
