'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    twttr?: { widgets: { load: () => void } }
  }
}

// レイアウトで widgets.js を読み込み済み。
// クライアントサイドナビゲーション後に新しいブロッククオートを再処理するためだけに使う。
export default function TwitterEmbed() {
  useEffect(() => {
    window.twttr?.widgets.load()
  }, [])
  return null
}
