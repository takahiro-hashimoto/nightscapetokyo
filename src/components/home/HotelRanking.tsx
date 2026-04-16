import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight } from "lucide-react";
import type { SpotListItem } from "@/lib/types";
import type { HomePageLabels } from "@/lib/i18n-labels";

type Props = {
  hotels: SpotListItem[];
  labels?: HomePageLabels["hotelRanking"];
  localeSlug?: string;
};

export default function HotelRanking({ hotels, labels, localeSlug }: Props) {
  const currentYear = new Date().getFullYear();
  if (hotels.length === 0) return null;

  const prefix = localeSlug ? `/${localeSlug}` : "";

  return (
    <section className="home-section" id="hotel-ranking">
      <div className="home-container">
        <h2 className="home-section-heading">
          {labels?.heading(currentYear) ?? `東京都内の夜景が綺麗なホテル【${currentYear}年版】`}
        </h2>
        <p className="home-section-desc">
          {labels?.desc ?? "客室や最上階レストランから上質な東京の夜景が楽しめるホテルを厳選。記念日やデートにもおすすめです。実際に宿泊して撮影した写真やレポートが整っているのでぜひチェックしてみてください。"}
        </p>
        <ol className="ranking-grid ranking-grid-4">
          {hotels.map((hotel, i) => (
            <li key={hotel.id}>
            <Link
              href={`${prefix}/${hotel.category.slug}/${hotel.slug}`}
              className="spot-card"
            >
              <div className="spot-card-image">
                <Image
                  src={hotel.featured_image}
                  alt={hotel.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                />
                <span
                  className={`ranking-badge ${i < 3 ? "ranking-badge-top" : ""}`}
                >
                  {i + 1}
                </span>
              </div>
              <div className="spot-card-body">
                <div className="spot-card-meta">
                  <span className="badge spot-card-category">
                    {hotel.category.name}
                  </span>
                  <div className="spot-card-rating">
                    <Star size={14} fill="#eab308" stroke="none" />
                    <span>{hotel.rating_avg.toFixed(1)}</span>
                  </div>
                </div>
                <h3 className="spot-card-title">{hotel.name}</h3>
                <p className="spot-card-lead">{hotel.lead}</p>
              </div>
            </Link>
            </li>
          ))}
        </ol>
        <div className="home-section-more">
          <Link href={`${prefix}/tag/hotel`} className="home-more-link">
            {labels?.moreLink ?? "東京の夜景が綺麗なおすすめホテル"}
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
