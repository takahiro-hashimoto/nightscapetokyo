"use client";

import { useEffect } from "react";

/**
 * AdSense スクリプトをスクロール時に遅延ロードする。
 * LCP 画像との帯域競合を避けるために初回スクロールまで読み込みを遅らせる。
 * スクロールがない場合は 4 秒後にフォールバックとして読み込む。
 */
export default function AdSenseScrollLoader({ nonce }: { nonce?: string }) {
  useEffect(() => {
    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;

      const s = document.createElement("script");
      s.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1569785771112521";
      s.crossOrigin = "anonymous";
      s.async = true;
      if (nonce) s.nonce = nonce;
      document.head.appendChild(s);
    };

    // 初回スクロールまたは 4 秒後のフォールバック
    const timer = setTimeout(load, 4000);
    window.addEventListener("scroll", load, { once: true, passive: true });
    window.addEventListener("touchstart", load, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", load);
      window.removeEventListener("touchstart", load);
    };
  }, [nonce]);

  return null;
}
