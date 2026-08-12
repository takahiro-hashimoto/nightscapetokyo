import { unstable_cache } from 'next/cache'
import { createAdminClient } from '@/lib/supabase/server'
import type { SaleSettings } from '@/contexts/SaleSettingsContext'

/** キャッシュタグ。設定を書き換えた側は必ずこのタグを revalidate すること */
export const SALE_SETTINGS_TAG = 'luminar-sale-settings'

type SaleRow = {
  sale_start: string | null
  sale_end: string | null
  has_coupon: boolean | null
}

/**
 * DB の生の行だけをキャッシュする。
 *
 * 注意: ここで「今セール中か」を判定してはいけない。
 * revalidate: false のキャッシュ内で Date.now() を使うと、最初に計算された
 * true/false が次のデプロイまで固定され、開始日・終了日を過ぎても表示が変わらなくなる。
 * 時刻に依存する判定は必ずキャッシュの外（getSaleSettings 側）で行う。
 */
const getSaleRow = unstable_cache(
  async (): Promise<SaleRow | null> => {
    const admin = createAdminClient()
    const { data } = await admin
      .from('luminar_sale_settings')
      .select('sale_start, sale_end, has_coupon')
      .eq('id', 1)
      .single()
    return data ?? null
  },
  [SALE_SETTINGS_TAG],
  { revalidate: false, tags: [SALE_SETTINGS_TAG] },
)

export async function getSaleSettings(): Promise<SaleSettings> {
  const data = await getSaleRow()
  if (!data) {
    return { isActive: false, hasCoupon: true, saleEnd: null }
  }

  const now = Date.now()
  const isActive =
    data.sale_start != null &&
    data.sale_end != null &&
    now >= new Date(data.sale_start).getTime() &&
    now <= new Date(data.sale_end).getTime()

  return {
    isActive,
    hasCoupon: data.has_coupon ?? true,
    saleEnd: isActive && data.sale_end ? new Date(data.sale_end).toISOString() : null,
  }
}
