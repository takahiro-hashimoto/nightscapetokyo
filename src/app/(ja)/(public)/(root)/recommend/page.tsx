import type { Metadata } from "next";
import TagArticle from "@/components/tag/TagArticle";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { getTopSpotsWithRelations, getTotalSpotCount } from "@/lib/supabase/queries";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_LABELS } from "@/lib/types";
import { TOKYO_AREA_SLUGS } from "@/lib/constants";
import {
  buildRecommendMetadata,
  buildRecommendPageData,
} from "@/lib/recommend-page";

const TITLE = "東京都内のおすすめ夜景スポットランキング30";
const DESCRIPTION =
  "東京の夜景スポットを実際に訪問した編集部が、特におすすめの30ヶ所を厳選してご紹介。展望台・ホテル・公園など、デートや撮影スポット選びにお役立てください。";

export function generateMetadata(): Metadata {
  const currentYear = new Date().getFullYear();
  return buildRecommendMetadata({
    title: `${TITLE}【${currentYear}年版】`,
    description: DESCRIPTION,
    localeSlug: "ja",
    availableLocales: ALL_LOCALE_SLUGS,
  });
}

export const revalidate = 86400;
export const fetchCache = "force-cache";

export default async function RecommendPage() {
  const currentYear = new Date().getFullYear();

  const [allTopSpots, totalCount] = await Promise.all([
    getTopSpotsWithRelations(90).catch(() => []),
    getTotalSpotCount().catch(() => 0),
  ]);

  // 東京都内のカテゴリーのみに絞り込み・閉鎖済み除外・上位30件を取得
  const sortedSpots = allTopSpots
    .filter((s) => TOKYO_AREA_SLUGS.has(s.category?.slug ?? "") && !s.closed)
    .sort((a, b) => {
      const rA = (a.rating_beautiful ?? 0) + (a.rating_access ?? 0) + (a.rating_atmosphere ?? 0) + (a.rating_cost ?? 0);
      const rB = (b.rating_beautiful ?? 0) + (b.rating_access ?? 0) + (b.rating_atmosphere ?? 0) + (b.rating_cost ?? 0);
      return rB - rA;
    })
    .slice(0, 30);

  const leadCount = totalCount > 0 ? `当サイトに掲載中の${totalCount}スポット` : "東京の夜景スポット";
  const { content, mapSpots } = buildRecommendPageData({
    spots: sortedSpots,
    title: `${TITLE}【${currentYear}年版】`,
    breadcrumb: "東京都内のおすすめ夜景スポットランキング30",
    leadText: `${leadCount}の中から、実際に訪問した編集部が特におすすめの30ヶ所を厳選してご紹介します。\n展望台・ホテル・公園など多彩なジャンルから、デートや夜景撮影に役立つ情報をお届けします。気になるスポットはぜひ詳細ページもチェックしてみてください。`,
    faqs: [
      {
        question: "東京で一番おすすめの夜景スポットはどこですか？",
        answer:
          sortedSpots[0]
            ? `当サイトの評価で最高得点は「${sortedSpots[0].name || sortedSpots[0].title}」です。美しさ・アクセス・雰囲気・コスパの総合評価で選ばれています。`
            : "当サイトでは美しさ・アクセス・雰囲気・コスパの4項目で評価し、ランキングを作成しています。",
      },
      {
        question: "ランキングの評価基準を教えてください。",
        answer:
          "美しさ（夜景の美しさ・迫力・感動度）・アクセス（最寄り駅からの距離）・雰囲気（デートや撮影に適した空間か）・コスパ（入場料に対する満足度）の4項目をそれぞれ5段階で評価し、総合点でランキングしています。",
      },
      {
        question: "デートにおすすめの夜景スポットはどこですか？",
        answer:
          "雰囲気点の高いスポットがデートにおすすめです。展望台やルーフトップバーなど、ロマンチックな雰囲気を楽しめる場所を上位に掲載しています。各スポットの詳細ページにデート向けの情報も掲載していますのでぜひご覧ください。",
      },
      {
        question: "無料で楽しめる夜景スポットはありますか？",
        answer:
          "はい、東京には無料で楽しめる夜景スポットも多数あります。公園や橋などの公共スペースから東京の夜景を楽しめる場所も本記事に含まれています。各スポットの詳細ページで料金情報をご確認ください。",
      },
    ],
  });

  return (
    <>
      <LanguageSwitcher
        currentLocale={null}
        categorySlug="recommend"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <TagArticle
        tagName="おすすめ夜景スポット"
        content={content}
        allSpots={sortedSpots}
        mapSpots={mapSpots}
        shareUrl={`${SITE_URL}/recommend/`}
        showRank
      />
    </>
  );
}
