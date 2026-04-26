'use client'

import { createContext, useContext } from 'react'

export type SaleSettings = {
  isActive: boolean
  saleName: string
  hasCoupon: boolean
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
