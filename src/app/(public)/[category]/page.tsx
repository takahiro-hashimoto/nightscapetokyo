import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AreaSpotList from "@/components/area/AreaSpotList";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import HeroSection from "@/components/home/HeroSection";
import SpotRanking from "@/components/home/SpotRanking";
import HotelRanking from "@/components/home/HotelRanking";
import PurposeSearch from "@/components/home/PurposeSearch";
import AreaSearch from "@/components/home/AreaSearch";
import HomeFaq from "@/components/home/HomeFaq";
import {
  getSpotsByCategory,
  getCategoryBySlug,
  getAreas,
  getAvailableAreaLocales,
  getTopSpotsTranslated,
  getHotelSpotsTranslated,
  getAreasTranslated,
  getPurposeTags,
  getTotalSpotCount,
  getMapSpotsByCategory,
  getSpotsForMap,
} from "@/lib/supabase/queries";
import AreaMapLoader from "@/components/map/AreaMapLoader";
import RecommendCta from "@/components/common/RecommendCta";
import SpotShare from "@/components/spot/SpotShare";
import HomeAuthor from "@/components/home/HomeAuthor";
import HomeMapSection from "@/components/home/HomeMapSection";
import {
  SITE_URL,
  ALL_LOCALE_SLUGS,
  buildAreaHreflangAlternates,
  buildHomeHreflangAlternates,
  LOCALE_LABELS,
  LOCALE_SLUG_MAP,
  OG_LOCALE_MAP,
  ALL_OG_LOCALES,
} from "@/lib/types";
import type { SpotListItem } from "@/lib/types";
import { getComponentLabels } from "@/lib/i18n-labels";
import { calculateSunData } from "@/lib/sun-calc";
import { buildFaqJsonLd, buildItemListJsonLd, buildAreaItemListJsonLd, localeToLanguage } from "@/lib/json-ld";

type Props = {
  params: Promise<{ category: string }>;
};

/**
 * 検索ボリュームが多い特定エリアの詳細地名マッピング
 * h1・titleに括弧付きで表示する
 */
const AREA_SUB_NAMES: Record<string, string> = {
  minato: "六本木、虎ノ門、赤坂、新橋",
  koto: "豊洲、有明、東雲、新木場",
  chiyoda: "丸の内、有楽町、皇居、日比谷",
  chuo: "銀座、日本橋、晴海、築地",
  taito: "浅草、上野",
  sumida: "押上、吾妻橋、錦糸町",
};

/** カテゴリ名 + サブ地名付きの表示名を生成 */
function buildAreaDisplayName(slug: string, categoryName: string): string {
  const sub = AREA_SUB_NAMES[slug];
  return sub ? `${categoryName}（${sub}）` : categoryName;
}

/** エリアページの説明文を生成 */
function buildAreaDescription(areaName: string): string {
  return `東京都${areaName}のおすすめ夜景スポット情報（夜景が綺麗な場所）を紹介。各夜景スポットの詳細記事には実際に訪問した感想や写真を複数枚を掲載しています。デート、旅行、撮影スポットなどを決めるのにぜひお役立てください！`;
}

/** エリアFAQを自動生成 */
function generateAreaFaq(
  categoryName: string,
  spots: SpotListItem[]
): { question: string; answer: string }[] {
  if (spots.length === 0) return [];

  const faqs: { question: string; answer: string }[] = [];

  // Q1: スポット数
  faqs.push({
    question: `${categoryName}にはいくつの夜景スポットがありますか？`,
    answer: `当サイトでは${categoryName}エリアの夜景スポットを${spots.length}件掲載しています。各スポットの詳細ページでは実際に訪れた際の写真や感想をご覧いただけます。`,
  });

  // Q2: 一番評価が高いスポット
  const sorted = [...spots].sort((a, b) => b.rating_avg - a.rating_avg);
  const topSpot = sorted[0];
  faqs.push({
    question: `${categoryName}で一番おすすめの夜景スポットは？`,
    answer: `${topSpot.name}が当サイトの評価で最も高く、平均${topSpot.rating_avg.toFixed(1)}点（5点満点）です。${topSpot.lead ? topSpot.lead : ""}`,
  });

  // Q3: 上位3スポットの紹介（3件以上ある場合）
  if (sorted.length >= 3) {
    const top3 = sorted.slice(0, 3);
    const top3Names = top3.map((s, i) => `${i + 1}位「${s.name}」（${s.rating_avg.toFixed(1)}点）`).join("、");
    faqs.push({
      question: `${categoryName}の夜景スポットランキングTOP3は？`,
      answer: `${categoryName}の夜景スポットランキングTOP3は、${top3Names}です。いずれも実際に訪問してレビューしています。`,
    });
  }

  // Q4: デートにおすすめ
  faqs.push({
    question: `${categoryName}でデートにおすすめの夜景スポットは？`,
    answer: `${categoryName}エリアでは${topSpot.name}が特におすすめです。各スポットの詳細ページでは雰囲気やアクセス情報も掲載しているので、デートの計画にぜひご活用ください。`,
  });

  // Q5: 無料スポット
  const freeSpots = spots.filter((s) => (s.lead || "").includes("無料"));
  const freeNames = freeSpots.length > 0
    ? freeSpots.slice(0, 5).map((s) => s.name).join("、")
    : "";
  faqs.push({
    question: `${categoryName}に無料の夜景スポットはありますか？`,
    answer: freeNames
      ? `はい！無料で楽しめるスポット: ${freeNames}。お金をかけずに東京の美しい夜景を堪能できます。`
      : `${categoryName}には無料または低料金で楽しめるスポットが多数あります。各スポットの詳細ページで料金情報をご確認ください。`,
  });

  // Q6: ベストタイム
  faqs.push({
    question: `${categoryName}で夜景を見るベストな時間帯は？`,
    answer: `日没後30分、空にまだ色が残る「ブルーアワー」が最も美しい時間帯です。東京の日没は冬は16:30頃、夏は19:00頃と季節で変わります。各スポットページの日没計算機をご活用ください。`,
  });

  return faqs;
}

