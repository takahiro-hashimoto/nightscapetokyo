import { notFound } from "next/navigation";
import { ALL_LOCALE_SLUGS } from "@/lib/types";

/**
 * (i18n)/[category]/xxx の固定ページで、[category] がロケール以外なら 404 にする。
 * これが無いと /chiyoda/about/ 等が英語版を自己canonical付きで返し重複コンテンツになる。
 *
 * 以前は `dynamicParams = false` で弾いていたが、OpenNext では使えない。
 * fallback:false のルートでキャッシュ（R2）に事前生成分が無いと Next が
 * NoFallbackError を投げ、OpenNext が次の候補 (site)/[category]/[slug] で描き直す。
 * その結果 /en/about/ が「about というスポットは無い」404 としてキャッシュされ、
 * 多言語の固定ページ 8種×4言語が全滅した（2026-09 に発覚）。
 * deploy:quick は R2 にキャッシュを入れず、R2 は14日で自動削除されるので、放置すると必ず再発する。
 * ルートは通常の動的ルートのままにし、ロケール判定はページ側で行う。
 */
export function notFoundUnlessLocale(category: string): void {
  if (!ALL_LOCALE_SLUGS.includes(category)) notFound();
}
