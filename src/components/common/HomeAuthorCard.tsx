import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Props = {
  /** セクション見出し。省略時は見出しなし */
  heading?: string
  /** aboutページへのリンクパス（デフォルト: /about/） */
  aboutHref?: string
  /** home-author-body の先頭に表示するラベル（例: "この記事の著者"） */
  authorLabel?: string
}

export default function HomeAuthorCard({
  heading,
  aboutHref = '/about/',
  authorLabel,
}: Props) {
  return (
    <aside className="home-author-aside" aria-label="運営者情報">
      {heading && <h2 className="home-section-heading">{heading}</h2>}
      <div className="home-author-card">
        <div className="home-author-left">
          <div className="home-author-avatar">
            <Image
              src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/images.jpg"
              alt="東京夜景ナビ 運営者タカヒロ"
              width={120}
              height={120}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="home-author-name">タカヒロ</p>
          <p className="home-author-title">夜景フォトグラファー / Webディレクター</p>
        </div>
        <div className="home-author-body">
          {authorLabel && (
            <p className="home-author-label">{authorLabel}</p>
          )}
          <p>月間20〜30万PVの東京夜景専門メディア。実際に足を運んで撮影した夜景スポットを定番から穴場まで200ヶ所以上紹介しています。</p>
          <p>国内外の多くの方に東京夜景の魅力を伝えていきたい。そんな思いでこのサイトを運営しています。</p>
          <h3 className="home-author-achievements-label">主な実績</h3>
          <ul className="home-author-achievements">
            <li>東京タワー公式サイトのタイムラプス映像を撮影</li>
            <li>ザ・プリンス パークタワー東京の客室・レストラン写真を撮影</li>
            <li>第8回東京大回廊写真コンテスト 出光美術館賞を受賞</li>
            <li>NHK総合・BS TBS・テレビ朝日などに映像・写真を提供</li>
          </ul>
          <div className="home-author-link">
            <Link href={aboutHref}>
              プロフィール・活動実績をもっと見る
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
