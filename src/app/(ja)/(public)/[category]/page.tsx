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
import TravelItinerarySection from "@/components/home/TravelItinerarySection";
import HowToChooseNightView from "@/components/home/HowToChooseNightView";
import HomeTrustNote from "@/components/home/HomeTrustNote";
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
import { buildFaqJsonLd, buildItemListJsonLd, buildAreaItemListJsonLd, buildCollectionPageJsonLd, localeToLanguage } from "@/lib/json-ld";

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

/**
 * エリアページの説明文を生成（エリアごとに固有の内容）
 * スポット数・上位スポット名を含めることで重複コンテンツを回避。
 * 上位2件のみ使用し文字数超過を防ぐ。無料スポットがあれば動的に追記。
 */
function buildAreaDescription(areaName: string, spots: SpotListItem[]): string {
  const count = spots.length;
  if (count === 0) {
    return `東京都${areaName}のおすすめ夜景スポット情報を紹介。実際に訪問した感想や写真を掲載。`;
  }
  const sorted = [...spots].sort((a, b) => b.rating_avg - a.rating_avg);
  const top2Names = sorted.slice(0, 2).map((s) => s.name).join("・");
  return `東京${areaName}のおすすめ夜景スポット${count}件を厳選掲載。${top2Names}などの人気スポットを実際に訪問して撮影した写真や訪問レポートを紹介。デート・旅行・夜景撮影スポット選びにぜひご活用ください。`;
}

/** 月別の東京の平均日没時刻（概算） */
const MONTHLY_SUNSET: Record<number, string> = {
  1: "16:40", 2: "17:10", 3: "17:40", 4: "18:10", 5: "18:35",
  6: "19:00", 7: "19:00", 8: "18:40", 9: "18:00", 10: "17:20",
  11: "16:45", 12: "16:30",
};

function offsetTime(hhmm: string, mins: number): string {
  const [h, m] = hhmm.split(":").map(Number);
  const t = h * 60 + m + mins;
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
}

