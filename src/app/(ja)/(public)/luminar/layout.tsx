import type { Metadata } from 'next'
import Script from 'next/script'
import { LUMINAR_SITE_NAME, LUMINAR_SITE_DESCRIPTION, LUMINAR_SITE_URL } from '@/lib/luminar/config'
import { AdsProvider } from '@/contexts/AdsContext'
import Header from '@/components/layout/HeaderWrapper'
import NonCriticalCss from '@/components/layout/NonCriticalCss'

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
      {/* luminar.css — 非ブロッキングで読み込み */}
      <NonCriticalCss href="/css/luminar.css?v=20260424" />
      {/* Font Awesome CDN への事前接続 */}
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
      {/* Font Awesome — luminar 配下全ページで使用するため layout で一括読み込み */}
      <Script id="fa-css" strategy="lazyOnload">{`(function(){var l=document.createElement('link');l.rel='stylesheet';l.crossOrigin='anonymous';l.href='${FA_CSS_URL}';document.head.appendChild(l)})();`}</Script>
      <AdsProvider showAds={false}>
        <Header locale={null} />
        {children}
      </AdsProvider>
    </>
  )
}
