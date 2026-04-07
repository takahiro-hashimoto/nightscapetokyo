import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/layout/ArticleLayout";
import SetHtmlLang from "@/components/layout/SetHtmlLang";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { LOCALE_LABELS } from "@/lib/types";
import { ALL_LOCALE_SLUGS } from "@/lib/types";
import { CONTACT_LABELS } from "@/lib/i18n-static-pages";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const locale = category;
  const l = CONTACT_LABELS[locale] ?? CONTACT_LABELS.en;
  return { title: l.title, description: l.description };
}

export default async function I18nContactPage({ params }: Props) {
  const { category } = await params;
  const locale = category;
  const l = CONTACT_LABELS[locale] ?? CONTACT_LABELS.en;

  return (
    <>
      <SetHtmlLang locale={locale === "tw" ? "zh-TW" : locale === "cn" ? "zh-CN" : locale} />
      <LanguageSwitcher currentLocale={locale} categorySlug="contact" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout locale={locale}
        title={l.title}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        }
        summary={l.summary}
        breadcrumb={[{ label: l.title }]}
      >
        <div className="content-card card-padding article-body">
          <p>{l.intro}</p>
          <p>
            <Link href={`/${category}/about`}>{l.aboutLink}</Link>
          </p>
          <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdAJJ6IAIGZwsfc61lO2bz1UsvEsfBSGYhYSJfX1P-uyxYW_g/viewform?embedded=true"
              width="100%"
              height="923"
              style={{ border: 0, maxWidth: 640 }}
              title={l.title}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </ArticleLayout>
    </>
  );
}
