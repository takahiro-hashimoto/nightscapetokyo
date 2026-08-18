"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AdsProvider } from "@/contexts/AdsContext";
import AdSenseScrollLoader from "./AdSenseScrollLoader";
import { isAdHost } from "@/lib/ad-hosts";

const isProd = process.env.NODE_ENV === "production";

/**
 * pathname に基づいて AdSense の表示可否を決定するクライアントコンポーネント。
 * RootShell を static にするため、headers() の代わりに usePathname() を使う。
 */
export default function AdSenseConditional({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ホスト名はブラウザでしか判定できない。SSR 時は false のままにし、
  // マウント後に本番ホストであれば有効化する。広告の読み込み自体が
  // スクロール契機のクライアント処理なので、1 tick 遅れても実害はない。
  const [adsAllowed, setAdsAllowed] = useState(false);
  useEffect(() => {
    setAdsAllowed(isAdHost());
  }, []);

  const showAds = isProd && adsAllowed && pathname !== "/article/";

  return (
    <AdsProvider showAds={showAds}>
      {children}
      {showAds && <AdSenseScrollLoader />}
    </AdsProvider>
  );
}
