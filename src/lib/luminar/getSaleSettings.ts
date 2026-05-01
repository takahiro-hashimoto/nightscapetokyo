import { unstable_cache } from 'next/cache'
import { createAdminClient } from '@/lib/supabase/server'
import type { SaleSettings } from '@/contexts/SaleSettingsContext'

export const getSaleSettings = unstable_cache(
  async (): Promise<SaleSettings> => {
    const admin = createAdminClient()
    const { data } = await admin
      .from('luminar_sale_settings')
      .select('sale_name, sale_start, sale_end, has_coupon')
      .eq('id', 1)
      .single()

    if (!data) {
      return { isActive: false, saleName: 'セール', hasCoupon: true }
    }

    const now = Date.now()
    const isActive =
      data.sale_start && data.sale_end
        ? now >= new Date(data.sale_start).getTime() && now <= new Date(data.sale_end).getTime()
        : false

    return {
      isActive,
      saleName: data.sale_name,
      hasCoupon: data.has_coupon,
    }
  },
  ['luminar-sale-settings'],
  { revalidate: 3600 },
)
