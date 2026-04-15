'use client'

import { useEffect, useRef } from 'react'

type Props = {
  html: string
}

/**
 * Renders WP article HTML and wires up any WP-specific JS interactions.
 * Currently handles: data-copy-coupon (replaces lngCopyCoupon onclick)
 */
export default function LuminarArticleContent({ html }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const buttons = el.querySelectorAll<HTMLButtonElement>('[data-copy-coupon]')

    buttons.forEach((btn) => {
      const handler = async () => {
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

        // Visual feedback (always shown)
        const original = btn.innerHTML
        btn.innerHTML = '<span style="padding:0 1rem">コピーしました！</span>'
        btn.disabled = true
        setTimeout(() => {
          btn.innerHTML = original
          btn.disabled = false
        }, 2000)
      }

      btn.addEventListener('click', handler)
    })

    return () => {
      // cleanup not strictly needed since element unmounts, but be explicit
      buttons.forEach((btn) => btn.replaceWith(btn.cloneNode(true)))
    }
  }, [html])

  return (
    <div
      ref={ref}
      className="entry-content e-content"
      itemProp="articleBody"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
