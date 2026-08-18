'use client'

import { useEffect } from 'react'

/**
 * 目次リンクのクリックだけを滑らかスクロールにする。
 *
 * CSS の `html { scroll-behavior: smooth }` は使ってはいけない。
 * 目次のジャンプだけでなく、ルート遷移のあとに Next が行う「先頭へ戻す」動作まで
 * アニメーションになり、別記事へ移った直後にページが流れながら
 * メインビジュアルが出てくる挙動になる。
 *
 * そのため既定の scroll-behavior は auto のままにし、
 * ここで nav.toc 内のハッシュリンクだけを横取りする。
 * 目次は6箇所で描画されるので、各コンポーネントではなく
 * RootShell に1つ置いて委譲で拾う。
 */
export default function SmoothTocScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // 修飾キー付き・中クリックなどは既定動作に任せる（別タブで開く等を壊さない）
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return
      }

      const el = e.target as Element | null
      const anchor = el?.closest?.('nav.toc a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return

      const id = decodeURIComponent(anchor.hash.slice(1))
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return

      e.preventDefault()

      // OS 側でアニメーションを減らす設定なら瞬間移動にする
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      // scroll-margin-top（[id] に 16px）はここでも効く
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })

      // 通常のアンカー遷移と同じく URL と履歴を更新する
      history.pushState(null, '', anchor.hash)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
