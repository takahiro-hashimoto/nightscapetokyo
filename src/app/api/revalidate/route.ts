import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag("spots");
  revalidateTag("areas");
  revalidateTag("articles");
  return NextResponse.json({ revalidated: true, at: new Date().toISOString() });
}
