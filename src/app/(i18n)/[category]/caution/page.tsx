import type { Metadata } from "next";
import Link from "@/components/common/AppLink";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { LOCALE_LABELS, ALL_LOCALE_SLUGS, SITE_URL, OG_LOCALE_MAP, ALL_OG_LOCALES, SITE_NAMES, buildAreaHreflangAlternates } from "@/lib/types";
import type { CategoryPageProps as Props } from "@/lib/types";
import { CAUTION_LABELS } from "@/lib/i18n-static-pages";

export const dynamic = "force-static";

// ロケール以外の [category]（エリアslug等）で 200 を返さないようにする。
// これが無いと /chiyoda/caution/ 等が英語版を自己canonical付きで返し重複コンテンツになる
export const dynamicParams = false;

export async function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const locale = category;
  const l = CAUTION_LABELS[locale] ?? CAUTION_LABELS.en;
  const ogLocale = OG_LOCALE_MAP[locale] ?? "en_US";
  const canonicalUrl = `${SITE_URL}/${locale}/caution/`;
  return {
    title: l.title,
    description: l.description,
    // Next.js は openGraph / twitter を浅くマージ（＝丸ごと置換）するため、
    // layout 側の既定値には頼らず type / siteName / twitter をここで明示する
    openGraph: {
      type: "website",
      title: l.title,
      description: l.description,
      url: canonicalUrl,
      siteName: SITE_NAMES[locale] ?? SITE_NAMES.en,
      locale: ogLocale,
      alternateLocale: ALL_OG_LOCALES.filter((ol) => ol !== ogLocale),
      images: [{ url: `${SITE_URL}/hero.jpg`, width: 1200, height: 630, alt: l.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: l.title,
      description: l.description,
      images: [`${SITE_URL}/hero.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: buildAreaHreflangAlternates(SITE_URL, "caution", ALL_LOCALE_SLUGS),
    },
  };
}

export default async function I18nCautionPage({ params }: Props) {
  const { category } = await params;
  const locale = category;
  const l = CAUTION_LABELS[locale] ?? CAUTION_LABELS.en;

  return (
    <>
      <LanguageSwitcher currentLocale={locale} categorySlug="caution" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout locale={locale}
        title={l.title}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
        }
        summary={l.summary}
        breadcrumb={[{ label: l.title }]}
      >
        <div className="content-card card-padding article-body">
          {l.sections.map((sec) => (
            <div key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.texts.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
              {sec.contactLink && (
                <p>
                  <Link href={`/${locale}/contact`}>{sec.contactLink}</Link>
                </p>
              )}
            </div>
          ))}
        </div>
      </ArticleLayout>
    </>
  );
}
