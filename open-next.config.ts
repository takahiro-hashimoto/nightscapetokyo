import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import doQueue from "@opennextjs/cloudflare/overrides/queue/do-queue";
import d1NextTagCache from "@opennextjs/cloudflare/overrides/tag-cache/d1-next-tag-cache";

/**
 * Cloudflare Workers 用の OpenNext 設定。
 *
 * incrementalCache: ISR の本体を R2 に置く。KV は結果整合のため公式も非推奨。
 * tagCache:         revalidateTag / revalidatePath 用。このサイトは
 *                   revalidatePath 33箇所・revalidateTag 14箇所を使う。
 *                   実測ではタグ書き込み 約84/日・読み込み 約21万/日 で、
 *                   D1 の無料枠（書き込み10万/日・読み込み500万/日）に十分収まる。
 *                   トラフィックが跳ねたら doShardedTagCache へ差し替える。
 * queue:            時間ベース再検証のリクエストを捌く。重複排除も行う。
 */
export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
  tagCache: d1NextTagCache,
  queue: doQueue,
});
