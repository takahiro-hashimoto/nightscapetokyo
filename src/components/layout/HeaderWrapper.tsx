import { getSiteChromeData } from "@/lib/supabase/queries";
import Header from "./Header";

export default async function HeaderWrapper({ locale }: { locale?: string | null }) {
  const { areas, tags, spotCount } = await getSiteChromeData(locale ?? null);

  return <Header areaData={areas} tagData={tags} spotCount={spotCount} locale={locale ?? null} />;
}
