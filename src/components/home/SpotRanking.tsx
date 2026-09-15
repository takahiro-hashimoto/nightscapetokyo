import Image from "next/image";
import Link from "@/components/common/AppLink";
import type { SpotListItem } from "@/lib/types";
import { extractTownAddress } from "@/lib/types";
import { Star, Train } from "lucide-react";
import type { HomePageLabels } from "@/lib/i18n-labels";
import type { ReactNode } from "react";

type RatingNames = { beautiful: string; access: string; atmosphere: string; cost: string };

const JA_RATING_NAMES: RatingNames = { beautiful: "美しさ", access: "アクセス", atmosphere: "雰囲気", cost: "コスパ" };

type Props = {
  spots: SpotListItem[];
  labels?: HomePageLabels["spotRanking"];
  /** 4項目評価の名前（翻訳トップでは ComponentLabels.rating を渡す） */
  ratingNames?: RatingNames;
  localeSlug?: string;
  prBanner?: ReactNode;
};

export default function SpotRanking({ spots, labels, ratingNames = JA_RATING_NAMES, localeSlug, prBanner }: Props) {
  const currentYear = new Date().getFullYear();
  if (spots.length === 0) return null;

  const prefix = localeSlug ? `/${localeSlug}` : "";

  return (
    <section className="home-section" id="spot-ranking">
      <div className="home-container">
        {prBanner}
        <h2 className="home-section-heading">
          {labels?.heading(currentYear) ?? `東京・横浜の夜景スポット ランキング【${currentYear}年】`}
        </h2>
        <p className="home-section-desc">
          {labels?.desc1 ?? <>実際に訪問した200ヶ所以上の東京の夜景スポットの中からおすすめの場所をランキング形式でご紹介！</>}
        </p>
        <p className="home-section-desc">
          {labels?.desc2 ?? <>各スポットの評価は<strong>美しさ</strong>、<strong>アクセスの良さ</strong>、<strong>雰囲気の良さ</strong>、<strong>コスパ</strong>の4項目から決定しています。デートや撮影の目的先を決めるのにご活用ください。</>}
        </p>
        <ol className="ranking-grid">
          {spots.map((spot, i) => {
            const stationText = spot.station_names;
            // 平均の★だけでは「なぜこの順位か」が伝わらない。採点の内訳はこのサイト独自の
            // 情報なので、取得済みの4項目をそのまま見せる（未採点の項目は出さない）
            const subScores = (
              [
                [ratingNames.beautiful, spot.rating_beautiful],
                [ratingNames.access, spot.rating_access],
                [ratingNames.atmosphere, spot.rating_atmosphere],
                [ratingNames.cost, spot.rating_cost],
              ] as const
            ).filter((s): s is readonly [string, number] => s[1] != null);
            return (
            <li key={spot.id}>
            <Link
              href={`${prefix}/${spot.category.slug}/${spot.slug}/`}
              className="spot-card"
              prefetch={false}
            >
              <div className="spot-card-image">
                <Image
                  src={spot.featured_image}
                  alt={spot.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  // priority は付けない。ランキングはヒーロー(min-height:420px)より下で
                  // LCP候補になり得ず、preload するとヒーロー画像とLCP枠を奪い合う。
                  // 先頭2枚の eager だけ残して遅延を避ける。
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
                    {localeSlug ? spot.category.name : extractTownAddress(spot.address, spot.category.name)}
                  </span>
                  <div className="spot-card-rating">
                    <Star size={14} fill="#eab308" stroke="none" />
                    <span>{spot.rating_avg.toFixed(1)}</span>
                  </div>
                </div>
                <h3 className="spot-card-title">{spot.name}</h3>
                {subScores.length > 0 && (
                  <ul className="spot-card-subscores">
                    {subScores.map(([name, score]) => (
                      <li key={name}>
                        {name}<b>{score.toFixed(1)}</b>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="spot-card-lead">{spot.lead}</p>
                {stationText && !localeSlug && (
                  <p className="spot-card-station">
                    <Train size={11} aria-hidden="true" />
                    <span className="sr-only">最寄駅：</span>
                    <span className="spot-card-station-text">{stationText}</span>
                  </p>
                )}
              </div>
            </Link>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
