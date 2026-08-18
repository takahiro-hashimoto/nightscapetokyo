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
  },
}
