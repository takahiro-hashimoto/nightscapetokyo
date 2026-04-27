import type { SiteLocale } from "@/lib/types";

/* ------------------------------------------------------------------ */
/* コンポーネント別ラベル（旧インライン定義をここに集約）               */
/* ⚠️ 新しいラベルを追加する際は必ず Record<SiteLocale, ...> を使用すること */
/* Record<string, ...> は使用禁止 - 翻訳漏れがコンパイル時に検出されなくなります */
/* ------------------------------------------------------------------ */

/* ---- Header: ナビゲーション静的ラベル ---- */
export const NAV_STATIC_LABELS: Record<SiteLocale, {
  recommend: string;
  area: string;
  tag: string;
  about: string;
  contact: string;
  eventSearch: string;
  otherArea: string;
  openMenu: string;
  mobileMenu: string;
}> = {
  ja: { recommend: "おすすめ夜景スポット", area: "エリア別に探す", tag: "目的別に探す", about: "運営者情報", contact: "お問い合わせ", eventSearch: "イベント別に探す", otherArea: "その他エリア", openMenu: "メニューを開く", mobileMenu: "モバイルメニュー" },
  en: { recommend: "Recommended Spots",    area: "Browse by Area", tag: "Browse by Purpose", about: "About", contact: "Contact", eventSearch: "Events", otherArea: "Other Areas", openMenu: "Open menu", mobileMenu: "Mobile menu" },
  ko: { recommend: "추천 스폿",            area: "지역별 탐색",     tag: "목적별 탐색",        about: "소개",  contact: "문의",  eventSearch: "이벤트별로 찾기", otherArea: "기타 지역", openMenu: "메뉴 열기", mobileMenu: "모바일 메뉴" },
  tw: { recommend: "推薦景點",             area: "依地區搜尋",     tag: "依目的搜尋",          about: "關於",  contact: "聯絡",  eventSearch: "依活動尋找", otherArea: "其他地區", openMenu: "開啟選單", mobileMenu: "行動版選單" },
  cn: { recommend: "推荐景点",             area: "按地区浏览",     tag: "按目的浏览",          about: "关于",  contact: "联系",  eventSearch: "按活动查找", otherArea: "其他地区", openMenu: "打开菜单", mobileMenu: "移动菜单" },
};

/* ---- Header: プロフィールラベル ---- */
export type ProfileLabels = { role: string; bio: string; link: string };
export const PROFILE_LABELS: Record<SiteLocale, ProfileLabels> = {
  ja: {
    role: "夜景フォトグラファー / Webディレクター",
    bio: "月間20〜30万PVの東京夜景専門メディア。実際に足を運んで撮影した夜景スポットを定番から穴場まで200ヶ所以上紹介しています。",
    link: "運営者情報を見る",
  },
  en: {
    role: "Night View Photographer / Web Director",
    bio: "A Tokyo night view media with 200K–300K monthly PVs. Covering 200+ spots from popular to hidden gems — all personally visited and photographed.",
    link: "About the author",
  },
  ko: {
    role: "야경 사진작가 / 웹 디렉터",
    bio: "월 20~30만 PV의 도쿄 야경 전문 미디어. 직접 발로 뛰며 촬영한 야경 스폿을 인기 명소부터 숨겨진 곳까지 200곳 이상 소개합니다.",
    link: "운영자 정보 보기",
  },
  tw: {
    role: "夜景攝影師 / 網站總監",
    bio: "月瀏覽量達20〜30萬的東京夜景專門媒體。親自走訪拍攝，介紹200處以上從熱門到隱藏版的夜景景點。",
    link: "查看運營者資訊",
  },
  cn: {
    role: "夜景摄影师 / 网站总监",
    bio: "月浏览量达20〜30万的东京夜景专业媒体。亲自走访拍摄，介绍200处以上从热门到隐藏版的夜景景点。",
    link: "查看运营者信息",
  },
};

/* ---- Header: モバイルメニューラベル ---- */
export const MENU_LABELS: Record<SiteLocale, { areas: string; content: string; siteInfo: string }> = {
  ja: { areas: "エリアから探す", content: "コンテンツ", siteInfo: "サイト情報" },
  en: { areas: "Browse by Area", content: "Content", siteInfo: "Site Info" },
  ko: { areas: "지역별 탐색", content: "콘텐츠", siteInfo: "사이트 정보" },
  tw: { areas: "按地區瀏覽", content: "內容", siteInfo: "網站資訊" },
  cn: { areas: "按地区浏览", content: "内容", siteInfo: "网站信息" },
};
