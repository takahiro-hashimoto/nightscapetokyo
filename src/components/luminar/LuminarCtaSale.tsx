'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AFFILIATE_URL, COUPON_CODE } from '@/lib/luminar/config'

type SaleSettings = {
  isActive: boolean
  saleName: string
  hasCoupon: boolean
}

export default function LuminarCtaSale() {
  const [settings, setSettings] = useState<SaleSettings>({
    isActive: false,
    saleName: 'セール',
    hasCoupon: true,
  })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    fetch('/api/luminar/sale-settings')
      .then((r) => r.json())
      .then((data) =>
        setSettings({
          isActive: data.isActive,
          saleName: data.saleName,
          hasCoupon: data.hasCoupon,
        }),
      )
      .catch(() => {/* keep defaults */})
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COUPON_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      // fallback: select text
    }
  }

  const { isActive, saleName, hasCoupon } = settings

  return (
    <section className="m-cta-sale" aria-labelledby="cta-title">
      <div className="m-cta-sale__bg m-cta-sale__bg--1" aria-hidden="true"></div>
      <div className="m-cta-sale__bg m-cta-sale__bg--2" aria-hidden="true"></div>

      <div className="m-cta-sale__content">
        <p className="m-cta-sale__title" id="cta-title">
          <i className="fa fa-bolt" aria-hidden="true"></i>{' '}
          {isActive ? (
            <>Luminar Neoの<br className="sp-only" />{saleName}実施中！</>
          ) : (
            <>Luminar Neoを<br className="sp-only" />お得に購入する</>
          )}
        </p>

        <div className="m-cta-sale__desc">
          {isActive ? (
            <>
              <p>ただいまLuminar Neoの{saleName}開催中！お得に買い切り版を購入できるチャンスです。</p>
              {hasCoupon && (
                <p>
                  さらにセールと併用できる当サイト経由で使える限定クーポンを用意。
                  30日間の全額返金保証付きもあるので、安心してお試しいただけます。
                </p>
              )}
            </>
          ) : (
            <p>
              {hasCoupon
                ? '当サイト経由で使える限定クーポンを用意しました。Luminar Neoをお得に購入するのにご活用ください。30日間の全額返金保証付きもあるので、安心してお試しいただけます。'
                : 'Luminar Neoは、プロ級の編集が直感的に行えるAIフォトエディターです。30日間の全額返金保証も用意されているので、安心してお試しいただけます。'}
            </p>
          )}
        </div>

        {hasCoupon && (
          <div className="m-cta-coupon-area">
            <button className="m-cta-coupon-btn" onClick={handleCopy} type="button">
              <span className="m-cta-coupon__label">10%OFF COUPON</span>
              <div className="m-cta-coupon__code">
                <span>{COUPON_CODE}</span>
                <i className="fa-regular fa-copy m-cta-coupon__icon" aria-hidden="true"></i>
              </div>
              <p className="m-cta-coupon__hint">クリックしてコピー</p>
            </button>
            <p
              className="m-cta-msg"
              aria-live="polite"
              style={{ display: copied ? 'block' : 'none', color: '#10b981' }}
            >
              コピーしました！
            </p>
          </div>
        )}

        <div className="m-cta-actions">
          <p>
            <a
              href={AFFILIATE_URL}
              className="m-btn m-btn--primary m-btn--shiny"
              target="_blank"
              rel="noopener sponsored"
            >
              <span>
                {isActive ? '公式サイトでセール情報をチェック' : '公式サイトを見る'}{' '}
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </span>
            </a>
          </p>
          <p className="text-xxsmall">
            <Link href="/luminar/sale-and-coupon-info/" className="m-btn m-btn--glass">
              {isActive ? 'Luminar Neoのセール情報詳細' : 'Luminar Neoを安く買う方法'}{' '}
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
