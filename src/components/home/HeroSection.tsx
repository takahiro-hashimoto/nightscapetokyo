import { getImageProps } from "next/image";
import { preload } from "react-dom";
import { Search } from "lucide-react";
import type { HomePageLabels } from "@/lib/i18n-labels";
import HeroSearchInputSlot from "./HeroSearchInputSlot";

const HERO_PC_SRC = "https://img.nightscape.tokyo/images/hero.webp";
const HERO_SP_SRC = "https://img.nightscape.tokyo/images/main.webp";
/** globals.css の .hero-bg--pc / --sp の切り替えと同じ境界（768px 以下がスマホ用画像） */
const SP_MEDIA = "(max-width: 768px)";
const PC_MEDIA = "(min-width: 769px)";

type Props = {
  labels?: HomePageLabels["hero"];
  localeSlug?: string;
  spotCount?: number;
};

export default function HeroSection({ labels, localeSlug, spotCount }: Props) {
  const l = labels;
  const count = spotCount ?? 200;
  const prefix = localeSlug ? `/${localeSlug}` : "";
  const alt = l?.imgAlt ?? "東京の夜景";

  // PC 用・スマホ用を別々の <Image priority> で置くと両方が preload され、どの端末でも
  // 表示しない側の画像が LCP 画像と帯域を奪い合う。<picture> のアートディレクションにして
  // 端末ごとに1枚だけ取得させる（Next.js 公式の getImageProps パターン）。
  // sizes は media で PC/SP を分けたので両方 100vw（srcset の幅集合は従来と同じ 640〜1920w）
  const common = {
    alt,
    fill: true,
    sizes: "100vw",
    quality: 75,
    className: "hero-bg",
    loading: "eager",
    fetchPriority: "high",
  } as const;
  const { props: sp } = getImageProps({ ...common, src: HERO_SP_SRC });
  const { props: pc } = getImageProps({ ...common, src: HERO_PC_SRC });

  // getImageProps は preload を出さず、<picture> 内の <img> は React も自動 preload しないため、
  // media 付きで明示的に先読みする（一致する端末でだけ取得され、実質1本になる）
  preload(pc.src, { as: "image", imageSrcSet: pc.srcSet, imageSizes: pc.sizes, fetchPriority: "high", media: PC_MEDIA });
  preload(sp.src, { as: "image", imageSrcSet: sp.srcSet, imageSizes: sp.sizes, fetchPriority: "high", media: SP_MEDIA });

  return (
    <section className="hero-section">
      {/* 配置は globals.css の .hero-section picture / .hero-bg（従来の fill と同じ全面 cover） */}
      <picture>
        <source media={SP_MEDIA} srcSet={sp.srcSet} sizes={sp.sizes} />
        {/* next/image は <picture> を扱えないため getImageProps の結果を素の img に渡す */}
        <img {...pc} alt={alt} />
      </picture>
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
