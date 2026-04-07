import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import SetHtmlLang from "@/components/layout/SetHtmlLang";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { LOCALE_LABELS } from "@/lib/types";
import { ALL_LOCALE_SLUGS } from "@/lib/types";
import { CAUTION_LABELS } from "@/lib/i18n-static-pages";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const locale = category;
  const l = CAUTION_LABELS[locale] ?? CAUTION_LABELS.en;
  return { title: l.title, description: l.description };
}

export default async function I18nCautionPage({ params }: Props) {
  const { category } = await params;
  const locale = category;
  const l = CAUTION_LABELS[locale] ?? CAUTION_LABELS.en;

  return (
    <>
      <SetHtmlLang locale={locale === "tw" ? "zh-TW" : locale === "cn" ? "zh-CN" : locale} />
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
            </div>
          ))}
        </div>
      </ArticleLayout>
    </>
  );
}
