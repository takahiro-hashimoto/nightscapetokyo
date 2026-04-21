import { sanitizeHtml } from "@/lib/sanitize";
import {
  MapPin,
  Clock,
  CalendarOff,
  CalendarDays,
  Ticket,
  ArrowUpFromDot,
  Link2,
  Info,
  ChevronRight,
  BedDouble,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { InfoLabels } from "@/lib/i18n-labels";
import { localizeAffiliateHtml } from "@/lib/i18n-labels";
import type { SpotHotel, SpotEvent } from "@/lib/types";

type Tag = {
  id: string;
  name: string;
  slug: string;
  image_url: string | null;
};

type Props = {
  spotName: string | null;
  address: string | null;
  hours: string | null;
  holiday: string | null;
  money: string | null;
  height: string | null;
  officialUrl: string | null;
  officialLabel: string | null;
  snsUrl: string | null;
  snsLabel: string | null;
  relationUrl: string | null;
  relationLabel: string | null;
  tags: Tag[];
  labels?: InfoLabels;
  asoview?: string | null;
  asoview02?: string | null;
  localeSlug?: string | null;
  categorySlug?: string | null;
  categoryName?: string | null;
  hotel?: SpotHotel | null;
  event?: SpotEvent | null;
};

export default function SpotInfo({
  spotName,
  address,
  hours,
  holiday,
  money,
  height,
  officialUrl,
  officialLabel,
  snsUrl,
  snsLabel,
  relationUrl,
  relationLabel,
  tags,
  labels,
  asoview,
  asoview02,
  localeSlug,
  categorySlug,
  categoryName,
  hotel,
  event,
}: Props) {
  const tagPrefix = localeSlug ? `/${localeSlug}` : "";
  const l = labels ?? {
    heading: (name: string | null) => name ? `${name}の基本情報` : "基本情報",
    address: "住所",
    hours: "営業時間",
    holiday: "定休日",
    fee: "入場料金",
    height: "展望台の高さ",
    features: "夜景の特徴",
    links: "関連リンク",
    officialSite: "公式サイト",
    sns: "SNS",
    relatedSite: "関連サイト",
    categoryListLabel: (name: string) => `${name}の夜景スポット一覧`,
    eventPeriod: "開催期間",
    eventVenue: "開催場所",
    eventHours: "開催時間",
    hotelInfo: "ホテル情報",
    checkinCheckout: "チェックイン / アウト",
    amenity: "アメニティ",
  };

  const categoryHref =
    categorySlug
      ? `${tagPrefix}/${categorySlug}`
      : null;

  const isEvent = categorySlug === "event";

  const heading = isEvent
    ? (spotName ? `${spotName}のイベント情報（開催期間・時間）` : "イベント情報（開催期間・時間）")
    : l.heading(spotName);
  const isHotel = !!hotel;

  const eventDateValue = event
    ? [event.start_date, event.end_date].filter(Boolean).join(" 〜 ") || null
    : null;

  const rows = [
    {
      icon: <MapPin size={16} />,
      label: l.address,
      value: address,
      itemProp: "address",
    },
    // イベントカテゴリーでは営業時間・定休日を非表示
    ...(!isEvent ? [
      { icon: <Clock size={16} />, label: l.hours, value: hours, itemProp: "openingHours", isHtml: true },
      { icon: <CalendarOff size={16} />, label: l.holiday, value: holiday, isHtml: true },
    ] : []),
    // ホテルでは料金・高さを非表示
    ...(!isHotel ? [
      { icon: <Ticket size={16} />, label: l.fee, value: money, isHtml: true },
      { icon: <ArrowUpFromDot size={16} />, label: l.height, value: height },
    ] : []),
    // イベントカテゴリーのみイベント情報を表示
    ...(isEvent ? [
      { icon: <CalendarDays size={16} />, label: l.eventPeriod, value: eventDateValue },
      { icon: <MapPin size={16} />, label: l.eventVenue, value: event?.place ?? null },
      { icon: <Clock size={16} />, label: l.eventHours, value: event?.event_hour ?? null },
    ] : []),
  ].filter((r) => r.value);

  const linkRows: React.ReactNode[] = [];

  if (officialUrl) {
    linkRows.push(
      <a
        key="official"
        href={officialUrl}
        className="table-link"
        target="_blank"
        rel="noopener noreferrer"
        itemProp="url"
      >
        {officialLabel || l.officialSite}
      </a>
    );
  }
  if (snsUrl) {
    linkRows.push(
      <a
        key="sns"
        href={snsUrl}
        className="table-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {snsLabel || l.sns}
      </a>
    );
  }
  if (relationUrl) {
    linkRows.push(
      <a
        key="relation"
        href={relationUrl}
        className="table-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {relationLabel || l.relatedSite}
      </a>
    );
  }

  const hotelAffiliates = hotel
    ? [hotel.affiliate_1, hotel.affiliate_2, hotel.affiliate_3, hotel.affiliate_4].filter(Boolean)
    : [];
  const hasHotel = hotel && (hotel.checkin || hotel.checkout || hotel.amenity || hotelAffiliates.length > 0);

  if (rows.length === 0 && linkRows.length === 0 && tags.length === 0 && !hasHotel)
    return null;

  return (
    <section
      className="content-card card-padding"
      id="info"
      aria-labelledby="info-heading"
    >
      <h2 id="info-heading">
        <span className="heading-icon">
          <Info size={18} aria-hidden="true" />
        </span>
        {heading}
      </h2>

      {tags.length > 0 && (
        <>
          <h3 className="features-label">{l.features}</h3>
          <ul className="tag-card-grid">
            {tags.map((tag) => (
              <li key={tag.id}>
              <Link
                href={`${tagPrefix}/tag/${tag.slug}`}
                className="tag-card"
              >
                <span className="tag-card-thumb">
                  <Image
                    src={tag.image_url || `/images/tag/${tag.slug}.jpg`}
                    alt=""
                    width={80}
                    height={80}
                    sizes="80px"
                    loading="lazy"
                  />
                </span>
                <span className="tag-card-name">
                  {tag.name}
                </span>
                <ChevronRight size={16} className="tag-card-arrow" aria-hidden="true" />
              </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="table-wrapper">
        <table className="info-table">
          <caption className="visually-hidden">{heading}</caption>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">
                  <span className="th-icon">{row.icon}</span>
                  {row.label}
                </th>
                {row.itemProp === "address" && categoryHref && categoryName ? (
                  <td itemProp="address">
                    {row.value}
                    <span className="address-category-link">
                      （<Link href={categoryHref}>{l.categoryListLabel(categoryName)}</Link>）
                    </span>
                  </td>
                ) : (
                  <td
                    {...(row.itemProp ? { itemProp: row.itemProp } : {})}
                    {...(row.isHtml
                      ? { dangerouslySetInnerHTML: { __html: sanitizeHtml(row.value as string) } }
                      : { children: row.value })}
                  />
                )}
              </tr>
            ))}
            {linkRows.length > 0 && (
              <tr>
                <th scope="row">
                  <span className="th-icon">
                    <Link2 size={16} />
                  </span>
                  {l.links}
                </th>
                <td>
                  {linkRows.map((link, i) => (
                    <span key={i}>
                      {link}
                      {i < linkRows.length - 1 && <br />}
                    </span>
                  ))}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {(asoview || asoview02) && (
        <div className="info-ticket-links">
          {asoview && (
            <div
              className="info-ticket-btn"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(asoview) }}
            />
          )}
          {asoview02 && (
            <div
              className="info-ticket-btn"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(asoview02) }}
            />
          )}
        </div>
      )}

      {hasHotel && (
        <>
          <div className="table-wrapper">
            <table className="info-table">
              <caption className="visually-hidden">{l.hotelInfo}</caption>
              <tbody>
                {(hotel!.checkin || hotel!.checkout) && (
                  <tr>
                    <th scope="row">
                      <span className="th-icon">
                        <BedDouble size={16} />
                      </span>
                      {l.checkinCheckout}
                    </th>
                    <td>
                      {hotel!.checkin || "—"} / {hotel!.checkout || "—"}
                    </td>
                  </tr>
                )}
                {hotel!.amenity && (
                  <tr>
                    <th scope="row">
                      <span className="th-icon">
                        <Sparkles size={16} />
                      </span>
                      {l.amenity}
                    </th>
                    <td>{hotel!.amenity}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {hotelAffiliates.length > 0 && (
            <div className="panel-link-grid">
              {hotelAffiliates.map((link, i) => (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(localizeAffiliateHtml(link!, localeSlug)) }}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
