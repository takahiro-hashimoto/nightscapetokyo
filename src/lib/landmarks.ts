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
  // 山
  { id: "mt-fuji",        name: "富士山",             lat: 35.3606, lng: 138.7274, category: "mountain" },
  { id: "mt-takao",       name: "高尾山",             lat: 35.6256, lng: 139.2436, category: "mountain" },
  // 城
  { id: "osaka-castle",   name: "大阪城",             lat: 34.6873, lng: 135.5262, category: "castle" },
  { id: "himeji-castle",  name: "姫路城",             lat: 34.8394, lng: 134.6939, category: "castle" },
  { id: "matsumoto",      name: "松本城",             lat: 36.2381, lng: 137.9722, category: "castle" },
  { id: "nagoya-castle",  name: "名古屋城",           lat: 35.1855, lng: 136.8996, category: "castle" },
  { id: "kumamoto",       name: "熊本城",             lat: 32.8032, lng: 130.7060, category: "castle" },
  // 橋
  { id: "rainbow-bridge", name: "レインボーブリッジ", lat: 35.6371, lng: 139.7628, category: "bridge" },
  { id: "akashi-bridge",  name: "明石海峡大橋",       lat: 34.6269, lng: 135.0119, category: "bridge" },
  // 寺社
  { id: "sensoji",        name: "浅草寺",             lat: 35.7148, lng: 139.7967, category: "temple" },
  { id: "fushimi-inari",  name: "伏見稲荷大社",       lat: 34.9672, lng: 135.7727, category: "temple" },
  { id: "itsukushima",    name: "厳島神社",           lat: 34.2960, lng: 132.3196, category: "temple" },
  { id: "nikko",          name: "日光東照宮",         lat: 36.7579, lng: 139.5991, category: "temple" },
  // その他
  { id: "hakodate-mt",   name: "函館山",              lat: 41.7576, lng: 140.6934, category: "other" },
  { id: "miho",          name: "三保の松原",          lat: 35.0195, lng: 138.5221, category: "other" },
];

export const CATEGORY_EMOJI: Record<LandmarkCategory, string> = {
  tower:    "🗼",
  castle:   "🏯",
  mountain: "🗻",
  bridge:   "🌉",
  temple:   "⛩",
  other:    "📍",
};
