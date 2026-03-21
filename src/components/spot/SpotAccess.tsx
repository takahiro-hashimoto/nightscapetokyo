import { MapPinned } from "lucide-react";
import type { AccessLabels } from "@/lib/i18n-labels";

type Props = {
  station: string | null;
  parking: string | null;
  map: string | null;
  labels?: AccessLabels;
};

export default function SpotAccess({ station, parking, map, labels }: Props) {
  if (!station && !parking && !map) return null;

  const l = labels ?? {
    heading: "行き方・アクセスと駐車場",
    caption: "アクセス情報",
    station: "電車・最寄駅",
    parking: "駐車場",
  };

  return (
    <section
      className="content-card card-padding"
      id="access"
      aria-labelledby="access-heading"
    >
      <h2 id="access-heading">
        <span className="heading-icon">
          <MapPinned size={18} aria-hidden="true" />
        </span>
        {l.heading}
      </h2>

      {(station || parking) && (
        <div className="table-wrapper">
          <table className="info-table">
            <caption className="visually-hidden">{l.caption}</caption>
            <tbody>
              {station && (
                <tr>
                  <th scope="row">{l.station}</th>
                  <td dangerouslySetInnerHTML={{ __html: station }} />
                </tr>
              )}
              {parking && (
                <tr>
                  <th scope="row">{l.parking}</th>
                  <td dangerouslySetInnerHTML={{ __html: parking }} />
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {map && (
        <div
          className="map-wrapper"
          aria-label="地図"
          dangerouslySetInnerHTML={{ __html: map }}
        />
      )}
    </section>
  );
}
