/**
 * 広告・計測タグを動かしてよいホスト。
 *
 * 本番ドメイン以外（Cloudflare 移行検証の *.workers.dev、Vercel のプレビューURL、
 * localhost など）では AdSense と GTM を動かさない。
 *
 * - AdSense: 同じ内容のサイトが複数ホストで広告を出すと無効トラフィックとみなされうる
 * - GTM:     検証環境のアクセスが本番のアナリティクスに混ざる
 *
 * DNS を切り替えてもドメインは変わらないので、Cloudflare へ移行してもこのまま動く。
 */
export const AD_HOSTS = new Set(["nightscape.tokyo", "www.nightscape.tokyo"]);

/** ブラウザでのみ判定できる。SSR 中は false を返す。 */
export function isAdHost(): boolean {
  if (typeof window === "undefined") return false;
  return AD_HOSTS.has(window.location.hostname);
}
