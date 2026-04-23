import { getAllPostsSummary } from '@/lib/luminar/articles-meta'
import { LUMINAR_SITE_URL } from '@/lib/luminar/config'

const NOINDEX_SLUGS = new Set(['privacy-policy', 'about'])

type SitemapEntry = {
  loc: string
  lastmod?: string
  changefreq: string
  priority: number
}

function toXml(entries: SitemapEntry[]): string {
  const urlNodes = entries.map((e) => {
    const parts = [`    <loc>${e.loc}</loc>`]
    if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`)
    parts.push(`    <changefreq>${e.changefreq}</changefreq>`)
    parts.push(`    <priority>${e.priority}</priority>`)
    return `  <url>\n${parts.join('\n')}\n  </url>`
  })

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urlNodes,
    `</urlset>`,
  ].join('\n')
}

export async function GET() {
  const posts = await getAllPostsSummary()

  const entries: SitemapEntry[] = [
    {
      loc: `${LUMINAR_SITE_URL}/`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
  ]

  for (const post of posts) {
    if (NOINDEX_SLUGS.has(post.slug)) continue
    entries.push({
      loc: `${LUMINAR_SITE_URL}/${post.slug}/`,
      lastmod: new Date(post.updatedAt).toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    })
  }

  return new Response(toXml(entries), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
