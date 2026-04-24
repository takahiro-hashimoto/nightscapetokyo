'use client'

import { useEffect } from 'react'

export default function MTabsInit() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.m-tabs').forEach((tabs) => {
      tabs.querySelectorAll<HTMLElement>('.m-tab-btn').forEach((btn) => {
        btn.addEventListener('click', function () {
          const tab = this.dataset.tab
          tabs.querySelectorAll('.m-tab-btn').forEach((b) => b.classList.remove('is-active'))
          tabs.querySelectorAll('.m-tab-content').forEach((c) => c.classList.remove('is-active'))
          this.classList.add('is-active')
          const target = tabs.querySelector<HTMLElement>(`[data-content="${tab}"]`)
          if (target) target.classList.add('is-active')
        })
      })
    })
  }, [])

  return null
}
