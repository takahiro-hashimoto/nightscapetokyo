import Image from "next/image";
import Link from "@/components/common/AppLink";
import type { SpotListItem } from "@/lib/types";
import { extractTownAddress } from "@/lib/types";

// 星・電車アイコンは1ページで最大150カード分描かれる。lucide のコンポーネントを毎回展開すると
// HTML と RSC ペイロードの両方に同じ path が数百回並ぶ（/tag/date/ で数百KB）。
// 形は <symbol> で1回だけ定義し、各カードは <use> で参照する（見た目は lucide の Star / TramFront と同じ）
const STAR_ID = "spots-grid-icon-star";
const TRAIN_ID = "spots-grid-icon-train";

function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <symbol id={STAR_ID} viewBox="0 0 24 24">
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </symbol>
      <symbol id={TRAIN_ID} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="16" x="4" y="3" rx="2" />
        <path d="M4 11h16M12 3v8m-4 8-2 3m12 0-2-3M8 15h.01M16 15h.01" />
      </symbol>
    </svg>
  );
}

type Props = {
  spots: SpotListItem[];
  localeSlug?: string;
  closedBadge?: string;
};

export default function SpotsGrid({ spots, localeSlug, closedBadge = "閉鎖済み" }: Props) {
  const sorted = [...spots].sort((a, b) => {
    if ((a.closed ?? false) !== (b.closed ?? false)) return (a.closed ?? false) ? 1 : -1;
    return b.rating_avg - a.rating_avg;
  });

  return (
    <>
    <IconSprite />
    <ul className="area-spot-grid">
      {sorted.map((spot) => {
        const href = localeSlug
          ? `/${localeSlug}/${spot.category.slug}/${spot.slug}`
          : `/${spot.category.slug}/${spot.slug}`;
        const stationText = spot.station_names;
        return (
          <li key={spot.id}>
            <article
              className={`spot-card${spot.closed ? " spot-card--closed" : ""}`}
              itemScope
              itemType="https://schema.org/TouristAttraction"
            >
              <Link href={href} className="spot-card-link" itemProp="url">
                <div className="spot-card-image">
                  {spot.featured_image && (
                    <Image
                      src={spot.featured_image}
                      alt={`${spot.name}の夜景`}
                      fill
                      sizes="(max-width: 768px) calc(50vw - 28px), 320px"
                      itemProp="image"
                    />
                  )}
                  {spot.closed && (
                    <span className="spot-card-closed-badge" aria-label={closedBadge}>
                      {closedBadge}
                    </span>
                  )}
                </div>
                <div className="spot-card-body">
                  <div className="spot-card-meta">
                    <span className="badge spot-card-category">{localeSlug ? spot.category.name : extractTownAddress(spot.address, spot.category.name)}</span>
                    <div
                      className={`spot-card-rating${spot.closed ? " spot-card-rating--closed" : ""}`}
                      itemProp="aggregateRating"
                      itemScope
                      itemType="https://schema.org/AggregateRating"
                    >
                      <meta itemProp="ratingValue" content={spot.rating_avg.toFixed(1)} />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="ratingCount" content={String([spot.rating_beautiful, spot.rating_access, spot.rating_atmosphere, spot.rating_cost].filter(v => v != null).length || 1)} />
                      <svg width="14" height="14" fill={spot.closed ? "#aaa" : "#eab308"} aria-hidden="true" focusable="false">
                        <use href={`#${STAR_ID}`} />
                      </svg>
                      <span aria-label={`評価 ${spot.rating_avg.toFixed(1)}`}>
                        {spot.rating_avg.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <h3 className="spot-card-title" itemProp="name">
                    {spot.name}
                  </h3>
                  <p className="spot-card-lead" itemProp="description">
                    {spot.lead}
                  </p>
                  {stationText && !localeSlug && (
                    <p className="spot-card-station">
                      <svg width="11" height="11" aria-hidden="true" focusable="false">
                        <use href={`#${TRAIN_ID}`} />
                      </svg>
                      <span className="sr-only">最寄駅：</span>
                      <span className="spot-card-station-text">{stationText}</span>
                    </p>
                  )}
                </div>
              </Link>
            </article>
          </li>
        );
      })}
    </ul>
    </>
  );
}
