// Cloudflare Workers のエントリ（wrangler.jsonc の main）。
// OpenNext が生成する .open-next/worker.js を包み、Next に渡す前に http → https の
// リダイレクトだけを行う。
//
// ゾーンの「Always Use HTTPS」が OFF で、http://nightscape.tokyo/ が 200 のまま
// 表示されていた（2026-09 の SEO 監査で発覚）。ダッシュボードの設定に依存させず
// コードで保証する。

// .open-next/worker.js はビルド前には存在せず、ビルド後は存在する。@ts-expect-error だと
// ビルド後に「不要な指示」として型エラーになるため、ここだけ @ts-ignore を使う
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore .open-next/worker.js は `opennextjs-cloudflare build` で生成される
import { default as handler } from "./.open-next/worker.js";

type Env = {
  /** ローカルの wrangler dev 専用（.dev.vars で "1"）。本番には設定しない */
  SKIP_HTTPS_REDIRECT?: string;
};

export default {
  async fetch(request: Request, env: Env, ctx: unknown): Promise<Response> {
    const url = new URL(request.url);
    // wrangler dev（opennextjs-cloudflare preview）は routes に合わせてリクエストを
    // 「http の nightscape.tokyo」として渡してくるため、ホスト名ではローカルと区別できない。
    // ローカルでは .dev.vars の SKIP_HTTPS_REDIRECT=1 で止める（無いと全部 301 になる）
    const isProductionHost = url.hostname === "nightscape.tokyo" || url.hostname === "www.nightscape.tokyo";
    if (url.protocol === "http:" && isProductionHost && env.SKIP_HTTPS_REDIRECT !== "1") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return handler.fetch(request, env, ctx);
  },
};

// Durable Object のクラスはエントリから export されている必要がある
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore .open-next/worker.js は `opennextjs-cloudflare build` で生成される
export { DOQueueHandler, DOShardedTagCache, BucketCachePurge } from "./.open-next/worker.js";
