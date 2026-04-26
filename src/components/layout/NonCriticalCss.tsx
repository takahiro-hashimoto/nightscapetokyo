"use client";

import { useState, useEffect } from "react";

/**
 * Non-critical CSS loader
 *
 * media="print" でブロッキングなしにロード開始し、
 * useEffect（hydration 後）で state 経由で media="all" に切り替える。
 * 直接 DOM 操作ではなく React state を使うことで、
 * React の再レンダリング時に media 属性が "print" に戻る FOUC を防ぐ。
 */
export default function NonCriticalCss({ href }: { href: string }) {
  const [media, setMedia] = useState<string>("print");

  useEffect(() => {
    setMedia("all");
  }, []);

  return (
    <>
      <link rel="stylesheet" href={href} media={media} />
      <noscript>
        <link rel="stylesheet" href={href} />
      </noscript>
    </>
  );
}
