import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { ALL_LOCALE_SLUGS, LOCALE_LABELS } from "@/lib/types";

export const metadata: Metadata = {
  title: "リンク集 | 東京夜景ナビ",
  description:
    "東京夜景ナビと相互リンクしていただいているサイトや、おすすめのサイトをご紹介します。",
};

const LINKS = [
  {
    name: "夜景INFO 国内最大級の夜景ドライブ＆デート情報サイト",
    href: "https://www.nightview.info/",
    description: "夜景写真家の岩崎さんが運営されている夜景サイトです。2,500ヶ所以上の夜景スポットを紹介されています。",
  },
  {
    name: "大阪 at Night ブログ -大阪の夜景と都市風景探訪-",
    href: "https://blog.osakanight.com/",
    description: "大阪の夜景・都市開発情報を発信されている写真ブログです。",
  },
  {
    name: "使い道のない風景",
    href: "https://useless-landscape.com/",
    description: "夜景スポットやレトロな街並みなどを紹介されているブログです。",
  },
  {
    name: "Nighthiking＆Nightview",
    href: "https://nighthiking.jp/",
    description: "日本全国のナイトハイキングコースを紹介されているサイトです。",
  },
  {
    name: "気ままな飛行機人のプログ",
    href: "https://tanukineko.net/",
    description: "国内外の旅行記を数多く掲載されているブログです。",
  },
  {
    name: "「旅行リンク Travel Page®」海外と国内の旅行・観光情報",
    href: "https://www.ryokolink.com/",
    description: "旅行会社、航空会社/格安航空 LCC・JR/鉄道・バス、旅館やホテルなど旅行に関する情報をまとめているサイトです。",
  },
  {
    name: "Airランキング",
    href: "https://airw.net/art/rank.cgi?id=Night10",
    description: "様々な人気ブログ、Webサイトが登録されているランキングサイト。",
  },
  {
    name: "Urawa Night View",
    href: "https://www.sirius.gr.jp/~satoh/yakei/index.html",
    description: "日本全国の夜景・夕景写真を紹介されているwebサイトです。",
  },
];

export default function LinksPage() {
  return (
    <>
      <LanguageSwitcher currentLocale="ja" categorySlug="links" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout
      title="リンク集"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      }
      summary="当サイトと相互リンクしていただいているサイトや、おすすめのサイトをご紹介します。"
      breadcrumb={[
        
        { label: "リンク集" },
      ]}
    >
      <div className="content-card card-padding article-body">
        <table className="article-table">
          <thead>
            <tr>
              <th>サイト名</th>
              <th>概要</th>
            </tr>
          </thead>
          <tbody>
            {LINKS.map((link) => (
              <tr key={link.href}>
                <td>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </td>
                <td>{link.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ArticleLayout>
    </>
  );
}
