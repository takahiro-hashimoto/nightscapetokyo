import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { ALL_LOCALE_SLUGS, LOCALE_LABELS } from "@/lib/types";

export const metadata: Metadata = {
  title: "お問い合わせ | 東京夜景ナビ",
  description:
    "東京夜景ナビへのお問い合わせページです。写真・映像の購入や撮影のご依頼等はこちらのフォームからお願いいたします。",
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
      summary="写真・映像の購入や撮影のご依頼等のお問い合わせは下記のフォームからお願いいたします。"
      breadcrumb={[
        
        { label: "お問い合わせ" },
      ]}
    >
      <div className="content-card card-padding article-body">
        <p>
          基本的に24時間以内にお返事させていただきますので、お気軽にお問い合わせください！
        </p>
        <p>
          <Link href="/about">
            東京夜景ナビ 運営者情報と活動実績 →
          </Link>
        </p>

        <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdAJJ6IAIGZwsfc61lO2bz1UsvEsfBSGYhYSJfX1P-uyxYW_g/viewform?embedded=true"
            width="100%"
            height="923"
            style={{ border: 0, maxWidth: 640 }}
            title="お問い合わせフォーム"
          >
            読み込んでいます…
          </iframe>
        </div>
      </div>
    </ArticleLayout>
    </>
  );
}
