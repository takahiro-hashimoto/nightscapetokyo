import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Crown, Star, Sparkles, TrainFront, Heart, Coins } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import HomeAuthor from "@/components/home/HomeAuthor";
import SpotShare from "@/components/spot/SpotShare";
import { getTopSpotsTranslated, getSpotCount } from "@/lib/supabase/queries";
import { ALL_LOCALE_SLUGS, SITE_NAMES, SITE_URL, LOCALE_LABELS, OG_LOCALE_MAP, ALL_OG_LOCALES, buildAreaHreflangAlternates } from "@/lib/types";
import type { CategoryPageProps as Props } from "@/lib/types";
import { AREA_NAME } from "@/lib/constants";
import { getComponentLabels } from "@/lib/i18n-labels";

/** 東京都内のカテゴリーslugセット（横浜など都外を除く） */
const TOKYO_AREA_SLUGS = new Set(
  Object.keys(AREA_NAME).filter((s) => s !== "yokohama")
);

/* ─── 翻訳ラベル ─── */
type RecommendLabels = {
  title: string;
  description: string;
  descWithCount: (count: number) => string;
  criteria: { label: string; desc: string }[];
};

const RECOMMEND_LABELS: Record<string, RecommendLabels> = {
  en: {
    title: "Top 30 Night View Spots in Tokyo",
    description:
      "We've handpicked the 30 best night view spots in Tokyo from our collection. Perfect for dates and photography.",
    descWithCount: (n) =>
      `Handpicked top 30 from ${n} spots on our site. Perfect for dates and photography in Tokyo.`,
    criteria: [
      { label: "Beauty", desc: "Rated on a 5-point scale for beauty, impact, and impressiveness" },
      { label: "Access", desc: "Proximity to nearest station and ease of transportation" },
      { label: "Ambiance", desc: "Suitability for dates and photography" },
      { label: "Value", desc: "Satisfaction relative to admission fees" },
    ],
  },
  ko: {
    title: "도쿄 추천 야경 명소 랭킹 30",
    description:
      "직접 방문한 도쿄의 야경 명소 중 특히 추천하는 30곳을 엄선하여 랭킹 형식으로 소개합니다.",
    descWithCount: (n) =>
      `사이트에 게재된 ${n}개 스폿 중 엄선한 상위 30곳을 소개합니다. 데이트나 촬영 장소 선택에 참고하세요.`,
    criteria: [
      { label: "아름다움", desc: "야경의 아름다움·박력·감동을 5단계로 평가" },
      { label: "접근성", desc: "가까운 역까지의 거리·교통편을 고려" },
      { label: "분위기", desc: "데이트·촬영에 적합한 공간인지 평가" },
      { label: "가성비", desc: "입장료 대비 만족도를 평가" },
    ],
  },
  tw: {
    title: "東京推薦夜景景點排行榜30",
    description:
      "從實際走訪過的東京夜景景點中，嚴選30處最值得推薦的景點，以排行榜形式介紹。",
    descWithCount: (n) =>
      `從本站收錄的${n}個景點中嚴選前30名。適合約會及攝影的東京夜景景點推薦。`,
    criteria: [
      { label: "美麗度", desc: "以5級評分評估夜景的美感、震撼與感動" },
      { label: "交通", desc: "考量離最近車站的距離與交通便利性" },
      { label: "氛圍", desc: "評估是否適合約會及攝影" },
      { label: "性價比", desc: "評估門票費用的滿意度" },
    ],
  },
  cn: {
    title: "东京推荐夜景景点排行榜30",
    description:
      "从实际走访过的东京夜景景点中，精选30处最值得推荐的景点，以排行榜形式介绍。",
    descWithCount: (n) =>
      `从本站收录的${n}个景点中精选前30名。适合约会及摄影的东京夜景景点推荐。`,
    criteria: [
      { label: "美丽度", desc: "以5级评分评估夜景的美感、震撼与感动" },
      { label: "交通", desc: "考量离最近车站的距离与交通便利性" },
      { label: "氛围", desc: "评估是否适合约会及摄影" },
      { label: "性价比", desc: "评估门票费用的满意度" },
    ],
  },
};

