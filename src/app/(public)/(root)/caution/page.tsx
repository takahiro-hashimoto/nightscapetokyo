import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { ALL_LOCALE_SLUGS, LOCALE_LABELS } from "@/lib/types";

export const metadata: Metadata = {
  title: "利用規約 | 東京夜景ナビ",
  description:
    "東京夜景ナビの利用規約です。著作権・免責事項・Cookie・広告・アクセス解析・リンクに関するルールを記載しています。",
};

export default function CautionPage() {
  return (
    <>
      <LanguageSwitcher currentLocale="ja" categorySlug="caution" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout
      title="利用規約"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      }
      summary="東京夜景ナビをご利用いただくにあたり、著作権・免責事項・Cookie・リンク等に関するルールを記載しています。"
      breadcrumb={[
        
        { label: "利用規約" },
      ]}
    >
      <div className="content-card card-padding article-body">
        <h2>著作権について</h2>
        <p>
          東京夜景ナビ（以下、当サイトとする）で掲載している写真、画像、文章等の全てに著作権があります。無断転載、複製、加工することは一切お断りします。
        </p>
        <p>
          当サイトに掲載されている写真はフリー素材ではございません。写真のご利用は原則有償となります。写真の商用利用・ご購入等に関しては<Link href="/contact">お問い合わせフォーム</Link>よりご連絡ください。
        </p>
        <p>
          無料配布しているスマホの壁紙をWEBサイトやSNSにて公開したり配布するのはご遠慮ください。
        </p>

        <h2>免責事項</h2>
        <p>
          当サイトに掲載されている夜景スポットなどの情報は出来る限り最新で正確な情報を掲載する様心掛けていますが、営業時間・料金等の確実な情報は公式サイト等で確認を取られることをお勧めします。
        </p>
        <p>
          万が一、当サイトの情報によって事故・トラブル等が発生しても一切の責任は負いませんので、予めご了承願います。
        </p>

        <h2>Cookieの使用について</h2>
        <p>当サイトでは、広告配信やアクセス解析のためにCookieを使用しています。</p>
        <p>
          Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。
        </p>
        <p>Cookieの使用を望まない場合、ブラウザからCookieを無効に設定できます。</p>

        <h2>広告について</h2>
        <p>
          当サイトでは、第三者配信の広告サービス（Googleアドセンス、A8.net）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
        </p>
        <p>
          クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
        </p>
        <p>
          Cookieを無効にする方法やGoogleアドセンスに関する詳細は「<a href="https://policies.google.com/technologies/ads?gl=jp" target="_blank" rel="noopener noreferrer">広告 – ポリシーと規約 – Google</a>」をご確認ください。
        </p>

        <h2>アクセス解析ツールについて</h2>
        <p>
          当サイトでは、アクセス解析ツールGoogleアナリティクスを使用し、Cookieの情報からアクセスを収集、記録、分析しています。
        </p>
        <p>
          Googleアナリティクスの情報には、特定の個人を識別する情報は含まれず、<a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer">Google社のプライバシーポリシー</a>により管理されています。
        </p>
        <p>
          アクセス情報の収集は、Cookieを無効にすることで拒否することができます。Google社の情報収集の仕組みについては、<a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener noreferrer">こちら</a>をご覧ください。
        </p>

        <h2>リンクについて</h2>
        <p>
          当サイトは基本的に全ページがリンクフリーとなっておりますが、フレームセットの中での表示はご遠慮ください。
        </p>
        <p>
          トップページ以外のURLはサイト運営の都合上、予告無く変更することがあります。あらかじめご了承ください。
        </p>
      </div>
    </ArticleLayout>
    </>
  );
}
