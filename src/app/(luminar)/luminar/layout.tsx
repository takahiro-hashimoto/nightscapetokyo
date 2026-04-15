import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import LuminarHeader from '@/components/luminar/LuminarHeader'
import LuminarFooter from '@/components/luminar/LuminarFooter'
import { LUMINAR_SITE_NAME, LUMINAR_SITE_DESCRIPTION, LUMINAR_SITE_URL } from '@/lib/luminar/config'
import './luminar.css'

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
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function LuminarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={notoSansJP.variable}
      style={{ fontFamily: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {/* Font Awesome */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        crossOrigin="anonymous"
      />
      <LuminarHeader />
      {children}
      <LuminarFooter />
      {/* WP article inline JS polyfill */}
      <script dangerouslySetInnerHTML={{ __html: `
        window.lngCopyCoupon = async function(btn) {
          var codeEl = btn.querySelector('.m-cta-mini__code');
          var code = codeEl ? codeEl.textContent.trim() : '';
          if (!code) return;
          try { await navigator.clipboard.writeText(code); } catch(e) {}
          var orig = btn.innerHTML;
          btn.innerHTML = '<span style="padding:0 1rem">コピーしました！</span>';
          btn.disabled = true;
          setTimeout(function() { btn.innerHTML = orig; btn.disabled = false; }, 2000);
        };
      ` }} />
    </div>
  )
}
