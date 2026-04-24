import type { Metadata } from "next";
import TagArticle from "@/components/tag/TagArticle";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { getTopSpotsTranslated, getSpotsBySlugsTranslated, getTotalSpotCount } from "@/lib/supabase/queries";
import { ALL_LOCALE_SLUGS, SITE_URL, LOCALE_LABELS } from "@/lib/types";
import type { CategoryPageProps as Props } from "@/lib/types";
import { AREA_NAME } from "@/lib/constants";
import {
  buildRecommendMetadata,
  buildRecommendPageData,
} from "@/lib/recommend-page";

/** 東京都内のカテゴリーslugセット（横浜など都外を除く） */
const TOKYO_AREA_SLUGS = new Set(
  Object.keys(AREA_NAME).filter((s) => s !== "yokohama")
);

type RecommendLabels = {
  title: string;
  breadcrumb: string;
  description: string;
  lead: (count: number) => string;
  faqs: { question: string; answer: string }[];
};

const RECOMMEND_LABELS: Record<string, RecommendLabels> = {
  en: {
    title: "Top 30 Night View Spots in Tokyo, Japan",
    breadcrumb: "Top 30 Night View Spots in Tokyo, Japan",
    description:
      "We've handpicked the 30 best night view spots in Tokyo from our collection. Perfect for dates and photography.",
    lead: (n) =>
      `From ${n} spots on our site, our editorial team handpicked the top 30 night view spots in Tokyo.\nObservation decks, hotels, parks and more — find the perfect spot for dates and night photography.`,
    faqs: [
      {
        question: "What is the best night view spot in Tokyo?",
        answer:
          "Our editorial team rates spots on beauty, access, ambiance, and value. The top-rated spot changes as we visit more locations — check our current ranking for the latest.",
      },
      {
        question: "How are the spots rated?",
        answer:
          "We rate each spot on four criteria — Beauty (visual impact), Access (proximity to nearest station), Ambiance (suitability for dates and photography), and Value (satisfaction relative to admission fees) — on a 5-point scale.",
      },
      {
        question: "Are there free night view spots in Tokyo?",
        answer:
          "Yes, many of Tokyo's best night views are free to enjoy. Parks, bridges, and public observation areas are included in our ranking. Check each spot's detail page for admission fee information.",
      },
    ],
  },
  ko: {
    title: "일본 도쿄 추천 야경 명소 랭킹 30",
    breadcrumb: "일본 도쿄 추천 야경 명소 랭킹 30",
    description:
      "직접 방문한 도쿄의 야경 명소 중 특히 추천하는 30곳을 엄선하여 랭킹 형식으로 소개합니다.",
    lead: (n) =>
      `사이트에 게재된 ${n}개 스폿 중 실제로 방문한 편집부가 특히 추천하는 30곳을 엄선하여 소개합니다.\n전망대·호텔·공원 등 다양한 장르에서 데이트나 야경 촬영에 유용한 정보를 제공합니다.`,
    faqs: [
      {
        question: "도쿄에서 가장 추천하는 야경 명소는 어디인가요?",
        answer:
          "저희 사이트에서는 아름다움·접근성·분위기·가성비의 종합 평가로 랭킹을 매기고 있습니다. 자세한 내용은 현재 랭킹을 확인해 주세요.",
      },
      {
        question: "랭킹의 평가 기준을 알려주세요.",
        answer:
          "아름다움(야경의 아름다움·박력·감동도)·접근성(가까운 역까지의 거리)·분위기(데이트·촬영에 적합한 공간인지)·가성비(입장료 대비 만족도)의 4항목을 각각 5단계로 평가하여 종합 점수로 랭킹합니다.",
      },
      {
        question: "무료로 즐길 수 있는 야경 명소가 있나요?",
        answer:
          "네, 도쿄에는 무료로 즐길 수 있는 야경 명소도 많습니다. 공원이나 다리 등 공공 공간도 랭킹에 포함되어 있습니다. 각 스폿의 상세 페이지에서 요금 정보를 확인해 주세요.",
      },
    ],
  },
  tw: {
    title: "日本東京推薦夜景景點排行榜30",
    breadcrumb: "日本東京推薦夜景景點排行榜30",
    description:
      "從實際走訪過的東京夜景景點中，嚴選30處最值得推薦的景點，以排行榜形式介紹。",
    lead: (n) =>
      `從本站收錄的${n}個景點中，實際走訪的編輯部嚴選30處最值得推薦的景點。\n觀景台、飯店、公園等多樣類型，為您提供適合約會和夜景攝影的實用資訊。`,
    faqs: [
      {
        question: "東京最推薦的夜景景點是哪裡？",
        answer:
          "本站以美麗度、交通、氛圍、性價比四項綜合評分進行排名。詳情請參閱目前的排行榜。",
      },
      {
        question: "請問排名的評分標準是什麼？",
        answer:
          "以美麗度（夜景的美感、震撼與感動）、交通（離最近車站的距離與交通便利性）、氛圍（是否適合約會及攝影）、性價比（門票費用的滿意度）四項，各以5級評分，以總分進行排名。",
      },
      {
        question: "有可以免費欣賞夜景的景點嗎？",
        answer:
          "是的，東京有許多可以免費欣賞夜景的景點。公園、橋梁等公共空間也包含在排行榜中。請在各景點的詳細頁面確認費用資訊。",
      },
    ],
  },
  cn: {
    title: "日本东京推荐夜景景点排行榜30",
    breadcrumb: "日本东京推荐夜景景点排行榜30",
    description:
      "从实际走访过的东京夜景景点中，精选30处最值得推荐的景点，以排行榜形式介绍。",
    lead: (n) =>
      `从本站收录的${n}个景点中，实际走访的编辑部精选30处最值得推荐的景点。\n观景台、酒店、公园等多种类型，为您提供适合约会和夜景摄影的实用信息。`,
    faqs: [
      {
        question: "东京最推荐的夜景景点是哪里？",
        answer:
          "本站以美丽度、交通、氛围、性价比四项综合评分进行排名。详情请查阅当前排行榜。",
      },
      {
        question: "请问排名的评分标准是什么？",
        answer:
          "以美丽度（夜景的美感、震撼与感动）、交通（离最近车站的距离与交通便利性）、氛围（是否适合约会及摄影）、性价比（门票费用的满意度）四项，各以5级评分，以总分进行排名。",
      },
      {
        question: "有可以免费欣赏夜景的景点吗？",
        answer:
          "是的，东京有许多可以免费欣赏夜景的景点。公园、桥梁等公共空间也包含在排行榜中。请在各景点的详细页面确认费用信息。",
      },
    ],
  },
};

