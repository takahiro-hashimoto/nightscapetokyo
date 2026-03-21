import { BedDouble, Clock, Sparkles } from "lucide-react";
import type { SpotHotel as SpotHotelType } from "@/lib/types";

type Props = {
  hotel: SpotHotelType | null;
};

export default function SpotHotel({ hotel }: Props) {
  if (!hotel) return null;

  const affiliates = [
    hotel.affiliate_1,
    hotel.affiliate_2,
    hotel.affiliate_3,
    hotel.affiliate_4,
  ].filter(Boolean);

  if (
    !hotel.checkin &&
    !hotel.checkout &&
    !hotel.amenity &&
    affiliates.length === 0
  )
    return null;

  return (
    <section className="content-card card-padding cv-auto">
      <h2>
        <span className="heading-icon">
          <BedDouble size={18} aria-hidden="true" />
        </span>
        周辺ホテル情報
      </h2>

      <div className="table-wrapper">
        <table className="info-table">
          <caption className="visually-hidden">ホテル情報</caption>
          <tbody>
            {(hotel.checkin || hotel.checkout) && (
              <tr>
                <th scope="row">
                  <span className="th-icon">
                    <Clock size={16} />
                  </span>
                  チェックイン / アウト
                </th>
                <td>
                  {hotel.checkin || "—"} / {hotel.checkout || "—"}
                </td>
              </tr>
            )}
            {hotel.amenity && (
              <tr>
                <th scope="row">
                  <span className="th-icon">
                    <Sparkles size={16} />
                  </span>
                  アメニティ
                </th>
                <td>{hotel.amenity}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {affiliates.length > 0 && (
        <div className="panel-link-grid">
          {affiliates.map((link, i) => (
            <div
              key={i}
              dangerouslySetInnerHTML={{ __html: link! }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
