import type { Metadata } from 'next'
import Script from 'next/script'
import { LUMINAR_SITE_NAME, LUMINAR_SITE_DESCRIPTION, LUMINAR_SITE_URL } from '@/lib/luminar/config'

const FA_CSS_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'

const OG_IMAGE = 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/main-after.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(LUMINAR_SITE_URL),
  title: {
    default: `${LUMINAR_SITE_NAME} | ${LUMINAR_SITE_DESCRIPTION}`,
    template: `%s | ${LUMINAR_SITE_NAME}`,
  },
  description: LUMINAR_SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: LUMINAR_SITE_NAME,
    locale: 'ja_JP',
    images: [{ url: OG_IMAGE, width: 880, height: 495 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
}

export default function LuminarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* luminar.css — /luminar/ 配下のみに限定して読み込む */}
      <link rel="stylesheet" href="/css/luminar.css" precedence="default" />
      {/* Font Awesome — luminar コンテンツ HTML のアイコンに必要 */}
      <Script id="fa-css" strategy="lazyOnload">{`(function(){var l=document.createElement('link');l.rel='stylesheet';l.crossOrigin='anonymous';l.href='${FA_CSS_URL}';document.head.appendChild(l)})();`}</Script>
      {/* Twitter widget — React 19 が <head> に hoist・dedupe してくれる */}
      <script src="https://platform.twitter.com/widgets.js" async />
      {children}
    </>
  )
}
