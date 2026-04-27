import type { StaticPageLabels } from "./types";

type SitemapOtherLink = { href: string; label: string };

export const SITEMAP_LABELS: Record<string, StaticPageLabels & {
  areaHeading: string;
  tagHeading: string;
  pageHeading: string;
  otherHeading: string;
  otherLinks: SitemapOtherLink[];
}> = {
  ja: {
    title: "サイトマップ", summary: "東京夜景ナビに掲載中の全ページへのリンク一覧です。", description: "東京夜景ナビのサイトマップです。",
    areaHeading: "エリア別 夜景スポット", tagHeading: "目的別 夜景スポット", pageHeading: "固定ページ",
    otherHeading: "その他",
    otherLinks: [
      { href: "/", label: "ホーム" },
      { href: "/search/", label: "スポット検索" },
      { href: "/recommend/", label: "おすすめの夜景スポット" },
      { href: "/time-lapse/", label: "タイムラプス映像集" },
      { href: "/simulator/", label: "日の出・日の入り方角シミュレーター" },
      { href: "/about/", label: "運営者情報" },
      { href: "/privacy-policy/", label: "プライバシーポリシー" },
    ],
  },
  en: {
    title: "Sitemap", summary: "A list of all pages published on Tokyo Night View Guide.", description: "Sitemap for Tokyo Night View Guide.",
    areaHeading: "Night View Spots by Area", tagHeading: "Night View Spots by Purpose", pageHeading: "Pages",
    otherHeading: "Other Pages",
    otherLinks: [
      { href: "/", label: "Home" },
      { href: "/search/", label: "Spot Search" },
      { href: "/recommend/", label: "Recommended Night View Spots" },
      { href: "/time-lapse/", label: "Time-lapse Videos" },
      { href: "/wallpaper/", label: "Smartphone Wallpapers" },
      { href: "/about/", label: "About" },
      { href: "/contact/", label: "Contact" },
      { href: "/guidelines/", label: "Content Policy" },
      { href: "/caution/", label: "Terms of Use" },
      { href: "/privacy-policy/", label: "Privacy Policy" },
    ],
  },
  ko: {
    title: "사이트맵", summary: "도쿄 야경 네비에 게재된 모든 페이지 링크 목록입니다.", description: "도쿄 야경 네비 사이트맵입니다.",
    areaHeading: "지역별 야경 스폿", tagHeading: "목적별 야경 스폿", pageHeading: "고정 페이지",
    otherHeading: "기타 페이지",
    otherLinks: [
      { href: "/", label: "홈" },
      { href: "/search/", label: "스폿 검색" },
      { href: "/recommend/", label: "추천 야경 스폿" },
      { href: "/time-lapse/", label: "타임랩스 영상집" },
      { href: "/wallpaper/", label: "스마트폰 배경화면" },
      { href: "/about/", label: "운영자 정보" },
      { href: "/contact/", label: "문의하기" },
      { href: "/guidelines/", label: "콘텐츠 제작 정책" },
      { href: "/caution/", label: "이용약관" },
      { href: "/privacy-policy/", label: "개인정보 처리방침" },
    ],
  },
  tw: {
    title: "網站地圖", summary: "東京夜景導覽所有頁面的連結一覽。", description: "東京夜景導覽網站地圖。",
    areaHeading: "按地區的夜景景點", tagHeading: "按目的的夜景景點", pageHeading: "固定頁面",
    otherHeading: "其他頁面",
    otherLinks: [
      { href: "/", label: "首頁" },
      { href: "/search/", label: "景點搜尋" },
      { href: "/recommend/", label: "推薦夜景景點" },
      { href: "/time-lapse/", label: "縮時攝影集" },
      { href: "/wallpaper/", label: "手機桌布" },
      { href: "/about/", label: "關於我們" },
      { href: "/contact/", label: "聯絡我們" },
      { href: "/guidelines/", label: "內容製作政策" },
      { href: "/caution/", label: "使用條款" },
      { href: "/privacy-policy/", label: "隱私權政策" },
    ],
  },
  cn: {
    title: "网站地图", summary: "东京夜景导航所有页面的链接列表。", description: "东京夜景导航网站地图。",
    areaHeading: "按地区的夜景景点", tagHeading: "按目的的夜景景点", pageHeading: "固定页面",
    otherHeading: "其他页面",
    otherLinks: [
      { href: "/", label: "首页" },
      { href: "/search/", label: "景点搜索" },
      { href: "/recommend/", label: "推荐夜景景点" },
      { href: "/time-lapse/", label: "延时摄影集" },
      { href: "/wallpaper/", label: "手机壁纸" },
      { href: "/about/", label: "关于我们" },
      { href: "/contact/", label: "联系我们" },
      { href: "/guidelines/", label: "内容制作政策" },
      { href: "/caution/", label: "使用条款" },
      { href: "/privacy-policy/", label: "隐私政策" },
    ],
  },
};
