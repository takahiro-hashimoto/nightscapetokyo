/**
 * WordPress REST API client for nightscape.tokyo/luminar/
 * All fetches happen at build time (static generation).
 */

const WP_API = 'https://nightscape.tokyo/luminar/wp-json/wp/v2'
const R2_BASE = 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar'
const WP_UPLOADS = 'https://nightscape.tokyo/luminar/wp-content/uploads'

/**
 * Replace WP upload URLs with R2 URLs.
 * https://nightscape.tokyo/luminar/wp-content/uploads/YYYY/MM/file.jpg
 * → https://pub-xxx.r2.dev/luminar/file.jpg
 */
export function toR2Url(url: string): string {
  return url.replace(/https:\/\/nightscape\.tokyo\/luminar\/wp-content\/uploads\/\d{4}\/\d{2}\//, `${R2_BASE}/`)
}

/** Replace all WP upload URLs in an HTML string, and sanitize WP-specific JS */
export function replaceWpUploadsInHtml(html: string): string {
  return html
    // R2 URL migration
    .replace(
      new RegExp(`${WP_UPLOADS.replace(/\//g, '\\/')}\\/(\\d{4})\\/(\\d{2})\\/`, 'g'),
      `${R2_BASE}/`,
    )
    // lngCopyCoupon onclick is handled by LuminarCouponScript (window.lngCopyCoupon)
}

// ── Types ──────────────────────────────────────────────────────────────────

export type WpPost = {
  id: number
  slug: string
  date: string
  modified: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details: { width: number; height: number }
    }>
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>
  }
}

export type WpPostSummary = {
  id: number
  slug: string
  date: string
  modified: string
  title: { rendered: string }
  excerpt: { rendered: string }
  featured_media: number
  _embedded?: WpPost['_embedded']
}

// ── Helpers ────────────────────────────────────────────────────────────────

function extractFeaturedImage(post: WpPost | WpPostSummary) {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  if (!media) return undefined
  return {
    src: toR2Url(media.source_url),
    alt: media.alt_text || post.title.rendered,
    width: media.media_details?.width ?? 1200,
    height: media.media_details?.height ?? 675,
  }
}

function extractCategories(post: WpPost | WpPostSummary): string[] {
  return (post._embedded?.['wp:term']?.[0] ?? []).map((t) => t.name)
}

function extractTags(post: WpPost | WpPostSummary): string[] {
  return (post._embedded?.['wp:term']?.[1] ?? []).map((t) => t.name)
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim()
}

// ── API calls ──────────────────────────────────────────────────────────────

/**
 * Fetch all post slugs (for generateStaticParams).
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const res = await fetch(
    `${WP_API}/posts?per_page=100&_fields=slug`,
    { next: { revalidate: false } },
  )
  if (!res.ok) return []
  const posts: Array<{ slug: string }> = await res.json()
  return posts.map((p) => p.slug)
}

/**
 * Fetch a single post by slug with full content + embeds.
 */
export async function getPostBySlug(slug: string): Promise<WpPost | null> {
  const res = await fetch(
    `${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed&per_page=1`,
    { next: { revalidate: false } },
  )
  if (!res.ok) return null
  const posts: WpPost[] = await res.json()
  return posts[0] ?? null
}

/**
 * Fetch all posts summary (for top page article grid).
 */
export async function getAllPostsSummary(): Promise<WpPostSummary[]> {
  const res = await fetch(
    `${WP_API}/posts?per_page=100&_embed`,
    { next: { revalidate: false } },
  )
  if (!res.ok) return []
  return res.json()
}

/**
 * Fetch related posts by category, excluding the given post id.
 */
export async function getRelatedPosts(
  categoryIds: number[],
  excludeId: number,
  limit = 4,
): Promise<WpPostSummary[]> {
  if (categoryIds.length === 0) return []
  const catParam = categoryIds.join(',')
  const res = await fetch(
    `${WP_API}/posts?categories=${catParam}&exclude=${excludeId}&per_page=${limit}&_embed`,
    { next: { revalidate: false } },
  )
  if (!res.ok) return []
  return res.json()
}

/**
 * Get category IDs from a post's embedded terms.
 */
export function getCategoryIds(post: WpPost): number[] {
  return (post._embedded?.['wp:term']?.[0] ?? []).map((t) => t.id)
}

// ── Normalizers ────────────────────────────────────────────────────────────

/** Normalize a WpPost to the shape used in article page */
export function normalizePost(post: WpPost) {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    description: stripHtml(post.excerpt.rendered),
    publishedAt: post.date,
    updatedAt: post.modified,
    content: replaceWpUploadsInHtml(post.content.rendered),
    featuredImage: extractFeaturedImage(post),
    tags: extractTags(post),
    categories: extractCategories(post),
  }
}

/** Normalize a WpPostSummary to the shape used in article cards */
export function normalizePostSummary(post: WpPostSummary) {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    description: stripHtml(post.excerpt.rendered),
    publishedAt: post.date,
    updatedAt: post.modified,
    featuredImage: extractFeaturedImage(post),
    category: extractCategories(post)[0],
  }
}
