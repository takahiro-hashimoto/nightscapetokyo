import type { HomePageLabels } from "@/lib/i18n-labels";

type Props = {
  labels: NonNullable<HomePageLabels["howToChoose"]>;
};

export default function HowToChooseNightView({ labels }: Props) {
  return (
    <section className="home-section" id="how-to-choose">
      <div className="home-container">
        <h2 className="home-section-heading">{labels.heading}</h2>
        <div className="home-content-card">
          <ul className="how-to-choose-list">
            {labels.items.map((item, i) => (
              <li key={i} className="how-to-choose-item">
                <strong className="how-to-choose-title">{item.title}</strong>
                <p className="how-to-choose-text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
