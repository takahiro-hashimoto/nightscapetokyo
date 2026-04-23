import Link from 'next/link'

export default function LuminarBridge() {
  return (
    <aside
      className="content-card card-padding article-body"
      aria-label="Luminar Neo 紹介"
      style={{ borderLeft: '4px solid var(--c-sky-400)', marginBottom: '1.5rem' }}
    >
      <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>
        夜景写真をもっとキレイに仕上げたいなら
      </p>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '1rem', lineHeight: 1.7 }}>
        このサイト管理人が実際に使っている写真編集ソフト「Luminar Neo」なら、
        AIがノイズを自動除去・空をワンクリックで置換。夜景撮影の失敗写真でも
        ドラマチックに仕上げられます。
      </p>
      <Link href="/luminar/" className="m-btn m-btn--primary">
        Luminar Neo 完全購入ガイドを見る
      </Link>
    </aside>
  )
}
