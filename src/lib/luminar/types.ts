export type LuminarArticle = {
  slug: string
  title: string
  description: string
  publishedAt: string   // ISO 8601
  updatedAt: string     // ISO 8601
  featuredImage?: {
    src: string
    alt: string
    width: number
    height: number
  }
  content: string       // HTML string
  tags?: string[]
  relatedSlugs?: string[]
  category?: string
}
