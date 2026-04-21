import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

/** URL slug → BCP 47 lang tag */
const LANG_MAP: Record<string, string> = {
  en: "en",
  ko: "ko",
  tw: "zh-Hant",
  cn: "zh-Hans",
};

// ── Accept-Language 自動ロケール検出 ──

/** Accept-Language の言語タグ → URL スラッグ */
const ACCEPT_LANG_TO_LOCALE: Record<string, string> = {
  en: "en",
  ko: "ko",
  "zh-tw": "tw",
  "zh-hant": "tw",
  "zh-hk": "tw",
  "zh-mo": "tw",
  zh: "cn",
  "zh-cn": "cn",
  "zh-hans": "cn",
  "zh-sg": "cn",
};

const PREFERRED_LOCALE_COOKIE = "preferred_locale";

function parseAcceptLanguage(header: string): string[] {
  return header
    .split(",")
    .map((part) => {
      const [lang, q] = part.trim().split(";q=");
      return { lang: lang.trim().toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .map((item) => item.lang);
}

function detectLocaleFromHeader(header: string): string | null {
  for (const lang of parseAcceptLanguage(header)) {
    if (ACCEPT_LANG_TO_LOCALE[lang]) return ACCEPT_LANG_TO_LOCALE[lang];
    const primary = lang.split("-")[0];
    if (primary && ACCEPT_LANG_TO_LOCALE[primary]) return ACCEPT_LANG_TO_LOCALE[primary];
  }
  return null;
}

function buildCsp(nonce: string): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://maps.googleapis.com https://maps.gstatic.com https://platform.twitter.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' data: https://fonts.gstatic.com",
    "img-src 'self' data: blob: https:",
    "frame-src https://www.google.com https://docs.google.com https://www.youtube.com https://www.youtube-nocookie.com https://platform.twitter.com",
    "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://maps.googleapis.com https:",
    "worker-src 'self' blob:",
  ].join("; ");
}

export async function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildCsp(nonce);
  const pathname = request.nextUrl.pathname;

  // ── i18n routes: set x-lang and x-nonce headers ──
  if (!pathname.startsWith("/admin")) {
    const localeMatch = pathname.match(/^\/(en|ko|tw|cn)(\/|$)/);
    const lang = localeMatch ? LANG_MAP[localeMatch[1]] ?? "ja" : "ja";
    const localeSlug = localeMatch ? localeMatch[1] : "";

    // ── Accept-Language 自動リダイレクト（ルートパスのみ・ボット除外） ──
    if (pathname === "/") {
      const ua = request.headers.get("user-agent") ?? "";
      const isBot = /bot|crawler|spider|googlebot|bingbot|slurp|duckduckbot/i.test(ua);
      const hasCookie = request.cookies.get(PREFERRED_LOCALE_COOKIE)?.value;

      if (!isBot && !hasCookie) {
        const acceptLang = request.headers.get("accept-language") ?? "";
        const detectedLocale = detectLocaleFromHeader(acceptLang);

        if (detectedLocale) {
          const url = request.nextUrl.clone();
          url.pathname = `/${detectedLocale}`;
          const redirectRes = NextResponse.redirect(url, { status: 302 });
          redirectRes.cookies.set(PREFERRED_LOCALE_COOKIE, detectedLocale, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
            sameSite: "lax",
          });
          redirectRes.headers.set("Content-Security-Policy", csp);
          return redirectRes;
        }
      }
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-lang", lang);
    requestHeaders.set("x-locale", localeSlug);
    requestHeaders.set("x-nonce", nonce);

    const response = NextResponse.next({ request: { headers: requestHeaders } });
    response.headers.set("Content-Security-Policy", csp);
    return response;
  }

  // ── admin routes: Supabase auth + nonce ──
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  let supabaseResponse = NextResponse.next({ request: { headers: requestHeaders } });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request: { headers: requestHeaders } });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLoginPage = pathname === "/admin/login";

  if (!user && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  if (user && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  supabaseResponse.headers.set("Content-Security-Policy", csp);
  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|images|fonts|css|api).*)",
  ],
};
