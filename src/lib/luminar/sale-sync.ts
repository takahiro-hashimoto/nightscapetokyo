/**
 * Skylum 公式ストアからセール状況・価格を取得して解析する。
 *
 * ── なぜスクレイピングなのか ──
 * 公式にセール情報のAPIが公開されていないため、価格ページを日次で読む。
 * 価格ページは価格をクライアント側で描画するが、素のHTMLにも
 * data-fcpr / data-oldp というデータ属性で数値が埋め込まれているので、
 * ヘッドレスブラウザなしで取得できる。クラス名より変更に強い。
 *
 * ── 安全側の設計 ──
 * パースに失敗したら「何もしない」。前回の値を上書きしない。
 * 価格ページの構造が変わったときに、誤った価格やセール状態が
 * 公開されるより、古いまま止まるほうが被害が小さいため。
 */

import { PLANS, PRIME, type PlanKey } from './pricing'

/** 取得元。robots.txt 上、このパスの取得は許可されている（クエリ付きURLのみ disallow） */
export const SKYLUM_PRICING_URL = 'https://skylum.com/jp/luminar/pricing'

/** 公式ストアの商品キー → 記事側のプラン */
const PRODUCT_KEYS: Record<PlanKey, string> = {
  desktop: 'luminar-desktop-only-license-tier1',
  allPlatforms: 'luminar-all-platforms-licenses-tier1',
  max: 'luminar-max-tier1-cart',
}

/** Luminar Prime（自動アップグレード）の商品キー */
const PRIME_KEYS = {
  desktop: 'luminar-neo-auto-upgrades',
  max: 'luminar-max-auto-upgrades',
} as const

export type ScrapedPlan = {
  /** セール価格。割引がない場合は regular と同額になる */
  sale: number
  /** 通常価格 */
  regular: number
}

export type ScrapeResult = {
  ok: boolean
  /** 解析できなかった理由。ok=false のときのみ */
  error?: string
  /** セール開催中と判断したか */
  saleActive: boolean
  /** 「Sale ends August 31st」から起こした終了日（ISO 8601・JST 23:59:59）。取れなければ null */
  saleEnd: string | null
  /** ページ上の生の終了日表記（例: "August 31st"）。ログ確認用 */
  saleEndRaw: string | null
  plans: Partial<Record<PlanKey, ScrapedPlan>>
  /**
   * 買い切り3プランの「通常価格→セール価格」の最大割引率(%)。
   * Skylum が広告する「最大77%OFF」は旧定価など別基準で出しているため一致しないことがある。
   */
  maxDiscountRate: number | null
  prime: { desktop: number | null; max: number | null }
  /** pricing.ts の値と食い違った項目（人間が確認すべき差分） */
  drift: string[]
}

const MONTHS: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
}

/**
 * "August 31st" のような表記を JST の終了時刻に起こす。
 * 年の記載がないため、過去日になる場合は翌年と解釈する。
 */
export function parseSaleEnd(raw: string, now: Date): string | null {
  const m = raw.trim().toLowerCase().match(/^([a-z]+)\s+(\d{1,2})/)
  if (!m) return null
  const month = MONTHS[m[1]]
  if (month == null) return null
  const day = Number(m[2])
  if (!day || day > 31) return null

  // JST 23:59:59 = UTC 14:59:59
  const build = (year: number) => new Date(Date.UTC(year, month, day, 14, 59, 59))
  let end = build(now.getUTCFullYear())
  // 3日以上過去なら翌年扱い（時差やページ更新の遅れを吸収する猶予）
  if (end.getTime() < now.getTime() - 3 * 86400_000) end = build(now.getUTCFullYear() + 1)
  return end.toISOString()
}

function readPrice(html: string, attr: 'data-fcpr' | 'data-oldp', key: string): number | null {
  const re = new RegExp(`${attr}="${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>\\s*([\\d,]+)\\s*<`)
  const m = html.match(re)
  if (!m) return null
  const n = Number(m[1].replace(/,/g, ''))
  return Number.isFinite(n) && n > 0 ? n : null
}

