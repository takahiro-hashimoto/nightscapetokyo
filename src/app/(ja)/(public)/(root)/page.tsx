import type { Metadata } from "next";
import { Suspense } from "react";
import HeroSection from "@/components/home/HeroSection";
import SpotRanking from "@/components/home/SpotRanking";
import HotelRanking from "@/components/home/HotelRanking";
import PurposeSearch from "@/components/home/PurposeSearch";
import AreaSearch from "@/components/home/AreaSearch";
import HomeFaq from "@/components/home/HomeFaq";
import HomeAuthor from "@/components/home/HomeAuthor";
import HomePrBanner from "@/components/home/HomePrBanner";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { getTopSpots, getHotelSpots, getAreas, getPurposeTags, getTotalSpotCount, getRecentSpots, getSpotsForMap, getArticlesBySlugs } from "@/lib/supabase/queries";
import HomeNewsAndVideos from "@/components/home/HomeNewsAndVideos";
import HomeMapSection from "@/components/home/HomeMapSection";
import HomeArticles from "@/components/home/HomeArticles";
import { calculateSunData } from "@/lib/sun-calc";
import { getComponentLabels } from "@/lib/i18n-labels";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_LABELS, buildHomeHreflangAlternates } from "@/lib/types";
import { buildFaqJsonLd, buildItemListJsonLd } from "@/lib/json-ld";
import SpotShare from "@/components/spot/SpotShare";
import { LUMINAR_ARTICLE } from "@/lib/featured-articles";

export async function generateMetadata(): Promise<Metadata> {
  const hp = getComponentLabels("ja").homePage;
  const title = hp.seoTitle(new Date().getFullYear());
  const description = hp.seoDescription;
  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/`,
      locale: "ja_JP",
      alternateLocale: ["en_US", "ko_KR", "zh_TW", "zh_CN"],
      images: [{ url: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/cta-mv.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/cta-mv.jpg"] },
    alternates: {
      canonical: `${SITE_URL}/`,
      languages: buildHomeHreflangAlternates(SITE_URL, ALL_LOCALE_SLUGS),
    },
  };
}

export const revalidate = 86400;
export const fetchCache = "force-cache";

export default async function Home() {
  const CURRENT_YEAR = new Date().getFullYear();
  const sunData = calculateSunData(new Date(), 35.6895, 139.6917);
  const labels = getComponentLabels("ja");

  const ARTICLE_SLUGS = [
    "how-to-camera-setting",
    "airos-skyview",
    "my-photographic-equipment",
    "camera-beginner-item",
    "how-to-night-photo",
  ];

  const [spots, hotels, areas, purposeTags, spotCount, recentSpots, mapSpots, fetchedArticles] = await Promise.all([
    getTopSpots(12).catch(() => []),
    getHotelSpots(4).catch(() => []),
    getAreas().catch(() => []),
    getPurposeTags().catch(() => []),
    getTotalSpotCount().catch(() => 200),
    getRecentSpots(10).catch(() => []),
    getSpotsForMap().catch(() => []),
    getArticlesBySlugs(ARTICLE_SLUGS).catch(() => []),
  ]);

  const articles = [LUMINAR_ARTICLE, ...fetchedArticles];
  const mapSeoSpots = mapSpots.map((spot) => ({
    id: spot.id,
    slug: spot.slug,
    name: spot.name,
    categorySlug: spot.categorySlug,
    latitude: spot.latitude,
    longitude: spot.longitude,
  }));

  const faqItems = labels.homePage.faq.items;
  const currentYear = CURRENT_YEAR;

  return (
    <>
      <LanguageSwitcher
        currentLocale={null}
        categorySlug=""
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <HeroSection labels={labels.homePage.hero} spotCount={spotCount} />
      <SpotRanking spots={spots} prBanner={<HomePrBanner />} />
      <HotelRanking hotels={hotels} />
      <PurposeSearch tags={purposeTags} />
      <AreaSearch areas={areas} />
      <HomeMapSection spots={mapSeoSpots} categories={areas.map((a) => ({ slug: a.slug, name: a.name }))} initialSpots={mapSpots} />
      <Suspense fallback={null}>
        <HomeArticles articles={articles} />
      </Suspense>
      <Suspense fallback={null}>
        <HomeNewsAndVideos recentSpots={recentSpots} />
      </Suspense>
      <Suspense fallback={null}>
        <HomeFaq faqs={faqItems} sunsetTime={sunData.sunsetTime} labels={labels.homePage.faq} />
      </Suspense>
      <HomeAuthor />
      <SpotShare
        url={SITE_URL}
        title="東京夜景ナビ｜東京都内の夜景スポット情報サイト"
        locale="ja"
        labels={labels.share}
        className="home-section"
      />
      {spots.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildItemListJsonLd(spots, {
                name: `東京の夜景スポット一覧【${currentYear}年最新】`,
              })
            ),
          }}
        />
      )}
      {faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildFaqJsonLd(faqItems, { sunsetTime: sunData.sunsetTime })
            ),
          }}
        />
      )}
    </>
  );
}