const CRITERIA_ICONS = [
  { icon: Sparkles, color: "#eab308" },
  { icon: TrainFront, color: "#3b82f6" },
  { icon: Heart, color: "#ec4899" },
  { icon: Coins, color: "#22c55e" },
];

/* ─── Static params ─── */
export function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((lang) => ({ category: lang }));
}

/* ─── Metadata ─── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: locale } = await params;
  const labels = RECOMMEND_LABELS[locale];
  if (!labels) return {};
  const ogLocale = OG_LOCALE_MAP[locale] ?? "en_US";
  const canonicalUrl = `${SITE_URL}/${locale}/recommend`;
  return {
    title: labels.title,
    description: labels.description,
    openGraph: {
      title: labels.title,
      description: labels.description,
      url: canonicalUrl,
      locale: ogLocale,
      alternateLocale: ALL_OG_LOCALES.filter((ol) => ol !== ogLocale),
    },
    alternates: {
      canonical: canonicalUrl,
      languages: buildAreaHreflangAlternates(SITE_URL, "recommend", ALL_LOCALE_SLUGS),
    },
  };
}

export const revalidate = 86400;

/* ─── Page ─── */
export default async function RecommendPageI18n({ params }: Props) {
  const { category: locale } = await params;
  const labels = RECOMMEND_LABELS[locale];
  if (!labels) return null;

  const currentYear = new Date().getFullYear();
  const [spots, totalCount] = await Promise.all([
    getTopSpotsTranslated(locale, 30, TOKYO_AREA_SLUGS).catch(() => []),
    getSpotCount().catch(() => 0),
  ]);

  const siteName = SITE_NAMES[locale] ?? "Tokyo Night View Guide";
  const componentLabels = getComponentLabels(locale);

  return (
    <>
      <LanguageSwitcher
        currentLocale={locale}
        categorySlug="recommend"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <article className="home-section" style={{ paddingTop: 0 }}>
        <div className="home-container">
          <Breadcrumb
            items={[{ label: labels.title }]}
            locale={locale}
          />

        <h1 className="home-section-heading" style={{ marginTop: 24 }}>
          <span className="heading-icon">
            <Crown size={20} />
          </span>
          {`${labels.title}【${currentYear}】`}
        </h1>

        <p className="home-section-desc">
          {totalCount > 0
            ? labels.descWithCount(totalCount)
            : labels.description}
        </p>

        {/* 評価基準カード */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginTop: 28,
          }}
          className="recommend-criteria-grid"
        >
          {labels.criteria.map((c, idx) => {
            const Icon = CRITERIA_ICONS[idx].icon;
            const color = CRITERIA_ICONS[idx].color;
            return (
              <div
                key={c.label}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: 12,
                  padding: "20px 16px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: `${color}14`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <Icon size={22} color={color} />
                </div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 15,
                    color: "#1a202c",
                    marginBottom: 6,
                  }}
                >
                  {c.label}
                </div>
                <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>
                  {c.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* ランキンググリッド */}
        <div className="ranking-grid ranking-grid-3">
          {spots.map((spot, i) => (
            <Link
              key={spot.id}
              href={`/${locale}/${spot.category.slug}/${spot.slug}`}
              className="spot-card"
            >
              <div className="spot-card-image">
                <Image
                  src={spot.featured_image}
                  alt={spot.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                />
                <span
                  className={`ranking-badge ${i < 3 ? "ranking-badge-top" : ""}`}
                >
                  {i + 1}
                </span>
              </div>
              <div className="spot-card-body">
                <div className="spot-card-meta">
                  <span className="badge spot-card-category">
                    {spot.category.name}
                  </span>
                  <div className="spot-card-rating">
                    <Star size={14} fill="#eab308" stroke="none" />
                    <span>{spot.rating_avg.toFixed(1)}</span>
                  </div>
                </div>
                <h3 className="spot-card-title">{spot.name}</h3>
                <p className="spot-card-lead">{spot.lead}</p>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </article>
      <HomeAuthor labels={componentLabels.homeAuthor} locale={locale} />
      <SpotShare
        url={`${SITE_URL}/${locale}/recommend`}
        title={labels.title}
        locale={locale}
        labels={componentLabels.share}
      />
    </>
  );
}
