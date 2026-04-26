import type { Metadata } from "next";
import Link from "next/link";
import { getSpotsByCategory } from "@/lib/supabase/queries";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_LABELS, buildAreaHreflangAlternates } from "@/lib/types";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AreaSpotList from "@/components/area/AreaSpotList";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";

export const metadata: Metadata = {
  title: "東京のイベント夜景スポット一覧",
  description: "東京で開催されるイルミネーションや夜桜のライトアップイベントなど、期間限定のイベントをまとめています。",
  alternates: {
    canonical: `${SITE_URL}/event/`,
    languages: buildAreaHreflangAlternates(SITE_URL, "event", ALL_LOCALE_SLUGS),
  },
  openGraph: {
    type: "website",
    title: "東京のイベント夜景スポット一覧 | nightscape.tokyo",
    description: "東京で開催されるイルミネーションや夜桜のライトアップイベントなど、期間限定のイベントをまとめています。",
    url: `${SITE_URL}/event/`,
    siteName: "nightscape.tokyo",
    locale: "ja_JP",
    images: [
      {
        url: "https://nightscape.tokyo/hero.jpg",
        width: 1200,
        height: 630,
        alt: "東京のイベント夜景スポット一覧 | nightscape.tokyo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京のイベント夜景スポット一覧 | nightscape.tokyo",
    description: "東京で開催されるイルミネーションや夜桜のライトアップイベントなど、期間限定のイベントをまとめています。",
    images: ["https://nightscape.tokyo/hero.jpg"],
  },
};

export const revalidate = 86400;
export const fetchCache = "force-cache";

export default async function EventListPage() {
  const spots = await getSpotsByCategory("event");

  return (
    <>
      <LanguageSwitcher
        currentLocale="ja"
        categorySlug="event"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <div className="l-article-body">
      <div className="l-article-container">
        <Breadcrumb items={[{ label: "イベント夜景スポット一覧" }]} />
        <div className="firstVisual">
          <header className="firstVisual-header">
            <h1 className="firstVisual-title">東京のイベント夜景スポット一覧</h1>
          </header>
          <div className="firstVisual-body">
            <p>東京で開催されるイルミネーションや夜桜のライトアップイベントなど、期間限定のイベントをまとめています。</p>
            <Link className="content-top-link" href="/">東京都内の夜景情報一覧</Link>
          </div>
        </div>

        {spots.length === 0 ? (
          <p style={{ color: "#64748b" }}>イベント情報はまだありません。</p>
        ) : (
          <section aria-labelledby="event-list-heading">
            <h2 className="visually-hidden" id="event-list-heading">イベント夜景スポット一覧</h2>
            <AreaSpotList spots={spots} />
          </section>
        )}
      </div>
    </div>
    </>
  );
}
