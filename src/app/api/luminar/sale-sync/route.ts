import { timingSafeEqual } from 'crypto'
import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'
import { fetchAndParse } from '@/lib/luminar/sale-sync'
import { SALE_SETTINGS_TAG } from '@/lib/luminar/getSaleSettings'

/**
 * Skylum 公式ストアのセール状況を日次で取り込む（Vercel Cron から実行）。
 *
 * やること:
 *   - 公式価格ページを取得し、セール有無と終了日を判定して luminar_sale_settings に反映
 *   - 記事側の価格（pricing.ts）と公式価格の差分を検出してレスポンスに載せる
 *
 * やらないこと:
 *   - 価格の自動書き換え。pricing.ts はソースコードなので Cron からは触らない。
 *     差分は drift として返すだけにして、公開内容の書き換えは人間の確認を挟む。
 *     アフィリエイト記事で誤った価格が自動公開されるリスクを避けるため。
 *   - セール名の扱い。名称は公式ページに載っておらず実態とズレるため、表示自体をやめた。
 */

function safeEqual(actual: string | null, expected: string | undefined): boolean {
  if (!actual || !expected) return false
  const a = Buffer.from(actual)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

function isAuthorized(req: NextRequest): boolean {
  const header = req.headers.get('authorization')
  // Cron 経路（Vercel が Authorization: Bearer <CRON_SECRET> を付けてくる）
  if (header?.startsWith('Bearer ')) {
    if (!process.env.CRON_SECRET) return false
    return safeEqual(header.slice(7), process.env.CRON_SECRET)
  }
  // 手動実行・動作確認用。CRON_SECRET が未設定のローカルでも叩けるようにする
  return safeEqual(req.nextUrl.searchParams.get('secret'), process.env.REVALIDATE_SECRET)
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // ?dry=1 で書き込みを行わず、解析結果だけ返す（動作確認・障害切り分け用）
  const dryRun = req.nextUrl.searchParams.get('dry') === '1'

  const now = new Date()
  const result = await fetchAndParse(now)

  // 解析できなかったときは既存設定に触れない。502 で返して Vercel 側で異常が見えるようにする
  if (!result.ok) {
    console.error('[sale-sync] 解析失敗:', result.error)
    return NextResponse.json({ ok: false, error: result.error, at: now.toISOString() }, { status: 502 })
  }

  if (result.drift.length > 0) {
    console.warn('[sale-sync] 記事の価格と公式価格に差分があります:\n  - ' + result.drift.join('\n  - '))
  }

  const db = createAdminClient()
  const { data: current } = await db
    .from('luminar_sale_settings')
    .select('sale_start, sale_end')
    .eq('id', 1)
    .single()

  const nextEnd = result.saleActive ? result.saleEnd : null
  const currentEnd = current?.sale_end ? new Date(current.sale_end).toISOString() : null
  const changed = nextEnd !== currentEnd

  if (changed && !dryRun) {
    // セール開始日は「今回検知した時点」を採用する。既にセール中で終了日だけ延びた場合は開始日を維持する
    const keepStart = currentEnd != null && nextEnd != null && current?.sale_start
    const payload = {
      sale_start: result.saleActive
        ? (keepStart ? current!.sale_start : now.toISOString())
        : null,
      sale_end: nextEnd,
      updated_at: now.toISOString(),
    }
    const { error } = await db.from('luminar_sale_settings').update(payload).eq('id', 1)
    if (error) {
      console.error('[sale-sync] DB更新失敗:', error.message)
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }
    // セール表示を含むページを作り直す
    revalidateTag(SALE_SETTINGS_TAG, 'max')
  }

  // ── 観測ログを残す ──
  // 記事表示には使わない。セール時期と割引率の実績を貯めるのが目的なので、
  // セール状況が変わっていない日も含めて毎日1行書く。
  let snapshotSaved = false
  if (!dryRun) {
    // 観測日は JST。UTC のままだと日本時間の朝に走る cron が前日扱いになる
    const observedOn = new Date(now.getTime() + 9 * 3600_000).toISOString().slice(0, 10)
    const { error: snapError } = await db
      .from('luminar_price_snapshots')
      .upsert(
        {
          observed_on: observedOn,
          sale_active: result.saleActive,
          sale_end: result.saleEnd ? result.saleEnd.slice(0, 10) : null,
          sale_end_raw: result.saleEndRaw,
          // 割引率は書かない。価格から DB 側の生成列が計算する
          desktop_sale: result.plans.desktop?.sale ?? null,
          desktop_regular: result.plans.desktop?.regular ?? null,
          all_platforms_sale: result.plans.allPlatforms?.sale ?? null,
          all_platforms_regular: result.plans.allPlatforms?.regular ?? null,
          max_sale: result.plans.max?.sale ?? null,
          max_regular: result.plans.max?.regular ?? null,
          prime_desktop: result.prime.desktop,
          prime_max: result.prime.max,
          raw: { plans: result.plans, prime: result.prime, drift: result.drift },
        },
        { onConflict: 'observed_on' },
      )
    if (snapError) {
      // ログが残せなくてもセール表示の更新は成立しているので、警告に留める
      console.warn('[sale-sync] スナップショットの記録に失敗:', snapError.message)
    } else {
      snapshotSaved = true
    }
  }

  return NextResponse.json({
    ok: true,
    dryRun,
    snapshotSaved,
    changed,
    /** dryRun 時は「書き込めばこうなる」という予定値 */
    currentEnd,
    saleActive: result.saleActive,
    saleEnd: result.saleEnd,
    saleEndRaw: result.saleEndRaw,
    maxDiscountRate: result.maxDiscountRate,
    officialPrices: result.plans,
    primeRenewal: result.prime,
    drift: result.drift,
    at: now.toISOString(),
  })
}
