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
export const COUPON_CODE = 'nightscape10' as const
export const COUPON_DISCOUNT = '10%' as const

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
