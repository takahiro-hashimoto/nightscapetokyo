/**
 * Luminar（旧 Luminar Neo）の価格・プラン情報。
 *
 * ── メンテナンス方針 ──
 * Skylum は価格改定・プラン改称・オプション体系の変更が多い。
 * 記事側に金額を直接書くと改定のたびに全ページを追う羽目になるため、
 * 「数字と名称はこのファイルだけ」に集約している。
 * 記事本文からは PLANS / PRIME / 各ヘルパーを import して使うこと。
 *
 * 改定時にやること:
 *   1. PRICING_CONFIRMED_AT を確認日に更新する（記事の「確認日」表示にも使われる）
 *   2. PLANS の sale / regular を更新する
 *   3. PRIME の firstYear / renewal を更新する
 * シミュレーション表は totalWithPrime() で計算しているので、
 * 上記を直せば3年・5年の合計も自動で追随する。
 */

/** 価格・プラン情報を公式ストアで確認した日。記事の更新日とは別管理 */
export const PRICING_CONFIRMED_AT = '2026-08-12T00:00:00' as const

export type PlanKey = 'desktop' | 'allPlatforms' | 'max'

export type Plan = {
  key: PlanKey
  /** 現在の公式名称 */
  name: string
  /** 旧名称。検索流入を取りこぼさないよう記事側で併記する */
  legacyName: string
  /** セール価格（税込・円） */
  sale: number
  /** 通常価格（税込・円）。公式ストアに表示がない場合は null */
  regular: number | null
  /** 使用可能台数の要約 */
  devices: string
}

/**
 * 買い切り（永久ライセンス）3プラン。
 * 価格は日本向け公式ストアの円建て表示をそのまま採用する。
 * USD からの換算値を書かないこと（為替で記事とストアがズレるため）。
 */
export const PLANS: Record<PlanKey, Plan> = {
  desktop: {
    key: 'desktop',
    name: 'デスクトップ専用ライセンス',
    legacyName: '永久ライセンス デスクトップ版',
    sale: 21119,
    // 日本公式ストアにこのプランだけ通常価格の表示がないため null。
    // 表示が復活したら数値を入れれば、記事側は自動で「通常価格 ¥xx,xxx」を出す。
    regular: null,
    devices: 'PC2台',
  },
  allPlatforms: {
    key: 'allPlatforms',
    name: '全プラットフォームライセンス',
    legacyName: 'クロスデバイス永続ライセンス',
    sale: 26059,
    regular: 41999,
    devices: 'PC2台＋モバイル3台',
  },
  max: {
    key: 'max',
    name: 'Maxライセンス',
    legacyName: '永久 Maxライセンス',
    sale: 32609,
    regular: 64900,
    devices: 'PC2台＋モバイル3台＋Web',
  },
}

/** 表示順（記事の価格表はこの順で並べる） */
export const PLAN_ORDER: PlanKey[] = ['desktop', 'allPlatforms', 'max']

/**
 * Luminar Prime（年額サブスク・任意）。
 * 旧アップグレードパス／エコシステムパスの後継。
 * 円建ての正確な額は購入画面でしか出ないため、記事では「約」を付けて出す。
 */
export const PRIME = {
  /** 初年度の目安（税込・円） */
  firstYear: 11300,
  /** 2年目以降の目安（税込・円）。継続割引が入る */
  renewal: 9040,
  /** Max ライセンスに同梱される Prime の年数 */
  includedYearsInMax: 1,
} as const

/** 買い切り単体で生成AIツールを使える日数 */
export const GENERATIVE_AI_DAYS = 365 as const

/** 無料体験の日数 */
export const TRIAL_DAYS = 7 as const

/** 返金保証の日数 */
export const REFUND_GUARANTEE_DAYS = 30 as const

/**
 * Adobe 側の比較用価格（税込・円）。
 * 同じ「1TB」でも支払い方法で年額が変わるので、記事で混同しないよう3種類を持つ。
 */
export const LIGHTROOM = {
  /** Lightroomプラン（1TB）年間一括払いの年額 */
  annualPrepay: 14080,
  /** Lightroomプラン（1TB）年間月払いの年額（月¥1,480×12） */
  annualMonthly: 17760,
  /** フォトプラン（1TB）年間月払いの年額（月¥2,380×12） */
  photoPlan1TB: 28560,
} as const

/** 後方互換: 年間一括払いの年額 */
export const LIGHTROOM_ANNUAL = LIGHTROOM.annualPrepay

/** 1234567 → "¥1,234,567" */
export function yen(n: number): string {
  return `¥${n.toLocaleString('ja-JP')}`
}

/** 1234567 → "約¥1,234,567"。為替や時期で動く概算値に使う */
export function approxYen(n: number): string {
  return `約${yen(n)}`
}

/**
 * 買い切り + Prime を primeYears 年ぶん継続した場合の総額。
 * primeYears = 0 なら買い切りのみ。初年度と2年目以降で単価が違う点を吸収する。
 */
export function totalWithPrime(plan: PlanKey, primeYears: number): number {
  const base = PLANS[plan].sale
  if (primeYears <= 0) return base
  return base + PRIME.firstYear + PRIME.renewal * (primeYears - 1)
}

/** Lightroomプラン（1TB）を years 年使った場合の総額 */
export function lightroomTotal(years: number): number {
  return LIGHTROOM_ANNUAL * years
}

/** 「¥26,059（通常¥41,999）」形式。通常価格が無いプランではセール価格のみ返す */
export function priceWithRegular(plan: PlanKey): string {
  const p = PLANS[plan]
  return p.regular == null ? yen(p.sale) : `${yen(p.sale)}（通常${yen(p.regular)}）`
}

/** 割引率（%）。通常価格が無い場合は null */
export function discountRate(plan: PlanKey): number | null {
  const p = PLANS[plan]
  if (p.regular == null) return null
  return Math.round((1 - p.sale / p.regular) * 100)
}
