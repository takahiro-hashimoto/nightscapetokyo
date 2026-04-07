import {
  MapPin,
  Clock,
  CalendarOff,
  Ticket,
  ArrowUpFromDot,
  Link2,
  Info,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { InfoLabels } from "@/lib/i18n-labels";

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
  };

  const heading = l.heading(spotName);

  const rows = [
    {
      icon: <MapPin size={16} />,
      label: l.address,
      value: address,
      itemProp: "address",
    },
    { icon: <Clock size={16} />, label: l.hours, value: hours, itemProp: "openingHours", isHtml: true },
    { icon: <CalendarOff size={16} />, label: l.holiday, value: holiday },
    { icon: <Ticket size={16} />, label: l.fee, value: money, isHtml: true },
    { icon: <ArrowUpFromDot size={16} />, label: l.height, value: height },
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

  if (rows.length === 0 && linkRows.length === 0 && tags.length === 0)
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
          <span className="features-label">{l.features}</span>
          <div className="tag-card-grid" role="list">
            {tags.map((tag) => (
              <Link
                key={tag.id}
                href={`${tagPrefix}/tag/${tag.slug}`}
                className="tag-card"
                role="listitem"
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
            ))}
          </div>
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
                <td
                  {...(row.itemProp ? { itemProp: row.itemProp } : {})}
                  {...(row.isHtml
                    ? { dangerouslySetInnerHTML: { __html: row.value as string } }
                    : { children: row.value })}
                />
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
              dangerouslySetInnerHTML={{ __html: asoview }}
            />
          )}
          {asoview02 && (
            <div
              className="info-ticket-btn"
              dangerouslySetInnerHTML={{ __html: asoview02 }}
            />
          )}
        </div>
      )}
    </section>
  );
}
