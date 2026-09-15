'use client'

import { useEffect, useId, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from '@/components/common/AppLink'
import { AFFILIATE_URL, getActiveCoupon } from '@/lib/luminar/config'
import { useSaleSettings } from '@/hooks/useSaleSettings'

const SALE_PAGE_PATH = '/luminar/sale-and-coupon-info/'

/** 末尾スラッシュの有無を揃えて比較する（trailingSlash 設定に依存させない） */
function stripTrailingSlash(path: string): string {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

export default function LuminarCtaSale() {
  const settings = useSaleSettings()
  // セールページ上では「セール情報詳細」リンクが自分自身を指すので出さない。
  // このコンポーネントはクライアント側なので usePathname で現在パスを見る
  const pathname = usePathname()
  const isSalePage =
    pathname != null && stripTrailingSlash(pathname) === stripTrailingSlash(SALE_PAGE_PATH)
  const [copied, setCopied] = useState(false)
  // 1ページに複数置けるようにする。固定の id だと重複して
  // aria-labelledby がどちらを指すか決まらなくなる
  const titleId = useId()
  const coupon = getActiveCoupon()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coupon.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      // fallback: select text
    }
  }

  const isActive = settings?.isActive ?? false
  const hasCoupon = settings?.hasCoupon ?? true

  // 残り日数はマウント後に出す。レンダー中に Date.now() を読むと、
  // 生成済みHTML（別の日に作られている可能性がある）と閲覧時点で値がずれ、
  // ハイドレーションの不一致になる。
  const [daysLeft, setDaysLeft] = useState<number | null>(null)
  const saleEnd = settings?.saleEnd ?? null
  useEffect(() => {
    if (!isActive || !saleEnd) {
      setDaysLeft(null)
      return
    }
    const ms = new Date(saleEnd).getTime() - Date.now()
    setDaysLeft(Math.max(0, Math.ceil(ms / 86_400_000)))
  }, [isActive, saleEnd])

  return (
    <aside className="m-cta-sale" aria-labelledby={titleId}>
      <div className="m-cta-sale__bg m-cta-sale__bg--1" aria-hidden="true"></div>
      <div className="m-cta-sale__bg m-cta-sale__bg--2" aria-hidden="true"></div>

      <div className="m-cta-sale__content">
        {/* CTA の見出しは h2 にしない。記事本文の見出し階層に混ざり、
            アウトライン上で本文の h2 と競合するため。
            aria-labelledby は p でも参照できるのでラベル付けは維持される。 */}
        <p className="m-cta-sale__title" id={titleId}>
          <i className="fa fa-bolt" aria-hidden="true"></i>{' '}
          {isActive ? (
            <>Luminar Neo<br className="sp-only" />セール実施中{daysLeft != null && `（残り${daysLeft}日）`}</>
          ) : (
            <>Luminar Neoを<br className="sp-only" />お得に購入する</>
          )}
        </p>

        <div className="m-cta-sale__desc">
          {isActive ? (
            <>
              <p>ただいまLuminar Neoはセール開催中！お得に買い切り版を購入できるチャンスです。</p>
              {/* 以前は「セールと併用できる」と断定していたが、公式規約上は割引の併用不可で、
                  本文・FAQ（併用可否は購入画面で確認）と矛盾していた。確認を促す表現にとどめる。 */}
              {hasCoupon && (
                <p>
                  当サイト限定クーポン（{coupon.discount}OFF）もあります。セール価格に重ねられるかは、カートで金額を見て確認してください。
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

        <div className="m-cta-bottom">
          {hasCoupon && (
            <div className="m-cta-coupon-area">
              <button className="m-cta-coupon-btn" onClick={handleCopy} type="button" aria-label="クーポンコードをコピー">
                <span className="m-cta-coupon__label">{coupon.discount}OFF COUPON</span>
                <div className="m-cta-coupon__code">
                  <span>{coupon.code}</span>
                  <i className="fa-regular fa-copy m-cta-coupon__icon" aria-hidden="true"></i>
                </div>
                <p className="m-cta-coupon__hint">クリックしてコピー</p>
              </button>
              {copied && (
                <p className="m-cta-msg" aria-live="polite" style={{ color: '#10b981' }}>
                  コピーしました！
                </p>
              )}
            </div>
          )}

          <div className="m-cta-actions">
          <p>
            <a
              href={AFFILIATE_URL}
              className="m-btn m-btn--primary m-btn--shiny"
              target="_blank"
              rel="noopener noreferrer sponsored"
              aria-label={`${isActive ? '公式サイトでセール情報をチェック' : '公式サイトを見る'}（新しいタブで開く）`}
            >
              <span>
                {isActive ? '公式サイトでセール情報をチェック' : '公式サイトを見る'}{' '}
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </span>
            </a>
          </p>
          {!isSalePage && (
            <p className="text-small l-top-small" style={{ textAlign: 'center' }}>
              <Link href={SALE_PAGE_PATH}>
                {isActive ? 'Luminar Neoのセール情報詳細' : 'Luminar Neoを安く買う方法'}
              </Link>
            </p>
          )}
        </div>
        </div>{/* /.m-cta-bottom */}
      </div>
    </aside>
  )
}
