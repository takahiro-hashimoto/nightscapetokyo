import NavigationProgressSlot from "@/components/layout/NavigationProgressSlot";
import AdSenseConditional from "@/components/ads/AdSenseConditional";
import SmoothTocScroll from "@/components/common/SmoothTocScroll";

export default function RootShell({
  headContent,
  children,
}: {
  headContent?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {headContent}
      <NavigationProgressSlot />
      <SmoothTocScroll />
      <AdSenseConditional>{children}</AdSenseConditional>
    </>
  );
}
