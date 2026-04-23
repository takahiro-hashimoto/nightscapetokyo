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
  /** 表示ロケール。省略時は "ja" */
  locale?: string
}

type AuthorLabels = {
  ariaLabel: string
  authorLabel: string
  authorName: string
  avatarAlt: string
  title: string
  bio1: string
  bio2: string
  achievementsHeading: string
  achievements: string[]
  linkText: string
  aboutHref: string
}

const AUTHOR_LABELS: Record<string, AuthorLabels> = {
  ja: {
    ariaLabel: "運営者情報",
    authorLabel: "この記事の著者",
    authorName: "タカヒロ",
    avatarAlt: "東京夜景ナビ 運営者タカヒロ",
    title: "夜景フォトグラファー / Webディレクター",
    bio1: "月間20〜30万PVの東京夜景専門メディア。実際に足を運んで撮影した夜景スポットを定番から穴場まで200ヶ所以上紹介しています。",
    bio2: "国内外の多くの方に東京夜景の魅力を伝えていきたい。そんな思いでこのサイトを運営しています。",
    achievementsHeading: "主な実績",
    achievements: [
      "東京タワー公式サイトのタイムラプス映像を撮影",
      "ザ・プリンス パークタワー東京の客室・レストラン写真を撮影",
      "第8回東京大回廊写真コンテスト 出光美術館賞を受賞",
      "NHK総合・BS TBS・テレビ朝日などに映像・写真を提供",
    ],
    linkText: "プロフィール・活動実績をもっと見る",
    aboutHref: "/about/",
  },
  en: {
    ariaLabel: "About the author",
    authorLabel: "About the author",
    authorName: "Takahiro",
    avatarAlt: "Takahiro, author of Tokyo Night View Guide",
    title: "Night View Photographer / Web Director",
    bio1: "A Tokyo night view specialist media with 200,000–300,000 monthly page views. We introduce over 200 night view spots — from popular landmarks to hidden gems — all personally visited and photographed.",
    bio2: "Our mission is to share the beauty of Tokyo's night views with people both in Japan and around the world.",
    achievementsHeading: "Notable achievements",
    achievements: [
      "Produced time-lapse footage for the official Tokyo Tower website",
      "Photographed guest rooms and restaurants at The Prince Park Tower Tokyo",
      "Won the Idemitsu Museum of Arts Award at the 8th Tokyo Grand Tour Photo Contest",
      "Provided footage and photos to NHK General, BS TBS, TV Asahi, and others",
    ],
    linkText: "View full profile & portfolio",
    aboutHref: "/en/about/",
  },
  ko: {
    ariaLabel: "운영자 정보",
    authorLabel: "이 기사의 저자",
    authorName: "타카히로",
    avatarAlt: "도쿄 야경 가이드 운영자 타카히로",
    title: "야경 사진작가 / 웹 디렉터",
    bio1: "월 20~30만 PV의 도쿄 야경 전문 미디어. 직접 방문하여 촬영한 야경 명소를 인기 스폿부터 숨은 명소까지 200곳 이상 소개합니다.",
    bio2: "국내외 많은 분들께 도쿄 야경의 매력을 전하고 싶다는 마음으로 이 사이트를 운영하고 있습니다.",
    achievementsHeading: "주요 실적",
    achievements: [
      "도쿄 타워 공식 사이트 타임랩스 영상 촬영",
      "더 프린스 파크 타워 도쿄 객실·레스토랑 사진 촬영",
      "제8회 도쿄 대회랑 사진 콘테스트 이데미쓰 미술관상 수상",
      "NHK 종합·BS TBS·테레비 아사히 등에 영상·사진 제공",
    ],
    linkText: "프로필·활동 실적 더 보기",
    aboutHref: "/ko/about/",
  },
  tw: {
    ariaLabel: "關於作者",
    authorLabel: "本文作者",
    authorName: "Takahiro",
    avatarAlt: "東京夜景導覽作者 Takahiro",
    title: "夜景攝影師 / 網頁總監",
    bio1: "月瀏覽量達20〜30萬的東京夜景專業媒體。介紹超過200處親自造訪並拍攝的夜景景點，從熱門地標到隱藏秘境一應俱全。",
    bio2: "希望將東京夜景的魅力傳遞給國內外更多的朋友，這是我們經營這個網站的初衷。",
    achievementsHeading: "主要成就",
    achievements: [
      "為東京鐵塔官方網站拍攝縮時影片",
      "拍攝東京王子花園塔飯店的客房與餐廳照片",
      "第8屆東京大迴廊攝影比賽獲出光美術館獎",
      "為NHK綜合頻道、BS TBS、朝日電視台等提供影像與照片",
    ],
    linkText: "查看完整個人資料與作品集",
    aboutHref: "/tw/about/",
  },
  cn: {
    ariaLabel: "关于作者",
    authorLabel: "本文作者",
    authorName: "Takahiro",
    avatarAlt: "东京夜景导航作者 Takahiro",
    title: "夜景摄影师 / 网页总监",
    bio1: "月浏览量达20〜30万的东京夜景专业媒体。介绍超过200处亲自造访并拍摄的夜景景点，从热门地标到隐藏秘境应有尽有。",
    bio2: "希望将东京夜景的魅力传递给国内外更多的朋友，这是我们运营这个网站的初衷。",
    achievementsHeading: "主要成就",
    achievements: [
      "为东京铁塔官方网站拍摄延时影片",
      "拍摄东京王子花园塔酒店的客房与餐厅照片",
      "第8届东京大回廊摄影比赛获出光美术馆奖",
      "为NHK综合频道、BS TBS、朝日电视台等提供影像与照片",
    ],
    linkText: "查看完整个人资料与作品集",
    aboutHref: "/cn/about/",
  },
}

export default function HomeAuthorCard({
  heading,
  aboutHref,
  authorLabel,
  locale = 'ja',
}: Props) {
  const l = AUTHOR_LABELS[locale] ?? AUTHOR_LABELS.ja
  const label = authorLabel ?? l.authorLabel
  const href = aboutHref ?? l.aboutHref

  return (
    <aside className="home-author-aside" aria-label={l.ariaLabel}>
      {heading && <h2 className="home-section-heading">{heading}</h2>}
      <div className="home-author-card">
        <div className="home-author-left">
          <div className="home-author-avatar">
            <Image
              src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/images.jpg"
              alt={l.avatarAlt}
              width={120}
              height={120}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="home-author-name">{l.authorName}</p>
          <p className="home-author-title">{l.title}</p>
        </div>
        <div className="home-author-body">
          {label && (
            <p className="home-author-label">{label}</p>
          )}
          <p>{l.bio1}</p>
          <p>{l.bio2}</p>
          <h3 className="home-author-achievements-label">{l.achievementsHeading}</h3>
          <ul className="home-author-achievements">
            {l.achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="home-author-link">
            <Link href={href}>
              {l.linkText}
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
