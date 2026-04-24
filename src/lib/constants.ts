import type { SiteLocale } from "@/lib/types";

/* ------------------------------------------------------------------ */
/* ナビゲーション用定数 — Header.tsx で使用                               */
/* ------------------------------------------------------------------ */

export type NavLinkItem = { label: string; href: string; count?: number };

/** エリア slug → ロケール別表示名 */
export const AREA_NAME: Record<string, Record<SiteLocale, string>> = {
  minato:    { ja: "港区",     en: "Minato",    ko: "미나토구",  tw: "港區",   cn: "港区"   },
  shibuya:   { ja: "渋谷区",  en: "Shibuya",   ko: "시부야구",  tw: "澀谷區", cn: "涩谷区" },
  chiyoda:   { ja: "千代田区", en: "Chiyoda",   ko: "치요다구",  tw: "千代田區",cn:"千代田区"},
  shinjuku:  { ja: "新宿区",  en: "Shinjuku",  ko: "신주쿠구",  tw: "新宿區", cn: "新宿区" },
  chuo:      { ja: "中央区",  en: "Chuo",      ko: "추오구",    tw: "中央區", cn: "中央区" },
  sumida:    { ja: "墨田区",  en: "Sumida",    ko: "스미다구",  tw: "墨田區", cn: "墨田区" },
  toshima:   { ja: "豊島区",  en: "Toshima",   ko: "도시마구",  tw: "豐島區", cn: "丰岛区" },
  shinagawa: { ja: "品川区",  en: "Shinagawa", ko: "시나가와구", tw: "品川區", cn: "品川区" },
  edogawa:   { ja: "江戸川区", en: "Edogawa",  ko: "에도가와구", tw: "江戸川區",cn:"江户川区"},
  koto:      { ja: "江東区",  en: "Koto",      ko: "고토구",    tw: "江東區", cn: "江东区" },
  setagaya:  { ja: "世田谷区", en: "Setagaya", ko: "세타가야구", tw: "世田谷區",cn:"世田谷区"},
  nerima:    { ja: "練馬区",  en: "Nerima",    ko: "네리마구",  tw: "練馬區", cn: "练马区" },
  ota:       { ja: "大田区",  en: "Ota",       ko: "오타구",    tw: "大田區", cn: "大田区" },
  adachi:    { ja: "足立区",  en: "Adachi",    ko: "아다치구",  tw: "足立區", cn: "足立区" },
  katsushika:{ ja: "葛飾区",  en: "Katsushika",ko: "가쓰시카구",tw: "葛飾區", cn: "葛饰区" },
  arakawa:   { ja: "荒川区",  en: "Arakawa",   ko: "아라카와구", tw: "荒川區", cn: "荒川区" },
  itabashi:  { ja: "板橋区",  en: "Itabashi",  ko: "이타바시구", tw: "板橋區", cn: "板桥区" },
  suginami:  { ja: "杉並区",  en: "Suginami",  ko: "스기나미구", tw: "杉並區", cn: "杉并区" },
  nakano:    { ja: "中野区",  en: "Nakano",    ko: "나카노구",  tw: "中野區", cn: "中野区" },
  bunkyo:    { ja: "文京区",  en: "Bunkyo",    ko: "분쿄구",    tw: "文京區", cn: "文京区" },
  taito:     { ja: "台東区",  en: "Taito",     ko: "다이토구",  tw: "台東區", cn: "台东区" },
  meguro:    { ja: "目黒区",  en: "Meguro",    ko: "메구로구",  tw: "目黒區", cn: "目黒区" },
  kita:      { ja: "北区",   en: "Kita",      ko: "기타구",    tw: "北區",   cn: "北区"   },
  yokohama:  { ja: "横浜",    en: "Yokohama",   ko: "요코하마",   tw: "橫濱",      cn: "横滨"      },
  other:     { ja: "その他エリア", en: "Other areas", ko: "기타 지역", tw: "其他地區",  cn: "其他地区"  },
};

/** 東京都内のエリア slug セット（横浜など都外を除く） */
export const TOKYO_AREA_SLUGS = new Set(
  Object.keys(AREA_NAME).filter((s) => s !== "yokohama")
);

