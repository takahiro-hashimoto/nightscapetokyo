import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight } from "lucide-react";
import type { SpotListItem } from "@/lib/types";
import type { HomePageLabels } from "@/lib/i18n-labels";
import type { ReactNode } from "react";

type Props = {
  spots: SpotListItem[];
  labels?: HomePageLabels["spotRanking"];
  localeSlug?: string;
  prBanner?: ReactNode;
};

const CURRENT_YEAR = new Date().getFullYear();

export default function SpotRanking({ spots, labels, localeSlug, prBanner }: Props) {
  const currentYear = CURRENT_YEAR;
  if (spots.length === 0) return null;

  const prefix = localeSlug ? `/${localeSlug}` : "";

  return (
    <section className="home-section" id="spot-ranking">
      <div className="home-container">
        {prBanner}
        <h2 className="home-section-heading">
          {labels?.heading(currentYear) ?? `東京都内の夜景スポット ランキング【${currentYear}年】`}
        </h2>
        <p className="home-section-desc">
          {labels?.desc1 ?? "実際に訪問した200ヶ所以上の東京の夜景スポットの中からおすすめの場所をランキング形式でご紹介！"}
        </p>
        <p className="home-section-desc">
          {labels?.desc2 ?? <>各スポットの評価は<strong>美しさ</strong>、<strong>アクセスの良さ</strong>、<strong>雰囲気の良さ</strong>、<strong>コスパ</strong>の4項目から決定しています。デートや撮影の目的先を決めるのにご活用ください。</>}
        </p>
        <ol className="ranking-grid">
          {spots.map((spot, i) => (
            <li key={spot.id}>
            <Link
              href={`${prefix}/${spot.category.slug}/${spot.slug}`}
              className="spot-card"
              prefetch={false}
            >
              <div className="spot-card-image">
                <Image
                  src={spot.featured_image}
                  alt={spot.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  priority={i === 0}
                  loading={i < 2 ? "eager" : "lazy"}
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
            </li>
          ))}
        </ol>
        <div className="home-section-more">
          <Link href={`${prefix}/recommend`} className="home-more-link">
            {labels?.moreLink ?? "東京の夜景スポットおすすめランキング"}
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
