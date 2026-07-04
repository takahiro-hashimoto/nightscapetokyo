import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

/*
 * 注意: src/ ディレクトリ構成のため、proxy はこの src/proxy.ts に置く必要がある。
 * （かつてリポジトリ直下に proxy.ts があったが Next.js に認識されず不動作だった）
 *
 * 旧実装にあった CSP + nonce と x-lang/x-nonce ヘッダーは削除した:
 * - nonce ベースの CSP は全ページ静的生成（ISR）と非互換。静的 HTML 内の
 *   Next.js インラインスクリプトはビルド時生成で nonce を持てず、
 *   有効化すると全ページの hydration が壊れる。
 * - x-lang / x-locale / x-nonce ヘッダーを読むコードは存在しない（死にコード）。
 * CSP を導入する場合は nonce に依存しない静的互換の設計で別途検討すること。
 *
 * matcher は "/"（言語リダイレクト）と "/admin"（認証ゲート）のみ。
 * 全リクエストで走らせると Vercel の課金対象実行が増えるため絞っている。
 */

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

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // ── ルートパス: Accept-Language 自動リダイレクト（ボット除外・cookie で再発防止） ──
  if (pathname === "/") {
    const ua = request.headers.get("user-agent") ?? "";
    const isBot = /bot|crawler|spider|googlebot|bingbot|slurp|duckduckbot/i.test(ua);
    const hasCookie = request.cookies.get(PREFERRED_LOCALE_COOKIE)?.value;

    if (!isBot && !hasCookie) {
      const acceptLang = request.headers.get("accept-language") ?? "";
      const detectedLocale = detectLocaleFromHeader(acceptLang);

      if (detectedLocale) {
        const url = request.nextUrl.clone();
        // trailingSlash: true のため末尾スラッシュ付きに直接飛ばし、308への2ホップ目を防ぐ
        url.pathname = `/${detectedLocale}/`;
        const redirectRes = NextResponse.redirect(url, { status: 302 });
        redirectRes.cookies.set(PREFERRED_LOCALE_COOKIE, detectedLocale, {
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
          sameSite: "lax",
        });
        return redirectRes;
      }
    }
    return NextResponse.next();
  }

  // ── admin routes: Supabase auth ゲート（admin layout の requireAdmin と二重防御） ──
  let supabaseResponse = NextResponse.next();

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
          supabaseResponse = NextResponse.next();
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

  return supabaseResponse;
}

// Next.js が読むのは `config` という名前のエクスポートのみ（proxyConfig は無視される）
export const config = {
  matcher: ["/", "/admin/:path*"],
};
