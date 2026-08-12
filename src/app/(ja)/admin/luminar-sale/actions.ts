'use server'

import { revalidateTag } from 'next/cache'
import { createAdminClient } from '@/lib/supabase/server';
import { requireAdmin } from '@/lib/admin/auth'
import { SALE_SETTINGS_TAG } from '@/lib/luminar/getSaleSettings'

export async function updateSaleSettings(
  _prev: { error?: string; success?: boolean } | null,
  formData: FormData,
): Promise<{ error?: string; success?: boolean }> {
  if (!(await requireAdmin())) return { error: "Unauthorized" }
  const admin = createAdminClient()

  const saleStartRaw = formData.get('sale_start') as string
  const saleEndRaw = formData.get('sale_end') as string
  const hasCoupon = formData.get('has_coupon') === 'on'

  if (!saleStartRaw || !saleEndRaw) {
    return { error: '全ての項目を入力してください' }
  }

  // datetime-local は JST で入力されるため +09:00 を付与
  const saleStart = `${saleStartRaw}:00+09:00`
  const saleEnd = `${saleEndRaw}:00+09:00`

  const { error } = await admin.from('luminar_sale_settings').upsert({
    id: 1,
    sale_start: saleStart,
    sale_end: saleEnd,
    has_coupon: hasCoupon,
    updated_at: new Date().toISOString(),
  })

  if (error) return { error: error.message }

  // これが無いと保存してもキャッシュが残り、次のデプロイまで表示が変わらない
  revalidateTag(SALE_SETTINGS_TAG, 'max')
  return { success: true }
}
