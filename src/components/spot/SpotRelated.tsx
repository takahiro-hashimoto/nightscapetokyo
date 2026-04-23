import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { SpotListItem } from "@/lib/types";
import type { RelatedLabels } from "@/lib/i18n-labels";

type Props = {
  spots: SpotListItem[];
  areaName: string;
  areaSlug: string;
  labels: RelatedLabels;
  localeSlug?: string | null;
};

export default function SpotRelated({ spots, areaName, areaSlug, labels, localeSlug }: Props) {
  if (spots.length === 0) return null;

  const areaHref = localeSlug ? `/${localeSlug}/${areaSlug}` : `/${areaSlug}`;

  return (
    <section className="related-section">
      <h3 className="related-heading">
        {labels.heading(areaName)}
      </h3>
      <ul className="ranking-grid ranking-grid-4">
        {spots.map((spot) => (
          <li key={spot.id}>
            <Link
              href={localeSlug ? `/${localeSlug}/${spot.category.slug}/${spot.slug}` : `/${spot.category.slug}/${spot.slug}`}
              className="spot-card"
            >
              <div className="spot-card-image">
                {spot.featured_image && (
                  <Image
                    src={spot.featured_image}
                    alt={labels.imageAlt(spot.name)}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 240px"
                  />
                )}
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
                <h4 className="spot-card-title">{spot.name}</h4>
                <p className="spot-card-lead">{spot.lead}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
