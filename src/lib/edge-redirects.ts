import { wpImageRedirectTarget } from "./wp-image-redirect";

const APEX = "nightscape.tokyo";
const PRODUCTION_HOSTS = new Set([APEX, `www.${APEX}`]);

/**
 * next.config.ts の trailingSlash: true と同じ規則で末尾スラッシュをそろえる。
 * 最後の区切りが拡張子付き（ファイル）なら付けず、それ以外は付ける。/.well-known は触らない
 */
function withTrailingSlash(pathname: string): string {
  if (pathname === "/" || pathname.startsWith("/.well-known/")) return pathname;
  const trimmed = pathname.replace(/\/+$/, "");
  const last = trimmed.split("/").pop() ?? "";
  return /\.\w+$/.test(last) ? trimmed : `${trimmed}/`;
}

/**
 * Next に渡す前に Worker で返す 301 の行き先。該当しなければ null。
 *
 * どれも1回で最終 URL に着くようにする。以前は http → https（Worker）→ www 外し（Next）や、
 * http → https → 画像の配信元、と2回の転送になっていた。
 * - WordPress 時代の画像 URL: http/https・www の有無に関係なく画像の配信元へ
 * - http または www: https://nightscape.tokyo へ（末尾スラッシュ・クエリも最終形にして）
 */
export function edgeRedirect(url: URL, opts: { enforceHttps: boolean }): string | null {
  if (!PRODUCTION_HOSTS.has(url.hostname)) return null;

  const wpImage = wpImageRedirectTarget(url.pathname);
  if (wpImage) return wpImage;

  const needsHttps = opts.enforceHttps && url.protocol === "http:";
  const isWww = url.hostname !== APEX;
  if (!needsHttps && !isWww) return null;
  return `https://${APEX}${withTrailingSlash(url.pathname)}${url.search}`;
}
