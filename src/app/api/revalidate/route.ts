import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag("spots", "max");
  revalidateTag("areas", "max");
  revalidateTag("articles", "max");
  return NextResponse.json({ revalidated: true, at: new Date().toISOString() });
}
