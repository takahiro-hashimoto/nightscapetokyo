import { timingSafeEqual } from "crypto";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * 再検証エンドポイント。2系統の呼び出しを受ける。
 *
 * 1. コンテンツ更新時（?secret=... / REVALIDATE_SECRET）
 *    spots / areas / articles タグを一括で無効化する。従来どおり。
 *
 * 2. 日次 Cron（?mode=daily / Authorization: Bearer <CRON_SECRET>）
 *    「日付が進んだこと」でしか古くならないページを再生成する。
 *    トップの日没時刻とタイトルの年、エリアFAQの「現在の季節（N月）」、
 *    /moon/ の満月FAQ、/moon/ /simulator/ の当日の値がこれに当たる。
 *    コンテンツ変更では誰もトリガーしないため Cron が要る。逆にこれがあるので
 *    各ページを revalidate=false にでき、時間ベースの再生成が消えるぶん
 *    ISR Write が減る（/moon/ /simulator/ は最大48回/日 → 確定2回/日）。
 */

/** 日付が進むだけで陳腐化するページ。動的ルートはルートパターンで指定する */
const DAILY_PATHS: { path: string; type: "page" | "layout" }[] = [
  { path: "/", type: "page" },
  { path: "/moon", type: "page" },
  { path: "/simulator", type: "page" },
  // エリア22件 + ロケールトップ4件をルート単位でまとめて無効化する
  { path: "/[category]", type: "page" },
];

function safeEqual(actual: string | null, expected: string | undefined): boolean {
  if (!actual || !expected) return false;
  const a = Buffer.from(actual);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Vercel Cron は Authorization: Bearer <CRON_SECRET> を付けて呼んでくる */
function isValidCron(req: NextRequest): boolean {
  const header = req.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) return false;
  return safeEqual(header.slice(7), process.env.CRON_SECRET);
}

export async function GET(req: NextRequest) {
  // Cron 経路。vercel.json にパスが平文で残るため、シークレットはクエリではなく
  // Authorization ヘッダーで受け取る
  if (req.nextUrl.searchParams.get("mode") === "daily") {
    // CRON_SECRET 未設定だと Vercel は Authorization を付けないので必ず 401 になり、
    // 「Cron は動いているのにページが永久に古いまま」という気づきにくい状態になる。
    // 設定漏れは 401 ではなく 503 で明示的に区別する
    if (!process.env.CRON_SECRET) {
      return NextResponse.json(
        { error: "CRON_SECRET is not configured; daily revalidation is disabled" },
        { status: 503 }
      );
    }
    if (!isValidCron(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    for (const { path, type } of DAILY_PATHS) {
      revalidatePath(path, type);
    }
    return NextResponse.json({
      revalidated: DAILY_PATHS.map((p) => p.path),
      at: new Date().toISOString(),
    });
  }

  if (!safeEqual(req.nextUrl.searchParams.get("secret"), process.env.REVALIDATE_SECRET)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag("spots", "max");
  revalidateTag("areas", "max");
  revalidateTag("articles", "max");
  return NextResponse.json({ revalidated: true, at: new Date().toISOString() });
}
