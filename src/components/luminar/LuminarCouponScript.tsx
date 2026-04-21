'use client'

import { useEffect } from 'react'

async function copyCoupon(btn: HTMLButtonElement) {
  const codeEl = btn.querySelector<HTMLElement>('.m-cta-mini__code')
  const code = codeEl?.textContent?.trim()
  if (!code) return

  try {
    await navigator.clipboard.writeText(code)
  } catch {
    // clipboard API 失敗時はテキスト選択にフォールバック
    if (codeEl) {
      const range = document.createRange()
      range.selectNodeContents(codeEl)
      window.getSelection()?.removeAllRanges()
      window.getSelection()?.addRange(range)
    }
  }

  // ビジュアルフィードバック
  const original = btn.innerHTML
  btn.innerHTML = '<span style="padding:0 1rem">コピーしました！</span>'
  btn.disabled = true
  setTimeout(() => {
    btn.innerHTML = original
    btn.disabled = false
  }, 2000)
}

/**
 * .m-cta-mini__coupon-btn の click イベントを直接 addEventListener で処理。
 * WP コンテンツの onclick="lngCopyCoupon(this)" 向けに window 関数も定義。
 */
export default function LuminarCouponScript() {
  useEffect(() => {
    // ① グローバル関数 (onclick 属性からの呼び出し用)
    ;(window as unknown as Record<string, unknown>).lngCopyCoupon = (
      btn: HTMLButtonElement,
    ) => { void copyCoupon(btn) }

    // ② addEventListener で直接バインド (onclick が動かない環境でも確実に動作)
    const buttons = document.querySelectorAll<HTMLButtonElement>('.m-cta-mini__coupon-btn')
    const handler = (e: Event) => {
      const btn = (e.currentTarget ?? e.target) as HTMLButtonElement
      void copyCoupon(btn)
    }
    buttons.forEach((btn) => btn.addEventListener('click', handler))

    return () => {
      delete (window as unknown as Record<string, unknown>).lngCopyCoupon
      buttons.forEach((btn) => btn.removeEventListener('click', handler))
    }
  }, [])

  return null
}
