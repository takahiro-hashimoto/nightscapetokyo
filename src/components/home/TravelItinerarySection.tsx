import Link from "next/link";
import type { HomePageLabels } from "@/lib/i18n-labels";

type Props = {
  labels: NonNullable<HomePageLabels["travelItinerary"]>;
  localeSlug: string;
};

const CARD_PATHS = {
  firstVisit: "recommend/",
  free: "tag/free/",
  observatory: "tag/observatory/",
  romantic: "tag/date/",
  tokyoTower: "tag/tokyo-tower/",
  photography: "tag/tokyo-station/",
} as const;

type CardKey = keyof typeof CARD_PATHS;

export default function TravelItinerarySection({ labels, localeSlug }: Props) {
  const base = `/${localeSlug}/`;
  const cardKeys = Object.keys(CARD_PATHS) as CardKey[];

  return (
    <section className="home-section" id="travel-itinerary">
      <div className="home-container">
        <h2 className="home-section-heading">{labels.heading}</h2>
        <p className="home-section-desc">{labels.intro}</p>
        <ul className="travel-itinerary-cards">
          {cardKeys.map((key) => {
            const card = labels.cards[key];
            const href = `${base}${CARD_PATHS[key]}`;
            return (
              <li key={key}>
                <Link href={href} className="travel-itinerary-card">
                  <strong className="travel-itinerary-card-title">{card.title}</strong>
                  <span className="travel-itinerary-card-text">{card.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
