import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import Link from "@/components/common/AppLink";
import { SITE_URL, LOCALE_OG_ALTERNATES, ALL_LOCALE_SLUGS, LOCALE_LABELS, buildAreaHreflangAlternates } from "@/lib/types";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "東京夜景ナビへのお問い合わせページです。写真・映像の購入や撮影のご依頼等はこちらのフォームからお願いいたします。",
  // Next.js は openGraph を浅くマージ（＝丸ごと置換）するため、定義しないと
  // (ja)/layout.tsx のトップページ用 og:title / og:url をそのまま継承してしまう
  openGraph: {
    type: "website",
    title: "お問い合わせ | 東京夜景ナビ",
    description: "東京夜景ナビへのお問い合わせページです。写真・映像の購入や撮影のご依頼等はこちらのフォームからお願いいたします。",
    url: `${SITE_URL}/contact/`,
    siteName: "東京夜景ナビ",
    locale: "ja_JP",
    alternateLocale: LOCALE_OG_ALTERNATES as string[],
    images: [
      {
        url: `${SITE_URL}/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "お問い合わせ | 東京夜景ナビ",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/contact/`,
    languages: buildAreaHreflangAlternates(SITE_URL, "contact", ALL_LOCALE_SLUGS),
  },
};

export default function ContactPage() {
  return (
    <>
      <LanguageSwitcher currentLocale="ja" categorySlug="contact" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout
      title="お問い合わせ"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      }
      summary={[
        "写真・映像の購入や撮影のご依頼等のお問い合わせは下記のフォームからお願いいたします。",
        "基本的に24時間以内にお返事させていただきます！",
      ]}
      breadcrumb={[
        
        { label: "お問い合わせ" },
      ]}
    >
      <p style={{ marginTop: 16 }}>
        ホテル・施設・不動産・メディアなど、法人・団体からの撮影のご依頼は{" "}
        <Link href="/photography/">夜景・眺望撮影のご依頼ページ</Link>
        {" "}もあわせてご覧ください。料金の目安や実績をまとめています。
      </p>
      <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdAJJ6IAIGZwsfc61lO2bz1UsvEsfBSGYhYSJfX1P-uyxYW_g/viewform?embedded=true"
          width="100%"
          height="923"
          style={{ border: 0, maxWidth: 640 }}
          title="お問い合わせフォーム"
          // 923px の埋め込みフォームが初期表示をブロックしないよう遅延読み込みする
          loading="lazy"
        >
          読み込んでいます…
        </iframe>
      </div>
    </ArticleLayout>
    </>
  );
}
