import type { Metadata } from "next";
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
      images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: { title, description },
    alternates: {
      canonical: SITE_URL,
      languages: buildHomeHreflangAlternates(SITE_URL, ALL_LOCALE_SLUGS),
    },
  };
}

export const revalidate = 3600;

export default async function Home() {
  const sunData = calculateSunData(new Date(), 35.6895, 139.6917);
  const labels = getComponentLabels("ja");

  const ARTICLE_SLUGS = [
    "how-to-night-photo",
    "my-photographic-equipment",
    "camera-beginner-item",
  ];

  const [spots, hotels, areas, purposeTags, spotCount, recentSpots, mapSpots, articles] = await Promise.all([
    getTopSpots(12).catch(() => []),
    getHotelSpots(4).catch(() => []),
    getAreas().catch(() => []),
    getPurposeTags().catch(() => []),
    getTotalSpotCount().catch(() => 200),
    getRecentSpots(10).catch(() => []),
    getSpotsForMap().catch(() => []),
    getArticlesBySlugs(ARTICLE_SLUGS).catch(() => []),
  ]);

  const faqItems = labels.homePage.faq.items;
  const currentYear = new Date().getFullYear();

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
      <HomeMapSection spots={mapSpots} categories={areas.map((a) => ({ slug: a.slug, name: a.name }))} />
      <HomeArticles articles={articles} />
      <HomeNewsAndVideos recentSpots={recentSpots} />
      <HomeFaq faqs={faqItems} sunsetTime={sunData.sunsetTime} labels={labels.homePage.faq} />
      <HomeAuthor />
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
