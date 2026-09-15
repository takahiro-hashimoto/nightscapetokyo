import { sanitizeHtml } from "@/lib/sanitize";
import Image from "next/image";
import Link from "@/components/common/AppLink";
import { Star, MapPin, Clock, Banknote, Mountain, Train } from "lucide-react";
import type { CSSProperties } from "react";
import type { SpotWithRelations, SiteLocale } from "@/lib/types";
import { calcRatingAvg } from "@/lib/types";
import { TAG_SPOT_CARD_LABELS, TAG_SLIDER_LABELS, localizeAffiliateHtml } from "@/lib/i18n-labels";
import TagImageSlider from "./TagImageSlider";
import InfoTableCollapsible from "./InfoTableCollapsible";

type Props = {
  spot: SpotWithRelations;
  description: string;
  locale?: string;
  headingLevel?: "h2" | "h3";
  priority?: boolean;
  rank?: number;
  deferRender?: boolean;
};

type InfoRowsProps = {
  spot: SpotWithRelations;
  avg: number;
  ratingItems: { label: string; value: number }[];
  isHotel: boolean;
  l: (typeof TAG_SPOT_CARD_LABELS)["ja"];
};

function SpotInfoRows({ spot, avg, ratingItems, isHotel, l }: InfoRowsProps) {
  return (
    <>
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
              {/* 星5個×2層を SVG で描くと1カード10個になり、/tag/date/ では
                  RSC ペイロードの4割（約330KB）を星の SVG が占めていた。CSS マスク1要素で描く */}
              <span
                className="css-stars"
                style={{ "--rating": Math.min(5, Math.max(0, avg)) } as CSSProperties}
                aria-hidden="true"
              />
              <span className="article-star-score">{avg.toFixed(1)}</span>
            </span>
          </td>
        </tr>
      )}
      {spot.address && (
        <tr>
          <th scope="row">
            <span className="th-icon"><MapPin size={16} /></span>
            {l.address}
          </th>
          <td>{spot.address}</td>
        </tr>
      )}
      {!isHotel && spot.money && (
        <tr>
          <th scope="row">
            <span className="th-icon"><Banknote size={16} /></span>
            {l.fee}
          </th>
          <td dangerouslySetInnerHTML={{ __html: sanitizeHtml(spot.money) }} />
        </tr>
      )}
      {!isHotel && spot.height && (
        <tr>
          <th scope="row">
            <span className="th-icon"><Mountain size={16} /></span>
            {l.height}
          </th>
          <td dangerouslySetInnerHTML={{ __html: sanitizeHtml(spot.height) }} />
        </tr>
      )}
      {!isHotel && spot.hours && (
        <tr>
          <th scope="row">
            <span className="th-icon"><Clock size={16} /></span>
            {l.hours}
          </th>
          <td dangerouslySetInnerHTML={{ __html: sanitizeHtml(spot.hours) }} />
        </tr>
      )}
      {spot.hotel?.checkin && (
        <tr>
          <th scope="row">
            <span className="th-icon"><Clock size={16} /></span>
            {l.checkin}
          </th>
          <td>{spot.hotel.checkin}</td>
        </tr>
      )}
      {spot.hotel?.checkout && (
        <tr>
          <th scope="row">
            <span className="th-icon"><Clock size={16} /></span>
            {l.checkout}
          </th>
          <td>{spot.hotel.checkout}</td>
        </tr>
      )}
      {spot.station && (
        <tr>
          <th scope="row">
            <span className="th-icon"><Train size={16} /></span>
            {l.station}
          </th>
          <td dangerouslySetInnerHTML={{ __html: sanitizeHtml(spot.station) }} />
        </tr>
      )}
    </>
  );
}

export default function TagSpotCard({
  spot,
  description,
  locale,
  headingLevel = "h2",
  priority,
  rank,
  deferRender = false,
}: Props) {
  const Heading = headingLevel;
  const l = TAG_SPOT_CARD_LABELS[(locale ?? "ja") as SiteLocale] ?? TAG_SPOT_CARD_LABELS.ja;
  const sl = TAG_SLIDER_LABELS[(locale ?? "ja") as SiteLocale] ?? TAG_SLIDER_LABELS.ja;
  const name = spot.name || spot.title;
  const categorySlug = spot.category?.slug ?? "";
  const detailHref = locale
    ? `/${locale}/${categorySlug}/${spot.slug}`
    : `/${categorySlug}/${spot.slug}`;
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

  const infoTable = (
    <div className="table-wrapper" style={{ marginTop: 24 }}>
      <table className="info-table">
        <caption className="visually-hidden">{l.facilityInfo(name)}</caption>
        <tbody>
          <SpotInfoRows
            spot={spot}
            avg={avg}
            ratingItems={ratingItems}
            isHotel={isHotel}
            l={l}
          />
        </tbody>
      </table>
    </div>
  );

  return (
    <article className={`content-card card-padding${deferRender ? " cv-auto" : ""}`}>
      <Heading className="card-heading">{name}</Heading>

      {spot.images && spot.images.length >= 2 ? (
        <TagImageSlider
          images={spot.images
            .sort((a, b) => a.sort_order - b.sort_order)
            .slice(0, 4)
            .map((img) => ({ url: img.url, alt: img.alt }))}
          name={name}
          locale={locale}
          priority={priority}
          rank={rank}
        />
      ) : spot.featured_image ? (
        <div className="tag-spot-image">
          <Image
            src={spot.featured_image}
            alt={`${name}${l.nightView}`}
            fill
            sizes="(max-width: 768px) 100vw, 880px"
            priority={priority}
          />
          {rank != null && (
            <span className="tag-slider-rank-badge">{sl.rankBadge(rank)}</span>
          )}
        </div>
      ) : null}

      <div
        className="article-body"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(
            description.includes("<")
              ? description
              : description.split("\n").filter(Boolean).map((l) => `<p>${l}</p>`).join("")
          ),
        }}
      />

      <InfoTableCollapsible expand={l.expand} collapse={l.collapse}>
        {infoTable}
      </InfoTableCollapsible>

      <div className="tag-detail-link-wrapper">
        <Link href={detailHref} className="tag-detail-link">
          {isHotel ? l.moreHotelPhotos : l.morePhotos}
        </Link>
      </div>

      {affiliates.length > 0 && (
        <div className="panel-link-grid">
          {affiliates.map((link, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: sanitizeHtml(localizeAffiliateHtml(link!, locale)) }} />
          ))}
        </div>
      )}
    </article>
  );
}
