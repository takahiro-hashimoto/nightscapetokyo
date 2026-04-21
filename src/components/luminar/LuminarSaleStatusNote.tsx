'use client'

import { useSaleSettings } from '@/hooks/useSaleSettings'

export default function LuminarSaleStatusNote() {
  const settings = useSaleSettings()

  if (!settings) return null

  if (settings.isActive) {
    return (
      <p className="m-on-sale">
        <strong>現在、Luminar Neoの{settings.saleName}を開催中です！</strong>
        セール価格でお得に購入できるチャンスです。
        {settings.hasCoupon && 'さらに下記クーポンコードを併用するとさらにお得です。'}
      </p>
    )
  }

  return (
    <p className="m-no-sale">
      現在、Luminar Neoのセールは開催されておりません。次のセール時期は
      <a href="#timing">セール予想月</a>で解説しています。
    </p>
  )
}
