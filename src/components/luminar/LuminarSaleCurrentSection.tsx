'use client'

import { useState, useEffect } from 'react'
import { AFFILIATE_URL, COUPON_CODE } from '@/lib/luminar/config'

type Settings = {
  isActive: boolean
  saleName: string
  hasCoupon: boolean
  saleStart: string | null
  saleEnd: string | null
}

function formatDateJst(iso: string): string {
  const d = new Date(iso)
  const jst = new Date(d.getTime() + 9 * 60 * 60 * 1000)
  return `${jst.getUTCFullYear()}年${jst.getUTCMonth() + 1}月${jst.getUTCDate()}日`
}

export default function LuminarSaleCurrentSection() {
  const [settings, setSettings] = useState<Settings | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    fetch('/api/luminar/sale-settings')
      .then((r) => r.json())
      .then(setSettings)
      .catch(() => {})
  }, [])

  if (!settings) return null

  const { isActive, saleName, hasCoupon, saleStart, saleEnd } = settings

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COUPON_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {}
  }

  if (isActive) {
    return (
      <section className="m-cta-sale m-cta-sale--inline" aria-label="現在のセール情報">
        <div className="m-cta-sale__bg m-cta-sale__bg--1" aria-hidden="true" />
        <div className="m-cta-sale__bg m-cta-sale__bg--2" aria-hidden="true" />
        <div className="m-cta-sale__content">
          <p className="m-cta-sale__title">
            <i className="fa fa-bolt" aria-hidden="true" /> {saleName}開催中！
          </p>
          {(saleStart || saleEnd) && (
            <p className="m-cta-sale__desc">
              期間：{saleStart ? formatDateJst(saleStart) : ''}〜{saleEnd ? formatDateJst(saleEnd) : ''}
            </p>
          )}
          {hasCoupon && (
            <div className="m-cta-coupon-area">
              <button className="m-cta-coupon-btn" onClick={handleCopy} type="button">
                <span className="m-cta-coupon__label">10%OFF COUPON</span>
                <div className="m-cta-coupon__code">
                  <span>{COUPON_CODE}</span>
                  <i className="fa-regular fa-copy m-cta-coupon__icon" aria-hidden="true" />
                </div>
                <p className="m-cta-coupon__hint">クリックしてコピー</p>
              </button>
              <p className="m-cta-msg" aria-live="polite" style={{ display: copied ? 'block' : 'none', color: '#10b981' }}>
                コピーしました！
              </p>
            </div>
          )}
          <div className="m-cta-actions">
            <p>
              <a href={AFFILIATE_URL} className="m-btn m-btn--primary m-btn--shiny" target="_blank" rel="noopener sponsored">
                <span>公式サイトでセール情報をチェック <i className="fa-solid fa-chevron-right" aria-hidden="true" /></span>
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <p className="m-no-sale">
      現在、Luminar Neoのセールは開催されておりません。次のセール時期は<a href="#timing">セール予想月</a>で解説しています。
      {hasCoupon && <>すぐに欲しい場合は<strong>{COUPON_CODE}</strong>のクーポンコードで10%OFFで購入できます。</>}
    </p>
  )
}
