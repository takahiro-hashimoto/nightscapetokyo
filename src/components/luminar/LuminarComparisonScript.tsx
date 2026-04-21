'use client'

import { useEffect } from 'react'

/**
 * Initializes all .comparison-container elements with drag-to-compare behavior.
 * The WP theme previously handled this with inline JS; this replicates that logic.
 */
export default function LuminarComparisonScript() {
  useEffect(() => {
    const containers = document.querySelectorAll<HTMLElement>('.comparison-container')

    const cleanups: (() => void)[] = []

    containers.forEach((container) => {
      const before = container.querySelector<HTMLImageElement>('.image-before')
      const handle = container.querySelector<HTMLElement>('.slider-handle')
      if (!before || !handle) return

      // 装飾的なUI要素をスクリーンリーダーから隠す
      handle.setAttribute('aria-hidden', 'true')
      container.querySelectorAll<HTMLElement>('.label').forEach((el) => {
        el.setAttribute('aria-hidden', 'true')
      })

      let dragging = false

      const setPosition = (x: number) => {
        const rect = container.getBoundingClientRect()
        let pct = ((x - rect.left) / rect.width) * 100
        pct = Math.max(0, Math.min(100, pct))
        before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`
        handle.style.left = `${pct}%`
      }

      const onMouseDown = (e: MouseEvent) => { dragging = true; setPosition(e.clientX) }
      const onMouseMove = (e: MouseEvent) => { if (dragging) setPosition(e.clientX) }
      const onMouseUp   = () => { dragging = false }

      const onTouchStart = (e: TouchEvent) => { dragging = true; setPosition(e.touches[0].clientX) }
      const onTouchMove  = (e: TouchEvent) => { if (dragging) { e.preventDefault(); setPosition(e.touches[0].clientX) } }
      const onTouchEnd   = () => { dragging = false }

      container.addEventListener('mousedown',  onMouseDown)
      window.addEventListener('mousemove',     onMouseMove)
      window.addEventListener('mouseup',       onMouseUp)
      container.addEventListener('touchstart', onTouchStart, { passive: true })
      container.addEventListener('touchmove',  onTouchMove,  { passive: false })
      container.addEventListener('touchend',   onTouchEnd)

      cleanups.push(() => {
        container.removeEventListener('mousedown',  onMouseDown)
        window.removeEventListener('mousemove',     onMouseMove)
        window.removeEventListener('mouseup',       onMouseUp)
        container.removeEventListener('touchstart', onTouchStart)
        container.removeEventListener('touchmove',  onTouchMove)
        container.removeEventListener('touchend',   onTouchEnd)
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return null
}
