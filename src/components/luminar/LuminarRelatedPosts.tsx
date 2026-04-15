import Link from 'next/link'
import Image from 'next/image'

type ArticleCard = {
  slug: string
  title: string
  category?: string
  featuredImage?: {
    src: string
    alt: string
    width: number
    height: number
  }
}

type Props = {
  articles: ArticleCard[]
}

export default function LuminarRelatedPosts({ articles }: Props) {
  if (articles.length === 0) return null

  return (
    <aside className="m-related-posts" aria-labelledby="related-title">
      <h2 className="m-related-posts__title" id="related-title">関連記事</h2>

      <div className="l-grid-2">
        {articles.map((article) => (
          <article className="m-post-card" key={article.slug}>
            <Link href={`/luminar/${article.slug}/`}>
              <div className="m-post-card__thumb">
                {article.featuredImage ? (
                  <Image
                    src={article.featuredImage.src}
                    alt={article.featuredImage.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'var(--c-bg-sub)' }} />
                )}
              </div>
              <div className="m-post-card__content">
                {article.category && (
                  <span className="m-post-card__cat">{article.category}</span>
                )}
                <h3
                  className="m-post-card__title"
                  dangerouslySetInnerHTML={{ __html: article.title }}
                />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </aside>
  )
}
