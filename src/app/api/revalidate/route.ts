import { timingSafeEqual } from "crypto";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

function isValidSecret(secret: string | null): boolean {
  const expected = process.env.REVALIDATE_SECRET;
  if (!secret || !expected) return false;
  const a = Buffer.from(secret);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (!isValidSecret(secret)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag("spots", "max");
  revalidateTag("areas", "max");
  revalidateTag("articles", "max");
  return NextResponse.json({ revalidated: true, at: new Date().toISOString() });
}
