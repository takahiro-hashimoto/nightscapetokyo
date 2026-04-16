import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { LOCALE_LABELS, ALL_LOCALE_SLUGS, SITE_URL, OG_LOCALE_MAP, ALL_OG_LOCALES, buildAreaHreflangAlternates } from "@/lib/types";
import type { CategoryPageProps as Props } from "@/lib/types";
import { LINKS_LABELS } from "@/lib/i18n-static-pages";

export async function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const locale = category;
  const l = LINKS_LABELS[locale] ?? LINKS_LABELS.en;
  const ogLocale = OG_LOCALE_MAP[locale] ?? "en_US";
  const canonicalUrl = `${SITE_URL}/${locale}/links`;
  return {
    title: l.title,
    description: l.description,
    openGraph: {
      title: l.title,
      description: l.description,
      url: canonicalUrl,
      locale: ogLocale,
      alternateLocale: ALL_OG_LOCALES.filter((ol) => ol !== ogLocale),
    },
    alternates: {
      canonical: canonicalUrl,
      languages: buildAreaHreflangAlternates(SITE_URL, "links", ALL_LOCALE_SLUGS),
    },
  };
}

const LINKS = [
  { name: "夜景INFO 国内最大級の夜景ドライブ＆デート情報サイト", href: "https://www.nightview.info/", description: "夜景写真家の岩崎さんが運営されている夜景サイトです。2,500ヶ所以上の夜景スポットを紹介されています。" },
  { name: "大阪 at Night ブログ -大阪の夜景と都市風景探訪-", href: "https://blog.osakanight.com/", description: "大阪の夜景・都市開発情報を発信されている写真ブログです。" },
  { name: "使い道のない風景", href: "https://useless-landscape.com/", description: "夜景スポットやレトロな街並みなどを紹介されているブログです。" },
  { name: "Nighthiking＆Nightview", href: "https://nighthiking.jp/", description: "日本全国のナイトハイキングコースを紹介されているサイトです。" },
  { name: "気ままな飛行機人のプログ", href: "https://tanukineko.net/", description: "国内外の旅行記を数多く掲載されているブログです。" },
  { name: "「旅行リンク Travel Page®」海外と国内の旅行・観光情報", href: "https://www.ryokolink.com/", description: "旅行会社、航空会社/格安航空 LCC・JR/鉄道・バス、旅館やホテルなど旅行に関する情報をまとめているサイトです。" },
  { name: "Airランキング", href: "https://airw.net/art/rank.cgi?id=Night10", description: "様々な人気ブログ、Webサイトが登録されているランキングサイト。" },
  { name: "Urawa Night View", href: "https://www.sirius.gr.jp/~satoh/yakei/index.html", description: "日本全国の夜景・夕景写真を紹介されているwebサイトです。" },
];

export default async function I18nLinksPage({ params }: Props) {
  const { category } = await params;
  const locale = category;
  const l = LINKS_LABELS[locale] ?? LINKS_LABELS.en;

  return (
    <>
      <LanguageSwitcher currentLocale={locale} categorySlug="links" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout locale={locale}
        title={l.title}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        }
        summary={l.summary}
        breadcrumb={[{ label: l.title }]}
      >
        <div className="content-card card-padding article-body">
          <table className="article-table">
            <thead>
              <tr>
                <th>{l.thSite}</th>
                <th>{l.thDesc}</th>
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
