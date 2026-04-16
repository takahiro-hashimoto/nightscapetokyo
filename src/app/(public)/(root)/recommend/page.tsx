import type { Metadata } from "next";
import TagArticle from "@/components/tag/TagArticle";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { getTopSpots, getSpotsBySlugs, getTotalSpotCount, type MapSpotItem } from "@/lib/supabase/queries";
import { summarizeReport } from "@/lib/summarize-report";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_LABELS, buildAreaHreflangAlternates } from "@/lib/types";
import type { TagPageContent } from "@/lib/dummy-tag-data";
import { AREA_NAME } from "@/lib/constants";

/** 東京都内のカテゴリーslugセット（横浜など都外を除く） */
const TOKYO_AREA_SLUGS = new Set(
  Object.keys(AREA_NAME).filter((s) => s !== "yokohama")
);

const TITLE = "東京都内のおすすめ夜景スポットランキング30";
const DESCRIPTION =
  "東京の夜景スポットを実際に訪問した編集部が、特におすすめの30ヶ所を厳選してご紹介。展望台・ホテル・公園など、デートや撮影スポット選びにお役立てください。";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = `${SITE_URL}/recommend`;
  return {
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      type: "article",
      title: TITLE,
      description: DESCRIPTION,
      url: canonicalUrl,
      siteName: "nightscape.tokyo",
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: buildAreaHreflangAlternates(SITE_URL, "recommend", ALL_LOCALE_SLUGS),
    },
  };
}

export const revalidate = 3600;

export default async function RecommendPage() {
  const currentYear = new Date().getFullYear();

  const [allTopSpots, totalCount] = await Promise.all([
    getTopSpots(60).catch(() => []),
    getTotalSpotCount().catch(() => 0),
  ]);

  // 東京都内のカテゴリーのみに絞り込み、上位30件を取得
  const topSpots = allTopSpots
    .filter((s) => TOKYO_AREA_SLUGS.has(s.category.slug))
    .slice(0, 30);

  // スラグリストを評価順で保持
  const slugs = topSpots.map((s) => s.slug);
  const ratingMap = new Map(topSpots.map((s) => [s.slug, s.rating_avg]));

  // フルデータを取得し、評価順に並び替え
  const fullSpots = await getSpotsBySlugs(slugs).catch(() => []);
  const sortedSpots = [...fullSpots].sort(
    (a, b) => (ratingMap.get(b.slug) ?? 0) - (ratingMap.get(a.slug) ?? 0)
  );

  const sections: TagPageContent["sections"] = [
    {
      key: "all",
      heading: "",
      intro: "",
      spotSlugs: sortedSpots.map((s) => s.slug),
    },
  ];

  // 訪問レポートをAIで要約して説明文を生成（reportがない場合はleadにフォールバック）
  const descriptions: Record<string, string> = Object.fromEntries(
    await Promise.all(
      sortedSpots.map(async (s) => {
        if (s.report) {
          const summary = await summarizeReport(s.report).catch(() => s.lead ?? "");
          return [s.slug, summary];
        }
        return [s.slug, s.lead ?? ""];
      })
    )
  );

  const heroImage = sortedSpots[0]?.featured_image || topSpots[0]?.featured_image || undefined;

  const leadCount = totalCount > 0 ? `当サイトに掲載中の${totalCount}スポット` : "東京の夜景スポット";

  const content: TagPageContent = {
    title: `${TITLE}【${currentYear}年版】`,
    breadcrumb: "東京都内のおすすめ夜景スポットランキング30",
    heroImage,
    updatedAt: `${currentYear}.04.15`,
    prNotice: "",
    lead: `${leadCount}の中から、実際に訪問した編集部が特におすすめの30ヶ所を厳選してご紹介します。\n展望台・ホテル・公園など多彩なジャンルから、デートや夜景撮影に役立つ情報をお届けします。気になるスポットはぜひ詳細ページもチェックしてみてください。`,
    sections,
    descriptions,
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
  };

  // 座標があるスポットだけマップ用に変換
  const mapSpots: MapSpotItem[] = sortedSpots
    .filter((s) => s.latitude != null && s.longitude != null)
    .map((s) => ({
      id: s.id,
      slug: s.slug,
      name: s.name || s.title,
      featured_image: s.featured_image || "",
      categorySlug: s.category?.slug ?? "",
      categoryName: s.category?.name ?? "",
      latitude: s.latitude as number,
      longitude: s.longitude as number,
      rating_avg: ratingMap.get(s.slug) ?? 0,
    }));

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
      />
    </>
  );
}
