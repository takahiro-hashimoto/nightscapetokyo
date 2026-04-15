import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const admin = createAdminClient()
  const { data } = await admin
    .from('luminar_sale_settings')
    .select('sale_name, sale_start, sale_end, has_coupon')
    .eq('id', 1)
    .single()

  if (!data) {
    return NextResponse.json({ isActive: false, saleName: 'セール', hasCoupon: true })
  }

  const now = Date.now()
  const isActive =
    data.sale_start && data.sale_end
      ? now >= new Date(data.sale_start).getTime() && now <= new Date(data.sale_end).getTime()
      : false

  return NextResponse.json({
    isActive,
    saleName: data.sale_name,
    hasCoupon: data.has_coupon,
    saleStart: data.sale_start,
    saleEnd: data.sale_end,
  })
}
