import NavigationProgressSlot from "@/components/layout/NavigationProgressSlot";
import AdSenseConditional from "@/components/ads/AdSenseConditional";

export default function RootShell({
  headContent,
  children,
}: {
  lang: string;
  headContent?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {headContent}
      <NavigationProgressSlot />
      <AdSenseConditional>{children}</AdSenseConditional>
    </>
  );
}
