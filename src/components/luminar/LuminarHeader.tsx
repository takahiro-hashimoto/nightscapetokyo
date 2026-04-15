'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AFFILIATE_URL, NAV_ITEMS } from '@/lib/luminar/config'

export default function LuminarHeader() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <header className="l-header" role="banner" itemScope itemType="https://schema.org/WPHeader">
      <div className="l-header__inner" style={{ padding: '0 1.25rem' }}>

        <div className="l-header__logo">
          <Link href="/luminar/" className="m-logo" rel="home" itemProp="url">
            <span itemProp="name">
              LUMINAR NEO <span className="m-logo__accent">ガイド</span>
            </span>
          </Link>
        </div>

        <button
          className="m-hamburger"
          id="js-hamburger"
          aria-controls="js-nav"
          aria-expanded={isOpen}
          aria-label="メニューを開く"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="m-hamburger__line"></span>
        </button>

        <nav
          className={`m-nav${isOpen ? ' is-active' : ''}`}
          id="js-nav"
          role="navigation"
          aria-label="メインメニュー"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          <div className="m-nav__inner">

            {/* SP: about box */}
            <div className="about-box u-sp-only">
              <div className="about-box__icon">
                <i className="fa-solid fa-camera" aria-hidden="true"></i>
                <span className="about-box__icon-check">
                  <i className="fa-solid fa-check" aria-hidden="true"></i>
                </span>
              </div>
              <div className="about-box__content">
                <div className="about-box__header">
                  <p className="about-box__title">このページについて</p>
                </div>
                <div className="about-box__text entry-content">
                  <p>
                    Luminar Neo利用歴2年の現役フォトグラファーが運営するルミナーネオの購入ガイドページです。
                  </p>
                  <p>
                    <Link href="/luminar/" onClick={close}>Luminar Neo完全購入ガイド</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* PC: nav links */}
            <div className="u-pc-only">
              <ul className="m-nav__list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href} itemProp="name">
                    <Link href={item.href} itemProp="url">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* PC: CTA button */}
            <div className="m-nav__button u-pc-only">
              <a
                href={AFFILIATE_URL}
                className="m-btn m-btn--primary m-btn--sm"
                target="_blank"
                rel="noopener sponsored"
              >
                公式サイト{' '}
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              </a>
            </div>

            {/* SP: nav links in drawer */}
            <ul className="m-nav__list u-sp-only">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={close}>{item.label}</Link>
                </li>
              ))}
            </ul>

          </div>
        </nav>

        <div
          className={`m-overlay${isOpen ? ' is-active' : ''}`}
          id="js-overlay"
          onClick={close}
        ></div>

      </div>
    </header>
  )
}
