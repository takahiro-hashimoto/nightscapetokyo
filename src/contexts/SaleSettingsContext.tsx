'use client'

import { createContext, useContext } from 'react'

export type SaleSettings = {
  isActive: boolean
  saleName: string
  hasCoupon: boolean
}

const SaleSettingsContext = createContext<SaleSettings | null>(null)

export const SaleSettingsProvider = SaleSettingsContext.Provider

export function useSaleSettingsContext(): SaleSettings | null {
  return useContext(SaleSettingsContext)
}
