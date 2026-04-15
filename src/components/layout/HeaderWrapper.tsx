import { getAreas, getPurposeTags } from "@/lib/supabase/queries";
import Header from "./Header";

export default async function HeaderWrapper() {
  const [areas, tags] = await Promise.all([
    getAreas().catch(() => [] as { slug: string; name: string; spot_count: number }[]),
    getPurposeTags().catch(() => [] as { slug: string; name: string; image_url: string | null; spot_count: number }[]),
  ]);

  return <Header areaData={areas} tagData={tags} />;
}
