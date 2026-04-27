"use client";

import { useScrollTrigger } from "@/lib/use-scroll-trigger";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function GtmLoader({ gtmId }: { gtmId: string }) {
  useScrollTrigger(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

    const s = document.createElement("script");
    s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    s.async = true;
    document.head.appendChild(s);
  }, [gtmId]);

  return null;
}
