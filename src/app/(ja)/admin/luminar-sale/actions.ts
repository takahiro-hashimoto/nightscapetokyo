'use server'

import { createAdminClient } from '@/lib/supabase/server'

export async function updateSaleSettings(
  _prev: { error?: string; success?: boolean } | null,
  formData: FormData,
): Promise<{ error?: string; success?: boolean }> {
  const admin = createAdminClient()

  const saleName = (formData.get('sale_name') as string)?.trim()
  const saleStartRaw = formData.get('sale_start') as string
  const saleEndRaw = formData.get('sale_end') as string
  const hasCoupon = formData.get('has_coupon') === 'on'

  if (!saleName || !saleStartRaw || !saleEndRaw) {
    return { error: '全ての項目を入力してください' }
  }

  // datetime-local は JST で入力されるため +09:00 を付与
  const saleStart = `${saleStartRaw}:00+09:00`
  const saleEnd = `${saleEndRaw}:00+09:00`

  const { error } = await admin.from('luminar_sale_settings').upsert({
    id: 1,
    sale_name: saleName,
    sale_start: saleStart,
    sale_end: saleEnd,
    has_coupon: hasCoupon,
    updated_at: new Date().toISOString(),
  })

  if (error) return { error: error.message }
  return { success: true }
}
