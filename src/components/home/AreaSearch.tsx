import Link from "next/link";
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
          {labels?.heading ?? "エリア別に夜景が綺麗な場所を探す"}
        </h2>
        <p className="home-section-desc">
          {"渋谷・新宿・お台場など、行きたいエリアから東京の夜景スポットを探せます。"}
        </p>
        <div className="pill-tag-list" style={{ marginTop: 30 }}>
          {areas.map((area) => {
            const displayName = labels?.areaNames?.[area.slug] ?? area.name;
            return (
              <Link
                key={area.slug}
                href={`${prefix}/${area.slug}`}
                className="pill-tag"
              >
                {labels
                  ? labels.areaLabel(displayName, area.spot_count)
                  : `${displayName}の夜景（${area.spot_count}）`}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
