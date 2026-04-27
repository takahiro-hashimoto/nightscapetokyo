import type { SiteLocale } from "@/lib/types";

/* ---- TagArticle: ラベル ---- */
export const TAG_ARTICLE_LABELS: Record<SiteLocale, {
  toc: string;
  tocAriaLabel: string;
  faqLink: string;
  faqHeading: (tagName: string) => string;
  mapHeading: (tagName: string) => string;
  otherSpotsHeading: (tagName: string) => string;
  lastUpdated: string;
  topLink: string;
  topLinkHref: string;
  simplePageTitle: (tagName: string) => string;
  simplePageLead: (tagName: string, count: number) => string;
  simpleCount: (n: number) => string;
  sortLabel: string;
  sortRating: string;
  sortUpdated: string;
}> = {
  ja: {
    toc: "≡ タップできる目次",
    tocAriaLabel: "目次",
    faqLink: "よくある質問",
    faqHeading: (tagName) => `${tagName}スポットを撮影する際によくある質問`,
    mapHeading: (tagName) => `${tagName}の夜景スポットを地図から探す`,
    otherSpotsHeading: (tagName) => `その他の${tagName}スポット`,
    lastUpdated: "最終更新日",
    topLink: "東京都内の夜景情報一覧",
    topLinkHref: "/",
    simplePageTitle: (tagName) => `${tagName}の夜景スポット一覧`,
    simplePageLead: (tagName, count) => `これまで取材した東京都内の夜景スポットの中から「${tagName}」のタグを含む夜景スポットを${count}件掲載しています。気になるスポットをチェックしてみてください！`,
    simpleCount: (n) => `掲載数：${n}件`,
    sortLabel: "並び替え：",
    sortRating: "評価高い順",
    sortUpdated: "更新日新しい順",
  },
  en: {
    toc: "≡ Table of Contents",
    tocAriaLabel: "Table of Contents",
    faqLink: "FAQ",
    faqHeading: (tagName) => `Frequently Asked Questions About ${tagName} Spots`,
    mapHeading: (tagName) => `Find ${tagName} Spots on the Map`,
    otherSpotsHeading: (tagName) => `Other ${tagName} Spots`,
    lastUpdated: "Last updated",
    topLink: "Tokyo Night View Spot List",
    topLinkHref: "/en",
    simplePageTitle: (tagName) => `${tagName} Night View Spots`,
    simplePageLead: (tagName, count) => `Explore ${count} Tokyo night view spots tagged "${tagName}", all personally visited by our team. Check out spots that interest you!`,
    simpleCount: (n) => `${n} spots`,
    sortLabel: "Sort by: ",
    sortRating: "Highest rated",
    sortUpdated: "Recently updated",
  },
  ko: {
    toc: "≡ 목차",
    tocAriaLabel: "목차",
    faqLink: "자주 묻는 질문",
    faqHeading: (tagName) => `${tagName} 스폿 촬영 시 자주 묻는 질문`,
    mapHeading: (tagName) => `지도에서 ${tagName} 스폿 찾기`,
    otherSpotsHeading: (tagName) => `기타 ${tagName} 스폿`,
    lastUpdated: "최종 업데이트",
    topLink: "도쿄 야경 스폿 목록",
    topLinkHref: "/ko",
    simplePageTitle: (tagName) => `${tagName} 야경 스폿 목록`,
    simplePageLead: (tagName, count) => `직접 취재한 도쿄 야경 스폿 중에서 「${tagName}」 태그를 포함한 야경 스폿 ${count}건을 소개합니다. 마음에 드는 스폿을 확인해 보세요！`,
    simpleCount: (n) => `${n}건`,
    sortLabel: "정렬: ",
    sortRating: "평점 높은 순",
    sortUpdated: "최근 업데이트 순",
  },
  tw: {
    toc: "≡ 點擊查看目錄",
    tocAriaLabel: "目錄",
    faqLink: "常見問題",
    faqHeading: (tagName) => `關於${tagName}景點的常見問題`,
    mapHeading: (tagName) => `從地圖尋找${tagName}景點`,
    otherSpotsHeading: (tagName) => `其他${tagName}景點`,
    lastUpdated: "最後更新",
    topLink: "東京夜景景點一覽",
    topLinkHref: "/tw",
    simplePageTitle: (tagName) => `${tagName}夜景景點一覽`,
    simplePageLead: (tagName, count) => `從實地採訪的東京夜景景點中，收錄了 ${count} 處含有「${tagName}」標籤的夜景景點。快來看看感興趣的景點吧！`,
    simpleCount: (n) => `共 ${n} 件`,
    sortLabel: "排序：",
    sortRating: "評價最高",
    sortUpdated: "最近更新",
  },
  cn: {
    toc: "≡ 点击查看目录",
    tocAriaLabel: "目录",
    faqLink: "常见问题",
    faqHeading: (tagName) => `关于${tagName}景点的常见问题`,
    mapHeading: (tagName) => `从地图寻找${tagName}景点`,
    otherSpotsHeading: (tagName) => `其他${tagName}景点`,
    lastUpdated: "最后更新",
    topLink: "东京夜景景点一览",
    topLinkHref: "/cn",
    simplePageTitle: (tagName) => `${tagName}夜景景点一览`,
    simplePageLead: (tagName, count) => `从实地采访的东京夜景景点中，收录了 ${count} 处含有「${tagName}」标签的夜景景点。快来看看感兴趣的景点吧！`,
    simpleCount: (n) => `共 ${n} 件`,
    sortLabel: "排序：",
    sortRating: "评价最高",
    sortUpdated: "最近更新",
  },
};

