import { NextResponse } from "next/server";
import { getSpotsForMap, getSpotsForMapTranslated } from "@/lib/supabase/queries";

export const revalidate = 3600;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale");
  const spots = locale
    ? await getSpotsForMapTranslated(locale)
    : await getSpotsForMap();
  return NextResponse.json(spots);
}
