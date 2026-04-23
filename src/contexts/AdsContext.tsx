"use client";

import { createContext, useContext } from "react";

/**
 * 広告表示フラグを子コンポーネントへ伝播する Context。
 * RootLayout（Server Component）で showAdsense を計算し、
 * AdsProvider に渡すことで全 AdSenseUnit が参照できる。
 */
const AdsContext = createContext(false);

export function AdsProvider({
  children,
  showAds,
}: {
  children: React.ReactNode;
  showAds: boolean;
}) {
  return <AdsContext.Provider value={showAds}>{children}</AdsContext.Provider>;
}

export function useShowAds(): boolean {
  return useContext(AdsContext);
}
