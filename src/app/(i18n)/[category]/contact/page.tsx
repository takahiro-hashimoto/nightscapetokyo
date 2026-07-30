import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { LOCALE_LABELS, ALL_LOCALE_SLUGS, SITE_URL, OG_LOCALE_MAP, ALL_OG_LOCALES, SITE_NAMES, buildAreaHreflangAlternates } from "@/lib/types";
import type { CategoryPageProps as Props } from "@/lib/types";
import { CONTACT_LABELS } from "@/lib/i18n-static-pages";

export const dynamic = "force-static";

// ロケール以外の [category]（エリアslug等）で 200 を返さないようにする。
// これが無いと /chiyoda/contact/ 等が英語版を自己canonical付きで返し重複コンテンツになる
export const dynamicParams = false;

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