/* ─── Static params ─── */
export function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((lang) => ({ category: lang }));
}

/* ─── Metadata ─── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: locale } = await params;
  const labels = RECOMMEND_LABELS[locale];
  if (!labels) return {};

  const currentYear = new Date().getFullYear();
  return buildRecommendMetadata({
    title: `${labels.title}【${currentYear}】`,
    description: labels.description,
    localeSlug: locale,
    availableLocales: ALL_LOCALE_SLUGS,
  });
}

export const revalidate = 86400;
export const fetchCache = "force-cache";

/* ─── Page ─── */
export default async function RecommendPageI18n({ params }: Props) {
  const { category: locale } = await params;
  const labels = RECOMMEND_LABELS[locale];
  if (!labels) return null;

  const currentYear = new Date().getFullYear();

  const [topSpotsTranslated, totalCount] = await Promise.all([
    getTopSpotsTranslated(locale, 30, TOKYO_AREA_SLUGS).catch(() => []),
    getTotalSpotCount().catch(() => 0),
  ]);

  // スラグリストと評価順・翻訳マップを保持
  const slugs = topSpotsTranslated.map((s) => s.slug);
  const ratingMap = new Map(topSpotsTranslated.map((s) => [s.slug, s.rating_avg]));

  // フルデータを翻訳込みで取得し、評価順に並び替え
  const fullSpots = await getSpotsBySlugsTranslated(slugs, locale).catch(() => []);
  const sortedSpots = [...fullSpots].sort(
    (a, b) => (ratingMap.get(b.slug) ?? 0) - (ratingMap.get(a.slug) ?? 0)
  );

  const leadText = totalCount > 0 ? labels.lead(totalCount) : labels.description;
  const { content, mapSpots } = buildRecommendPageData({
    spots: sortedSpots,
    title: `${labels.title}【${currentYear}】`,
    breadcrumb: labels.breadcrumb,
    leadText,
    faqs: labels.faqs,
  });

  return (
    <>
      <LanguageSwitcher
        currentLocale={locale}
        categorySlug="recommend"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <TagArticle
        tagName={labels.breadcrumb}
        content={content}
        allSpots={sortedSpots}
        mapSpots={mapSpots}
        locale={locale}
        shareUrl={`${SITE_URL}/${locale}/recommend/`}
        showRank
      />
    </>
  );
}
