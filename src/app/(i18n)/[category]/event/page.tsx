import type { Metadata } from "next";
import Link from "next/link";
import { getSpotsByCategoryTranslated } from "@/lib/supabase/queries";
import { ALL_LOCALE_SLUGS, SITE_URL, OG_LOCALE_MAP, ALL_OG_LOCALES, buildAreaHreflangAlternates } from "@/lib/types";
import type { CategoryPageProps as Props } from "@/lib/types";
import AreaSpotList from "@/components/area/AreaSpotList";
import Breadcrumb from "@/components/layout/Breadcrumb";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { LOCALE_LABELS } from "@/lib/types";

type EventLabels = {
  title: string;
  breadcrumb: string;
  description: string;
  lead: string;
  backLink: string;
  empty: string;
};

const EVENT_LABELS: Record<string, EventLabels> = {
  en: {
    title: "Tokyo Illumination & Night Event Spots",
    breadcrumb: "Tokyo Night Event Spots",
    description:
      "A curated list of seasonal night events in Tokyo — illuminations, cherry blossom light-ups, and more.",
    lead: "A curated list of seasonal night events in Tokyo — illuminations, cherry blossom light-ups, and more.",
    backLink: "Tokyo Night View Guide",
    empty: "No event spots available yet.",
  },
  ko: {
    title: "도쿄 일루미네이션・야간 이벤트 스폿",
    breadcrumb: "도쿄 야간 이벤트 스폿",
    description:
      "도쿄에서 열리는 일루미네이션, 벚꽃 라이트업 등 기간 한정 야간 이벤트를 정리했습니다.",
    lead: "도쿄에서 열리는 일루미네이션, 벚꽃 라이트업 등 기간 한정 야간 이벤트를 정리했습니다.",
    backLink: "도쿄 야경 가이드",
    empty: "아직 이벤트 정보가 없습니다.",
  },
  tw: {
    title: "東京燈飾・夜間活動景點",
    breadcrumb: "東京夜間活動景點",
    description:
      "整理了東京舉辦的燈飾活動、夜櫻點燈等期間限定夜間活動。",
    lead: "整理了東京舉辦的燈飾活動、夜櫻點燈等期間限定夜間活動。",
    backLink: "東京夜景導覽",
    empty: "目前尚無活動資訊。",
  },
  cn: {
    title: "东京灯饰・夜间活动景点",
    breadcrumb: "东京夜间活动景点",
    description:
      "整理了东京举办的灯饰活动、夜樱点灯等期间限定夜间活动。",
    lead: "整理了东京举办的灯饰活动、夜樱点灯等期间限定夜间活动。",
    backLink: "东京夜景导航",
    empty: "暂无活动信息。",
  },
};

/* ─── Static params ─── */
export function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((lang) => ({ category: lang }));
}

/* ─── Metadata ─── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: locale } = await params;
  const labels = EVENT_LABELS[locale];
  if (!labels) return {};
  const ogLocale = OG_LOCALE_MAP[locale] ?? "en_US";
  const canonicalUrl = `${SITE_URL}/${locale}/event/`;
  return {
    title: labels.title,
    description: labels.description,
    alternates: {
      canonical: canonicalUrl,
      languages: buildAreaHreflangAlternates(SITE_URL, "event", ALL_LOCALE_SLUGS),
    },
    openGraph: {
      type: "website",
      title: labels.title,
      description: labels.description,
      url: canonicalUrl,
      locale: ogLocale,
      alternateLocale: ALL_OG_LOCALES.filter((ol) => ol !== ogLocale),
    },
    twitter: {
      card: "summary_large_image",
      title: labels.title,
      description: labels.description,
    },
  };
}

export const revalidate = 86400;
export const fetchCache = "force-cache";

/* ─── Page ─── */
export default async function EventPageI18n({ params }: Props) {
  const { category: locale } = await params;
  const labels = EVENT_LABELS[locale];
  if (!labels) return null;

  const spots = await getSpotsByCategoryTranslated("event", locale).catch(() => []);

  return (
    <>
      <LanguageSwitcher
        currentLocale={locale}
        categorySlug="event"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <div className="l-article-body">
        <div className="l-article-container">
          <Breadcrumb items={[{ label: labels.breadcrumb }]} />
          <div className="firstVisual">
            <header className="firstVisual-header">
              <h1 className="firstVisual-title">{labels.title}</h1>
            </header>
            <div className="firstVisual-body">
              <p>{labels.lead}</p>
              <Link className="content-top-link" href={`/${locale}/`}>
                {labels.backLink}
              </Link>
            </div>
          </div>

          {spots.length === 0 ? (
            <p style={{ color: "#64748b" }}>{labels.empty}</p>
          ) : (
            <section aria-labelledby="event-list-heading">
              <h2 className="visually-hidden" id="event-list-heading">
                {labels.breadcrumb}
              </h2>
              <AreaSpotList spots={spots} localeSlug={locale} />
            </section>
          )}
        </div>
      </div>
    </>
  );
}
