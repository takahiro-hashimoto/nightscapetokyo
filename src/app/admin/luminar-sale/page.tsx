import { createAdminClient } from '@/lib/supabase/server'
import LuminarSaleForm from '@/components/admin/LuminarSaleForm'

export const metadata = { title: 'Luminar セール設定' }

function toJstDatetimeLocal(isoString: string | null): string {
  if (!isoString) return ''
  const d = new Date(isoString)
  const jst = new Date(d.getTime() + 9 * 60 * 60 * 1000)
  return jst.toISOString().slice(0, 16) // "YYYY-MM-DDTHH:mm"
}

export default async function LuminarSalePage() {
  const admin = createAdminClient()
  const { data } = await admin
    .from('luminar_sale_settings')
    .select('sale_name, sale_start, sale_end, has_coupon, updated_at')
    .eq('id', 1)
    .single()

  const initialValues = {
    sale_name: data?.sale_name ?? 'スプリングセール',
    sale_start: toJstDatetimeLocal(data?.sale_start ?? null),
    sale_end: toJstDatetimeLocal(data?.sale_end ?? null),
    has_coupon: data?.has_coupon ?? true,
    updated_at: data?.updated_at ?? null,
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Luminar セール設定</h1>
      <LuminarSaleForm initialValues={initialValues} />
    </div>
  )
}
