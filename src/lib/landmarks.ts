export type LandmarkCategory = "tower" | "castle" | "mountain" | "bridge" | "temple" | "other";

export interface Landmark {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: LandmarkCategory;
}

export const LANDMARKS: Landmark[] = [
  // タワー
  { id: "tokyo-tower",    name: "東京タワー",         lat: 35.6586, lng: 139.7454, category: "tower" },
  { id: "skytree",        name: "東京スカイツリー",   lat: 35.7101, lng: 139.8107, category: "tower" },
  { id: "marine-tower",   name: "横浜マリンタワー",   lat: 35.4437, lng: 139.6417, category: "tower" },
  { id: "sapporo-tv-tower", name: "さっぽろテレビ塔", lat: 43.0610, lng: 141.3564, category: "tower" },
  { id: "sendai-daikannon", name: "仙台大観音",       lat: 38.2930, lng: 140.8176, category: "tower" },
  { id: "chubu-electric-mirai-tower", name: "中部電力 MIRAI TOWER", lat: 35.1709, lng: 136.9086, category: "tower" },
  { id: "tsutenkaku",     name: "通天閣",             lat: 34.6525, lng: 135.5063, category: "tower" },
  { id: "kobe-port-tower", name: "神戸ポートタワー", lat: 34.6826, lng: 135.1878, category: "tower" },
  { id: "beppu-tower",    name: "別府タワー",         lat: 33.2797, lng: 131.5027, category: "tower" },
  { id: "fukuoka-tower",  name: "福岡タワー",         lat: 33.5933, lng: 130.3519, category: "tower" },
  { id: "kyoto-tower",    name: "京都タワー",         lat: 34.9875, lng: 135.7594, category: "tower" },
  { id: "nagasaki-peace-pagoda", name: "長崎平和祈念像", lat: 32.7797, lng: 129.8646, category: "tower" },
  { id: "goryokaku-tower", name: "五稜郭タワー",      lat: 41.7964, lng: 140.7548, category: "tower" },
  { id: "bepu-global-tower", name: "グローバルタワー", lat: 33.2951, lng: 131.4970, category: "tower" },
  // 山
  { id: "mt-fuji",        name: "富士山",             lat: 35.3606, lng: 138.7274, category: "mountain" },
  { id: "mt-takao",       name: "高尾山",             lat: 35.6256, lng: 139.2436, category: "mountain" },
  { id: "mt-tsukuba",     name: "筑波山",             lat: 36.2259, lng: 140.1067, category: "mountain" },
  { id: "mt-hakodate",    name: "函館山",             lat: 41.7576, lng: 140.6934, category: "mountain" },
  { id: "mt-maya",        name: "摩耶山",             lat: 34.7311, lng: 135.2311, category: "mountain" },
  { id: "mt-rokko",       name: "六甲山",             lat: 34.7749, lng: 135.2493, category: "mountain" },
  { id: "mt-inasa",       name: "稲佐山",             lat: 32.7531, lng: 129.8520, category: "mountain" },
  { id: "mt-sarakura",    name: "皿倉山",             lat: 33.8456, lng: 130.7808, category: "mountain" },
  { id: "mt-nokogiri",    name: "鋸山",               lat: 35.1542, lng: 139.8358, category: "mountain" },
  { id: "mt-yatsugatake", name: "八ヶ岳",             lat: 35.9706, lng: 138.3700, category: "mountain" },
  { id: "mt-iwaki",       name: "岩木山",             lat: 40.6553, lng: 140.3031, category: "mountain" },
  { id: "sakurajima",     name: "桜島",               lat: 31.5852, lng: 130.6575, category: "mountain" },
  { id: "mt-yoshino",     name: "吉野山",             lat: 34.3559, lng: 135.8584, category: "mountain" },
  // 城
  { id: "osaka-castle",   name: "大阪城",             lat: 34.6873, lng: 135.5262, category: "castle" },
  { id: "himeji-castle",  name: "姫路城",             lat: 34.8394, lng: 134.6939, category: "castle" },
  { id: "matsumoto",      name: "松本城",             lat: 36.2381, lng: 137.9722, category: "castle" },
  { id: "nagoya-castle",  name: "名古屋城",           lat: 35.1855, lng: 136.8996, category: "castle" },
  { id: "kumamoto",       name: "熊本城",             lat: 32.8032, lng: 130.7060, category: "castle" },
  { id: "odawara-castle", name: "小田原城",           lat: 35.2519, lng: 139.1548, category: "castle" },
  { id: "nijo-castle",    name: "二条城",             lat: 35.0142, lng: 135.7482, category: "castle" },
  { id: "hiroshima-castle", name: "広島城",           lat: 34.4020, lng: 132.4596, category: "castle" },
  { id: "matsue-castle",  name: "松江城",             lat: 35.4760, lng: 133.0505, category: "castle" },
  { id: "kokura-castle",  name: "小倉城",             lat: 33.8842, lng: 130.8734, category: "castle" },
  { id: "hirosaki-castle", name: "弘前城",            lat: 40.6079, lng: 140.4633, category: "castle" },
  { id: "okayama-castle", name: "岡山城",             lat: 34.6658, lng: 133.9347, category: "castle" },
  { id: "uwajima-castle", name: "宇和島城",           lat: 33.2233, lng: 132.5606, category: "castle" },
  { id: "inuyama-castle", name: "犬山城",             lat: 35.3897, lng: 136.9397, category: "castle" },
  // 橋
  { id: "rainbow-bridge", name: "レインボーブリッジ", lat: 35.6371, lng: 139.7628, category: "bridge" },
  { id: "akashi-bridge",  name: "明石海峡大橋",       lat: 34.6269, lng: 135.0119, category: "bridge" },
  { id: "tokyo-gate-bridge", name: "東京ゲートブリッジ", lat: 35.6278, lng: 139.8395, category: "bridge" },
  { id: "yokohama-bay-bridge", name: "横浜ベイブリッジ", lat: 35.4540, lng: 139.6767, category: "bridge" },
  { id: "seto-ohashi",    name: "瀬戸大橋",           lat: 34.3820, lng: 133.8231, category: "bridge" },
  { id: "kanmon-bridge",  name: "関門橋",             lat: 33.9580, lng: 130.9596, category: "bridge" },
  { id: "eitai-bridge",   name: "永代橋",             lat: 35.6745, lng: 139.7878, category: "bridge" },
  { id: "kachi-doki-bridge", name: "勝どき橋",        lat: 35.6649, lng: 139.7748, category: "bridge" },
  { id: "wakato-bridge",  name: "若戸大橋",           lat: 33.8899, lng: 130.8066, category: "bridge" },
  { id: "kurushima-kaikyo-bridge", name: "来島海峡大橋", lat: 34.1162, lng: 133.0183, category: "bridge" },
  // 寺社
  { id: "sensoji",        name: "浅草寺",             lat: 35.7148, lng: 139.7967, category: "temple" },
  { id: "fushimi-inari",  name: "伏見稲荷大社",       lat: 34.9672, lng: 135.7727, category: "temple" },
  { id: "itsukushima",    name: "厳島神社",           lat: 34.2960, lng: 132.3196, category: "temple" },
  { id: "nikko",          name: "日光東照宮",         lat: 36.7579, lng: 139.5991, category: "temple" },
  { id: "meiji-jingu",    name: "明治神宮",           lat: 35.6764, lng: 139.6993, category: "temple" },
  { id: "zojoji",         name: "増上寺",             lat: 35.6573, lng: 139.7482, category: "temple" },
  { id: "kiyomizudera",   name: "清水寺",             lat: 34.9949, lng: 135.7850, category: "temple" },
  { id: "kinkakuji",      name: "金閣寺",             lat: 35.0394, lng: 135.7292, category: "temple" },
  { id: "todaiji",        name: "東大寺",             lat: 34.6890, lng: 135.8398, category: "temple" },
  { id: "dazaifu-tenmangu", name: "太宰府天満宮",     lat: 33.5214, lng: 130.5350, category: "temple" },
  { id: "kaminarimon",    name: "雷門",               lat: 35.7108, lng: 139.7967, category: "temple" },
  { id: "heian-jingu",    name: "平安神宮",           lat: 35.0159, lng: 135.7823, category: "temple" },
  { id: "izumo-taisha",   name: "出雲大社",           lat: 35.4021, lng: 132.6851, category: "temple" },
  { id: "motonosumi-inari", name: "元乃隅神社",       lat: 34.3503, lng: 131.0137, category: "temple" },
  // その他
  { id: "miho",          name: "三保の松原",          lat: 35.0195, lng: 138.5221, category: "other" },
  { id: "tokyo-station", name: "東京駅",              lat: 35.6812, lng: 139.7671, category: "other" },
  { id: "odaiba",        name: "お台場海浜公園",      lat: 35.6298, lng: 139.7753, category: "other" },
  { id: "red-brick",     name: "横浜赤レンガ倉庫",    lat: 35.4529, lng: 139.6425, category: "other" },
  { id: "goryokaku",     name: "五稜郭",              lat: 41.7967, lng: 140.7569, category: "other" },
  { id: "kenrokuen",     name: "兼六園",              lat: 36.5611, lng: 136.6622, category: "other" },
  { id: "amanohashidate", name: "天橋立",             lat: 35.5715, lng: 135.1967, category: "other" },
  { id: "tokyo-metropolitan-gov", name: "東京都庁",   lat: 35.6896, lng: 139.6917, category: "other" },
  { id: "rainbow-bus-terminal", name: "東京国際クルーズターミナル", lat: 35.6176, lng: 139.7788, category: "other" },
  { id: "landmark-tower", name: "横浜ランドマークタワー", lat: 35.4549, lng: 139.6310, category: "other" },
  { id: "kobe-harborland", name: "神戸ハーバーランド", lat: 34.6795, lng: 135.1824, category: "other" },
  { id: "moji-retro",    name: "門司港レトロ",        lat: 33.9476, lng: 130.9602, category: "other" },
  { id: "shirakawago",   name: "白川郷",              lat: 36.2570, lng: 136.9062, category: "other" },
  { id: "arashiyama-bamboo", name: "嵐山竹林",        lat: 35.0170, lng: 135.6713, category: "other" },
  { id: "chureito-pagoda", name: "忠霊塔",            lat: 35.5013, lng: 138.7805, category: "other" },
  { id: "kawagoe-bell-tower", name: "時の鐘",         lat: 35.9237, lng: 139.4855, category: "other" },
];

export const CATEGORY_EMOJI: Record<LandmarkCategory, string> = {
  tower:    "🗼",
  castle:   "🏯",
  mountain: "🗻",
  bridge:   "🌉",
  temple:   "⛩",
  other:    "🏔",
};
