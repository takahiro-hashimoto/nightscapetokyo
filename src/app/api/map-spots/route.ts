import { NextResponse } from "next/server";
import { getSpotsForMap, getSpotsForMapTranslated } from "@/lib/supabase/queries";

export const revalidate = false;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale");
  const spots = locale
    ? await getSpotsForMapTranslated(locale)
    : await getSpotsForMap();
  // CDN で配信して関数実行（= Data Cache の ISR Read）を減らす。
  // スポット追加は最大1時間遅れでマップに反映される
  return NextResponse.json(spots, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