/** タグ slug → ロケール別表示名 */
export const TAG_NAME: Record<string, Record<SiteLocale, string>> = {
  "free":                  { ja: "無料スポット",                 en: "Free spots",                   ko: "무료 스팟",        tw: "免費景點",      cn: "免费景点"      },
  "date":                  { ja: "デート向け",                   en: "For dates",                    ko: "데이트 추천",      tw: "約會推薦",      cn: "约会推荐"      },
  "waterfront":            { ja: "ウォーターフロント",             en: "Waterfront",                   ko: "워터프론트",       tw: "海濱",          cn: "滨水区"        },
  "park":                  { ja: "公園・広場",                   en: "Parks",                        ko: "공원·광장",        tw: "公園·廣場",     cn: "公园·广场"     },
  "observatory":           { ja: "展望台",                      en: "Observatories",                ko: "전망대",           tw: "展望台",        cn: "展望台"        },
  "tokyo-tower":           { ja: "東京タワーが見える",             en: "Tokyo Tower view",             ko: "도쿄타워 뷰",      tw: "東京鐵塔景色",   cn: "东京塔景色"    },
  "tokyo-sky-tree":        { ja: "東京スカイツリーが見える",        en: "Skytree view",                 ko: "스카이트리 뷰",     tw: "晴空塔景色",    cn: "晴空塔景色"    },
  "mt-fuji":               { ja: "富士山が見える",                en: "Mt. Fuji view",                ko: "후지산 뷰",        tw: "富士山景色",    cn: "富士山景色"    },
  "drive":                 { ja: "ドライブ向け",                  en: "Drive spots",                  ko: "드라이브",         tw: "兜風景點",      cn: "兜风景点"      },
  "rooftop":               { ja: "屋上スポット",                  en: "Rooftop",                      ko: "루프탑",           tw: "屋頂景點",      cn: "屋顶景点"      },
  "walking":               { ja: "散歩・街歩き",                  en: "Walking",                      ko: "산책",             tw: "散步",          cn: "散步"          },
  "photography":           { ja: "写真撮影向け",                  en: "Photography",                  ko: "사진 촬영",        tw: "攝影景點",      cn: "摄影景点"      },
  "hotel":                 { ja: "夜景が綺麗なホテル",             en: "Hotels with night views",      ko: "야경이 예쁜 호텔", tw: "夜景優美的飯店", cn: "夜景美丽的酒店" },
  "cherry-blossoms":       { ja: "夜桜",                        en: "Cherry blossoms at night",     ko: "야간 벚꽃",        tw: "夜間賞櫻",      cn: "夜樱"          },
  "tokyo-station":         { ja: "東京駅が見える",                en: "Tokyo Station view",           ko: "도쿄역 뷰",        tw: "東京車站景色",   cn: "东京站景色"    },
  "illumination":          { ja: "イルミネーション",               en: "Illuminations",                ko: "일루미네이션",      tw: "燈飾活動",      cn: "灯饰活动"      },
  "rainbow-bridge":        { ja: "レインボーブリッジが見える",        en: "Rainbow Bridge view",          ko: "레인보우 브릿지 뷰",   tw: "彩虹橋景色",    cn: "彩虹桥景色"    },
  "tokyo-gate-bridge":     { ja: "東京ゲートブリッジが見える",        en: "Tokyo Gate Bridge view",       ko: "도쿄 게이트 브릿지 뷰", tw: "東京大橋景色", cn: "东京门大桥景色" },
  "gate-bridge":           { ja: "東京ゲートブリッジが見える",        en: "Tokyo Gate Bridge view",       ko: "도쿄 게이트 브릿지 뷰", tw: "東京大橋景色", cn: "东京门大桥景色" },
  "scramble-intersection": { ja: "渋谷スクランブル交差点が見える",   en: "Shibuya Scramble view",        ko: "시부야 스크램블 뷰", tw: "澀谷路口景色",  cn: "涩谷路口景色"  },
  "autumn-leaves":         { ja: "紅葉のライトアップ",             en: "Autumn leaves illumination",   ko: "단풍 라이트업",     tw: "楓葉燈光秀",    cn: "红叶灯光秀"    },
  "restaurant":            { ja: "夜景が綺麗なレストラン",          en: "Restaurants with night views", ko: "야경 레스토랑",     tw: "夜景餐廳",      cn: "夜景餐厅"      },
};

