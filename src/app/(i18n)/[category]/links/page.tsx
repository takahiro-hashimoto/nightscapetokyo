import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import SetHtmlLang from "@/components/layout/SetHtmlLang";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { LOCALE_LABELS } from "@/lib/types";
import { ALL_LOCALE_SLUGS } from "@/lib/types";
import { LINKS_LABELS } from "@/lib/i18n-static-pages";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const locale = category;
  const l = LINKS_LABELS[locale] ?? LINKS_LABELS.en;
  return { title: l.title, description: l.description };
}

const LINKS = [
  { name: "夜景INFO", href: "https://www.nightview.info/", description: "Japan's largest night view drive & date information site with 2,500+ spots." },
  { name: "大阪 at Night ブログ", href: "https://blog.osakanight.com/", description: "A photo blog covering Osaka's night views and urban development." },
  { name: "使い道のない風景", href: "https://useless-landscape.com/", description: "A blog introducing night view spots and retro townscapes." },
  { name: "Nighthiking＆Nightview", href: "https://nighthiking.jp/", description: "Introducing night hiking courses across Japan." },
  { name: "気ままな飛行機人のプログ", href: "https://tanukineko.net/", description: "A blog featuring numerous travel journals from Japan and abroad." },
  { name: "旅行リンク Travel Page®", href: "https://www.ryokolink.com/", description: "A comprehensive travel information directory." },
  { name: "Airランキング", href: "https://airw.net/art/rank.cgi?id=Night10", description: "A ranking site for popular blogs and websites." },
  { name: "Urawa Night View", href: "https://www.sirius.gr.jp/~satoh/yakei/index.html", description: "Night and sunset photos from across Japan." },
];

export default async function I18nLinksPage({ params }: Props) {
  const { category } = await params;
  const locale = category;
  const l = LINKS_LABELS[locale] ?? LINKS_LABELS.en;

  return (
    <>
      <SetHtmlLang locale={locale === "tw" ? "zh-TW" : locale === "cn" ? "zh-CN" : locale} />
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
