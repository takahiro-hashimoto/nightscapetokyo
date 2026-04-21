/**
 * fetch-luminar-posts.mjs
 *
 * WordPress REST API から luminar の記事を全件取得し、
 * src/data/luminar/posts/ に JSON ファイルとして保存する。
 *
 * 使い方:
 *   node scripts/fetch-luminar-posts.mjs
 *
 * 出力:
 *   src/data/luminar/posts/{slug}.json  ← 記事ごと（フルコンテンツ）
 *   src/data/luminar/posts/_index.json  ← 一覧用サマリー（全記事）
 */

import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '../src/data/luminar/posts')

const WP_API = 'https://nightscape.tokyo/luminar/wp-json/wp/v2'
const R2_BASE = 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar'
const WP_UPLOADS_RE = /https:\/\/nightscape\.tokyo\/luminar\/wp-content\/uploads\/\d{4}\/\d{2}\//g

function toR2Url(url) {
  return url.replace(/https:\/\/nightscape\.tokyo\/luminar\/wp-content\/uploads\/\d{4}\/\d{2}\//, `${R2_BASE}/`)
}

function replaceWpUploadsInHtml(html) {
  return html.replace(WP_UPLOADS_RE, `${R2_BASE}/`)
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, '').trim()
}

async function fetchAllPosts() {
  let page = 1
  const all = []

  while (true) {
    console.log(`  → ページ ${page} を取得中...`)
    const res = await fetch(`${WP_API}/posts?per_page=100&page=${page}&_embed`)
    if (!res.ok) break

    const posts = await res.json()
    if (!posts.length) break

    all.push(...posts)

    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') ?? '1')
    if (page >= totalPages) break
    page++
  }

  return all
}

function extractFeaturedImage(post) {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  if (!media) return null
  return {
    src: toR2Url(media.source_url),
    alt: media.alt_text || post.title.rendered,
    width: media.media_details?.width ?? 1200,
    height: media.media_details?.height ?? 675,
  }
}

function extractCategories(post) {
  return (post._embedded?.['wp:term']?.[0] ?? []).map((t) => ({ id: t.id, name: t.name, slug: t.slug }))
}

function extractTags(post) {
  return (post._embedded?.['wp:term']?.[1] ?? []).map((t) => ({ id: t.id, name: t.name, slug: t.slug }))
}

function normalizePost(post) {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    description: stripHtml(post.excerpt.rendered),
    publishedAt: post.date,
    updatedAt: post.modified,
    content: replaceWpUploadsInHtml(post.content.rendered),
    featuredImage: extractFeaturedImage(post),
    categories: extractCategories(post),
    tags: extractTags(post),
  }
}

function normalizePostSummary(post) {
  const normalized = normalizePost(post)
  const { content, ...summary } = normalized
  return summary
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true })

  console.log('WordPress API から記事を取得中...')
  const rawPosts = await fetchAllPosts()
  console.log(`${rawPosts.length} 件取得完了\n`)

  const index = []

  for (const raw of rawPosts) {
    const post = normalizePost(raw)
    const summary = normalizePostSummary(raw)

    // 記事ごとの JSON
    const filePath = join(OUT_DIR, `${post.slug}.json`)
    writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf8')
    console.log(`✅ ${post.slug}.json`)

    index.push(summary)
  }

  // インデックス（一覧用）
  const indexPath = join(OUT_DIR, '_index.json')
  writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8')
  console.log(`\n📄 _index.json (${index.length} 件)`)
  console.log(`\n✨ 完了: ${OUT_DIR}`)
}

main().catch((e) => { console.error(e); process.exit(1) })
