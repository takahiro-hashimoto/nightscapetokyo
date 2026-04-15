import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { LOCALE_LABELS, ALL_LOCALE_SLUGS } from "@/lib/types";
import type { CategoryPageProps as Props } from "@/lib/types";
import { GUIDELINES_LABELS } from "@/lib/i18n-static-pages";

export async function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const locale = category;
  const l = GUIDELINES_LABELS[locale] ?? GUIDELINES_LABELS.en;
  return { title: l.title, description: l.description };
}

export default async function I18nGuidelinesPage({ params }: Props) {
  const { category } = await params;
  const locale = category;
  const l = GUIDELINES_LABELS[locale] ?? GUIDELINES_LABELS.en;

  return (
    <>
      <LanguageSwitcher currentLocale={locale} categorySlug="guidelines" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout locale={locale}
        title={l.title}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M13 21h8" />
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
          </svg>
        }
        summary={l.summary}
        breadcrumb={[{ label: l.title }]}
      >
        <div className="content-card card-padding article-body">
          {l.sections.map((sec) => (
            <div key={sec.heading}>
              <h2>{sec.heading}</h2>
              <p>{sec.text}</p>
            </div>
          ))}
        </div>
      </ArticleLayout>
    </>
  );
}
