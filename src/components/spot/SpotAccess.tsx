import { sanitizeHtml } from "@/lib/sanitize";
import { MapPinned } from "lucide-react";
import type { AccessLabels } from "@/lib/i18n-labels";

type Props = {
  station: string | null;
  parking: string | null;
  map: string | null;
  spotName: string;
  labels?: AccessLabels;
};

export default function SpotAccess({ station, parking, map, spotName, labels }: Props) {
  if (!station && !parking && !map) return null;

  const l = labels ?? {
    heading: (name: string) => `${name}の行き方・アクセス方法`,
    caption: "アクセス情報",
    station: "電車・最寄駅",
    parking: "駐車場",
    map: "地図",
  };

  return (
    <section
      className="content-card card-padding cv-auto"
      id="access"
      aria-labelledby="access-heading"
    >
      <h2 id="access-heading">
        <span className="heading-icon">
          <MapPinned size={18} aria-hidden="true" />
        </span>
        {l.heading(spotName)}
      </h2>

      {(station || parking) && (
        <div className="table-wrapper">
          <table className="info-table">
            <caption className="visually-hidden">{l.caption}</caption>
            <tbody>
              {station && (
                <tr>
                  <th scope="row">{l.station}</th>
                  <td dangerouslySetInnerHTML={{ __html: sanitizeHtml(station) }} />
                </tr>
              )}
              {parking && (
                <tr>
                  <th scope="row">{l.parking}</th>
                  <td dangerouslySetInnerHTML={{ __html: sanitizeHtml(parking) }} />
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {map && (
        <div
          className="map-wrapper"
          aria-label={l.map}
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(map).replace(/<iframe /g, '<iframe loading="lazy" ') }}
        />
      )}
    </section>
  );
}
