"use client";

import { useEffect, useRef } from "react";

/**
 * Non-critical CSS loader
 *
 * media="print" でブロッキングなしにロード開始し、
 * useEffect（hydration 後に必ず実行）で media="all" に切り替える。
 *
 * onLoad だけだと「CSS が hydration より先にキャッシュから返ってきた場合に
 * イベントが発火しない」レースコンディションが起きるため useEffect で補完する。
 */
export default function NonCriticalCss({ href }: { href: string }) {
  const linkRef = useRef<HTMLLinkElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;

    const apply = () => { link.media = "all"; };

    if (link.sheet) {
      // hydration 時点ですでにロード済み（キャッシュヒット等）
      apply();
    } else {
      link.addEventListener("load", apply, { once: true });
    }

    return () => link.removeEventListener("load", apply);
  }, []);

  return (
    <>
      <link
        ref={linkRef}
        rel="stylesheet"
        href={href}
        media="print"
      />
      <noscript>
        <link rel="stylesheet" href={href} />
      </noscript>
    </>
  );
}