/* ---- TagImageSlider: ラベル ---- */
export const TAG_SLIDER_LABELS: Record<SiteLocale, {
  nightView: string;
  prev: string;
  next: string;
  imageN: (n: number) => string;
  rankBadge: (n: number) => string;
}> = {
  ja: { nightView: "の夜景", prev: "前の画像", next: "次の画像", imageN: (n) => `画像${n}`, rankBadge: (n) => `${n}位` },
  en: { nightView: " night view", prev: "Previous image", next: "Next image", imageN: (n) => `Image ${n}`, rankBadge: (n) => `#${n}` },
  ko: { nightView: " 야경", prev: "이전 이미지", next: "다음 이미지", imageN: (n) => `이미지 ${n}`, rankBadge: (n) => `${n}위` },
  tw: { nightView: "夜景", prev: "上一張", next: "下一張", imageN: (n) => `圖片${n}`, rankBadge: (n) => `第${n}名` },
  cn: { nightView: "夜景", prev: "上一张", next: "下一张", imageN: (n) => `图片${n}`, rankBadge: (n) => `第${n}名` },
};

/* ---- TagSpotCard: ラベル ---- */
export const TAG_SPOT_CARD_LABELS: Record<SiteLocale, {
  address: string;
  fee: string;
  height: string;
  hours: string;
  checkin: string;
  checkout: string;
  station: string;
  detail: string;
  morePhotos: string;
  moreHotelPhotos: string;
  nightView: string;
  rating: string;
  facilityInfo: (name: string) => string;
  expand: string;
  collapse: string;
}> = {
  ja: {
    address: "住所",
    fee: "料金",
    height: "展望台の高さ",
    hours: "営業時間",
    checkin: "チェックイン",
    checkout: "チェックアウト",
    station: "最寄駅",
    detail: "詳細ページ",
    morePhotos: "この夜景スポットの写真をもっと見る",
    moreHotelPhotos: "このホテルの写真をもっと見る",
    nightView: "の夜景",
    rating: "総合評価",
    facilityInfo: (name) => `${name}の施設情報`,
    expand: "もっとみる",
    collapse: "閉じる",
  },
  en: {
    address: "Address",
    fee: "Admission",
    height: "Observatory Height",
    hours: "Hours",
    checkin: "Check-in",
    checkout: "Check-out",
    station: "Nearest Station",
    detail: "Details",
    morePhotos: "See more photos of this spot",
    moreHotelPhotos: "See more photos of this hotel",
    nightView: " night view",
    rating: "Rating",
    facilityInfo: (name) => `${name} facility information`,
    expand: "Show more",
    collapse: "Close",
  },
  ko: {
    address: "주소",
    fee: "요금",
    height: "전망대 높이",
    hours: "영업시간",
    checkin: "체크인",
    checkout: "체크아웃",
    station: "가까운 역",
    detail: "상세 페이지",
    morePhotos: "이 야경 스폿의 사진 더 보기",
    moreHotelPhotos: "이 호텔의 사진 더 보기",
    nightView: " 야경",
    rating: "평가",
    facilityInfo: (name) => `${name} 시설 정보`,
    expand: "더 보기",
    collapse: "닫기",
  },
  tw: {
    address: "地址",
    fee: "費用",
    height: "展望台高度",
    hours: "營業時間",
    checkin: "入住",
    checkout: "退房",
    station: "最近車站",
    detail: "詳細頁面",
    morePhotos: "查看更多這個夜景景點的照片",
    moreHotelPhotos: "查看更多這間飯店的照片",
    nightView: "夜景",
    rating: "評分",
    facilityInfo: (name) => `${name}設施資訊`,
    expand: "查看更多",
    collapse: "收起",
  },
  cn: {
    address: "地址",
    fee: "费用",
    height: "展望台高度",
    hours: "营业时间",
    checkin: "入住",
    checkout: "退房",
    station: "最近车站",
    detail: "详细页面",
    morePhotos: "查看更多这个夜景景点的照片",
    moreHotelPhotos: "查看更多这间酒店的照片",
    nightView: "夜景",
    rating: "评分",
    facilityInfo: (name) => `${name}设施信息`,
    expand: "查看更多",
    collapse: "收起",
  },
};
