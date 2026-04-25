import { headers } from "next/headers";
import NavigationProgressSlot from "@/components/layout/NavigationProgressSlot";
import { AdsProvider } from "@/contexts/AdsContext";
import AdSenseScrollLoader from "@/components/ads/AdSenseScrollLoader";

const showAdsense = process.env.NODE_ENV === "production";

export default async function RootShell({
  lang: _lang,
  headContent,
  children,
}: {
  lang: string;
  headContent?: React.ReactNode;
  children: React.ReactNode;
}) {
  const headerStore = await headers();
  const nonce = headerStore.get("x-nonce") ?? "";
  const pathname = headerStore.get("x-pathname") ?? "";
  const shouldLoadAdsense = showAdsense && pathname !== "/article/";

  return (
    <>
      {headContent}
      <NavigationProgressSlot />
      <AdsProvider showAds={shouldLoadAdsense}>{children}</AdsProvider>
      {shouldLoadAdsense && <AdSenseScrollLoader nonce={nonce} />}
    </>
  );
}
