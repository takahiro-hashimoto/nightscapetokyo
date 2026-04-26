"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function GtmLoader({ gtmId, nonce }: { gtmId: string; nonce?: string }) {
  useEffect(() => {
    let loaded = false;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    const load = () => {
      if (loaded) return;
      loaded = true;
      if (fallbackTimer !== null) clearTimeout(fallbackTimer);

      // dataLayer 初期化（まだ未実施の場合）
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

      const s = document.createElement("script");
      s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      s.async = true;
      if (nonce) s.nonce = nonce;
      document.head.appendChild(s);
    };

    window.addEventListener("scroll", load, { once: true, passive: true });
    window.addEventListener("touchstart", load, { once: true, passive: true });

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
  }, [gtmId, nonce]);

  return null;
}
