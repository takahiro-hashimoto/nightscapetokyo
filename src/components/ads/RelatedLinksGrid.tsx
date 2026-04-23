"use client";

import Image from "next/image";
import Link from "next/link";
import AdSenseUnit from "./AdSenseUnit";

export type RelatedLinkItem = {
  title: string;
  href: string;
  image?: string | null;
};

type Props = {
  items: RelatedLinkItem[];
  /** AdSense ダッシュボードで発行したスロットID */
  adSlot: string;
  /** セクション見出し */
  heading?: string;
  /**
   * 何アイテムおきに広告を挿入するか（デフォルト: 3）
   * 3列グリッドの場合、3 = 1行ごとに1広告セル
   */
  adInterval?: number;
};

/**
 * サイト内リンク + AdSense を格子状に並べる関連コンテンツウィジェット。
 * 既存の .spot-card / .area-spot-grid クラスを流用してデザインを統一する。
 */
export default function RelatedLinksGrid({
  items,
  adSlot,
  heading = "あわせて読みたい",
  adInterval = 3,
}: Props) {
  if (items.length === 0) return null;

  type Cell =
    | { type: "link"; key: string; item: RelatedLinkItem }
    | { type: "ad"; key: string };

  // items を flatMap し、adInterval 枚ごとに広告セルを差し込む
  const cells: Cell[] = items.flatMap((item, index) => {
    const linkCell: Cell = { type: "link", key: `link-${index}`, item };
    if ((index + 1) % adInterval === 0) {
      const adCell: Cell = { type: "ad", key: `ad-${index}` };
      return [linkCell, adCell];
    }
    return [linkCell];
  });

  return (
    <section className="related-section">
      {heading && <h3 className="related-heading">{heading}</h3>}
      <ul className="area-spot-grid">
        {cells.map((cell) => {
          if (cell.type === "ad") {
            return (
              <li key={cell.key} aria-label="広告">
                <div
                  className="spot-card"
                  style={{ position: "relative", overflow: "hidden", height: "100%" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: 6,
                      right: 6,
                      fontSize: 10,
                      lineHeight: 1,
                      background: "rgba(0,0,0,0.45)",
                      color: "#fff",
                      padding: "2px 5px",
                      borderRadius: 3,
                      zIndex: 1,
                      pointerEvents: "none",
                      letterSpacing: "0.05em",
                    }}
                  >
                    PR
                  </span>
                  <AdSenseUnit
                    slot={adSlot}
                    format="auto"
                    className="w-full h-full"
                  />
                </div>
              </li>
            );
          }

          const { item } = cell;
          return (
            <li key={cell.key}>
              <Link href={item.href} className="spot-card spot-card-link">
                <div className="spot-card-image">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 240px"
                    />
                  )}
                </div>
                <div className="spot-card-body">
                  <p className="spot-card-title">{item.title}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
