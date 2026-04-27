"use client";

import { useScrollTrigger } from "@/lib/use-scroll-trigger";

export default function AdSenseScrollLoader({ nonce }: { nonce?: string }) {
  useScrollTrigger(() => {
    const s = document.createElement("script");
    s.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1569785771112521";
    s.crossOrigin = "anonymous";
    s.async = true;
    if (nonce) s.nonce = nonce;
    document.head.appendChild(s);
  }, [nonce]);

  return null;
}
