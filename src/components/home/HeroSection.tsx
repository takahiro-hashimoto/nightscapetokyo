import Image from "next/image";
import { Search } from "lucide-react";
import type { HomePageLabels } from "@/lib/i18n-labels";
import HeroSearchInputSlot from "./HeroSearchInputSlot";

type Props = {
  labels?: HomePageLabels["hero"];
  localeSlug?: string;
  spotCount?: number;
};

export default function HeroSection({ labels, localeSlug, spotCount }: Props) {
  const l = labels;
  const count = spotCount ?? 200;
  const prefix = localeSlug ? `/${localeSlug}` : "";

  return (
    <section className="hero-section">
      <Image
        src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/images/hero.webp"
        alt={l?.imgAlt ?? "東京の夜景"}
        className="hero-bg hero-bg--pc"
        fill
        priority
        sizes="(max-width: 768px) 1px, 100vw"
        quality={75}
      />
      <Image
        src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/images/main.webp"
        alt={l?.imgAlt ?? "東京の夜景"}
        className="hero-bg hero-bg--sp"
        fill
        priority
        fetchPriority="high"
        sizes="(max-width: 768px) 100vw, 1px"
        quality={75}
      />
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-catchphrase">
            {l?.catchphrase ?? "輝きの街の魅力、再発見。"}
          </p>
          <h1 className="hero-subtitle">
            {l?.subtitle(count) ?? `デート・撮影などにおすすめの東京の夜景スポットを定番から穴場まで紹介【${count}件掲載】`}
          </h1>
          {/* サーバー側でレンダリングされる静的フォーム。JS なしでも動作する */}
          <form
            id="hero-search"
            className="hero-search"
            action={`${prefix}/search/`}
            role="search"
          >
            <Search size={18} className="hero-search-icon" aria-hidden="true" />
            <input
              id="hero-q"
              type="text"
              name="q"
              placeholder={l?.searchPlaceholder ?? "エリアやキーワードで夜景スポットを検索"}
              className="hero-search-input"
              aria-label={l?.searchAriaLabel ?? "夜景スポットを検索"}
              aria-autocomplete="list"
              autoComplete="off"
            />
            <button
              type="submit"
              className="hero-search-btn"
              aria-label={l?.searchButton ?? "検索"}
            >
              <Search size={18} />
            </button>
          </form>
          {/* 非同期で読み込まれるサジェスト overlay（JS 拡張） */}
          <HeroSearchInputSlot localeSlug={localeSlug} />
        </div>
      </div>
    </section>
  );
}
