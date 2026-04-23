import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { LOCALE_LABELS, ALL_LOCALE_SLUGS, SITE_URL, OG_LOCALE_MAP, ALL_OG_LOCALES, buildAreaHreflangAlternates } from "@/lib/types";
import type { CategoryPageProps as Props } from "@/lib/types";
import { CONTACT_LABELS } from "@/lib/i18n-static-pages";

export async function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const locale = category;
  const l = CONTACT_LABELS[locale] ?? CONTACT_LABELS.en;
  const ogLocale = OG_LOCALE_MAP[locale] ?? "en_US";
  const canonicalUrl = `${SITE_URL}/${locale}/contact/`;
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
      languages: buildAreaHreflangAlternates(SITE_URL, "contact", ALL_LOCALE_SLUGS),
    },
  };
}

export default async function I18nContactPage({ params }: Props) {
  const { category } = await params;
  const locale = category;
  const l = CONTACT_LABELS[locale] ?? CONTACT_LABELS.en;

  return (
    <>
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
      </ArticleLayout>
    </>
  );
}
