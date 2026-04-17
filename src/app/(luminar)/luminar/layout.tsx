import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Script from 'next/script'
import LuminarHeader from '@/components/luminar/LuminarHeader'
import LuminarFooter from '@/components/luminar/LuminarFooter'
import { LUMINAR_SITE_NAME, LUMINAR_SITE_DESCRIPTION, LUMINAR_SITE_URL } from '@/lib/luminar/config'
import './luminar.css'

const FA_CSS_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'

const OG_IMAGE = 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/main-after.jpg'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

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
    <div
      className={notoSansJP.variable}
      style={{ fontFamily: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {/* Font Awesome — lazyOnload で非ブロッキング読み込み */}
      <Script id="fa-css" strategy="lazyOnload">{`(function(){var l=document.createElement('link');l.rel='stylesheet';l.crossOrigin='anonymous';l.href='${FA_CSS_URL}';document.head.appendChild(l)})();`}</Script>
      <LuminarHeader />
      {children}
      <LuminarFooter />
    </div>
  )
}
