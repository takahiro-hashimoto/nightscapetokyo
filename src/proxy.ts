import { type NextRequest, NextResponse } from "next/server";

/** サポートする非日本語ロケールスラッグ */
const LOCALE_SLUGS = ["en", "ko", "tw", "cn"] as const;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  // ロケールプレフィックスを検出して x-locale ヘッダーにセット
  const localeSlug = LOCALE_SLUGS.find(
    (s) => pathname === `/${s}` || pathname.startsWith(`/${s}/`)
  );
  requestHeaders.set("x-locale", localeSlug ?? "ja");

  // SEO方針: / は常に日本語トップとして安定運用する。
  // ロケール誘導は UI（言語スイッチャー）で行い、サーバーリダイレクトはしない。
  // canonical / hreflang / sitemap の x-default はすべて / を日本語として扱っている。

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const proxyConfig = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
