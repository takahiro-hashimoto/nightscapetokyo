import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Camera,
  Award,
  Newspaper,
  BookOpen,
  Mail,
} from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import {
  ALL_LOCALE_SLUGS,
  SITE_URL,
  LOCALE_LABELS,
  buildAreaHreflangAlternates,
} from "@/lib/types";

/* ─── 翻訳ラベル ─── */
type AboutLabels = {
  title: string;
  description: string;
  profile: string;
  profileItems: { label: string; value: string }[];
  bio: string[];
  equipment: string;
  equipmentDesc: string;
  achievements: string;
  achievementsDesc: string;
  media: string;
  story: string;
  storyTexts: string[];
  contactHeading: string;
  contactCta: string;
};

const ABOUT_LABELS: Record<string, AboutLabels> = {
  en: {
    title: "About Us",
    description: "Learn about Takahiro, the operator of Tokyo Night View Guide — profile, achievements, and camera equipment.",
    profile: "About the Operator",
    profileItems: [
      { label: "Name", value: "Takahiro" },
      { label: "Occupation", value: "Web Director / Blogger / Photographer" },
      { label: "From", value: "Aichi, Japan" },
      { label: "Born", value: "December 1989" },
      { label: "Hobbies", value: "Photography, Travel, Driving" },
    ],
    bio: [
      "While working as a Web Director at an IT company in Tokyo, I share information about Tokyo's night view spots.",
      "I especially love night view spots with views of Tokyo Tower and waterfront areas. I've visited almost all major night view spots in Tokyo.",
    ],
    equipment: "Camera Equipment",
    equipmentDesc: "I use the following cameras and lenses for night photography.",
    achievements: "Achievements",
    achievementsDesc: "Selected work and achievements received through this website.",
    media: "Media Features",
    story: "How It All Started",
    storyTexts: [
      "I first fell in love with Tokyo's night views around 2012, when I visited Tokyo for job hunting. Arriving by overnight bus, I was captivated by the stunning skyline of skyscrapers lining the expressway at dawn.",
      "After starting my career in Nagoya, I couldn't forget those views. I saved up to buy camera gear and made it an annual tradition to photograph Tokyo's night views every winter.",
      "In 2022, I transferred to a company in Tokyo. That's when I organized all the photos I'd taken over the years and launched this website. Now with over 200 spots covered, photographing Tokyo at night has become my life's work.",
    ],
    contactHeading: "Feel free to reach out for photography commissions or photo licensing.",
    contactCta: "Contact / Photography Inquiries",
  },
  ko: {
    title: "운영자 소개",
    description: "도쿄 야경 가이드 운영자 타카히로의 프로필, 활동 실적, 촬영 장비를 소개합니다.",
    profile: "운영자 소개",
    profileItems: [
      { label: "이름", value: "타카히로" },
      { label: "직업", value: "웹 디렉터 / 블로거 / 포토그래퍼" },
      { label: "출신", value: "아이치현, 일본" },
      { label: "출생", value: "1989년 12월" },
      { label: "취미", value: "카메라, 여행, 드라이브" },
    ],
    bio: [
      "도쿄의 IT 기업에서 웹 디렉터로 근무하면서 도쿄의 야경 명소에 대한 정보를 발신하고 있습니다.",
      "도쿄 타워가 보이는 야경 명소와 워터프론트 야경 명소를 특히 좋아합니다. 도쿄 도내의 주요 야경 명소는 거의 모두 방문했습니다.",
    ],
    equipment: "촬영 장비",
    equipmentDesc: "야경 촬영에 사용하는 카메라·렌즈 목록입니다.",
    achievements: "활동 실적",
    achievementsDesc: "본 사이트를 통해 의뢰받은 주요 활동 실적을 소개합니다.",
    media: "미디어 게재",
    story: "야경 촬영을 시작한 계기",
    storyTexts: [
      "도쿄 야경에 매료된 것은 2012년경, 취업 활동으로 도쿄를 방문했을 때입니다. 심야 버스로 도착해 새벽 수도고속도로 양옆에 늘어선 고층 빌딩의 웅장한 풍경에 감동했습니다.",
      "나고야에서 취직 후에도 그 풍경을 잊지 못해 카메라 장비를 구입하고 매년 겨울 도쿄의 야경을 촬영하는 것이 연례행사가 되었습니다.",
      "2022년 도쿄로 이직한 것을 계기로 그동안 촬영한 사진을 정리하여 본 사이트를 개설했습니다. 현재 200곳 이상의 야경 명소를 소개하고 있으며, 도쿄의 밤 풍경을 기록하는 것이 라이프워크가 되었습니다.",
    ],
    contactHeading: "촬영 의뢰나 사진 소재 구매는 부담 없이 문의해 주세요.",
    contactCta: "문의하기 · 촬영 의뢰",
  },
  tw: {
    title: "關於本站",
    description: "東京夜景導覽營運者Takahiro的介紹、活動實績及攝影器材。",
    profile: "關於營運者",
    profileItems: [
      { label: "姓名", value: "Takahiro" },
      { label: "職業", value: "網頁總監 / 部落客 / 攝影師" },
      { label: "出身", value: "日本愛知縣" },
      { label: "出生", value: "1989年12月" },
      { label: "興趣", value: "攝影、旅行、自駕" },
    ],
    bio: [
      "在東京的IT企業擔任網頁總監，同時分享東京夜景景點資訊。",
      "特別喜歡能看到東京鐵塔的夜景景點和海濱夜景。東京都內主要夜景景點幾乎全部走訪過。",
    ],
    equipment: "攝影器材",
    equipmentDesc: "拍攝夜景使用的相機和鏡頭。",
    achievements: "活動實績",
    achievementsDesc: "透過本站接獲委託的部分活動實績。",
    media: "媒體刊載",
    story: "開始拍攝夜景的契機",
    storyTexts: [
      "2012年左右在求職過程中造訪東京時，被首都高速公路旁高樓林立的壯觀夜景所深深吸引。",
      "在名古屋工作後仍無法忘懷那些景色，於是購入攝影器材，每年冬天到東京拍攝夜景成為固定行程。",
      "2022年轉職到東京後，整理多年來拍攝的照片開設了本站。目前已收錄超過200個夜景景點，記錄東京夜色已成為生活中的重要部分。",
    ],
    contactHeading: "攝影委託或照片素材購買，歡迎隨時聯繫。",
    contactCta: "聯絡我們 · 攝影委託",
  },
  cn: {
    title: "关于本站",
    description: "东京夜景导航运营者Takahiro的介绍、活动实绩及摄影器材。",
    profile: "关于运营者",
    profileItems: [
      { label: "姓名", value: "Takahiro" },
      { label: "职业", value: "网页总监 / 博主 / 摄影师" },
      { label: "出身", value: "日本爱知县" },
      { label: "出生", value: "1989年12月" },
      { label: "兴趣", value: "摄影、旅行、自驾" },
    ],
    bio: [
      "在东京的IT企业担任网页总监，同时分享东京夜景景点信息。",
      "特别喜欢能看到东京塔的夜景景点和海滨夜景。东京都内主要夜景景点几乎全部走访过。",
    ],
    equipment: "摄影器材",
    equipmentDesc: "拍摄夜景使用的相机和镜头。",
    achievements: "活动实绩",
    achievementsDesc: "通过本站接到的部分工作实绩。",
    media: "媒体刊载",
    story: "开始拍摄夜景的契机",
    storyTexts: [
      "2012年左右在求职过程中造访东京时，被首都高速公路旁高楼林立的壮观夜景深深吸引。",
      "在名古屋工作后仍无法忘怀那些景色，于是购入摄影器材，每年冬天到东京拍摄夜景成为固定行程。",
      "2022年转职到东京后，整理多年来拍摄的照片开设了本站。目前已收录超过200个夜景景点，记录东京夜色已成为生活中的重要部分。",
    ],
    contactHeading: "摄影委托或照片素材购买，欢迎随时联系。",
    contactCta: "联系我们 · 摄影委托",
  },
};

