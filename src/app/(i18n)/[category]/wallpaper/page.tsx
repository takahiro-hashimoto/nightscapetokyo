import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import RecommendCta from "@/components/common/RecommendCta";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import SpotShare from "@/components/spot/SpotShare";
import { ALL_LOCALE_SLUGS, SITE_URL, LOCALE_LABELS, OG_LOCALE_MAP, ALL_OG_LOCALES, buildAreaHreflangAlternates } from "@/lib/types";
import type { CategoryPageProps as Props } from "@/lib/types";
import { getComponentLabels } from "@/lib/i18n-labels";
import { WALLPAPER_LABELS, WALLPAPERS } from "@/lib/wallpaper-content";

/* ─── Static params ─── */
export function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((lang) => ({ category: lang }));
}

/* ─── Metadata ─── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: locale } = await params;
  const labels = WALLPAPER_LABELS[locale];
  if (!labels) return {};
  const ogLocale = OG_LOCALE_MAP[locale] ?? "en_US";
  const canonicalUrl = `${SITE_URL}/${locale}/wallpaper/`;
  return {
    title: labels.title,
    description: labels.description,
    openGraph: {
      title: labels.title,
      description: labels.description,
      url: canonicalUrl,
      locale: ogLocale,
      alternateLocale: ALL_OG_LOCALES.filter((ol) => ol !== ogLocale),
    },
    alternates: {
      canonical: canonicalUrl,
      languages: buildAreaHreflangAlternates(SITE_URL, "wallpaper", ALL_LOCALE_SLUGS),
    },
  };
}

export const revalidate = 86400;

/* ─── Page ─── */
export default async function WallpaperPageI18n({ params }: Props) {
  const { category: locale } = await params;
  const labels = WALLPAPER_LABELS[locale];
  if (!labels) return null;
  const componentLabels = getComponentLabels(locale);

  return (
    <>
      <LanguageSwitcher
        currentLocale={locale}
        categorySlug="wallpaper"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <div className="l-article-body">
        <div className="l-article-container">
          <Breadcrumb items={[{ label: labels.title }]} locale={locale} />

          <article>
            <div className="firstVisual">
              <header className="firstVisual-header">
                <h1 className="firstVisual-title">{labels.title}</h1>
              </header>
              <div className="firstVisual-body">
                <p>{labels.lead1}</p>
                <p>{labels.lead2}</p>
                <Link href={`/${locale}`} className="content-top-link">
                  {labels.topLink}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4">
              {WALLPAPERS.map((w, i) => {
                const caption = w.captions[locale] ?? "";
                return (
                  <figure key={i} className="m-0">
                    <a href={w.src} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={w.thumb}
                        alt={caption}
                        width={473}
                        height={1024}
                        sizes="(max-width: 640px) 50vw, 25vw"
                        style={{ width: "100%", height: "auto", display: "block" }}
                        loading={i < 8 ? "eager" : "lazy"}
                      />
                    </a>
                    <figcaption className="text-xs text-center mt-1 text-gray-500">
                      {caption}
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            <RecommendCta locale={locale} />
          </article>
        </div>
      </div>
      <SpotShare
        url={`${SITE_URL}/${locale}/wallpaper/`}
        title={labels.title}
        locale={locale}
        labels={componentLabels.share}
      />
    </>
  );
}
