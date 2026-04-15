'use client'

import { useEffect } from 'react'

/**
 * Defines window.lngCopyCoupon so that WP article content's
 * onclick="lngCopyCoupon(this)" works without modification.
 */
export default function LuminarCouponScript() {
  useEffect(() => {
    ;(window as unknown as Record<string, unknown>).lngCopyCoupon = async (
      btn: HTMLButtonElement,
    ) => {
      const codeEl = btn.querySelector('.m-cta-mini__code')
      const code = codeEl?.textContent?.trim()
      if (!code) return

      try {
        await navigator.clipboard.writeText(code)
      } catch {
        // fallback: select the text
        const range = document.createRange()
        range.selectNodeContents(codeEl!)
        window.getSelection()?.removeAllRanges()
        window.getSelection()?.addRange(range)
      }

      // Visual feedback
      const original = btn.innerHTML
      btn.innerHTML = '<span style="padding:0 1rem">コピーしました！</span>'
      btn.disabled = true
      setTimeout(() => {
        btn.innerHTML = original
        btn.disabled = false
      }, 2000)
    }

    return () => {
      delete (window as unknown as Record<string, unknown>).lngCopyCoupon
    }
  }, [])

  return null
}
