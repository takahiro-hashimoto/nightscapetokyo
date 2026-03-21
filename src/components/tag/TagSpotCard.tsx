import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Banknote, Mountain, Train, ExternalLink } from "lucide-react";
import type { SpotWithRelations } from "@/lib/types";
import TagImageSlider from "./TagImageSlider";

/** ロケール別UIラベル */
const SPOT_CARD_LABELS: Record<string, {
  address: string;
  fee: string;
  height: string;
  hours: string;
  checkin: string;
  checkout: string;
  station: string;
  detail: string;
  morePhotos: string;
  moreHotelPhotos: string;
  nightView: string;
  facilityInfo: (name: string) => string;
}> = {
  ja: {
    address: "住所",
    fee: "料金",
    height: "展望台の高さ",
    hours: "営業時間",
    checkin: "チェックイン",
    checkout: "チェックアウト",
    station: "最寄駅",
    detail: "詳細ページ",
    morePhotos: "この夜景スポットの写真をもっと見る",
    moreHotelPhotos: "このホテルの写真をもっと見る",
    nightView: "の夜景",
    facilityInfo: (name) => `${name}の施設情報`,
  },
  en: {
    address: "Address",
    fee: "Admission",
    height: "Observatory Height",
    hours: "Hours",
    checkin: "Check-in",
    checkout: "Check-out",
    station: "Nearest Station",
    detail: "Details",
    morePhotos: "See more photos of this spot",
    moreHotelPhotos: "See more photos of this hotel",
    nightView: " night view",
    facilityInfo: (name) => `${name} facility information`,
  },
  ko: {
    address: "주소",
    fee: "요금",
    height: "전망대 높이",
    hours: "영업시간",
    checkin: "체크인",
    checkout: "체크아웃",
    station: "가까운 역",
    detail: "상세 페이지",
    morePhotos: "이 야경 스폿의 사진 더 보기",
    moreHotelPhotos: "이 호텔의 사진 더 보기",
    nightView: " 야경",
    facilityInfo: (name) => `${name} 시설 정보`,
  },
  tw: {
    address: "地址",
    fee: "費用",
    height: "展望台高度",
    hours: "營業時間",
    checkin: "入住",
    checkout: "退房",
    station: "最近車站",
    detail: "詳細頁面",
    morePhotos: "查看更多這個夜景景點的照片",
    moreHotelPhotos: "查看更多這間飯店的照片",
    nightView: "夜景",
    facilityInfo: (name) => `${name}設施資訊`,
  },
  cn: {
    address: "地址",
    fee: "费用",
    height: "展望台高度",
    hours: "营业时间",
    checkin: "入住",
    checkout: "退房",
    station: "最近车站",
    detail: "详细页面",
    morePhotos: "查看更多这个夜景景点的照片",
    moreHotelPhotos: "查看更多这间酒店的照片",
    nightView: "夜景",
    facilityInfo: (name) => `${name}设施信息`,
  },
};

type Props = {
  spot: SpotWithRelations;
  description: string;
  locale?: string;
};

export default function TagSpotCard({ spot, description, locale }: Props) {
  const l = SPOT_CARD_LABELS[locale ?? "ja"] ?? SPOT_CARD_LABELS.ja;
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

  return (
    <section className="content-card card-padding tag-spot-card">
      <h3 className="tag-spot-name">{name}</h3>

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

      <div className="tag-spot-desc">
        {description.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="table-wrapper" style={{ marginTop: 24 }}>
        <table className="info-table">
          <caption className="visually-hidden">{l.facilityInfo(name)}</caption>
          <tbody>
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
                <td dangerouslySetInnerHTML={{ __html: spot.money }} />
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
                <td dangerouslySetInnerHTML={{ __html: spot.height }} />
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
                <td dangerouslySetInnerHTML={{ __html: spot.hours }} />
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
                <td dangerouslySetInnerHTML={{ __html: spot.station }} />
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
            <div key={i} dangerouslySetInnerHTML={{ __html: link! }} />
          ))}
        </div>
      )}
    </section>
  );
}
