'use client'

import { useState } from 'react'
import { useSaleSettings } from '@/hooks/useSaleSettings'

export default function LuminarCtaMini() {
  const sale = useSaleSettings()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const code = 'nightscape10'
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      // fallback: do nothing
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <aside className="m-cta-mini" aria-label="Luminar Neo 購入案内">
      <div className="m-cta-mini__header">
        <span className="m-cta-mini__title">
          {sale?.isActive ? `${sale.saleName}開催中！今がお得に購入するチャンス` : 'Luminar Neo を一番お得に購入する'}
        </span>
      </div>
      <div className="m-cta-mini__inner">
        <div className="m-cta-mini__coupon-area">
          <button className="m-cta-mini__coupon-btn" type="button" onClick={handleCopy} aria-label="クーポンコードをコピー">
            <div className="m-cta-mini__coupon-head">
              <span className="m-cta-mini__coupon-label">10%OFF COUPON</span>
            </div>
            <div className="m-cta-mini__coupon-body">
              <span className="m-cta-mini__code">nightscape10</span>
              <i className="fa-regular fa-copy m-cta-mini__icon" aria-hidden="true"></i>
            </div>
            <p className="m-cta-mini__hint">クリックしてコピー</p>
          </button>
          {copied && (
            <p className="m-cta-msg" aria-live="polite">
              コピーしました！
            </p>
          )}
        </div>
        <div className="m-cta-mini__divider" aria-hidden="true"></div>
        <div className="m-cta-mini__action-area">
          <p className="m-cta-mini__micro">
            <i className="fa-solid fa-check" style={{ color: 'var(--c-emerald-500)' }}></i> 7日間無料体験 /
            {' '}<i className="fa-solid fa-shield-halved" style={{ color: 'var(--c-emerald-500)' }}></i> 30日返金保証
          </p>
          <a
            href="https://skylum.evyy.net/552xL3"
            className="m-btn m-btn--primary m-btn--wide"
            target="_blank"
            rel="noopener noreferrer sponsored"
            aria-label="公式サイトで価格をチェック（新しいタブで開く）"
          >
            公式サイトで価格をチェック <i className="fa-solid fa-chevron-right m-btn-icon-right" aria-hidden="true"></i>
          </a>
          <p className="m-cta-mini__micro">
            <a href="/luminar/">Luminar Neo 完全購入ガイド</a>
          </p>
        </div>
      </div>
    </aside>
  )
}
