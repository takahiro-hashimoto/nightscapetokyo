import { sanitizeHtml } from "@/lib/sanitize";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock, Banknote, Mountain, Train, ExternalLink } from "lucide-react";
import type { SpotWithRelations, SiteLocale } from "@/lib/types";
import { calcRatingAvg } from "@/lib/types";
import { TAG_SPOT_CARD_LABELS } from "@/lib/i18n-labels";
import TagImageSlider from "./TagImageSlider";


type Props = {
  spot: SpotWithRelations;
  description: string;
  locale?: string;
};

export default function TagSpotCard({ spot, description, locale }: Props) {
  const l = TAG_SPOT_CARD_LABELS[(locale ?? "ja") as SiteLocale] ?? TAG_SPOT_CARD_LABELS.ja;
  const name = spot.name || spot.title;
  const categorySlug = spot.category?.slug ?? "";
  const detailHref = `/${categorySlug}/${spot.slug}`;
  const isHotel = !!spot.hotel;

  const affiliates = spot.hotel
    ? [
        spot.hotel.affiliate_1,
        spot.hotel.affiliate_2,
        spot.hotel.affiliate_3,
        spot.hotel.affiliate_4,
      ].filter(Boolean)
    : [];

  const avg = calcRatingAvg(spot);
  const ratingItems = [
    { label: "美しさ", value: spot.rating_beautiful },
    { label: "アクセス", value: spot.rating_access },
    { label: "雰囲気", value: spot.rating_atmosphere },
    { label: "コスパ", value: spot.rating_cost },
  ].filter((r): r is { label: string; value: number } => r.value != null);

  return (
    <article className="content-card card-padding">
      <h2>{name}</h2>

      {spot.images && spot.images.length >= 2 ? (
        <TagImageSlider
          images={spot.images
            .sort((a, b) => a.sort_order - b.sort_order)
            .slice(0, 4)
            .map((img) => ({ url: img.url, alt: img.alt }))}
          name={name}
          locale={locale}
        />
      ) : spot.featured_image ? (
        <div className="tag-spot-image">
          <Image
            src={spot.featured_image}
            alt={`${name}${l.nightView}`}
            fill
            sizes="(max-width: 768px) 100vw, 880px"
          />
        </div>
      ) : null}

      <div className="article-body">
        {description.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="table-wrapper" style={{ marginTop: 24 }}>
        <table className="info-table">
          <caption className="visually-hidden">{l.facilityInfo(name)}</caption>
          <tbody>
            {ratingItems.length > 0 && (
              <tr>
                <th scope="row">
                  <span className="th-icon">
                    <Star size={16} fill="currentColor" stroke="none" />
                  </span>
                  {l.rating}
                </th>
                <td>
                  <span className="article-star-wrapper">
                    <span className="article-star-rating">
                      {[1, 2, 3, 4, 5].map((i) => {
                        const fill = Math.min(100, Math.max(0, (avg - (i - 1)) * 100));
                        return (
                          <span key={i} className="star-icon">
                            <Star size={20} fill="#d1d5db" stroke="none" aria-hidden="true" />
                            <span className="star-fill" style={{ width: `${fill}%` }}>
                              <Star size={20} fill="#eab308" stroke="none" aria-hidden="true" />
                            </span>
                          </span>
                        );
                      })}
                    </span>
                    <span className="article-star-score">{avg.toFixed(1)}</span>
                  </span>
                </td>
              </tr>
            )}
            {spot.address && (
              <tr>
                <th scope="row">
                  <span className="th-icon">
                    <MapPin size={16} />
                  </span>
                  {l.address}
                </th>
                <td>{spot.address}</td>
              </tr>
            )}

            {/* スポット固有: 料金・高さ・営業時間 */}
            {!isHotel && spot.money && (
              <tr>
                <th scope="row">
                  <span className="th-icon">
                    <Banknote size={16} />
                  </span>
                  {l.fee}
                </th>
                <td dangerouslySetInnerHTML={{ __html: sanitizeHtml(spot.money) }} />
              </tr>
            )}
            {!isHotel && spot.height && (
              <tr>
                <th scope="row">
                  <span className="th-icon">
                    <Mountain size={16} />
                  </span>
                  {l.height}
                </th>
                <td dangerouslySetInnerHTML={{ __html: sanitizeHtml(spot.height) }} />
              </tr>
            )}
            {!isHotel && spot.hours && (
              <tr>
                <th scope="row">
                  <span className="th-icon">
                    <Clock size={16} />
                  </span>
                  {l.hours}
                </th>
                <td dangerouslySetInnerHTML={{ __html: sanitizeHtml(spot.hours) }} />
              </tr>
            )}

            {/* ホテル固有: チェックイン・チェックアウト */}
            {spot.hotel?.checkin && (
              <tr>
                <th scope="row">
                  <span className="th-icon">
                    <Clock size={16} />
                  </span>
                  {l.checkin}
                </th>
                <td>{spot.hotel.checkin}</td>
              </tr>
            )}
            {spot.hotel?.checkout && (
              <tr>
                <th scope="row">
                  <span className="th-icon">
                    <Clock size={16} />
                  </span>
                  {l.checkout}
                </th>
                <td>{spot.hotel.checkout}</td>
              </tr>
            )}

            {spot.station && (
              <tr>
                <th scope="row">
                  <span className="th-icon">
                    <Train size={16} />
                  </span>
                  {l.station}
                </th>
                <td dangerouslySetInnerHTML={{ __html: sanitizeHtml(spot.station) }} />
              </tr>
            )}
            <tr>
              <th scope="row">
                <span className="th-icon">
                  <ExternalLink size={16} />
                </span>
                {l.detail}
              </th>
              <td>
                <Link href={detailHref} className="tag-detail-link">
                  {isHotel ? l.moreHotelPhotos : l.morePhotos}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {affiliates.length > 0 && (
        <div className="panel-link-grid">
          {affiliates.map((link, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: sanitizeHtml(link!) }} />
          ))}
        </div>
      )}
    </article>
  );
}
