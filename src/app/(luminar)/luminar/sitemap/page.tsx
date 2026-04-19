import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPostsSummary, normalizePostSummary } from '@/lib/luminar/wp-api'
import { LUMINAR_SITE_NAME, LUMINAR_SITE_URL, FOOTER_NAV_ITEMS } from '@/lib/luminar/config'

export const metadata: Metadata = {
  title: 'サイトマップ',
  description: `${LUMINAR_SITE_NAME}に掲載している全記事・ページへのリンク一覧です。`,
  alternates: {
    canonical: `${LUMINAR_SITE_URL}/sitemap/`,
  },
}

export default async function LuminarSitemapPage() {
  const rawPosts = await getAllPostsSummary()
  const posts = rawPosts.map(normalizePostSummary)

  return (
    <>
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
              <span className="m-breadcrumb__current" itemProp="name">サイトマップ</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <main className="l-main" id="main" role="main">
        <div className="l-container">
          <div className="l-content" style={{ padding: '2.5rem 1.25rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>
              サイトマップ
            </h1>

            {/* 記事一覧 */}
            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--c-border, #e2e8f0)' }}>
                記事一覧
              </h2>
              <ul className="entry-content" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
                {posts.map((post) => (
                  <li key={post.slug} style={{ marginBottom: '0.5rem' }}>
                    <Link href={`/luminar/${post.slug}/`}>
                      <span dangerouslySetInnerHTML={{ __html: post.title }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* その他のページ */}
            <section>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--c-border, #e2e8f0)' }}>
                その他のページ
              </h2>
              <ul className="entry-content" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="/luminar/">トップページ</Link>
                </li>
                {FOOTER_NAV_ITEMS.map((item) => (
                  <li key={item.href} style={{ marginBottom: '0.5rem' }}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
