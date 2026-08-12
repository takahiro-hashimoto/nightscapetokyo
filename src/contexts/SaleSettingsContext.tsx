'use client'

import { createContext, useContext } from 'react'

export type SaleSettings = {
  isActive: boolean
  hasCoupon: boolean
  /** セール終了日時（ISO 8601）。未設定・セール外は null */
  saleEnd: string | null
}

const SaleSettingsContext = createContext<SaleSettings | null>(null)

export function SaleSettingsProvider({
  value,
  children,
}: {
  value: SaleSettings
  children: React.ReactNode
}) {
  return (
    <SaleSettingsContext.Provider value={value}>
      {children}
    </SaleSettingsContext.Provider>
  )
}

export function useSaleSettingsContext(): SaleSettings | null {
  return useContext(SaleSettingsContext)
}
