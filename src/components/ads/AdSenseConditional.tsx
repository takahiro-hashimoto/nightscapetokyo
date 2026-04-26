"use client";

import { usePathname } from "next/navigation";
import { AdsProvider } from "@/contexts/AdsContext";
import AdSenseScrollLoader from "./AdSenseScrollLoader";

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
  const showAds = isProd && pathname !== "/article/";

  return (
    <AdsProvider showAds={showAds}>
      {children}
      {showAds && <AdSenseScrollLoader />}
    </AdsProvider>
  );
}
