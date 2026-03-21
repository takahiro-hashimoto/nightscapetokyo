import Link from "next/link";
import { MapPin } from "lucide-react";
import type { HomePageLabels } from "@/lib/i18n-labels";

type AreaItem = {
  slug: string;
  name: string;
  spot_count: number;
};

type Props = {
  areas: AreaItem[];
  labels?: HomePageLabels["areaSearch"];
  localeSlug?: string;
};

export default function AreaSearch({ areas, labels, localeSlug }: Props) {
  if (areas.length === 0) return null;

  const prefix = localeSlug ? `/${localeSlug}` : "";

  return (
    <section className="home-section" id="area">
      <div className="home-container">
        <h2 className="home-section-heading">
          <span className="heading-icon">
            <MapPin size={20} />
          </span>
          {labels?.heading ?? "エリア別に夜景が綺麗な場所を探す"}
        </h2>
        <div className="pill-tag-list" style={{ marginTop: 30 }}>
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`${prefix}/${area.slug}`}
              className="pill-tag"
            >
              {labels
                ? labels.areaLabel(area.name, area.spot_count)
                : `${area.name}の夜景（${area.spot_count}）`}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
