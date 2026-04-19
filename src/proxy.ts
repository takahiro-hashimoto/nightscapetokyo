import { type NextRequest, NextResponse } from "next/server";

/** サポートする非日本語ロケールスラッグ */
const LOCALE_SLUGS = ["en", "ko", "tw", "cn"] as const;
type LocaleSlug = (typeof LOCALE_SLUGS)[number];

/**
 * Accept-Language ヘッダーを解析してロケールスラッグを返す。
 * 日本語が最優先の場合、またはマッチしない場合は null を返す。
 */
function detectLocale(acceptLanguage: string | null): LocaleSlug | null {
  if (!acceptLanguage) return null;

  const langs = acceptLanguage
    .split(",")
    .map((entry) => {
      const [lang, q] = entry.trim().split(";q=");
      return { lang: lang.trim().toLowerCase(), q: q ? parseFloat(q) : 1.0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of langs) {
    if (lang === "ja" || lang.startsWith("ja-")) return null;
    if (lang === "ko" || lang.startsWith("ko-")) return "ko";
    if (lang === "zh-tw" || lang === "zh-hant") return "tw";
    if (lang === "zh-cn" || lang === "zh-hans" || lang === "zh") return "cn";
    if (lang.startsWith("en")) return "en";
  }

  return null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  // ルートパス（/）へのアクセス時のみロケールリダイレクトを行う。
  // NEXT_LOCALE クッキーが設定されている場合はユーザーの明示的な選択を尊重する。
  if (pathname === "/") {
    const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;

    // クッキーで明示的に選択済みのロケールがあればそこへリダイレクト
    if (localeCookie && (LOCALE_SLUGS as readonly string[]).includes(localeCookie)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${localeCookie}`;
      return NextResponse.redirect(url, { status: 302 });
    }

    // クッキーなし（初回訪問）の場合は Accept-Language から検出してリダイレクト
    if (!localeCookie) {
      const detected = detectLocale(request.headers.get("Accept-Language"));
      if (detected) {
        const url = request.nextUrl.clone();
        url.pathname = `/${detected}`;
        const response = NextResponse.redirect(url, { status: 302 });
        // 次回以降の訪問でも同じロケールに誘導する（30日間）
        response.cookies.set("NEXT_LOCALE", detected, {
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
          sameSite: "lax",
        });
        return response;
      }
    }
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const proxyConfig = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
