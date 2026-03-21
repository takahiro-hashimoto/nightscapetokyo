import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Crown, Star, Sparkles, TrainFront, Heart, Coins } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { getTopSpots, getSpotCount } from "@/lib/supabase/queries";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_LABELS, buildAreaHreflangAlternates } from "@/lib/types";
import type { SpotListItem } from "@/lib/types";

const TITLE = "東京都内のおすすめ夜景スポットランキング30";
const DESCRIPTION =
  "実際に訪問した東京の夜景スポットの中から、特におすすめの30ヶ所を厳選してランキング形式でご紹介。デートや撮影スポット選びにお役立てください。";

/** ItemList JSON-LD */
function buildItemListJsonLd(spots: SpotListItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: TITLE,
    numberOfItems: spots.length,
    itemListElement: spots.map((spot, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/${spot.category.slug}/${spot.slug}`,
      name: spot.name,
      ...(spot.featured_image && { image: spot.featured_image }),
    })),
  };
}

/** FAQPage JSON-LD */
function buildFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** FAQ自動生成 */
function generateRecommendFaq(
  spots: SpotListItem[],
  totalCount: number
): { question: string; answer: string }[] {
  if (spots.length === 0) return [];

  const faqs: { question: string; answer: string }[] = [];

  faqs.push({
    question: "東京の夜景スポットランキング1位はどこですか？",
    answer: `当サイトの評価で1位は「${spots[0].name}」です。平均${spots[0].rating_avg.toFixed(1)}点（5点満点）で、美しさ・アクセス・雰囲気・コスパの4項目で総合的に評価しています。`,
  });

  if (spots.length >= 3) {
    const top3 = spots.slice(0, 3).map((s, i) => `${i + 1}位「${s.name}」（${s.rating_avg.toFixed(1)}点）`).join("、");
    faqs.push({
      question: "東京の夜景スポットランキングTOP3は？",
      answer: `東京の夜景スポットランキングTOP3は、${top3}です。いずれも実際に訪問してレビューしています。`,
    });
  }

  faqs.push({
    question: "ランキングの評価基準は？",
    answer: "美しさ（夜景の美しさ・迫力・感動度）、アクセス（最寄り駅からの距離）、雰囲気（デートや撮影に適した空間か）、コスパ（入場料に対する満足度）の4項目をそれぞれ5段階で評価し、総合点でランキングしています。",
  });

  if (totalCount > 0) {
    faqs.push({
      question: "全部でいくつの夜景スポットが掲載されていますか？",
      answer: `当サイトでは合計${totalCount}ヶ所の夜景スポットを掲載しています。その中から特におすすめの${spots.length}ヶ所を厳選してランキング形式で紹介しています。`,
    });
  }

  return faqs;
}

const CRITERIA = [
  {
    icon: Sparkles,
    label: "美しさ",
    color: "#eab308",
    desc: "夜景の美しさ・迫力・感動度を5段階で評価",
  },
  {
    icon: TrainFront,
    label: "アクセス",
    color: "#3b82f6",
    desc: "最寄り駅からの距離・交通の便を考慮",
  },
  {
    icon: Heart,
    label: "雰囲気",
    color: "#ec4899",
    desc: "デートや撮影に適した空間かどうかを評価",
  },
  {
    icon: Coins,
    label: "コスパ",
    color: "#22c55e",
    desc: "入場料・利用料に対する満足度を評価",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = `${SITE_URL}/recommend`;
  return {
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      type: "website",
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
  const [spots, totalCount] = await Promise.all([
    getTopSpots(30).catch(() => []),
    getSpotCount().catch(() => 0),
  ]);

  const faqs = generateRecommendFaq(spots, totalCount);

  return (
    <div itemScope itemType="https://schema.org/CollectionPage">
      <meta itemProp="name" content={TITLE} />
      <meta itemProp="description" content={DESCRIPTION} />
      <link itemProp="url" href={`${SITE_URL}/recommend`} />

      {/* ItemList JSON-LD */}
      {spots.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildItemListJsonLd(spots)),
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

      <LanguageSwitcher
        currentLocale={null}
        categorySlug="recommend"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <article className="home-section" style={{ paddingTop: 0 }}>
        <div className="home-container">
          <Breadcrumb items={[{ label: TITLE }]} />

        <h1 className="home-section-heading" style={{ marginTop: 24 }} itemProp="headline">
          <span className="heading-icon">
            <Crown size={20} aria-hidden="true" />
          </span>
          {`${TITLE}【${currentYear}年最新】`}
        </h1>

        <p className="home-section-desc" itemProp="description">
          {totalCount > 0
            ? `当サイトに掲載中の${totalCount}スポットの中から、特におすすめの30ヶ所を厳選してランキング形式でご紹介。デートや撮影スポット選びにお役立てください。`
            : DESCRIPTION}
        </p>

        {/* 評価基準カード */}
        <section aria-labelledby="criteria-heading">
          <h2 className="visually-hidden" id="criteria-heading">評価基準</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              marginTop: 28,
            }}
            className="recommend-criteria-grid"
          >
            {CRITERIA.map((c) => (
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
                    background: `${c.color}14`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <c.icon size={22} color={c.color} aria-hidden="true" />
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
            ))}
          </div>
        </section>

        {/* ランキンググリッド */}
        <section aria-labelledby="ranking-heading">
          <h2 className="visually-hidden" id="ranking-heading">夜景スポットランキング</h2>
          <div className="ranking-grid ranking-grid-3">
            {spots.map((spot, i) => (
              <Link
                key={spot.id}
                href={`/${spot.category.slug}/${spot.slug}`}
                className="spot-card"
                itemScope
                itemType="https://schema.org/TouristAttraction"
                itemProp="itemListElement"
              >
                <div className="spot-card-image">
                  <Image
                    src={spot.featured_image}
                    alt={spot.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    itemProp="image"
                  />
                  <span
                    className={`ranking-badge ${i < 3 ? "ranking-badge-top" : ""}`}
                  >
                    {i + 1}
                  </span>
                </div>
                <div className="spot-card-body">
                  <div className="spot-card-meta">
                    <span className="spot-card-category">
                      {spot.category.name}
                    </span>
                    <div
                      className="spot-card-rating"
                      itemProp="aggregateRating"
                      itemScope
                      itemType="https://schema.org/AggregateRating"
                    >
                      <Star size={14} fill="#eab308" stroke="none" aria-hidden="true" />
                      <span itemProp="ratingValue">{spot.rating_avg.toFixed(1)}</span>
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </div>
                  </div>
                  <h3 className="spot-card-title" itemProp="name">{spot.name}</h3>
                  <p className="spot-card-lead" itemProp="description">{spot.lead}</p>
                </div>
                <link itemProp="url" href={`${SITE_URL}/${spot.category.slug}/${spot.slug}`} />
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="content-card card-padding area-faq" id="faq" aria-labelledby="recommend-faq-heading">
            <h2 className="area-section-heading" id="recommend-faq-heading">東京の夜景おすすめランキングに関するFAQ</h2>
            <dl className="area-faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className="area-faq-item">
                  <dt className="area-faq-question">{faq.question}</dt>
                  <dd className="area-faq-answer">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        </div>
      </article>
    </div>
  );
}
