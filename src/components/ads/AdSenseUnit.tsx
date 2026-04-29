"use client";

import { useEffect, useRef } from "react";
import { useShowAds } from "@/contexts/AdsContext";
import type { AdSlotConfig } from "@/lib/ads";

type Props = AdSlotConfig & {
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

/** フォーマット別の想定高さ（CLS 防止 + ローカルプレースホルダー高さの基準） */
const FORMAT_MIN_HEIGHT: Record<AdSlotConfig["format"], number> = {
  auto: 100,        // レスポンシブ矩形: バナー相当
  fluid: 200,       // インアーティクル: 段落高相当
  autorelaxed: 280, // Multiplex: カードグリッド相当
};

/**
 * Google AdSense 広告ユニット
 *
 * パフォーマンス対策:
 * - Intersection Observer でビューポート手前 200px に入るまで push() しない
 *   → 画面外の広告リクエストを抑制しメインスレッドの負荷を分散
 * - フォーマット別 minHeight を指定して CLS を防止
 */
export default function AdSenseUnit({ slot, format = "auto", layout, label, className }: Props) {
  const showAds = useShowAds();
  const containerRef = useRef<HTMLDivElement>(null);
  const minHeight = FORMAT_MIN_HEIGHT[format];

  useEffect(() => {
    if (!showAds || !containerRef.current) return;

    const el = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const ins = el.querySelector<HTMLElement>("ins.adsbygoogle");
          console.debug(`[AdSense] IntersectionObserver fired | slot: ${slot} | status: ${ins?.dataset.adsbygoogleStatus ?? "none"} | t: ${Date.now()}`);
          if (!ins?.dataset.adsbygoogleStatus) {
            try {
              console.debug(`[AdSense] push() start | slot: ${slot} | t: ${Date.now()}`);
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              console.debug(`[AdSense] push() done  | slot: ${slot} | t: ${Date.now()}`);
            } catch (e) {
              console.warn(`[AdSense] push() error | slot: ${slot}`, e);
            }
          }
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // ビューポート 200px 手前でトリガー
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [showAds]);

  if (!showAds) {
    return (
      <div className={className} aria-hidden="true">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight,
            background: "#f3f4f6",
            border: "1px dashed #d1d5db",
            borderRadius: 4,
            color: "#9ca3af",
            fontSize: 12,
            userSelect: "none",
            gap: 4,
          }}
        >
          <div>広告エリア{label ? `（${label}）` : ""}</div>
          <div style={{ fontSize: 10, color: "#6b7280", fontFamily: "monospace" }}>
            slot: {slot} / {format}{layout ? ` / ${layout}` : ""}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className} ref={containerRef}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          minHeight, // CLS 防止: フォーマット別に広告ロード前のスペースを確保
        }}
        data-ad-client="ca-pub-1569785771112521"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { "data-ad-layout": layout } : {})}
        data-full-width-responsive="true"
      />
    </div>
  );
}