const NON_AREA_SLUGS = ["article", "pickup", "event"];


export async function generateStaticParams() {
  const areas = await getAreas();
  const areaParams = areas
    .filter((a) => !NON_AREA_SLUGS.includes(a.slug))
    .map((a) => ({ category: a.slug }));

  // Add locale slugs for translated home pages
  const localeParams = ALL_LOCALE_SLUGS.map((locale) => ({ category: locale }));

  return [...areaParams, ...localeParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;

  // 翻訳版トップページ
  if (ALL_LOCALE_SLUGS.includes(categorySlug)) {
    const labels = getComponentLabels(categorySlug);
    const hp = labels.homePage;
    const spotCount = await getTotalSpotCount().catch(() => 200);
    const title = hp.hero.subtitle(spotCount);
    const description = hp.seoDescription;
    const canonicalUrl = `${SITE_URL}/${categorySlug}`;
    const ogLocale = OG_LOCALE_MAP[categorySlug] ?? "en_US";

    return {
      title: { absolute: title },
      description,
      openGraph: {
        type: "website",
        title,
        description,
        url: canonicalUrl,
        siteName: "nightscape.tokyo",
        locale: ogLocale,
        alternateLocale: ALL_OG_LOCALES.filter((l) => l !== ogLocale),
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
      alternates: {
        canonical: canonicalUrl,
        languages: buildHomeHreflangAlternates(SITE_URL, ALL_LOCALE_SLUGS),
      },
    };
  }

  if (NON_AREA_SLUGS.includes(categorySlug)) return {};

  const [cat, availableLocales, spots] = await Promise.all([
    getCategoryBySlug(categorySlug),
    getAvailableAreaLocales(categorySlug),
    getSpotsByCategory(categorySlug),
  ]);
  if (!cat) return {};

  const displayName = buildAreaDisplayName(categorySlug, cat.name);
  const title = `${displayName}の夜景スポット一覧`;
  const description = buildAreaDescription(cat.name);
  const canonicalUrl = `${SITE_URL}/${categorySlug}`;
  const heroImage = spots[0]?.featured_image || undefined;
  const areaAlternateLocale = availableLocales
    .map((s) => OG_LOCALE_MAP[s])
    .filter(Boolean);

  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: canonicalUrl,
      siteName: "nightscape.tokyo",
      locale: "ja_JP",
      alternateLocale: areaAlternateLocale.length > 0 ? areaAlternateLocale : undefined,
      images: heroImage ? [{ url: heroImage, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: heroImage ? [heroImage] : undefined,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: availableLocales.length > 0
        ? buildAreaHreflangAlternates(SITE_URL, categorySlug, availableLocales)
        : undefined,
    },
  };
}

export const revalidate = 3600;
export const fetchCache = "force-cache";

export default async function AreaPage({ params }: Props) {
  const { category: categorySlug } = await params;

  // ── 翻訳版トップページ (/en, /ko, /tw, /cn) ──
  if (ALL_LOCALE_SLUGS.includes(categorySlug)) {
    const localeSlug = categorySlug;
    const labels = getComponentLabels(localeSlug);
    const hp = labels.homePage;
    const sunData = calculateSunData(new Date(), 35.6895, 139.6917);

    const [spots, hotels, areas, purposeTags, spotCount, mapSpots] = await Promise.all([
      getTopSpotsTranslated(localeSlug, 8).catch(() => []),
      getHotelSpotsTranslated(localeSlug, 4).catch(() => []),
      getAreasTranslated(localeSlug).catch(() => []),
      getPurposeTags().catch(() => []),
      getTotalSpotCount().catch(() => 200),
      getSpotsForMap().catch(() => []),
    ]);

    const faqItems = hp.faq.items;
    const inLanguage = localeToLanguage(localeSlug);
    const currentYear = new Date().getFullYear();

    return (
      <>
        <LanguageSwitcher
          currentLocale={localeSlug}
          categorySlug=""
          availableLocales={ALL_LOCALE_SLUGS}
          localeLabels={LOCALE_LABELS}
        />
        <HeroSection labels={hp.hero} localeSlug={localeSlug} spotCount={spotCount} />
        <SpotRanking spots={spots} labels={hp.spotRanking} localeSlug={localeSlug} />
        <HotelRanking hotels={hotels} labels={hp.hotelRanking} localeSlug={localeSlug} />
        <PurposeSearch tags={purposeTags} labels={hp.purposeSearch} localeSlug={localeSlug} />
        <AreaSearch areas={areas} labels={hp.areaSearch} localeSlug={localeSlug} />
        <HomeMapSection
          spots={mapSpots}
          categories={areas.map((a) => ({ slug: a.slug, name: a.name }))}
          labels={hp.mapSection}
        />
        <HomeFaq faqs={faqItems} sunsetTime={sunData.sunsetTime} labels={hp.faq} />
        <HomeAuthor labels={labels.homeAuthor} locale={localeSlug} />
        <SpotShare
          url={`${SITE_URL}/${localeSlug}`}
          title={hp.hero.subtitle(spotCount)}
          locale={localeSlug}
          labels={labels.share}
        />
        {spots.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                buildItemListJsonLd(spots, {
                  localePrefix: `/${localeSlug}`,
                  name: hp.spotRanking?.heading(currentYear),
                  inLanguage,
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
                buildFaqJsonLd(faqItems, {
                  sunsetTime: sunData.sunsetTime,
                  inLanguage,
                })
              ),
            }}
          />
        )}
      </>
    );
  }

  // ── 通常のエリアページ ──
  if (NON_AREA_SLUGS.includes(categorySlug)) notFound();

  const [cat, spots, availableLocales, mapSpots] = await Promise.all([
    getCategoryBySlug(categorySlug),
    getSpotsByCategory(categorySlug),
    getAvailableAreaLocales(categorySlug),
    getMapSpotsByCategory(categorySlug),
  ]);

  if (!cat) notFound();

  const displayName = buildAreaDisplayName(categorySlug, cat.name);
  const faqs = generateAreaFaq(cat.name, spots);

  return (
    <div className="l-article-body" itemScope itemType="https://schema.org/CollectionPage">
      <meta itemProp="name" content={`${displayName}の夜景スポット一覧`} />
      <meta itemProp="description" content={buildAreaDescription(cat.name)} />
      <link itemProp="url" href={`${SITE_URL}/${categorySlug}`} />
      <div className="l-article-container">
        <LanguageSwitcher
          currentLocale={null}
          categorySlug={categorySlug}
          availableLocales={availableLocales}
          localeLabels={LOCALE_LABELS}
        />
        <Breadcrumb items={[{ label: `${cat.name}の夜景スポット一覧` }]} />

        <div className="firstVisual">
          <header className="firstVisual-header">
            <h1 className="firstVisual-title">
              {displayName}の夜景スポット一覧
            </h1>
          </header>
          <div className="firstVisual-body">
            <p>{buildAreaDescription(cat.name)}</p>
            <Link href="/" className="content-top-link">東京都内の夜景情報一覧</Link>
          </div>
        </div>

        {/* エリア紹介文 */}
        {cat.description && (
          <section className="content-card card-padding area-description" id="about" aria-labelledby="about-heading">
            <h2 className="area-section-heading" id="about-heading">{cat.name}の夜景について</h2>
            <p className="area-description-text">{cat.description}</p>
          </section>
        )}

        {spots.length === 0 ? (
          <p className="area-page-empty">
            このエリアにはまだ夜景スポットが登録されていません。
          </p>
        ) : (
          <section aria-labelledby="spotlist-heading">
            <h2 className="visually-hidden" id="spotlist-heading">{cat.name}の夜景スポット</h2>
            <AreaSpotList spots={spots} />
          </section>
        )}

        {/* エリアマップ */}
        {mapSpots.length > 0 && (
          <section className="content-card card-padding" id="map" aria-labelledby="map-heading">
            <h2 className="area-section-heading" id="map-heading">{cat.name}の夜景スポットマップ</h2>
            <AreaMapLoader spots={mapSpots} areaName={cat.name} />
          </section>
        )}

        {/* エリアFAQ */}
        {faqs.length > 0 && (
          <section className="content-card card-padding area-faq" id="faq" aria-labelledby="faq-heading">
            <h2 className="area-section-heading" id="faq-heading">{cat.name}の夜景スポットに関するFAQ</h2>
            <dl className="area-faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <dt className="faq-q">{faq.question}</dt>
                  <dd className="faq-a">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <RecommendCta locale={null} />
        <SpotShare
          url={`${SITE_URL}/${categorySlug}`}
          title={`${displayName}の夜景スポット一覧`}
          labels={getComponentLabels("ja").share}
        />

        {/* ItemList JSON-LD */}
        {spots.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                buildAreaItemListJsonLd(spots, categorySlug, { name: `${displayName}の夜景スポット一覧` })
              ),
            }}
          />
        )}

        {/* FAQPage JSON-LD */}
        {faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildFaqJsonLd(faqs)),
            }}
          />
        )}
      </div>
    </div>
  );
}
