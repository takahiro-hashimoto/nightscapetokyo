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
import { getTopSpots, getHotelSpots, getAreas, getPurposeTags, getTotalSpotCount, getRecentSpots } from "@/lib/supabase/queries";
import HomeNewsAndVideos from "@/components/home/HomeNewsAndVideos";
import { calculateSunData } from "@/lib/sun-calc";
import { getComponentLabels } from "@/lib/i18n-labels";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_LABELS, buildHomeHreflangAlternates } from "@/lib/types";

export async function generateMetadata(): Promise<Metadata> {
  const hp = getComponentLabels("ja").homePage;
  const title = hp.seoTitle(new Date().getFullYear());
  const description = hp.seoDescription;
  return {
    title: { absolute: title },
    description,
    openGraph: { title, description },
    twitter: { title, description },
    alternates: {
      languages: buildHomeHreflangAlternates(SITE_URL, ALL_LOCALE_SLUGS),
    },
  };
}

export const revalidate = 3600;

export default async function Home() {
  const sunData = calculateSunData(new Date(), 35.6895, 139.6917);
  const labels = getComponentLabels("ja");

  const [spots, hotels, areas, purposeTags, spotCount, recentSpots] = await Promise.all([
    getTopSpots(8).catch(() => []),
    getHotelSpots(4).catch(() => []),
    getAreas().catch(() => []),
    getPurposeTags().catch(() => []),
    getTotalSpotCount().catch(() => 200),
    getRecentSpots(10).catch(() => []),
  ]);

  return (
    <>
      <LanguageSwitcher
        currentLocale={null}
        categorySlug=""
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <HeroSection labels={labels.homePage.hero} spotCount={spotCount} />
      <HomePrBanner />
      <SpotRanking spots={spots} />
      <HotelRanking hotels={hotels} />
      <PurposeSearch tags={purposeTags} />
      <AreaSearch areas={areas} />
      <HomeNewsAndVideos recentSpots={recentSpots} />
      <HomeFaq faqs={labels.homePage.faq.items} sunsetTime={sunData.sunsetTime} labels={labels.homePage.faq} />
      <HomeAuthor />
    </>
  );
}
