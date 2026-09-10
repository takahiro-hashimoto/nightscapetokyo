/**
 * LUMINAR NEO GUIDE - Site Configuration
 */

export const LUMINAR_SITE_NAME = 'Luminar Neo 完全購入ガイド' as const
export const LUMINAR_SITE_URL = 'https://nightscape.tokyo/luminar' as const
export const LUMINAR_SITE_DESCRIPTION =
  'ルミナーネオの特徴・料金・安く買う方法を解説' as const

// Affiliate URLs
export const AFFILIATE_URL = 'https://skylum.evyy.net/552xL3' as const
export const AFFILIATE_URL_PRICING = 'https://skylum.evyy.net/mO9BEa' as const
export const AFFILIATE_URL_TRIAL = 'https://skylum.evyy.net/qz5MQb' as const
export const AFFILIATE_URL_UPGRADE = 'https://skylum.evyy.net/o4mEAm' as const

// Coupon
// 通常時のクーポン
const BASE_COUPON = { code: 'nightscape10', discount: '10%' } as const

// 期間限定クーポン。終了日時を過ぎると自動で BASE_COUPON に戻る。
// 次のキャンペーンはここを書き換えるだけでよい（不要なら null）。
// 静的ページの本文は日次 cron（/api/revalidate?mode=daily, 0:10 JST）で
// /luminar 配下を再生成するので、終了翌日の 0:10 には HTML も戻る。
const CAMPAIGN_COUPON: {
  code: string
  discount: string
  /** この日時まで有効（JST で書く） */
  endsAt: string
  /** 本文に添える期間表記 */
  periodLabel: string
} | null = {
  code: 'nightscape20',
  discount: '20%',
  endsAt: '2026-09-20T23:59:59+09:00',
  periodLabel: '9月20日まで',
}

export type ActiveCoupon = {
  code: string
  discount: string
  /** 期間限定なら「9月20日まで」など。通常クーポンなら null */
  periodLabel: string | null
}

/** 今表示すべきクーポン。期間限定が有効ならそちら、切れていれば通常クーポン */
export function getActiveCoupon(now: Date = new Date()): ActiveCoupon {
  if (CAMPAIGN_COUPON && now.getTime() <= new Date(CAMPAIGN_COUPON.endsAt).getTime()) {
    return {
      code: CAMPAIGN_COUPON.code,
      discount: CAMPAIGN_COUPON.discount,
      periodLabel: CAMPAIGN_COUPON.periodLabel,
    }
  }
  return { ...BASE_COUPON, periodLabel: null }
}

// Author
export const AUTHOR_NAME = 'タカヒロ' as const
export const AUTHOR_ROLE = 'フォトグラファー' as const
export const AUTHOR_BIO =
  '夜景写真を専門とするフォトグラファー。東京夜景ナビでは都内の夜景スポットを200以上取材。ホテルやレストランなどの撮影も請け負っています。10年以上の撮影経験を活かし、Luminar Neoの賢い購入方法や効率的なレタッチ術を発信中。' as const
export const AUTHOR_INITIAL = 'T' as const
export const AUTHOR_TWITTER = 'https://x.com/takahiro__1202' as const
export const AUTHOR_HOMEPAGE1 = 'https://nightscape.tokyo/' as const
export const AUTHOR_HOMEPAGE2 = 'https://digital-style.jp/' as const
export const AUTHOR_YOUTUBE = 'https://www.youtube.com/@nightscape-tokyo' as const

// セール期間はここではなく DB（luminar_sale_settings）で一元管理する。
// 以前ここに SALE_NAME / SALE_START / SALE_END を置いていたが、
// DB と二重管理になり「管理画面で更新しても表示が変わらない」不具合の原因になった。
export const HAS_COUPON = true as const

// Navigation
export const NAV_ITEMS = [
  { href: '/luminar/', label: 'トップ' },
  { href: '/luminar/luminar-plan/', label: '料金・プラン' },
  { href: '/luminar/merit-demerit/', label: 'メリット・デメリット' },
  { href: '/luminar/sale-and-coupon-info/', label: 'セール・クーポン' },
] as const

export const FOOTER_NAV_ITEMS = [
  { href: '/privacy-policy/', label: 'プライバシーポリシー' },
  { href: '/about/', label: '運営者情報' },
] as const