/** 取得済みHTMLを解析する（fetch と分離してテストしやすくしている） */
export function parsePricingHtml(html: string, now = new Date()): ScrapeResult {
  const plans: Partial<Record<PlanKey, ScrapedPlan>> = {}
  for (const [key, productKey] of Object.entries(PRODUCT_KEYS) as [PlanKey, string][]) {
    const sale = readPrice(html, 'data-fcpr', productKey)
    const regular = readPrice(html, 'data-oldp', productKey)
    if (sale != null && regular != null) plans[key] = { sale, regular }
  }

  // 3プランすべて取れなければ構造が変わったとみなし、何も更新しない
  if (Object.keys(plans).length < 3) {
    return {
      ok: false,
      error: `価格を解析できませんでした（取得できたプラン: ${Object.keys(plans).length}/3）。ページ構造が変わった可能性があります。`,
      saleActive: false, saleEnd: null, saleEndRaw: null, plans, maxDiscountRate: null, prime: { desktop: null, max: null }, drift: [],
    }
  }

  const endMatch = html.match(/Sale ends\s*(?:<br\s*\/?>)?\s*([A-Za-z]+\s+\d{1,2}(?:st|nd|rd|th)?)/i)
  const saleEndRaw = endMatch ? endMatch[1].trim() : null
  const saleEnd = saleEndRaw ? parseSaleEnd(saleEndRaw, now) : null

  // 1つでも割引されているプランがあり、かつ終了日が未来ならセール中とみなす
  const rates = Object.values(plans)
    .filter((p) => p.regular > 0 && p.sale < p.regular)
    .map((p) => Math.round((1 - p.sale / p.regular) * 100))
  const maxDiscountRate = rates.length > 0 ? Math.max(...rates) : null
  const discounted = rates.length > 0
  const saleActive = discounted && saleEnd != null && new Date(saleEnd).getTime() > now.getTime()

  const prime = {
    desktop: readPrice(html, 'data-oldp', PRIME_KEYS.desktop),
    max: readPrice(html, 'data-oldp', PRIME_KEYS.max),
  }

  // pricing.ts との差分を洗い出す（自動では書き換えず、確認用に返すだけ）
  const drift: string[] = []
  for (const [key, scraped] of Object.entries(plans) as [PlanKey, ScrapedPlan][]) {
    const local = PLANS[key]
    if (local.sale !== scraped.sale) {
      drift.push(`${local.name}: セール価格 記事 ¥${local.sale.toLocaleString()} → 公式 ¥${scraped.sale.toLocaleString()}`)
    }
    const localRegular = local.regular ?? scraped.sale
    if (localRegular !== scraped.regular) {
      drift.push(`${local.name}: 通常価格 記事 ¥${localRegular.toLocaleString()} → 公式 ¥${scraped.regular.toLocaleString()}`)
    }
  }
  if (prime.max != null && prime.max !== PRIME.renewal) {
    drift.push(`Luminar Prime(Max)更新: 記事 ¥${PRIME.renewal.toLocaleString()} → 公式 ¥${prime.max.toLocaleString()}`)
  }

  return { ok: true, saleActive, saleEnd, saleEndRaw, plans, maxDiscountRate, prime, drift }
}

/** 公式ページを取得して解析する */
export async function fetchAndParse(now = new Date()): Promise<ScrapeResult> {
  let html: string
  try {
    const res = await fetch(SKYLUM_PRICING_URL, {
      headers: { 'User-Agent': 'nightscape.tokyo sale monitor (+https://nightscape.tokyo/luminar/)' },
      cache: 'no-store',
    })
    if (!res.ok) {
      return { ok: false, error: `取得失敗: HTTP ${res.status}`, saleActive: false, saleEnd: null, saleEndRaw: null, plans: {}, maxDiscountRate: null, prime: { desktop: null, max: null }, drift: [] }
    }
    html = await res.text()
  } catch (e) {
    return { ok: false, error: `取得失敗: ${e instanceof Error ? e.message : String(e)}`, saleActive: false, saleEnd: null, saleEndRaw: null, plans: {}, maxDiscountRate: null, prime: { desktop: null, max: null }, drift: [] }
  }
  return parsePricingHtml(html, now)
}
