/**
 * Cron 専用の Worker。
 *
 * OpenNext が生成する worker.js には scheduled ハンドラが無く、
 * 生成物を書き換えるとアダプタの更新のたびに壊れる。
 * Cron が叩く先は認証付きの HTTP エンドポイントなので、
 * 本体とは切り離した小さな Worker から fetch するのがいちばん壊れにくい。
 *
 * vercel.json の crons と同じスケジュールを wrangler.jsonc に定義している。
 *   10 15 * * *  →  /api/revalidate/?mode=daily
 *   0 22 * * *   →  /api/luminar/sale-sync/
 *
 * どちらのエンドポイントも Authorization: Bearer <CRON_SECRET> を検証する。
 * Vercel Cron と同じ形なので、アプリ側のコードは変更不要。
 */

type Env = {
  SITE_URL: string
  CRON_SECRET: string
  /** Supabase Free の自動停止(7日無活動)防止に叩く先。JSON配列 */
  KEEPALIVE_TARGETS: string
}

type KeepaliveTarget = { name: string; url: string; key: string; probe: string }

/**
 * Supabase Free プランは「7日間 API リクエストが無い」と一時停止する。
 * サイト側のトラフィックでも活動は発生するが、訪問ゼロの日があっても
 * 確定的に活動を残すため、cron 実行のたびに各プロジェクトへ
 * 1件だけ SELECT を投げる。anon キーは公開情報（サイトのHTMLに
 * 含まれるもの）なので vars に平文で置いてよい。
 */
async function keepalive(env: Env): Promise<void> {
  let targets: KeepaliveTarget[]
  try {
    targets = JSON.parse(env.KEEPALIVE_TARGETS ?? "[]")
  } catch {
    console.error("KEEPALIVE_TARGETS が JSON として不正です")
    return
  }
  for (const t of targets) {
    try {
      const res = await fetch(`${t.url}/rest/v1/${t.probe}?select=id&limit=1`, {
        headers: { apikey: t.key, authorization: `Bearer ${t.key}` },
      })
      console.log(`keepalive ${t.name}: ${res.status}`)
    } catch (e) {
      console.error(`keepalive ${t.name} failed:`, e)
    }
  }
}

const ROUTES: Record<string, string> = {
  '10 15 * * *': '/api/revalidate/?mode=daily',
  '0 22 * * *': '/api/luminar/sale-sync/',
}

export default {
  async scheduled(event: ScheduledController, env: Env, ctx: ExecutionContext) {
    const path = ROUTES[event.cron]
    if (!path) {
      console.error(`未登録の cron 式です: ${event.cron}`)
      ctx.waitUntil(keepalive(env))
      return
    }

    const run = async () => {
      const res = await fetch(`${env.SITE_URL}${path}`, {
        headers: { authorization: `Bearer ${env.CRON_SECRET}` },
      })
      // 失敗しても Cron は再試行しないので、ログに残して気づけるようにする
      console.log(`${event.cron} → ${path} : ${res.status}`)
      if (!res.ok) {
        console.error(`cron failed: ${path} returned ${res.status} ${await res.text()}`)
      }
    }

    ctx.waitUntil(run())
    ctx.waitUntil(keepalive(env))
  },
}
