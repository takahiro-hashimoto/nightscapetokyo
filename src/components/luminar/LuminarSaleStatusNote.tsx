'use client'

import { useState, useEffect } from 'react'

type SaleSettings = {
  isActive: boolean
  saleName: string
  hasCoupon: boolean
}

export default function LuminarSaleStatusNote() {
  const [settings, setSettings] = useState<SaleSettings | null>(null)

  useEffect(() => {
    fetch('/api/luminar/sale-settings/')
      .then((r) => r.json())
      .then((data: SaleSettings) => setSettings(data))
      .catch(() => {/* keep null → no note shown */})
  }, [])

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
