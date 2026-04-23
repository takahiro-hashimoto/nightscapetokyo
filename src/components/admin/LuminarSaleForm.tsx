'use client'

import { useActionState } from 'react'
import { Save, Loader2 } from 'lucide-react'
import { updateSaleSettings } from '@/app/(ja)/admin/luminar-sale/actions'

type InitialValues = {
  sale_name: string
  sale_start: string
  sale_end: string
  has_coupon: boolean
  updated_at: string | null
}

type Props = {
  initialValues: InitialValues
}

export default function LuminarSaleForm({ initialValues }: Props) {
  const [state, action, isPending] = useActionState(updateSaleSettings, null)

  return (
    <form action={action} className="space-y-6 max-w-xl">
      {state?.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
          保存しました
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-5">
        {/* セール名 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="sale_name">
            セール名
          </label>
          <input
            id="sale_name"
            name="sale_name"
            type="text"
            defaultValue={initialValues.sale_name}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="スプリングセール"
          />
        </div>

        {/* セール開始日時 (JST) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="sale_start">
            セール開始日時（JST）
          </label>
          <input
            id="sale_start"
            name="sale_start"
            type="datetime-local"
            defaultValue={initialValues.sale_start}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* セール終了日時 (JST) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="sale_end">
            セール終了日時（JST）
          </label>
          <input
            id="sale_end"
            name="sale_end"
            type="datetime-local"
            defaultValue={initialValues.sale_end}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* クーポン有無 */}
        <div className="flex items-center gap-3">
          <input
            id="has_coupon"
            name="has_coupon"
            type="checkbox"
            defaultChecked={initialValues.has_coupon}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="has_coupon" className="text-sm font-medium text-gray-700">
            クーポンを表示する
          </label>
        </div>
      </div>

      {initialValues.updated_at && (
        <p className="text-xs text-gray-400">
          最終更新: {new Date(initialValues.updated_at).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
      >
        {isPending ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
        {isPending ? '保存中...' : '保存する'}
      </button>
    </form>
  )
}
