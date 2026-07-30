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
 * matcher は "/admin"（認証ゲート）のみ。
 * 全リクエストで走らせると Vercel の課金対象実行が増えるため絞っている。
 *
 * "/" の Accept-Language 自動リダイレクトは廃止した:
 * - UA でボットを除外していたため、Googlebot には日本語トップ、同条件の人間には
 *   /en/ への 302 という「同一URLでクローラーと人間に別物を返す」状態になっており、
 *   Google のガイドライン上クローキングと判定されうる形だった。
 * - "/" は x-default かつ hreflang="ja" のターゲットでもあり、常に日本語を返すのが
 *   最もクリーン。言語切替はヘッダーの LanguageSwitcher に任せる。
 */

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

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
  matcher: ["/admin/:path*"],
};