/* ── 共通データ ── */
const SNS_LINKS = [
  { name: "YouTube", href: "https://www.youtube.com/@nightscape-tokyo?sub_confirmation=1", icon: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" },
  { name: "X", href: "https://twitter.com/takahiro__1202", icon: "M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.2H4.3l13.3 17.4z" },
  { name: "Instagram", href: "https://www.instagram.com/nightscape.tokyo/", icon: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
  { name: "TikTok", href: "https://www.tiktok.com/@nightscape_tokyo", icon: "M19.3 5.8a5.2 5.2 0 0 1-3.1-2.7A5.1 5.1 0 0 1 15.6 1h-3.8v14.4a2.9 2.9 0 0 1-2.9 2.7 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6 0 .9.1V7.5a6.7 6.7 0 0 0-.9-.1A6.8 6.8 0 0 0 2 14.2a6.8 6.8 0 0 0 6.8 6.8 6.8 6.8 0 0 0 6.8-6.8V8.4a9 9 0 0 0 5.4 1.8V6.4a5.2 5.2 0 0 1-1.7-.6z" },
  { name: "Pinterest", href: "https://www.pinterest.jp/nightscape_tokyo/", icon: "M12 0a12 12 0 0 0-4.4 23.2c-.1-.9-.2-2.4 0-3.4l1.3-5.5s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-1 3.7-.3 1.1.6 2 1.7 2 2.1 0 3.7-2.2 3.7-5.4 0-2.8-2-4.8-4.9-4.8-3.4 0-5.3 2.5-5.3 5.1 0 1 .4 2.1.9 2.7.1.1.1.2.1.3l-.3 1.3c-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.9-7.2 4.1 0 7.4 3 7.4 6.9 0 4.1-2.6 7.5-6.2 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1.1-1 2.5-1.5 3.3A12 12 0 1 0 12 0z" },
  { name: "Lemon8", href: "https://www.lemon8-app.com/nightscape_tokyo", icon: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 3.5a2.2 2.2 0 0 0-2.2 2.2c0 .5.2 1 .5 1.4A4.5 4.5 0 0 0 7.5 13 4.5 4.5 0 0 0 12 17.5a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-2.8-4.2c.3-.3.5-.8.5-1.3A2.2 2.2 0 0 0 12 5.5z" },
];

const EQUIPMENT = [
  "Sony α7Ⅳ", "Sony α7III", "Sony α7C",
  "Sony FE 24-105mm F4 G OSS",
  "TAMRON 28-75mm F/2.8 Di III RXD",
  "TAMRON 17-28mm F/2.8 Di III RXD",
  "TAMRON 70-180mm F/2.8 Di III VXD",
  "SONY Sonnar T* FE 55mm F1.8 ZA",
  "Voigtlander ULTRA WIDE-HELIAR 12mm F5.6 III",
];

const ACHIEVEMENTS = [
  { title: "株式会社TOKYO TOWER PC版トップページのタイムラプス映像を撮影", image: "/images/about/tokyo-tower.jpg" },
  { title: "ザ・プリンス パークタワー東京 プロモーション用写真を撮影", image: "/images/about/prince-park-tower.jpg" },
  { title: "ザ・プリンス パークタワー東京 リニューアルプロジェクト用写真撮影", image: "/images/about/prince-renewal.jpg" },
  { title: "名古屋プリンスホテルスカイタワー 客室からの眺望を撮影", image: "/images/about/nagoya-prince.jpg" },
  { title: "動画コンテスト「港、動く 15秒の物語」審査員", image: "/images/about/minato-ugoku.jpg" },
  { title: "日本電設工業株式会社 Webサイトのメインビジュアルを納品", image: "/images/about/densetsuko.jpg" },
  { title: "AIROS Skyview ヘリコプター遊覧 PR記事を作成", image: "/images/about/airos.jpg" },
  { title: "レストランルーク「SKY TERRACE」取材記事を担当", image: "/images/about/restaurant-luke.jpg" },
  { title: "第8回東京大回廊写真コンテスト 出光美術館賞を受賞", image: "/images/about/photo-contest.jpg" },
  { title: "BS TBS タイムラプス映像を提供", image: "/images/about/bs-tbs.jpg" },
  { title: "NHK総合 タイムラプス映像を提供", image: "/images/about/nhk.jpg" },
  { title: "テレビ朝日「ザワつく!金曜日」写真素材を提供", image: "/images/about/tv-asahi.jpg" },
  { title: "朝日新聞コラムにインタビュー記事が掲載", image: "/images/about/asahi.jpg" },
];

const MEDIA_JA = [
  "ライフスタイル比較メディア「Abemaチョイス」の記事の監修",
  "家電・ガジェット紹介メディア「Picky's」のおすすめの雲台を紹介する記事の監修",
  "AI総研のオウンドメディアにておすすめのWebメディアとして紹介",
  "月刊GoodsPress 2024年3月号にインタビュー記事が掲載",
];

/* ─── Static params ─── */
export function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((lang) => ({ category: lang }));
}

/* ─── Metadata ─── */
type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: locale } = await params;
  const labels = ABOUT_LABELS[locale];
  if (!labels) return {};
  return {
    title: labels.title,
    description: labels.description,
    alternates: {
      languages: buildAreaHreflangAlternates(SITE_URL, "about", ALL_LOCALE_SLUGS),
    },
  };
}

