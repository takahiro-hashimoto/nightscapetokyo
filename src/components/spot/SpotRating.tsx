import { Star, MapPin } from "lucide-react";
import type { RatingLabels } from "@/lib/i18n-labels";

type RatingItem = {
  label: string;
  value: number | null;
};

function StarRating({ value }: { value: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const fillPercent = Math.min(100, Math.max(0, (value - (i - 1)) * 100));
    stars.push(
      <span key={i} className="star-icon">
        <Star size={20} fill="#d1d5db" stroke="none" />
        <span className="star-fill" style={{ width: `${fillPercent}%` }}>
          <Star size={20} fill="#eab308" stroke="none" />
        </span>
      </span>
    );
  }
  return <span className="star-rating">{stars}</span>;
}

type Props = {
  name: string | null;
  categoryName: string;
  lead: string | null;
  beautiful: number | null;
  access: number | null;
  atmosphere: number | null;
  cost: number | null;
  closed?: boolean;
  labels?: RatingLabels;
};

export default function SpotRating({
  name,
  categoryName,
  lead,
  beautiful,
  access,
  atmosphere,
  cost,
  closed,
  labels,
}: Props) {
  const l = labels ?? {
    header: (n: string, area: string) => `${n || "スポット"} の夜景（${area}）`,
    beautiful: "美しさ",
    access: "アクセス",
    atmosphere: "雰囲気",
    cost: "コスパ",
    topLink: "東京都内の夜景情報一覧",
    topLinkHref: "/",
  };

  const ratings: RatingItem[] = [
    { label: l.beautiful, value: beautiful },
    { label: l.access, value: access },
    { label: l.atmosphere, value: atmosphere },
    { label: l.cost, value: cost },
  ].filter((r) => r.value !== null);

  if (ratings.length === 0) return null;

  const avg =
    ratings.reduce((sum, r) => sum + (r.value ?? 0), 0) / ratings.length;

  return (
    <section className="content-card" aria-labelledby="rating-heading">
      <h2 id="rating-heading" className="rating-card-header">
        <MapPin size={16} aria-hidden="true" />
        <span>{l.header(name || "Spot", categoryName)}</span>
      </h2>
      <div className="rating-card-body">
        <div className="rating-left">
          <div className="rating-main">
            <StarRating value={avg} />
            <span className="rating-score">{avg.toFixed(1)}</span>
          </div>
          <div className="rating-details">
            {ratings.map((r) => (
              <span key={r.label}>
                {r.label} {r.value}
              </span>
            ))}
          </div>
        </div>
        {lead && (
          <>
            <div className="rating-divider" aria-hidden="true" />
            <div className="rating-right" itemProp="description">
              {lead}
              <p><a className="content-top-link" href={l.topLinkHref}>{l.topLink}</a></p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