/** SP ドロワー用ナビリンク（ロケール別） */
export const DRAWER_MENU_ITEMS: Record<
  SiteLocale,
  { areas: NavLinkItem[]; content: NavLinkItem[]; siteInfo: NavLinkItem[] }
> = {
  ja: {
    areas: [
      { label: "港区", href: "/minato/" },
      { label: "渋谷区", href: "/shibuya/" },
      { label: "千代田区", href: "/chiyoda/" },
      { label: "新宿区", href: "/shinjuku/" },
      { label: "中央区", href: "/chuo/" },
      { label: "墨田区", href: "/sumida/" },
      { label: "豊島区", href: "/toshima/" },
      { label: "品川区", href: "/shinagawa/" },
    ],
    content: [
      { label: "おすすめスポット", href: "/recommend/" },
      { label: "記事一覧", href: "/article/" },
      { label: "タイムラプス動画", href: "/time-lapse/" },
    ],
    siteInfo: [
      { label: "運営者について", href: "/about/" },
      { label: "お問い合わせ", href: "/contact/" },
      { label: "コンテンツ制作ポリシー", href: "/guidelines/" },
      { label: "プライバシーポリシー", href: "/privacy-policy/" },
      { label: "利用規約", href: "/caution/" },
      { label: "リンク集", href: "/links/" },
      { label: "サイトマップ", href: "/sitemap/" },
    ],
  },
  en: {
    areas: [
      { label: "Minato", href: "/en/minato/" },
      { label: "Shibuya", href: "/en/shibuya/" },
      { label: "Chiyoda", href: "/en/chiyoda/" },
      { label: "Shinjuku", href: "/en/shinjuku/" },
      { label: "Chuo", href: "/en/chuo/" },
      { label: "Sumida", href: "/en/sumida/" },
      { label: "Toshima", href: "/en/toshima/" },
      { label: "Shinagawa", href: "/en/shinagawa/" },
    ],
    content: [
      { label: "Recommended Spots", href: "/en/recommend/" },
      { label: "Time-lapse Videos", href: "/en/time-lapse/" },
    ],
    siteInfo: [
      { label: "About", href: "/en/about/" },
      { label: "Contact", href: "/en/contact/" },
      { label: "Content Policy", href: "/en/guidelines/" },
      { label: "Privacy Policy", href: "/en/privacy-policy/" },
      { label: "Terms of Use", href: "/en/caution/" },
      { label: "Links", href: "/en/links/" },
      { label: "Sitemap", href: "/en/sitemap/" },
    ],
  },
  ko: {
    areas: [
      { label: "미나토구", href: "/ko/minato/" },
      { label: "시부야구", href: "/ko/shibuya/" },
      { label: "치요다구", href: "/ko/chiyoda/" },
      { label: "신주쿠구", href: "/ko/shinjuku/" },
      { label: "추오구", href: "/ko/chuo/" },
      { label: "스미다구", href: "/ko/sumida/" },
      { label: "도시마구", href: "/ko/toshima/" },
      { label: "시나가와구", href: "/ko/shinagawa/" },
    ],
    content: [
      { label: "추천 스팟", href: "/ko/recommend/" },
      { label: "타임랩스 영상", href: "/ko/time-lapse/" },
    ],
    siteInfo: [
      { label: "소개", href: "/ko/about/" },
      { label: "문의", href: "/ko/contact/" },
      { label: "콘텐츠 제작 정책", href: "/ko/guidelines/" },
      { label: "개인정보 처리방침", href: "/ko/privacy-policy/" },
      { label: "이용약관", href: "/ko/caution/" },
      { label: "링크 모음", href: "/ko/links/" },
      { label: "사이트맵", href: "/ko/sitemap/" },
    ],
  },
  tw: {
    areas: [
      { label: "港區", href: "/tw/minato/" },
      { label: "澀谷區", href: "/tw/shibuya/" },
      { label: "千代田區", href: "/tw/chiyoda/" },
      { label: "新宿區", href: "/tw/shinjuku/" },
      { label: "中央區", href: "/tw/chuo/" },
      { label: "墨田區", href: "/tw/sumida/" },
      { label: "豐島區", href: "/tw/toshima/" },
      { label: "品川區", href: "/tw/shinagawa/" },
    ],
    content: [
      { label: "推薦景點", href: "/tw/recommend/" },
      { label: "縮時攝影影片", href: "/tw/time-lapse/" },
    ],
    siteInfo: [
      { label: "關於", href: "/tw/about/" },
      { label: "聯絡", href: "/tw/contact/" },
      { label: "內容製作政策", href: "/tw/guidelines/" },
      { label: "隱私權政策", href: "/tw/privacy-policy/" },
      { label: "使用條款", href: "/tw/caution/" },
      { label: "連結集", href: "/tw/links/" },
      { label: "網站地圖", href: "/tw/sitemap/" },
    ],
  },
  cn: {
    areas: [
      { label: "港区", href: "/cn/minato/" },
      { label: "涩谷区", href: "/cn/shibuya/" },
      { label: "千代田区", href: "/cn/chiyoda/" },
      { label: "新宿区", href: "/cn/shinjuku/" },
      { label: "中央区", href: "/cn/chuo/" },
      { label: "墨田区", href: "/cn/sumida/" },
      { label: "丰岛区", href: "/cn/toshima/" },
      { label: "品川区", href: "/cn/shinagawa/" },
    ],
    content: [
      { label: "推荐景点", href: "/cn/recommend/" },
      { label: "延时摄影视频", href: "/cn/time-lapse/" },
    ],
    siteInfo: [
      { label: "关于", href: "/cn/about/" },
      { label: "联系", href: "/cn/contact/" },
      { label: "内容制作政策", href: "/cn/guidelines/" },
      { label: "隐私政策", href: "/cn/privacy-policy/" },
      { label: "使用条款", href: "/cn/caution/" },
      { label: "链接集", href: "/cn/links/" },
      { label: "网站地图", href: "/cn/sitemap/" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* SNSリンク一覧 — フッター・Aboutページで共用                             */
/* ------------------------------------------------------------------ */

/** SNSリンク一覧 — フッター・Aboutページで共用 */
export const SNS_LINKS = [
  { name: "YouTube", href: "https://www.youtube.com/@nightscape-tokyo?sub_confirmation=1", icon: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" },
  { name: "X", href: "https://twitter.com/takahiro__1202", icon: "M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.2H4.3l13.3 17.4z" },
  { name: "Instagram", href: "https://www.instagram.com/nightscape.tokyo/", icon: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
  { name: "TikTok", href: "https://www.tiktok.com/@nightscape_tokyo", icon: "M19.3 5.8a5.2 5.2 0 0 1-3.1-2.7A5.1 5.1 0 0 1 15.6 1h-3.8v14.4a2.9 2.9 0 0 1-2.9 2.7 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6 0 .9.1V7.5a6.7 6.7 0 0 0-.9-.1A6.8 6.8 0 0 0 2 14.2a6.8 6.8 0 0 0 6.8 6.8 6.8 6.8 0 0 0 6.8-6.8V8.4a9 9 0 0 0 5.4 1.8V6.4a5.2 5.2 0 0 1-1.7-.6z" },
  { name: "Pinterest", href: "https://www.pinterest.jp/nightscape_tokyo/", icon: "M12 0a12 12 0 0 0-4.4 23.2c-.1-.9-.2-2.4 0-3.4l1.3-5.5s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-1 3.7-.3 1.1.6 2 1.7 2 2.1 0 3.7-2.2 3.7-5.4 0-2.8-2-4.8-4.9-4.8-3.4 0-5.3 2.5-5.3 5.1 0 1 .4 2.1.9 2.7.1.1.1.2.1.3l-.3 1.3c-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.9-7.2 4.1 0 7.4 3 7.4 6.9 0 4.1-2.6 7.5-6.2 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1.1-1 2.5-1.5 3.3A12 12 0 1 0 12 0z" },
  { name: "Lemon8", href: "https://www.lemon8-app.com/nightscape_tokyo", icon: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 3.5a2.2 2.2 0 0 0-2.2 2.2c0 .5.2 1 .5 1.4A4.5 4.5 0 0 0 7.5 13 4.5 4.5 0 0 0 12 17.5a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-2.8-4.2c.3-.3.5-.8.5-1.3A2.2 2.2 0 0 0 12 5.5z" },
] as const;