/** エリアFAQを自動生成 */
function generateAreaFaq(
  categoryName: string,
  spots: SpotListItem[]
): { question: string; answer: string }[] {
  if (spots.length === 0) return [];

  const faqs: { question: string; answer: string }[] = [];
  const sorted = [...spots].sort((a, b) => b.rating_avg - a.rating_avg);
  const topSpot = sorted[0];

  // Q1: スポット数
  faqs.push({
    question: `${categoryName}にはいくつの夜景スポットがありますか？`,
    answer: `当サイトでは${categoryName}エリアの夜景スポットを${spots.length}件掲載しています。各スポットの詳細ページでは実際に訪れた際の写真や感想をご覧いただけます。`,
  });

  // Q2: 一番評価が高いスポット
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

  // Q4: デートにおすすめ（リード文にデート系キーワードを含むスポットを優先）
  const dateKeywords = ["デート", "カップル", "ロマンチック", "ロマンス"];
  const dateSpots = spots.filter((s) =>
    dateKeywords.some((kw) => (s.lead || "").includes(kw))
  );
  const dateCandidates = dateSpots.length >= 2 ? dateSpots.slice(0, 3) : sorted.slice(0, Math.min(3, sorted.length));
  const dateNames = dateCandidates.map((s) => s.name).join("、");
  faqs.push({
    question: `${categoryName}でデートにおすすめの夜景スポットは？`,
    answer: `${categoryName}エリアでデートにおすすめの夜景スポットは${dateNames}です。各スポットのページには実際の雰囲気写真やアクセス情報を掲載しているので、デートの計画にぜひご活用ください。`,
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

  // Q6: ベストタイム（現在の月に応じた日没時刻を使用）
  const currentMonth = new Date().getMonth() + 1;
  const sunsetHhmm = MONTHLY_SUNSET[currentMonth] ?? "17:30";
  const blueFrom = offsetTime(sunsetHhmm, 20);
  const blueTo = offsetTime(sunsetHhmm, 50);
  faqs.push({
    question: `${categoryName}で夜景を見るベストな時間帯は？`,
    answer: `日没後20〜50分の「ブルーアワー」が最も美しい時間帯です。現在の季節（${currentMonth}月）の東京の日没は${sunsetHhmm}頃なので、${blueFrom}〜${blueTo}が狙い目です。${topSpot.name}など${categoryName}のスポットでぜひ試してみてください。`,
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
    const title = hp.seoTitle(new Date().getFullYear());
    const description = hp.seoDescription;
    const canonicalUrl = `${SITE_URL}/${categorySlug}/`;
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
  const title = spots.length > 0
    ? `${displayName}のおすすめ夜景スポット一覧【${spots.length}件掲載】`
    : `${displayName}のおすすめ夜景スポット一覧`;
  const description = buildAreaDescription(cat.name, spots);
  const canonicalUrl = `${SITE_URL}/${categorySlug}/`;
  const topRatedSpot = [...spots].sort((a, b) => b.rating_avg - a.rating_avg)[0];
  const heroImage = topRatedSpot?.featured_image || undefined;
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

export const revalidate = 86400;
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
        {hp.travelItinerary && (
          <TravelItinerarySection labels={hp.travelItinerary} localeSlug={localeSlug} />
        )}
        <SpotRanking spots={spots} labels={hp.spotRanking} localeSlug={localeSlug} />
        {hp.trustNote && (
          <HomeTrustNote labels={hp.trustNote} localeSlug={localeSlug} />
        )}
        <HotelRanking hotels={hotels} labels={hp.hotelRanking} localeSlug={localeSlug} />
        {hp.howToChoose && (
          <HowToChooseNightView labels={hp.howToChoose} />
        )}
        <PurposeSearch tags={purposeTags} labels={hp.purposeSearch} localeSlug={localeSlug} />
        <AreaSearch areas={areas} labels={hp.areaSearch} localeSlug={localeSlug} />
        <HomeMapSection
          spots={mapSpots}
          categories={[
            ...areas.map((a) => ({ slug: a.slug, name: a.name })),
            ...Object.entries(hp.categoryNav.names).map(([slug, name]) => ({ slug, name })),
          ]}
          labels={hp.mapSection}
          localePrefix={`/${localeSlug}`}
        />
        <HomeFaq faqs={faqItems} sunsetTime={sunData.sunsetTime} labels={hp.faq} />
        <HomeAuthor locale={localeSlug} />
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

  const [cat, spots, availableLocales, mapSpots, allAreas] = await Promise.all([
    getCategoryBySlug(categorySlug),
    getSpotsByCategory(categorySlug),
    getAvailableAreaLocales(categorySlug),
    getMapSpotsByCategory(categorySlug),
    getAreas(),
  ]);

  if (!cat) notFound();

  const displayName = buildAreaDisplayName(categorySlug, cat.name);
  const areaDescription = buildAreaDescription(cat.name, spots);
  const faqs = generateAreaFaq(cat.name, spots);
  const relatedAreas = allAreas
    .filter((a) => a.slug !== categorySlug && !NON_AREA_SLUGS.includes(a.slug))
    .sort((a, b) => b.spot_count - a.spot_count)
    .slice(0, 8);

  return (
    <div className="l-article-body" itemScope itemType="https://schema.org/CollectionPage">
      <meta itemProp="name" content={`${displayName}の夜景スポット一覧`} />
      <meta itemProp="description" content={areaDescription} />
      <link itemProp="url" href={`${SITE_URL}/${categorySlug}`} />
      <div className="l-article-container">
        <LanguageSwitcher
          currentLocale={null}
          categorySlug={categorySlug}
          availableLocales={availableLocales}
          localeLabels={LOCALE_LABELS}
        />
        <Breadcrumb items={[{ label: `${cat.name}の夜景スポット一覧`, href: `/${categorySlug}/` }]} />

        <div className="firstVisual">
          <header className="firstVisual-header">
            <h1 className="firstVisual-title">
              {displayName}の夜景スポット一覧
            </h1>
          </header>
          <div className="firstVisual-body">
            <p>{areaDescription}</p>
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

        {/* 関連エリアリンク */}
        {relatedAreas.length > 0 && (
          <section className="content-card card-padding" id="related-areas" aria-labelledby="related-areas-heading">
            <h2 className="area-section-heading" id="related-areas-heading">他のエリアの夜景スポット</h2>
            <ul className="related-areas-list">
              {relatedAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/${area.slug}`} className="related-area-link">
                    {area.name}の夜景
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <RecommendCta locale={null} />
        <SpotShare
          url={`${SITE_URL}/${categorySlug}`}
          title={`${displayName}の夜景スポット一覧`}
          labels={getComponentLabels("ja").share}
        />

        {/* CollectionPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildCollectionPageJsonLd({
                name: `${displayName}の夜景スポット一覧`,
                description: areaDescription,
                url: `${SITE_URL}/${categorySlug}`,
                numberOfItems: spots.length,
              })
            ),
          }}
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
