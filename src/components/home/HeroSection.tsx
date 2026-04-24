import Image from "next/image";
import HeroSearchInput from "./HeroSearchInput";
import type { HomePageLabels } from "@/lib/i18n-labels";

type Props = {
  labels?: HomePageLabels["hero"];
  localeSlug?: string;
  spotCount?: number;
};

export default function HeroSection({ labels, localeSlug, spotCount }: Props) {
  const l = labels;
  const count = spotCount ?? 200;

  return (
    <section className="hero-section">
      <Image
        src="/hero.webp"
        alt={l?.imgAlt ?? "東京の夜景"}
        className="hero-bg"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        quality={85}
      />
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-catchphrase">
            {l?.catchphrase ?? "輝きの街の魅力、再発見。"}
          </p>
          <h1 className="hero-subtitle">
            {l?.subtitle(count) ?? `デート・撮影などにおすすめの東京の夜景スポットを定番から穴場まで紹介【${count}件掲載】`}
          </h1>
          <HeroSearchInput
            placeholder={l?.searchPlaceholder}
            ariaLabel={l?.searchAriaLabel}
            buttonLabel={l?.searchButton}
            localeSlug={localeSlug}
          />
        </div>
      </div>
    </section>
  );
}
