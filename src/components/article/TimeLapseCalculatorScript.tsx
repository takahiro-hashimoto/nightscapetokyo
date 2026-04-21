'use client'

import { useEffect } from 'react'

function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  if (h > 0) return `${h}時間${m}分${s}秒`
  if (m > 0) return `${m}分${s}秒`
  return `${s}秒`
}

function formatVideoTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = Math.floor(totalSeconds % 60)
  const ms = Math.round((totalSeconds % 1) * 10)
  const msStr = ms > 0 ? `.${ms}` : ''
  if (m > 0) return `${m}分${s}${msStr}秒`
  return `${s}${msStr}秒`
}

export default function TimeLapseCalculatorScript() {
  useEffect(() => {
    const intervalRange = document.getElementById('js-calculator-interval') as HTMLInputElement | null
    const photoRange = document.getElementById('js-photo-sheets') as HTMLInputElement | null
    const intervalInput = document.getElementById('interval-input') as HTMLInputElement | null
    const photoInput = document.getElementById('photo-sheets-input') as HTMLInputElement | null
    const shootingResult = document.getElementById('shooting-time-result')
    const videoResult = document.getElementById('video-time-result')

    if (!intervalRange || !photoRange || !intervalInput || !photoInput) return

    function getSelectedFps(): number {
      const checked = document.querySelector<HTMLInputElement>("input[name='radio02']:checked")
      return checked ? Number(checked.value) : 30
    }

    function update() {
      const interval = Number(intervalRange!.value)
      const photos = Number(photoRange!.value)
      const fps = getSelectedFps()

      intervalInput!.value = String(interval)
      photoInput!.value = String(photos)

      if (shootingResult) {
        shootingResult.textContent = formatTime(interval * photos)
      }
      if (videoResult) {
        videoResult.textContent = fps > 0 ? formatVideoTime(photos / fps) : '—'
      }
    }

    // Range → Input sync
    intervalRange.addEventListener('input', update)
    photoRange.addEventListener('input', update)

    // Input → Range sync (allow manual entry)
    intervalInput.addEventListener('input', () => {
      const v = Math.max(1, Math.min(60, Number(intervalInput.value) || 1))
      intervalRange.value = String(v)
      update()
    })
    photoInput.addEventListener('input', () => {
      const v = Math.max(1, Math.min(999, Number(photoInput.value) || 1))
      photoRange.value = String(v)
      update()
    })

    // Radio buttons
    document.querySelectorAll<HTMLInputElement>("input[name='radio02']").forEach((r) => {
      r.addEventListener('change', update)
    })

    // Set defaults
    intervalRange.value = '5'
    photoRange.value = '300'
    const radio30 = document.getElementById('radio-30') as HTMLInputElement | null
    if (radio30) radio30.checked = true

    update()
  }, [])

  return null
}
