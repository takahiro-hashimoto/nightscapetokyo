import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { ALL_LOCALE_SLUGS, LOCALE_LABELS } from "@/lib/types";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 東京夜景ナビ",
  description:
    "東京夜景ナビのプライバシーポリシーです。個人情報の利用目的、Cookie・広告配信・アクセス解析ツールの取り扱い、免責事項について記載しています。",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LanguageSwitcher currentLocale="ja" categorySlug="privacy-policy" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout
      title="プライバシーポリシー"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      }
      summary="東京夜景ナビにおけるプライバシーポリシー・免責事項を次の通り記載します。"
      breadcrumb={[
        
        { label: "プライバシーポリシー" },
      ]}
    >
      <div className="content-card card-padding article-body">
        <h2>個人情報の利用目的について</h2>
        <p>当サイトは、取得したユーザー情報を以下に定める目的のために利用します。</p>
        <ul>
          <li>Webサービスの提供</li>
          <li>コンテンツ・サービス品質の改善</li>
          <li>トラフィック測定および行動測定</li>
          <li>広告の配信および成果測定</li>
          <li>当サイトに関するご案内</li>
          <li>お問い合わせへの対応</li>
          <li>違反事項への対応</li>
        </ul>
        <p>
          なお、取得したユーザー情報は上記目的のみに利用させていただくものであり、情報を提供いただいた際の目的以外では利用いたしません。
        </p>

        <h2>個人情報の第三者開示について</h2>
        <p>
          当サイトが取得したユーザー情報のうち個人情報は、以下に該当する場合を除いてユーザーの同意なく第三者に開示することはありません。
        </p>
        <ul>
          <li>外部サービスとの連携または、外部サービスを利用した認証にあたり、当該外部サービス運営会社にユーザー情報を提供する場合</li>
          <li>国の機関もしくは地方公共団体またはその委託者が法令の定める事務を遂行することに対して、当サイトが協力する必要がある場合</li>
          <li>その他法令で認められる場合</li>
        </ul>

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

        <h2>免責事項</h2>
        <p>当サイトは、掲載内容によって生じた損害に対する一切の責任を負いません。</p>
        <p>
          各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。
        </p>
        <p>
          また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。
        </p>

        <h2>著作権</h2>
        <p>当サイトに掲載されている文章・画像の著作権は、運営者に帰属しています。</p>
        <p>法的に認められている引用の範囲を超えて、無断で転載することを禁止します。</p>

        <h2>プライバシーポリシーの変更</h2>
        <p>
          当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直して改善に努めます。
        </p>
        <p>なお、修正された最新のプライバシーポリシーは常に本ページにて開示されます。</p>
        <ul>
          <li>制定：2023年01月01日</li>
        </ul>
        <p>
          東京夜景ナビ<br />
          運営責任者：タカヒロ
        </p>
      </div>
    </ArticleLayout>
    </>
  );
}
