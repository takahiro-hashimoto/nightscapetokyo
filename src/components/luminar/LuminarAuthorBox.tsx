import {
  AUTHOR_NAME,
  AUTHOR_ROLE,
  AUTHOR_BIO,
  AUTHOR_INITIAL,
  AUTHOR_TWITTER,
  AUTHOR_HOMEPAGE1,
  AUTHOR_HOMEPAGE2,
  AUTHOR_YOUTUBE,
} from '@/lib/luminar/config'

export default function LuminarAuthorBox() {
  return (
    <aside
      className="m-author"
      aria-labelledby="author-name"
      itemScope
      itemType="https://schema.org/Person"
      itemProp="author"
    >
      <div className="m-author__container">
        <div className="m-author__aside">
          <div className="m-author__img" aria-hidden="true">{AUTHOR_INITIAL}</div>
          <span className="m-author__job" itemProp="jobTitle">{AUTHOR_ROLE}</span>
        </div>

        <div className="m-author__body">
          <header className="m-author__header">
            <h3 className="m-author__name" id="author-name" itemProp="name">{AUTHOR_NAME}</h3>
            <div className="m-author__label">この記事を書いた人</div>
          </header>

          <p className="m-author__bio" itemProp="description">{AUTHOR_BIO}</p>

          <nav className="m-author__social" aria-label="著者のSNS">
            <a
              href={AUTHOR_HOMEPAGE1}
              target="_blank"
              rel="noopener noreferrer me"
              itemProp="sameAs"
            >
              <i className="fa-solid fa-globe" aria-hidden="true"></i>
              <span>東京夜景ナビ</span>
            </a>
            <a
              href={AUTHOR_HOMEPAGE2}
              target="_blank"
              rel="noopener noreferrer me"
              itemProp="sameAs"
            >
              <i className="fa-solid fa-globe" aria-hidden="true"></i>
              <span>デジスタ</span>
            </a>
            <a
              href={AUTHOR_TWITTER}
              target="_blank"
              rel="noopener noreferrer me"
              itemProp="sameAs"
            >
              <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
              <span>Twitter</span>
            </a>
            <a
              href={AUTHOR_YOUTUBE}
              target="_blank"
              rel="noopener noreferrer me"
              itemProp="sameAs"
            >
              <i className="fa-brands fa-youtube" aria-hidden="true"></i>
              <span>Youtube</span>
            </a>
          </nav>
        </div>
      </div>
    </aside>
  )
}
