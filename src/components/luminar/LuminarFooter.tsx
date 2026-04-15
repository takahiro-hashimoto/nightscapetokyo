import Link from 'next/link'
import { LUMINAR_SITE_NAME, FOOTER_NAV_ITEMS } from '@/lib/luminar/config'

export default function LuminarFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="l-footer" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="l-container">
        <div className="l-footer__inner">
          <div className="l-footer__brand" itemScope itemType="https://schema.org/Organization">
            <Link href="/luminar/" className="m-logo" itemProp="url">
              <span itemProp="name">
                LUMINAR NEO <span className="m-logo__accent">GUIDE</span>
              </span>
            </Link>
            <p className="l-footer__tagline" itemProp="description">Luminar Neo専門の情報サイト</p>
          </div>

          <nav className="l-footer__nav" aria-label="フッターメニュー">
            <ul className="l-footer__menu">
              {FOOTER_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span itemProp="name">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="l-footer__copyright">
          <small>
            &copy;{' '}
            <time dateTime={String(year)}>{year}</time>{' '}
            {LUMINAR_SITE_NAME}.
          </small>
        </div>
      </div>
    </footer>
  )
}
