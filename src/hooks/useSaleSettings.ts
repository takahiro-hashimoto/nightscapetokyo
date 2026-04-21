'use client'

import { useState, useEffect } from 'react'

export type SaleSettings = {
  isActive: boolean
  saleName: string
  hasCoupon: boolean
}

export function useSaleSettings(): SaleSettings | null {
  const [settings, setSettings] = useState<SaleSettings | null>(null)
  useEffect(() => {
    fetch('/api/luminar/sale-settings/')
      .then((r) => r.json())
      .then((data: SaleSettings) => setSettings(data))
      .catch(() => {})
  }, [])
  return settings
}
