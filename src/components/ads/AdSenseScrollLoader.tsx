"use client";

import { useEffect } from "react";

/**
 * AdSense スクリプトをスクロール / タッチ時に遅延ロードする。
 *
 * LCP 画像との帯域競合を避けるため、ページ完全ロード（window.load）後
 * 2 秒が経過するまでスクリプトの読み込みを遅らせる。
 * スクロール / タッチが先に発生した場合は即時ロードする。
 */
export default function AdSenseScrollLoader({ nonce }: { nonce?: string }) {
  useEffect(() => {
    let loaded = false;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    const load = () => {
      if (loaded) return;
      loaded = true;
      if (fallbackTimer !== null) clearTimeout(fallbackTimer);

      const s = document.createElement("script");
      s.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1569785771112521";
      s.crossOrigin = "anonymous";
      s.async = true;
      if (nonce) s.nonce = nonce;
      document.head.appendChild(s);
    };

    // 初回スクロール / タッチで即時ロード
    window.addEventListener("scroll", load, { once: true, passive: true });
    window.addEventListener("touchstart", load, { once: true, passive: true });

    // フォールバック: window.load 後 2 秒（LCP 確定後に発火）
    const scheduleLoad = () => { fallbackTimer = setTimeout(load, 2000); };
    if (document.readyState === "complete") {
      scheduleLoad();
    } else {
      window.addEventListener("load", scheduleLoad, { once: true });
    }

    return () => {
      if (fallbackTimer !== null) clearTimeout(fallbackTimer);
      window.removeEventListener("scroll", load);
      window.removeEventListener("touchstart", load);
      window.removeEventListener("load", scheduleLoad);
    };
  }, [nonce]);

  return null;
}
