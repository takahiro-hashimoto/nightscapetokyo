import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export const revalidate = 86400

export async function GET() {
  const admin = createAdminClient()
  const { data, error } = await admin
    .from('luminar_sale_settings')
    .select('sale_start, sale_end, has_coupon')
    .eq('id', 1)
    .single()

  if (error || !data) {
    return NextResponse.json({ isActive: false, hasCoupon: true })
  }

  const now = Date.now()
  // 終了日は任意（getSaleSettings と同じ判定）
  const isActive =
    data.sale_start != null &&
    now >= new Date(data.sale_start).getTime() &&
    (data.sale_end == null || now <= new Date(data.sale_end).getTime())

  return NextResponse.json({
    isActive,
    hasCoupon: data.has_coupon,
    saleStart: data.sale_start,
    saleEnd: data.sale_end,
  })
}