export const revalidate = 3600;

/* ─── Page ─── */
export default async function AboutPageI18n({ params }: Props) {
  const { category: locale } = await params;
  const labels = ABOUT_LABELS[locale];
  if (!labels) return null;

  return (
    <>
      <LanguageSwitcher
        currentLocale={locale}
        categorySlug="about"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <article className="home-section" style={{ paddingTop: 0 }}>
        <div className="home-container">
          <Breadcrumb items={[{ label: labels.title }]} locale={locale} />

          {/* ── ヒーロー ── */}
          <div className="content-card about-hero-card" style={{ marginTop: 24 }}>
            <div className="about-hero-avatar">
              <Image src="/images/about/profile.jpg" alt="Takahiro" width={140} height={140} />
            </div>
            <div className="about-hero-info">
              <h1>Takahiro</h1>
              <p>{labels.profileItems[1].value}</p>
              <div className="about-sns-row">
                {SNS_LINKS.map((sns) => (
                  <a key={sns.name} href={sns.href} target="_blank" rel="noopener noreferrer" aria-label={sns.name}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={sns.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── プロフィール ── */}
          <div className="content-card card-padding">
            <h2>
              <span className="heading-icon"><User size={18} /></span>
              {labels.profile}
            </h2>
            <table className="info-table">
              <tbody>
                {labels.profileItems.map((row) => (
                  <tr key={row.label}><th>{row.label}</th><td>{row.value}</td></tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: 24 }}>
              {labels.bio.map((text, i) => (
                <p key={i} className="about-section-text">{text}</p>
              ))}
            </div>
          </div>

          {/* ── 撮影機材 ── */}
          <div className="content-card card-padding">
            <h2>
              <span className="heading-icon"><Camera size={18} /></span>
              {labels.equipment}
            </h2>
            <p className="about-section-text">{labels.equipmentDesc}</p>
            <ul className="about-equipment-list">
              {EQUIPMENT.map((item) => (
                <li key={item}><Camera size={14} color="#64748b" />{item}</li>
              ))}
            </ul>
          </div>

          {/* ── 活動実績 ── */}
          <div className="content-card card-padding">
            <h2>
              <span className="heading-icon"><Award size={18} /></span>
              {labels.achievements}
            </h2>
            <p className="about-section-text" style={{ marginBottom: 24 }}>{labels.achievementsDesc}</p>
            <div className="about-achievement-grid">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.title} className="about-achievement-item">
                  <div className="achievement-image">
                    <Image src={a.image} alt={a.title} fill sizes="100px" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="achievement-body">
                    <h3>{a.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── メディア掲載 ── */}
          <div className="content-card card-padding">
            <h2>
              <span className="heading-icon"><Newspaper size={18} /></span>
              {labels.media}
            </h2>
            <ul className="about-media-list">
              {MEDIA_JA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* ── きっかけ ── */}
          <div className="content-card card-padding">
            <h2>
              <span className="heading-icon"><BookOpen size={18} /></span>
              {labels.story}
            </h2>
            {labels.storyTexts.map((text, i) => (
              <p key={i} className="about-section-text">{text}</p>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="content-card about-cta">
            <p className="about-section-text" style={{ marginBottom: 20, textAlign: "center" }}>
              {labels.contactHeading}
            </p>
            <Link href="/contact">
              <Mail size={18} />
              {labels.contactCta}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
