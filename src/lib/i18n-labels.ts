import type React from "react";
import type { SiteLocale } from "@/lib/types";

/**
 * 各コンポーネントで使用するUIラベルの多言語定義
 * 全言語（ja, en, ko, tw, cn）を一元管理する。
 */

export type RatingLabels = {
  header: (name: string, area: string) => string;
  beautiful: string;
  access: string;
  atmosphere: string;
  cost: string;
  topLink: string;
  topLinkHref: string;
};

export type OverviewLabels = {
  heading: (name: string | null) => string;
};

export type GalleryLabels = {
  heading: (name: string | null) => string;
};

export type InfoLabels = {
  heading: (name: string | null) => string;
  address: string;
  hours: string;
  holiday: string;
  fee: string;
  height: string;
  features: string;
  links: string;
  officialSite: string;
  sns: string;
  relatedSite: string;
  categoryListLabel: (name: string) => string;
  eventPeriod: string;
  eventVenue: string;
  eventHours: string;
  hotelInfo: string;
  checkinCheckout: string;
  amenity: string;
};

export type AccessLabels = {
  heading: (name: string) => string;
  caption: string;
  station: string;
  parking: string;
  map: string;
};

export type BestTimeLabels = {
  heading: (name: string | null) => string;
  label: (dateLabel: string) => string;
  desc: string;
  sunset: (time: string) => string;
};

export type ReviewLabels = {
  heading: (name: string | null) => string;
  noReviews: string;
  formTitle: string;
  formDesc: string;
  ratingLabel: string;
  ratingPlaceholder: string;
  titleLabel: string;
  titlePlaceholder: string;
  contentLabel: string;
  contentPlaceholder: string;
  nameLabel: string;
  namePlaceholder: string;
  submit: string;
  ariaRating: (rating: number) => string;
};

export type FaqLabels = {
  heading: string;
};

export type MovieLabels = {
  heading: (name: string) => string;
  timeLapseLink: string;
};

export type AnchorLabels = {
  report: string;
  gallery: string;
  info: string;
  access: string;
  besttime: string;
  review: string;
  faq: string;
  movie: string;
  navAriaLabel: string;
};

export type RelatedLabels = {
  heading: (area: React.ReactNode) => React.ReactNode;
  more: (area: string) => string;
  asideLabel: string;
  imageAlt: (name: string) => string;
};

export type RecommendLabels = {
  heading: string;
};

export type ShareLabels = {
  heading: string;
  x: string;
  line: string;
  hatena: string;
  copy: string;
  copied: string;
  facebook?: string;
  whatsapp?: string;
  weibo?: string;
};

export type FooterLabels = {
  author: string;
  authorLabel: string;
  desc: string;
  published: string;
  updated: string;
};

export type HomePageLabels = {
  seoTitle: (year: number) => string;
  seoDescription: string;
  hero: {
    catchphrase: string;
    subtitle: (count: number) => string;
    searchPlaceholder: string;
    searchAriaLabel: string;
    searchButton: string;
    imgAlt: string;
    linkSpots: string;
    linkHotels: string;
    linkPhoto: string;
  };
  categoryNav: {
    ariaLabel: string;
    names: Record<string, string>;
  };
  spotRanking: {
    heading: (year: number) => string;
    desc1: string;
    desc2: string;
    moreLink: string;
  };
  hotelRanking: {
    heading: (year: number) => string;
    desc: string;
    moreLink: string;
  };
  purposeSearch: {
    heading: string;
    desc?: string;
    tagNames?: Record<string, string>;
  };
  areaSearch: {
    heading: string;
    desc?: string;
    areaLabel: (name: string, count: number) => string;
    areaNames?: Record<string, string>;
  };
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
    sunsetAnswer: (sunset: string, from: string, to: string) => string;
    sunsetUnavailable: string;
    simulatorLinkText: string;
    simulatorSuffix: string;
    twilightPrefix: string;
    twilightLinkText: string;
    twilightSuffix: string;
  };
  mapSection: {
    heading: string;
    desc: (count: number) => string;
    allLabel: string;
    countLabel: string;
    loadingLabel: string;
  };
};

export type AreaPageLabels = {
  title: (area: string, count?: number) => string;
  lead: (area: string, spots: { name: string; rating_avg: number }[]) => string;
  count: (n: number) => string;
  sortLabel: string;
  sortRating: string;
  sortUpdated: string;
  faqHeading: (area: string) => string;
  faqSpotCount: (area: string, n: number) => { q: string; a: string };
  faqTopSpot: (area: string, name: string, rating: string, lead: string) => { q: string; a: string };
  faqTop3: (area: string, list: string) => { q: string; a: string };
  faqDate: (area: string, name: string) => { q: string; a: string };
  faqFree: (area: string, freeNames: string) => { q: string; a: string };
  faqBestTime: (area: string) => { q: string; a: string };
  imageAlt: (name: string) => string;
  mapHeading: (area: string) => string;
  mapCount: (area: string, n: number) => string;
  closedBadge: string;
  emptyState: string;
};

export type SearchPageLabels = {
  breadcrumb: string;
  heading: (query: string) => string;
  headingDefault: string;
  found: (fields: string, query: string, count: number) => string;
  notFound: (query: string) => string;
  resultCountTemplate: string;
  sortRelevance: string;
  sortRating: string;
  sortName: string;
  fieldSpotName: string;
  fieldAddress: string;
  fieldStation: string;
  fieldReport: string;
  fieldLead: string;
  fieldTag: string;
  fieldCategory: string;
  matchHit: (fields: string) => string;
};

export type NotFoundLabels = {
  title: string;
  desc: string;
  button: string;
};

export type HomeAuthorLabels = {
  heading: string;
  name: string;
  title: string;
  desc1: string;
  desc2: string;
  achievementsLabel: string;
  achievements: string[];
  moreLink: string;
};

export type ComponentLabels = {
  seoH1: (name: string) => string;
  seoDescription: (name: string, area: string, type: string, lead?: string | null) => string;
  heroImageAlt: (name: string) => string;
  closedBadge: string;
  rating: RatingLabels;
  overview: OverviewLabels;
  gallery: GalleryLabels;
  info: InfoLabels;
  access: AccessLabels;
  bestTime: BestTimeLabels;
  review: ReviewLabels;
  faq: FaqLabels;
  movie: MovieLabels;
  related: RelatedLabels;
  recommend: RecommendLabels;
  share: ShareLabels;
  anchor: AnchorLabels;
  footer: FooterLabels;
  areaPage: AreaPageLabels;
  homePage: HomePageLabels;
  searchPage: SearchPageLabels;
  notFound: NotFoundLabels;
  homeAuthor: HomeAuthorLabels;
};

const LABELS = {
  ja: {
    seoH1: (name) => `${name}の行き方・営業時間・夜景見どころガイド`,
    seoDescription: (name, area, type, lead) => {
      if (type === "hotel")
        return `${area}にある${name}の夜景情報を紹介。客室やレストランからの夜景・眺望、アクセス、宿泊料金など、夜景が楽しめるホテルをお探しの方はぜひ確認してみて下さい！`;
      if (type === "event")
        return `${name}のイベント情報を紹介。開催期間・開催時間・場所・アクセス方法などイベントの詳細を知りたい方はぜひ確認してみて下さい！`;
      return `${area}にある${name}の夜景・夕景情報を紹介。${name}への行き方・住所・営業時間・入場料金・最寄駅・眺望の見どころ、何時に訪れるのがおすすめかなどを知りたい方はぜひ確認してみて下さい！`;
    },
    heroImageAlt: (name) => `${name}の夜景`,
    closedBadge: "閉鎖済み",
    rating: {
      header: (name, area) => `${name || "スポット"}の夜景（${area}）`,
      beautiful: "美しさ",
      access: "アクセス",
      atmosphere: "雰囲気",
      cost: "コスパ",
      topLink: "東京都内の夜景情報一覧",
      topLinkHref: "/",
    },
    overview: {
      heading: (name) => name ? `${name}の訪問レポート` : "訪問レポート",
    },
    gallery: {
      heading: (name) => name ? `${name}の景色・写真` : "景色・写真",
    },
    info: {
      heading: (name) => name ? `${name}の基本情報` : "基本情報",
      address: "住所",
      hours: "営業時間",
      holiday: "定休日",
      fee: "料金",
      height: "展望台の高さ",
      features: "夜景の特徴",
      links: "関連リンク",
      officialSite: "公式サイト",
      sns: "SNS",
      relatedSite: "関連サイト",
      categoryListLabel: (name) => `${name}の夜景スポット一覧`,
      eventPeriod: "開催期間",
      eventVenue: "開催場所",
      eventHours: "開催時間",
      hotelInfo: "ホテル情報",
      checkinCheckout: "チェックイン / アウト",
      amenity: "アメニティ",
    },
    access: {
      heading: (name) => `${name}の行き方・アクセス方法`,
      caption: "アクセス情報",
      station: "電車・最寄り駅",
      parking: "駐車場",
      map: "地図",
    },
    bestTime: {
      heading: (name) => `${name || "この場所"}の夜景鑑賞・撮影にベストな時間`,
      label: (dateLabel) => `今日 (${dateLabel}) の夜景撮影ベストタイム`,
      desc: "空の青さと街の灯りが重なる「マジックアワー」です。",
      sunset: (time) => `今日の日没は ${time} です。`,
    },
    review: {
      heading: (name) => `${name || "スポット"}を訪れた方の口コミ`,
      noReviews: "まだこのスポットの口コミはありません。",
      formTitle: "口コミを投稿する",
      formDesc: "訪問した感想や現在の混雑状況などを下記コメント欄で共有してください！あなたの口コミが次の来訪者の参考になります。",
      ratingLabel: "総合評価",
      ratingPlaceholder: "選択してください",
      titleLabel: "レビュータイトル",
      titlePlaceholder: "レビューのタイトルを入力",
      contentLabel: "コメント",
      contentPlaceholder: "（例）平日の19時頃に訪問。混雑していなくベンチに座ってゆっくり夜景を楽しめました。",
      nameLabel: "お名前",
      namePlaceholder: "お名前を入力（ニックネームOK！）",
      submit: "口コミを投稿",
      ariaRating: (rating) => `評価 ${rating} / 5`,
    },
    faq: {
      heading: "よくある質問（FAQ）",
    },
    movie: {
      heading: (name) => `${name}のタイムラプス動画`,
      timeLapseLink: "他のタイムラプス動画を見る",
    },
    related: {
      heading: (area) => `${area}の夜景スポット`,
      more: (area) => `${area}の夜景スポットをもっと見る`,
      asideLabel: "関連スポット",
      imageAlt: (name) => `${name}から見える夜景`,
    },
    recommend: {
      heading: "あなたにおすすめの夜景スポット",
    },
    share: {
      heading: "この記事が役に立ったらシェアしてください",
      x: "ポスト",
      line: "LINE",
      hatena: "はてブ",
      copy: "URLコピー",
      copied: "コピーしました！",
    },
    anchor: {
      report: "訪問レポート",
      gallery: "写真・景色",
      info: "基本情報",
      access: "アクセス",
      besttime: "夜景鑑賞時間",
      review: "口コミ",
      faq: "よくある質問",
      movie: "タイムラプス動画",
      navAriaLabel: "ページ内ナビゲーション",
    },
    footer: {
      author: "東京夜景ナビ編集部",
      authorLabel: "著者",
      desc: "掲載スポットは全て編集部が現地で撮影・取材しています",
      published: "公開日",
      updated: "最終更新日",
    },
    areaPage: {
      title: (area, count) => count ? `${area}の夜景スポット一覧【${count}件掲載】` : `${area}の夜景スポット一覧`,
      lead: (area, spots) => {
        const count = spots.length;
        if (count === 0) return `東京都${area}のおすすめ夜景スポット情報を紹介。実際に訪問した感想や写真を掲載。`;
        const sorted = [...spots].sort((a, b) => b.rating_avg - a.rating_avg);
        const top2 = sorted.slice(0, 2).map((s) => s.name).join("・");
        return `東京${area}のおすすめ夜景スポット${count}件を厳選掲載。${top2}などの人気スポットを実際に訪問して撮影した写真や訪問レポートを紹介。デート・旅行・夜景撮影スポット選びにぜひご活用ください。`;
      },
      count: (n) => `掲載数：${n}件`,
      sortLabel: "並び替え：",
      sortRating: "評価高い順",
      sortUpdated: "更新日新しい順",
      faqHeading: (area) => `${area}の夜景スポットに関するFAQ`,
      faqSpotCount: (area, n) => ({
        q: `${area}にはいくつの夜景スポットがありますか？`,
        a: `当サイトでは${area}エリアの夜景スポットを${n}件掲載しています。各スポットの詳細ページでは実際に訪れた際の写真や感想をご覧いただけます。`,
      }),
      faqTopSpot: (area, name, rating, lead) => ({
        q: `${area}で一番おすすめの夜景スポットは？`,
        a: `${name}が当サイトの評価で最も高く、平均${rating}点（5点満点）です。${lead}`,
      }),
      faqTop3: (area, list) => ({
        q: `${area}の夜景スポットランキングTOP3は？`,
        a: `${area}の夜景スポットランキングTOP3は、${list}です。いずれも実際に訪問してレビューしています。`,
      }),
      faqDate: (area, name) => ({
        q: `${area}でデートにおすすめの夜景スポットは？`,
        a: `${area}エリアでは${name}が特におすすめです。各スポットの詳細ページでは雰囲気やアクセス情報も掲載しているので、デートの計画にぜひご活用ください。`,
      }),
      faqFree: (area, freeNames) => ({
        q: `${area}に無料の夜景スポットはありますか？`,
        a: freeNames
          ? `はい！無料で楽しめるスポット: ${freeNames}。お金をかけずに東京の美しい夜景を堪能できます。`
          : `${area}には無料または低料金で楽しめるスポットが多数あります。各スポットの詳細ページで料金情報をご確認ください。`,
      }),
      faqBestTime: (area) => ({
        q: `${area}で夜景を見るベストな時間帯は？`,
        a: `日没後30分、空にまだ色が残る「ブルーアワー」が最も美しい時間帯です。東京の日没は冬は16:30頃、夏は19:00頃と季節で変わります。各スポットページの日没計算機をご活用ください。`,
      }),
      imageAlt: (name) => `${name}の夜景`,
      mapHeading: (area) => `${area}の夜景スポットマップ`,
      closedBadge: "閉鎖済み",
      mapCount: (area, n) => `${area}エリアの夜景スポット ${n}件`,
      emptyState: "このエリアにはまだ翻訳済みスポットがありません。",
    },
    homePage: {
      seoTitle: (year) => `【${year}年最新】東京の夜景スポットを定番から穴場まで200以上掲載 | 東京夜景ナビ`,
      seoDescription: "東京都内の夜景が綺麗な場所を200ヶ所以上掲載！東京タワー、スカイツリーなどのランドマークが綺麗に見える場所、定番の展望台、無料の穴場夜景スポット、夜景が綺麗なホテルなどを紹介しているので、告白スポット、デート、旅行、撮影スポットの目的地探しにお役立てください。",
      hero: {
        catchphrase: "輝きの街の魅力、再発見。",
        subtitle: (count) => `東京の夜景スポットを定番から穴場まで紹介！デート・旅行・写真撮影におすすめの場所がわかる【${count}件掲載】`,
        searchPlaceholder: "例）和田倉噴水公園、展望台、東京タワーが見える、渋谷区",
        searchAriaLabel: "夜景スポットを検索",
        searchButton: "検索",
        imgAlt: "東京の夜景",
        linkSpots: "おすすめ夜景スポット",
        linkHotels: "夜景の綺麗なホテル",
        linkPhoto: "夜景撮影スポット",
      },
      categoryNav: {
        ariaLabel: "カテゴリから探す",
        names: { observatory: "展望台", building: "高層ビル", park: "公園", bridge: "橋", hotel: "ホテル", event: "イベント", waterfront: "水辺", mountain: "山・丘" },
      },
      spotRanking: {
        heading: (year) => `東京都内の夜景スポット ランキング【${year}年】`,
        desc1: "実際に訪問した200ヶ所以上の東京の夜景スポットの中からおすすめの場所をランキング形式でご紹介！",
        desc2: "各スポットの評価は美しさ、アクセスの良さ、雰囲気の良さ、コスパの4項目から決定しています。デートや撮影の目的先を決めるのにご活用ください。",
        moreLink: "東京の夜景スポットおすすめランキング",
      },
      hotelRanking: {
        heading: (year) => `東京都内の夜景が綺麗なホテル【${year}年版】`,
        desc: "客室や最上階レストランから上質な東京の夜景が楽しめるホテルを厳選。記念日やデートにもおすすめです。",
        moreLink: "東京の夜景が綺麗なおすすめホテル",
      },
      purposeSearch: {
        heading: "目的別に夜景が綺麗な場所を探す",
        desc: "デートや撮影、無料で楽しめる場所など、シーン・目的に合わせて夜景スポットを絞り込めます。",
      },
      areaSearch: {
        heading: "エリア別に夜景が綺麗な場所を探す",
        desc: "渋谷・新宿・お台場など、行きたいエリアから東京の夜景スポットを探せます。",
        areaLabel: (name, count) => `${name}の夜景（${count}）`,
      },
      faq: {
        heading: "東京の夜景に関するよくある質問",
        items: [
          { question: "本日の日没時間と夜景鑑賞におすすめの時間帯は何時ですか？", answer: "__SUNSET_DYNAMIC__" },
          { question: "東京でおすすめの夜景スポットはどこですか？", answer: "東京でおすすめの夜景スポットは、SHIBUYA SKY、東京都庁展望室（無料）、豊洲ぐるり公園、東京タワー、レインボーブリッジなどです。本サイトでは200ヶ所以上を実際に訪れた経験をもとに、評価・アクセス情報とともに紹介しています。" },
          { question: "東京で無料で夜景を楽しめる場所はどこですか？", answer: "無料で楽しめる夜景スポットとして、東京都庁南展望室・北展望室、タワーホール船堀展望台、豊洲ぐるり公園、若洲海浜公園、和田倉噴水公園などがおすすめです。入場料なしで都心の絶景を楽しめます。" },
          { question: "東京の夜景デート・告白におすすめの場所はどこですか？", answer: "デートや告白には、和田倉噴水公園、KITTE屋上庭園、豊洲ぐるり公園、若洲海浜公園などがおすすめです。美しい夜景を眺めながら落ち着いた雰囲気で過ごせます。" },
          { question: "東京タワーが見えるおすすめ夜景スポットはどこですか？", answer: "東京タワーが綺麗に見えるスポットとして、ザ・プリンス パークタワー東京（客室）、増上寺、芝公園、六本木ヒルズ周辺などが人気です。角度によって異なる表情が楽しめます。" },
          { question: "東京の夜景が綺麗に見える時期・時間帯はいつですか？", answer: "空気が澄んでいる冬（11〜2月）が最もクリアな夜景を楽しめます。時間帯は日没後20〜40分のマジックアワーが特におすすめ。ビル夜景は平日のほうが光量が多く映えます。" },
          { question: "東京の夜景でインスタ映えするスポットはどこですか？", answer: "SHIBUYA SKY、東京都庁展望室、タワーホール船堀展望台、東京タワー展望台などが人気です。フォトジェニックな構図が撮れるポイントも各スポットページで紹介しています。" },
          { question: "東京の夜景穴場スポットを教えてください。", answer: "穴場スポットとしては、若洲海浜公園、浮島橋、荒川戸田橋緑地、桜田門外堀などが挙げられます。人が少なくゆっくり夜景を楽しめる隠れた名所です。" },
          { question: "マジックアワー・ブルーアワーとは？ライトアップはいつ始まりますか？", answer: "__TWILIGHT_LINK__" },
          { question: "夕日が沈む方向を事前に調べるにはどうしたらいいですか？", answer: "__SIMULATOR_LINK__" },
        ],
        sunsetAnswer: (sunset, from, to) => `本日の東京都の日没時間は${sunset}です。${from}〜${to}が夜景が綺麗に見える時間になります。`,
        sunsetUnavailable: "日没時間を取得できませんでした。",
        simulatorLinkText: "日の出・日の入り方角シミュレーター",
        simulatorSuffix: "を利用すると簡単に夕日が沈む方向をチェックすることができます。",
        twilightPrefix: "日没とともに点灯を始めるライトアップが多く、空に夕焼け色が残る「マジックアワー」から深い青に染まる「ブルーアワー」にかけてが夜景鑑賞・撮影の黄金時間です。詳しくは",
        twilightLinkText: "マジックアワーとは？夜景鑑賞・撮影の黄金時間を解説",
        twilightSuffix: "をご覧ください。",
      },
      mapSection: {
        heading: "地図から夜景スポットを探す",
        desc: (n) => `東京・横浜エリアの夜景スポット${n}ヶ所を地図上に表示。マーカーをクリックすると詳細を確認できます。`,
        allLabel: "すべて",
        countLabel: "{n}件のスポットを表示中",
        loadingLabel: "マップを読み込み中...",
      },
    },
    searchPage: {
      breadcrumb: "検索結果",
      heading: (query) => `「${query}」の検索結果`,
      headingDefault: "夜景スポット検索",
      found: (fields, query, count) => `${fields}に「${query}」を含む${count}夜景スポットをご紹介します`,
      notFound: (query) => `「${query}」に該当するスポットが見つかりませんでした`,
      resultCountTemplate: "検索結果：{count}件",
      sortRelevance: "関連度順",
      sortRating: "評価順",
      sortName: "名前順",
      fieldSpotName: "スポット名",
      fieldAddress: "住所",
      fieldStation: "最寄り駅",
      fieldReport: "訪問レポート",
      fieldLead: "紹介文",
      fieldTag: "タグ",
      fieldCategory: "エリア",
      matchHit: (fields) => `${fields}にヒット`,
    },
    notFound: {
      title: "ページが見つかりませんでした",
      desc: "お探しのページは移動または削除された可能性があります。",
      button: "トップページに戻る",
    },
    homeAuthor: {
      heading: "東京夜景ナビについて",
      name: "タカヒロ",
      title: "夜景フォトグラファー / Webディレクター",
      desc1: "月間20〜30万PVの東京夜景専門メディア。実際に足を運んで撮影した夜景スポットを定番から穴場まで200ヶ所以上紹介しています。",
      desc2: "国内外の多くの方に東京夜景の魅力を伝えていきたい。そんな思いでこのサイトを運営しています。",
      achievementsLabel: "主な実績",
      achievements: [
        "東京タワー公式サイトのタイムラプス映像を撮影",
        "ザ・プリンス パークタワー東京の客室・レストラン写真を撮影",
        "第8回東京大回廊写真コンテスト 出光美術館賞を受賞",
        "NHK総合・BS TBS・テレビ朝日などに映像・写真を提供",
      ],
      moreLink: "プロフィール・活動実績をもっと見る",
    },
  },
  en: {
    seoH1: (name) => `${name}: Access, Hours & Night View Guide`,
    seoDescription: (name, area, type, lead) => {
      if (type === "hotel")
        return `Discover night views from ${name} in ${area}. Find room views, restaurant panoramas, access info, and rates for this hotel with stunning nightscape.`;
      if (type === "event")
        return `Event details for ${name}. Find event dates, hours, location, and access information.`;
      return `Night view guide for ${name} in ${area}. Directions, address, hours, admission, nearest station, scenic highlights, and the best time to visit.`;
    },
    heroImageAlt: (name) => `Night view from ${name}`,
    closedBadge: "Permanently Closed",
    rating: {
      header: (name, area) => `Night View from ${name} (${area})`,
      beautiful: "Beauty",
      access: "Access",
      atmosphere: "Atmosphere",
      cost: "Value",
      topLink: "Tokyo Night View Spot List",
      topLinkHref: "/en",
    },
    overview: {
      heading: (name) => name ? `Visit Report: ${name}` : "Visit Report",
    },
    gallery: {
      heading: (name) => name ? `Photos of ${name}` : "Photos",
    },
    info: {
      heading: (name) => name ? `${name} — Information` : "Information",
      address: "Address",
      hours: "Opening Hours",
      holiday: "Closed",
      fee: "Admission Fee",
      height: "Observation Deck Height",
      features: "Features",
      links: "Links",
      officialSite: "Official Website",
      sns: "SNS",
      relatedSite: "Related Sites",
      categoryListLabel: (name) => `${name} Night View Spots`,
      eventPeriod: "Event Period",
      eventVenue: "Venue",
      eventHours: "Event Hours",
      hotelInfo: "Hotel Information",
      checkinCheckout: "Check-in / Check-out",
      amenity: "Amenities",
    },
    access: {
      heading: (name) => `${name} - Access & Parking`,
      caption: "Access Information",
      station: "Train / Nearest Station",
      parking: "Parking",
      map: "Map",
    },
    bestTime: {
      heading: (name) => `Best Time to See the Night View at ${name || "This Spot"}`,
      label: (dateLabel) => `Best Time for Night Photography Today (${dateLabel})`,
      desc: "The 'magic hour' when the blue sky meets city lights.",
      sunset: (time) => `Today's sunset is at ${time}.`,
    },
    review: {
      heading: (name) => `Reviews of ${name || "This Spot"}`,
      noReviews: "No reviews have been posted for this spot yet.",
      formTitle: "Post Your Review",
      formDesc: "Share your experience visiting this spot! Your review helps others planning their visit.",
      ratingLabel: "Overall Rating",
      ratingPlaceholder: "Select a rating",
      titleLabel: "Review Title",
      titlePlaceholder: "Enter a title for your review",
      contentLabel: "Comment",
      contentPlaceholder: "(e.g.) Visited around 7 PM on a weekday. Not crowded at all, enjoyed the night view from a bench.",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your name (nickname is fine!)",
      submit: "Submit Review",
      ariaRating: (rating) => `Rating ${rating} / 5`,
    },
    faq: {
      heading: "Frequently Asked Questions (FAQ)",
    },
    movie: {
      heading: (name) => `${name} - Time-lapse Video`,
      timeLapseLink: "See more time-lapse videos",
    },
    related: {
      heading: (area) => `Night View Spots in ${area}`,
      more: (area) => `See more spots in ${area}`,
      asideLabel: "Related Spots",
      imageAlt: (name) => `Night view from ${name}`,
    },
    recommend: {
      heading: "Recommended Night View Spots for You",
    },
    share: {
      heading: "Found this helpful? Share it!",
      x: "Post",
      line: "LINE",
      hatena: "Hatena",
      copy: "Copy URL",
      copied: "Copied!",
      facebook: "Facebook",
      whatsapp: "WhatsApp",
    },
    anchor: {
      report: "Visit Report",
      gallery: "Photos",
      info: "Information",
      access: "Access",
      besttime: "Best Time",
      review: "Reviews",
      faq: "FAQ",
      movie: "Time-lapse Video",
      navAriaLabel: "Page navigation",
    },
    footer: {
      author: "Tokyo Nightscape Navi Editorial",
      authorLabel: "Author",
      desc: "All spots are photographed and covered on-site by our editorial team",
      published: "Published",
      updated: "Last Updated",
    },
    areaPage: {
      title: (area, count) => count ? `Best Night Views in ${area}, Tokyo — ${count} Spots Listed` : `Best Night Views in ${area}, Tokyo, Japan — Top Spots & Hidden Gems`,
      lead: (area, spots) => {
        const count = spots.length;
        if (count === 0) return `Explore night view spots in ${area}, Tokyo — personally visited with photos, ratings, and access info.`;
        const sorted = [...spots].sort((a, b) => b.rating_avg - a.rating_avg);
        const top2 = sorted.slice(0, 2).map((s) => s.name).join(" and ");
        return `Explore ${count} night view spot${count > 1 ? "s" : ""} in ${area}, Tokyo — ${top2} are among the highest-rated. Every spot is personally visited with photos, ratings, access info, and tips for first-time visitors.`;
      },
      count: (n) => `${n} spots`,
      sortLabel: "Sort by: ",
      sortRating: "Highest rated",
      sortUpdated: "Recently updated",
      faqHeading: (area) => `Visitor Guide: Night Views in ${area}`,
      faqSpotCount: (area, n) => ({
        q: `How many night view spots can I visit in ${area}?`,
        a: `We feature ${n} night view spots in ${area}. Many are within walking distance of major train stations, making it easy to visit several in one evening.`,
      }),
      faqTopSpot: (area, name, rating, lead) => ({
        q: `What's the #1 night view spot in ${area}?`,
        a: `${name} tops our ranking with ${rating}/5 stars. ${lead}`,
      }),
      faqTop3: (area, list) => ({
        q: `What are the top 3 night view spots in ${area}?`,
        a: `Our top 3 picks in ${area}: ${list}. All personally visited and reviewed with photos.`,
      }),
      faqDate: (area, name) => ({
        q: `Best romantic night view spot in ${area}?`,
        a: `${name} is our top pick for couples in ${area}. Check the detail page for atmosphere, access info, and tips to make the most of your evening.`,
      }),
      faqFree: (area, freeNames) => ({
        q: `Are there free night view spots in ${area}?`,
        a: freeNames
          ? `Yes! Free spots include: ${freeNames}. Great budget-friendly options for enjoying Tokyo's skyline at night.`
          : `Many spots in ${area} are free or low-cost. Check each spot's detail page for admission info.`,
      }),
      faqBestTime: (area) => ({
        q: `What's the best time to see night views in ${area}?`,
        a: `The best time is 30 minutes after sunset when the sky still has color ("blue hour"). In Tokyo, sunset varies from around 4:30 PM in winter to 7:00 PM in summer. Use our sunset calculator on each spot page for exact times.`,
      }),
      imageAlt: (name) => `Night view of ${name}`,
      mapHeading: (area) => `${area} Night View Map`,
      closedBadge: "Permanently Closed",
      mapCount: (area, n) => `${n} night view spots in ${area}`,
      emptyState: "No translated spots available in this area yet.",
    },
    homePage: {
      seoTitle: (year) => `Best Tokyo Night View Spots in Japan (${year}) — 200+ Iconic & Hidden Gems | Tokyo Night View Guide`,
      seoDescription: "The ultimate guide to 200+ Tokyo night view spots for sightseeing and photography. Discover Tokyo Tower, Skytree, free observatories, hidden gems, and rooftop bars. Plan your Tokyo night tour with ratings, access info, and sunset times.",
      hero: {
        catchphrase: "The Ultimate Guide to Tokyo Nightscapes.",
        subtitle: (count) => `Explore ${count} Tokyo night view spots for sightseeing & photography — from iconic landmarks to hidden gems`,
        searchPlaceholder: "e.g.) Wadakura Park, observatory, Tokyo Tower view, Shibuya",
        searchAriaLabel: "Search night view spots",
        searchButton: "Search",
        imgAlt: "Tokyo night view",
        linkSpots: "Top Night View Spots",
        linkHotels: "Hotels with Night Views",
        linkPhoto: "Photography Spots",
      },
      categoryNav: {
        ariaLabel: "Browse by category",
        names: { observatory: "Observatory", building: "Skyscraper", park: "Park", bridge: "Bridge", hotel: "Hotel", event: "Event", waterfront: "Waterfront", mountain: "Mountain" },
      },
      spotRanking: {
        heading: (year) => `Best Tokyo Night View Spots Ranking [${year}]`,
        desc1: "Our top picks from over 200 night view spots in Tokyo, all personally visited and reviewed!",
        desc2: "Each spot is rated on beauty, accessibility, atmosphere, and value. Use this guide to plan your perfect date or photography outing.",
        moreLink: "View all Tokyo night spots",
      },
      hotelRanking: {
        heading: (year) => `Best Hotels with Night Views [${year}]`,
        desc: "Handpicked hotels offering stunning Tokyo night views from guest rooms and rooftop restaurants. Perfect for anniversaries and dates.",
        moreLink: "View all night view hotels",
      },
      purposeSearch: {
        heading: "Search by Purpose",
        desc: "Filter night view spots by scene or purpose — dates, photography, free admission, and more.",
        tagNames: {
          "無料スポット": "Free Spots",
          "デート向け": "For Dates",
          "ウォーターフロント": "Waterfront",
          "公園・広場": "Parks & Plazas",
          "東京スカイツリーが見える": "Skytree View Spots",
          "展望台": "Observatory",
          "東京タワーが見える": "Tokyo Tower View Spots",
          "レインボーブリッジが見える": "Rainbow Bridge View Spots",
          "富士山が見える": "Mt. Fuji View Spots",
          "ドライブ向け": "Night Drive",
          "東京の夜景が綺麗なホテル": "Hotels with Night Views",
          "夜桜のライトアップ": "Cherry Blossoms at Night",
          "東京駅が見える": "Tokyo Station View Spots",
          "イルミネーション": "Illumination",
          "東京ゲートブリッジが見える": "Tokyo Gate Bridge View Spots",
          "渋谷スクランブル交差点が見える": "Scramble Crossing View Spots",
          "紅葉のライトアップ": "Autumn Leaves Illumination",
          "夜景が綺麗なレストラン": "Restaurants with Night Views",
        },
      },
      areaSearch: {
        heading: "Search by Area",
        desc: "Explore Tokyo night view spots by neighborhood — Shibuya, Shinjuku, Odaiba, and more.",
        areaLabel: (name, count) => `${name} (${count})`,
        areaNames: {
          minato: "Minato",
          shibuya: "Shibuya",
          shinjuku: "Shinjuku",
          chuo: "Chuo",
          sumida: "Sumida",
          koto: "Koto",
          taito: "Taito",
          kita: "Kita",
          edogawa: "Edogawa",
          adachi: "Adachi",
          arakawa: "Arakawa",
          itabashi: "Itabashi",
          nerima: "Nerima",
          setagaya: "Setagaya",
          meguro: "Meguro",
          shinagawa: "Shinagawa",
          ota: "Ota",
          suginami: "Suginami",
          nakano: "Nakano",
          toshima: "Toshima",
          bunkyo: "Bunkyo",
          chiyoda: "Chiyoda",
          yokohama: "Yokohama",
          other: "Other Areas",
        },
      },
      faq: {
        heading: "FAQ: Tokyo Night Views for Visitors",
        items: [
          { question: "What time is sunset today, and when is the best time to see night views?", answer: "__SUNSET_DYNAMIC__" },
          { question: "Do I need to book tickets in advance for Tokyo's observation decks?", answer: "Popular spots like SHIBUYA SKY and Tokyo Skytree often sell out on weekends and holidays — online booking via their official sites is strongly recommended. Tokyo Metropolitan Government Building South Observatory is free and requires no reservation." },
          { question: "Are there free night view spots in Tokyo?", answer: "Yes! Tokyo Metropolitan Government Building South Observatory, Odaiba Seaside Park, and several riverside parks offer stunning night views at no cost. Check each spot's detail page on this site for admission info." },
          { question: "Is Tokyo safe to visit at night?", answer: "Tokyo is one of the safest cities in the world. Major night view areas are well-lit and active late into the night. Observation decks have set closing times, so check hours in advance. Use common sense in quiet parks after midnight." },
          { question: "Can I bring a tripod for night photography?", answer: "Most indoor observation decks (SHIBUYA SKY, Tokyo Skytree, etc.) prohibit tripods and monopods. Outdoor spots such as parks and bridges generally allow them. Always check the rules on each spot's page before visiting." },
          { question: "Are Tokyo's observation decks English-friendly?", answer: "Major spots like SHIBUYA SKY, Tokyo Skytree, and Tokyo Tower have English signage and multilingual staff. Online ticketing is also available in English, making it easy to plan your visit in advance." },
          { question: "What is the best season and time of day for clear night views?", answer: "Winter (December–February) offers the clearest air and best visibility. For the perfect shot, aim for the 20–50 minutes after sunset — the 'blue hour' — when the sky still glows and city lights are fully on." },
          { question: "What is magic hour / blue hour? When do illuminations switch on?", answer: "__TWILIGHT_LINK__" },
        ],
        sunsetAnswer: (sunset, from, to) => `Today's sunset in Tokyo is at ${sunset}. The best time for night view photography is from ${from} to ${to}.`,
        sunsetUnavailable: "Sunset time is currently unavailable.",
        simulatorLinkText: "Sunrise & Sunset Direction Simulator",
        simulatorSuffix: " makes it easy to check which direction the sun sets.",
        twilightPrefix: "Most illuminations switch on around sunset. The golden window for sightseeing and photography is from the warm-sky 'magic hour' through the deep-blue 'blue hour'. For details, see our guide: ",
        twilightLinkText: "What Is Magic Hour? The Golden Time for Night View Photography",
        twilightSuffix: ".",
      },
      mapSection: {
        heading: "Explore Night View Spots on the Map",
        desc: (n) => `Showing ${n} night view spots in Tokyo & Yokohama on the map. Click a marker to see details.`,
        allLabel: "All",
        countLabel: "Showing {n} spots",
        loadingLabel: "Loading map...",
      },
    },
    searchPage: {
      breadcrumb: "Search Results",
      heading: (query) => `Search results for "${query}"`,
      headingDefault: "Search Night View Spots",
      found: (fields, query, count) => `Found ${count} night view spots containing "${query}" in ${fields}`,
      notFound: (query) => `No spots found matching "${query}"`,
      resultCountTemplate: "Results: {count} spots",
      sortRelevance: "By Relevance",
      sortRating: "By Rating",
      sortName: "By Name",
      fieldSpotName: "Spot Name",
      fieldAddress: "Address",
      fieldStation: "Nearest Station",
      fieldReport: "Visit Report",
      fieldLead: "Description",
      fieldTag: "Tag",
      fieldCategory: "Area",
      matchHit: (fields) => `Matched in ${fields}`,
    },
    notFound: {
      title: "Page Not Found",
      desc: "The page you are looking for may have been moved or deleted.",
      button: "Back to Home",
    },
    homeAuthor: {
      heading: "About Tokyo Nightscape Navi",
      name: "Takahiro",
      title: "Night View Photographer / Web Director",
      desc1: "A dedicated Tokyo night view media with 200,000–300,000 monthly visitors. We've personally visited and photographed over 200 spots, from iconic landmarks to hidden gems.",
      desc2: "Our mission is to share the beauty of Tokyo's night views with people around the world.",
      achievementsLabel: "Key Achievements",
      achievements: [
        "Filmed official time-lapse footage for Tokyo Tower's website",
        "Photographed rooms & restaurants at The Prince Park Tower Tokyo",
        "Won the Idemitsu Museum of Arts Award at the 8th Tokyo Grand Circuit Photo Contest",
        "Provided footage and photos to NHK, BS TBS, TV Asahi, and other broadcasters",
      ],
      moreLink: "Learn more about us",
    },
  },
  ko: {
    seoH1: (name) => `${name} 가는 길・영업시간・야경 볼거리 가이드`,
    seoDescription: (name, area, type, lead) => {
      if (type === "hotel")
        return `${area}에 위치한 ${name}의 야경 정보를 소개합니다. 객실과 레스토랑에서의 야경·전망, 교통편, 숙박 요금 등 야경을 즐길 수 있는 호텔을 찾고 계신 분은 꼭 확인해 보세요!`;
      if (type === "event")
        return `${name}의 이벤트 정보를 소개합니다. 개최 기간·개최 시간·장소·교통편 등 이벤트 상세 정보를 알고 싶은 분은 꼭 확인해 보세요!`;
      return `${area}에 위치한 ${name}의 야경·석양 정보를 소개합니다. ${name} 가는 방법·주소·영업시간·입장료·가까운 역·전망 볼거리, 언제 방문하면 좋은지 등을 알고 싶은 분은 꼭 확인해 보세요!`;
    },
    heroImageAlt: (name) => `${name}의 야경`,
    closedBadge: "영구 폐쇄",
    rating: {
      header: (name, area) => `${name}의 야경 (${area})`,
      beautiful: "아름다움",
      access: "접근성",
      atmosphere: "분위기",
      cost: "가성비",
      topLink: "도쿄 야경 스폿 목록",
      topLinkHref: "/ko",
    },
    overview: {
      heading: (name) => name ? `${name} 방문 리포트` : "방문 리포트",
    },
    gallery: {
      heading: (name) => name ? `${name}의 경치・사진` : "경치・사진",
    },
    info: {
      heading: (name) => name ? `${name} 기본 정보` : "기본 정보",
      address: "주소",
      hours: "영업시간",
      holiday: "정기 휴무",
      fee: "입장료",
      height: "전망대 높이",
      features: "야경 특징",
      links: "관련 링크",
      officialSite: "공식 사이트",
      sns: "SNS",
      relatedSite: "관련 사이트",
      categoryListLabel: (name) => `${name} 야경 스폿 목록`,
      eventPeriod: "개최 기간",
      eventVenue: "개최 장소",
      eventHours: "개최 시간",
      hotelInfo: "호텔 정보",
      checkinCheckout: "체크인 / 체크아웃",
      amenity: "어메니티",
    },
    access: {
      heading: (name) => `${name} 오시는 길・주차장`,
      caption: "오시는 길 정보",
      station: "전철・가까운 역",
      parking: "주차장",
      map: "지도",
    },
    bestTime: {
      heading: (name) => `${name || "이 장소"}의 야경 관람・촬영에 베스트인 시간`,
      label: (dateLabel) => `오늘 (${dateLabel}) 야경 촬영 베스트 타임`,
      desc: "하늘의 푸른빛과 도시의 불빛이 교차하는 '매직 아워'입니다.",
      sunset: (time) => `오늘의 일몰은 ${time}입니다.`,
    },
    review: {
      heading: (name) => `${name || "이 장소"}를 방문한 분들의 후기`,
      noReviews: "아직 이 스폿에 대한 후기가 없습니다.",
      formTitle: "후기를 작성해 주세요",
      formDesc: "이 장소를 방문한 소감이나 현재 혼잡 상황 등을 아래 댓글란에 공유해 주세요! 여러분의 후기가 다음 방문자에게 도움이 됩니다.",
      ratingLabel: "종합 평가",
      ratingPlaceholder: "선택해 주세요",
      titleLabel: "리뷰 제목",
      titlePlaceholder: "리뷰 제목을 입력해 주세요",
      contentLabel: "코멘트",
      contentPlaceholder: "(예시) 평일 19시경에 방문했습니다. 혼잡하지 않고 벤치에 앉아 여유롭게 야경을 즐길 수 있었습니다.",
      nameLabel: "이름",
      namePlaceholder: "이름을 입력해 주세요 (닉네임도 괜찮습니다!)",
      submit: "후기 작성",
      ariaRating: (rating) => `평가 ${rating} / 5`,
    },
    faq: {
      heading: "자주 묻는 질문 (FAQ)",
    },
    movie: {
      heading: (name) => `${name} 타임랩스 영상`,
      timeLapseLink: "다른 타임랩스 영상 보기",
    },
    related: {
      heading: (area) => `${area}의 야경 스폿`,
      more: (area) => `${area}의 야경 스폿 더보기`,
      asideLabel: "관련 스폿",
      imageAlt: (name) => `${name}에서 보이는 야경`,
    },
    recommend: {
      heading: "추천 야경 스폿",
    },
    share: {
      heading: "이 기사가 도움이 되셨다면 공유해 주세요",
      x: "포스트",
      line: "LINE",
      hatena: "하테나",
      copy: "URL 복사",
      copied: "복사했습니다!",
      facebook: "Facebook",
    },
    anchor: {
      report: "방문 리포트",
      gallery: "사진・경치",
      info: "기본 정보",
      access: "오시는 길",
      besttime: "야경 관람 시간",
      review: "후기",
      faq: "자주 묻는 질문",
      movie: "타임랩스 영상",
      navAriaLabel: "페이지 내 탐색",
    },
    footer: {
      author: "도쿄 야경 나비 편집부",
      authorLabel: "저자",
      desc: "모든 스폿은 편집부가 현장에서 촬영・취재합니다",
      published: "게시일",
      updated: "최종 수정일",
    },
    areaPage: {
      title: (area, count) => count ? `일본 도쿄 ${area} 야경 명소 추천【${count}곳 게재】` : `일본 도쿄 ${area} 야경 명소 추천 — 인기 스폿 & 숨겨진 장소`,
      lead: (area, spots) => {
        const count = spots.length;
        if (count === 0) return `도쿄 ${area}의 야경 명소를 직접 방문하여 소개합니다. 사진, 평점, 교통편 정보를 제공합니다.`;
        const sorted = [...spots].sort((a, b) => b.rating_avg - a.rating_avg);
        const top2 = sorted.slice(0, 2).map((s) => s.name).join(", ");
        return `도쿄 ${area}의 야경 명소 ${count}곳을 엄선 소개합니다. ${top2} 등 인기 스폿을 직접 방문하여 사진, 평점, 교통편, 관람 팁을 정리했습니다. 도쿄 여행자를 위한 완벽 가이드!`;
      },
      count: (n) => `${n}곳`,
      sortLabel: "정렬: ",
      sortRating: "평점 높은 순",
      sortUpdated: "최근 업데이트 순",
      faqHeading: (area) => `${area} 야경 관람 가이드`,
      faqSpotCount: (area, n) => ({
        q: `${area}에서 방문할 수 있는 야경 스폿은 몇 곳인가요?`,
        a: `${area}에서 ${n}곳의 야경 스폿을 소개하고 있습니다. 많은 스폿이 주요 역에서 도보 거리에 있어 하루 저녁에 여러 곳을 돌아볼 수 있어요.`,
      }),
      faqTopSpot: (area, name, rating, lead) => ({
        q: `${area}에서 가장 추천하는 야경 스폿은?`,
        a: `${name}이(가) 평균 ${rating}점(5점 만점)으로 1위입니다. ${lead}`,
      }),
      faqTop3: (area, list) => ({
        q: `${area} 야경 스폿 TOP3는?`,
        a: `${area} 추천 TOP3: ${list}. 모두 직접 방문하여 촬영・리뷰하였습니다.`,
      }),
      faqDate: (area, name) => ({
        q: `${area}에서 데이트에 좋은 야경 스폿은?`,
        a: `${area}에서는 ${name}을(를) 특히 추천합니다. 상세 페이지에서 분위기, 교통편, 관람 팁을 확인하고 완벽한 데이트를 계획해 보세요.`,
      }),
      faqFree: (area, freeNames) => ({
        q: `${area}에 무료 야경 스폿이 있나요?`,
        a: freeNames
          ? `네! 무료 스폿: ${freeNames}. 비용 걱정 없이 도쿄의 아름다운 야경을 즐길 수 있어요.`
          : `${area}에는 무료 또는 저렴한 스폿이 많습니다. 각 스폿 상세 페이지에서 요금 정보를 확인하세요.`,
      }),
      faqBestTime: (area) => ({
        q: `${area}에서 야경을 보기 가장 좋은 시간은?`,
        a: `일몰 30분 후 하늘에 아직 색이 남아 있는 "블루아워"가 최적입니다. 도쿄의 일몰은 겨울 오후 4시 30분경, 여름 오후 7시경으로 계절에 따라 달라집니다. 각 스폿 페이지의 일몰 계산기를 활용하세요.`,
      }),
      imageAlt: (name) => `${name}의 야경`,
      mapHeading: (area) => `${area} 야경 스폿 지도`,
      closedBadge: "영구 폐쇄",
      mapCount: (area, n) => `${area} 야경 스폿 ${n}곳`,
      emptyState: "아직 이 지역에 번역된 야경 명소가 없습니다.",
    },
    homePage: {
      seoTitle: (year) => `일본 도쿄 야경 명소 추천 ${year} — 관광・촬영에 딱! 200곳 이상 수록 | 도쿄 야경 가이드`,
      seoDescription: "도쿄 여행에서 꼭 봐야 할 야경 명소 200곳 이상을 소개합니다. 도쿄타워, 스카이트리 전망대, 무료 관광 스폿, 숨겨진 명소까지 완벽 가이드. 평점, 교통편, 일몰 시간 정보로 도쿄 야경 여행을 계획하세요.",
      hero: {
        catchphrase: "도쿄 야경 완전 가이드 : 모든 스팟을 한눈에",
        subtitle: (count) => `관광・촬영에 추천하는 도쿄 야경 스폿을 인기 명소부터 숨겨진 장소까지 소개【${count}곳 수록】`,
        searchPlaceholder: "예) 와다쿠라 분수공원, 전망대, 도쿄타워가 보이는, 시부야구",
        searchAriaLabel: "야경 스폿 검색",
        searchButton: "검색",
        imgAlt: "도쿄 야경",
        linkSpots: "추천 야경 스폿",
        linkHotels: "야경이 아름다운 호텔",
        linkPhoto: "야경 촬영 스폿",
      },
      categoryNav: {
        ariaLabel: "카테고리별 찾기",
        names: { observatory: "전망대", building: "고층 빌딩", park: "공원", bridge: "다리", hotel: "호텔", event: "이벤트", waterfront: "수변", mountain: "산·언덕" },
      },
      spotRanking: {
        heading: (year) => `도쿄 도내 야경 스폿 추천 랭킹【${year}년 최신】`,
        desc1: "실제로 방문한 200곳 이상의 도쿄 야경 스폿 중에서 추천 장소를 랭킹 형식으로 소개합니다!",
        desc2: "각 스폿의 평가는 아름다움, 접근성, 분위기, 가성비의 4개 항목으로 결정됩니다. 데이트나 촬영 장소를 정할 때 활용해 주세요.",
        moreLink: "도쿄 야경 스폿 전체 보기",
      },
      hotelRanking: {
        heading: (year) => `야경이 아름다운 호텔 추천 랭킹【${year}년판】`,
        desc: "객실이나 최상층 레스토랑에서 고품격 도쿄 야경을 즐길 수 있는 호텔을 엄선. 기념일이나 데이트에도 추천합니다.",
        moreLink: "도쿄 야경 호텔 전체 보기",
      },
      purposeSearch: {
        heading: "목적별로 야경이 아름다운 장소 찾기",
        desc: "데이트, 촬영, 무료 입장 등 목적에 맞는 야경 스폿을 검색할 수 있습니다.",
        tagNames: {
          "無料スポット": "무료 스폿",
          "デート向け": "데이트 추천",
          "ウォーターフロント": "워터프론트",
          "公園・広場": "공원・광장",
          "東京スカイツリーが見える": "도쿄 스카이트리가 보이는",
          "展望台": "전망대",
          "東京タワーが見える": "도쿄타워가 보이는",
          "レインボーブリッジが見える": "레인보우 브릿지가 보이는",
          "富士山が見える": "후지산이 보이는",
          "ドライブ向け": "야경 드라이브",
          "東京の夜景が綺麗なホテル": "야경이 아름다운 호텔",
          "夜桜のライトアップ": "밤벚꽃 라이트업",
          "東京駅が見える": "도쿄역이 보이는",
          "イルミネーション": "일루미네이션",
          "東京ゲートブリッジが見える": "도쿄 게이트 브릿지가 보이는",
          "渋谷スクランブル交差点が見える": "시부야 스크램블 교차로가 보이는",
          "紅葉のライトアップ": "단풍 라이트업",
          "夜景が綺麗なレストラン": "야경이 아름다운 레스토랑",
        },
      },
      areaSearch: {
        heading: "지역별로 야경이 아름다운 장소 찾기",
        desc: "시부야, 신주쿠, 오다이바 등 가고 싶은 지역에서 도쿄 야경 스폿을 찾아보세요.",
        areaLabel: (name, count) => `${name} 야경 (${count})`,
        areaNames: {
          minato: "미나토구",
          shibuya: "시부야구",
          shinjuku: "신주쿠구",
          chuo: "주오구",
          sumida: "스미다구",
          koto: "고토구",
          taito: "다이토구",
          kita: "기타구",
          yokohama: "요코하마",
          other: "기타 지역",
        },
      },
      faq: {
        heading: "도쿄 야경 방문자를 위한 자주 묻는 질문",
        items: [
          { question: "오늘 일몰 시간과 야경 감상 추천 시간대는?", answer: "__SUNSET_DYNAMIC__" },
          { question: "도쿄 전망대는 사전 예약이 필요한가요?", answer: "시부야 스카이・도쿄 스카이트리 등 인기 전망대는 주말·공휴일에 매진될 수 있으므로 공식 사이트에서 사전 예매를 강력 권장합니다. 도쿄도청 남전망실은 무료이며 예약 불필요입니다." },
          { question: "도쿄에서 무료로 야경을 즐길 수 있는 곳은?", answer: "도쿄도청 남전망실, 오다이바 해변공원, 강변 공원 등 무료로 아름다운 야경을 볼 수 있는 스폿이 많습니다. 각 스폿 페이지에서 입장료 정보를 확인하세요." },
          { question: "도쿄는 밤에 돌아다녀도 안전한가요?", answer: "도쿄는 세계 최고 수준의 안전 도시입니다. 주요 야경 스폿 주변은 심야에도 밝고 사람이 많아 안심하고 즐길 수 있습니다. 전망대는 영업 종료 시간이 있으므로 미리 확인하세요." },
          { question: "야경 촬영 시 삼각대를 가져갈 수 있나요?", answer: "시부야 스카이・도쿄 스카이트리 등 실내 전망대는 삼각대·일각대 반입이 원칙적으로 금지되어 있습니다. 야외 공원이나 다리는 대부분 사용 가능합니다. 방문 전에 각 스폿 페이지의 규정을 꼭 확인하세요." },
          { question: "도쿄 전망대는 한국어 대응이 되나요?", answer: "시부야 스카이・도쿄 스카이트리・도쿄타워 등 주요 전망대는 한국어 안내판이 설치되어 있습니다. 온라인 티켓 구매도 한국어로 가능한 곳이 많아 방문 전 준비가 편리합니다." },
          { question: "야경 감상에 가장 좋은 계절과 시간대는?", answer: "공기가 맑은 겨울(12～2월)이 가장 멀리까지 볼 수 있어 추천합니다. 시간대는 일몰 후 20～50분의 '블루아워'가 하늘빛과 도시 불빛이 조화를 이루는 황금 타임입니다." },
          { question: "매직아워·블루아워란? 일루미네이션은 언제부터 켜지나요?", answer: "__TWILIGHT_LINK__" },
        ],
        sunsetAnswer: (sunset, from, to) => `오늘 도쿄도의 일몰 시간은 ${sunset}입니다. ${from}~${to}이 야경이 아름답게 보이는 시간입니다.`,
        sunsetUnavailable: "일몰 시간을 가져올 수 없습니다.",
        simulatorLinkText: "일출·일몰 방향 시뮬레이터",
        simulatorSuffix: "를 이용하면 간편하게 해가 지는 방향을 확인할 수 있습니다.",
        twilightPrefix: "대부분의 야경 스폿의 일루미네이션은 일몰 무렵부터 점등됩니다. 하늘이 주황빛으로 물드는 '매직아워'부터 짙은 파란색으로 바뀌는 '블루아워'까지가 야경 감상·촬영의 황금 시간대입니다. 자세한 내용은 ",
        twilightLinkText: "매직아워란？야경 감상·촬영의 황금 시간 해설",
        twilightSuffix: "을 참고해 주세요。",
      },
      mapSection: {
        heading: "지도에서 야경 스폿 찾기",
        desc: (n) => `도쿄·요코하마 지역의 야경 스폿 ${n}곳을 지도에 표시합니다. 마커를 클릭하면 상세 정보를 확인할 수 있습니다.`,
        allLabel: "전체",
        countLabel: "{n}개 스폿 표시 중",
        loadingLabel: "지도 불러오는 중...",
      },
    },
    searchPage: {
      breadcrumb: "검색 결과",
      heading: (query) => `"${query}" 검색 결과`,
      headingDefault: "야경 스폿 검색",
      found: (fields, query, count) => `${fields}에 "${query}"을(를) 포함하는 야경 스폿 ${count}곳을 소개합니다`,
      notFound: (query) => `"${query}"에 해당하는 스폿을 찾을 수 없습니다`,
      resultCountTemplate: "검색 결과：{count}건",
      sortRelevance: "관련도순",
      sortRating: "평점순",
      sortName: "이름순",
      fieldSpotName: "스폿 이름",
      fieldAddress: "주소",
      fieldStation: "가까운 역",
      fieldReport: "방문 리포트",
      fieldLead: "소개문",
      fieldTag: "태그",
      fieldCategory: "지역",
      matchHit: (fields) => `${fields}에서 일치`,
    },
    notFound: {
      title: "페이지를 찾을 수 없습니다",
      desc: "찾으시는 페이지가 이동되었거나 삭제되었을 수 있습니다.",
      button: "홈으로 돌아가기",
    },
    homeAuthor: {
      heading: "도쿄 야경 나비에 대하여",
      name: "타카히로",
      title: "야경 사진작가 / 웹 디렉터",
      desc1: "월 20〜30만 PV의 도쿄 야경 전문 미디어. 직접 방문·촬영한 야경 스폿을 정평 있는 명소부터 숨은 명소까지 200곳 이상 소개합니다.",
      desc2: "국내외 많은 분들께 도쿄 야경의 매력을 전하고 싶다는 마음으로 운영하고 있습니다.",
      achievementsLabel: "주요 실적",
      achievements: [
        "도쿄 타워 공식 사이트의 타임랩스 영상 촬영",
        "프린스 파크 타워 도쿄 객실·레스토랑 사진 촬영",
        "NHK·BS TBS·TV 아사히 등에 영상·사진 제공",
      ],
      moreLink: "프로필·활동 실적 더 보기",
    },
  },
  tw: {
    seoH1: (name) => `${name}的交通方式・營業時間・夜景看點指南`,
    seoDescription: (name, area, type, lead) => {
      if (type === "hotel")
        return `介紹位於${area}的${name}夜景資訊。客房與餐廳的夜景、交通方式、住宿費用等，想找能欣賞夜景的飯店的人請務必參考！`;
      if (type === "event")
        return `介紹${name}的活動資訊。舉辦期間、舉辦時間、地點、交通方式等，想了解活動詳情的人請務必參考！`;
      return `介紹位於${area}的${name}夜景・夕陽資訊。前往${name}的交通方式、地址、營業時間、門票、最近車站、眺望看點及最佳造訪時間等，想了解的人請務必參考！`;
    },
    heroImageAlt: (name) => `${name}的夜景`,
    closedBadge: "永久關閉",
    rating: {
      header: (name, area) => `${name}的夜景（${area}）`,
      beautiful: "美麗度",
      access: "交通便利",
      atmosphere: "氛圍",
      cost: "性價比",
      topLink: "東京夜景景點一覽",
      topLinkHref: "/tw",
    },
    overview: {
      heading: (name) => name ? `${name}訪問報告` : "訪問報告",
    },
    gallery: {
      heading: (name) => name ? `${name}的景色・照片` : "景色・照片",
    },
    info: {
      heading: (name) => name ? `${name}的基本資訊` : "基本資訊",
      address: "地址",
      hours: "營業時間",
      holiday: "公休日",
      fee: "入場費用",
      height: "觀景台高度",
      features: "夜景特色",
      links: "相關連結",
      officialSite: "官方網站",
      sns: "社群媒體",
      relatedSite: "相關網站",
      categoryListLabel: (name) => `${name}夜景景點一覧`,
      eventPeriod: "活動期間",
      eventVenue: "活動地點",
      eventHours: "活動時間",
      hotelInfo: "飯店資訊",
      checkinCheckout: "入住 / 退房",
      amenity: "設施服務",
    },
    access: {
      heading: (name) => `${name}的交通方式・停車場`,
      caption: "交通資訊",
      station: "電車・最近車站",
      parking: "停車場",
      map: "地圖",
    },
    bestTime: {
      heading: (name) => `${name || "此景點"}的最佳夜景觀賞・拍攝時間`,
      label: (dateLabel) => `今日（${dateLabel}）最佳夜景拍攝時間`,
      desc: "天空的藍色與城市燈光交織的「魔幻時刻」。",
      sunset: (time) => `今日日落時間為 ${time}。`,
    },
    review: {
      heading: (name) => `${name || "此景點"}的訪客評價`,
      noReviews: "目前還沒有關於此景點的評價。",
      formTitle: "分享您的評價",
      formDesc: "歡迎在下方留言分享您的造訪心得或目前的擁擠狀況！您的評論將幫助下一位訪客。",
      ratingLabel: "綜合評分",
      ratingPlaceholder: "請選擇",
      titleLabel: "評論標題",
      titlePlaceholder: "請輸入評論標題",
      contentLabel: "留言",
      contentPlaceholder: "（範例）平日19點左右造訪。不太擁擠，可以坐在長椅上悠閒地欣賞夜景。",
      nameLabel: "姓名",
      namePlaceholder: "請輸入姓名（暱稱也可以！）",
      submit: "提交評論",
      ariaRating: (rating) => `評分 ${rating} / 5`,
    },
    faq: {
      heading: "常見問題（FAQ）",
    },
    movie: {
      heading: (name) => `${name}縮時攝影`,
      timeLapseLink: "查看更多縮時攝影影片",
    },
    related: {
      heading: (area) => `${area}的夜景景點`,
      more: (area) => `查看更多${area}的夜景景點`,
      asideLabel: "相關景點",
      imageAlt: (name) => `從${name}眺望的夜景`,
    },
    recommend: {
      heading: "為您推薦的夜景景點",
    },
    share: {
      heading: "覺得這篇文章有幫助嗎？請分享",
      x: "發文",
      line: "LINE",
      hatena: "Hatena",
      copy: "複製連結",
      copied: "已複製！",
      facebook: "Facebook",
    },
    anchor: {
      report: "訪問報告",
      gallery: "照片・景色",
      info: "基本資訊",
      access: "交通方式",
      besttime: "最佳觀賞時間",
      review: "訪客評價",
      faq: "常見問題",
      movie: "縮時攝影",
      navAriaLabel: "頁面導覽",
    },
    footer: {
      author: "東京夜景導航編輯部",
      authorLabel: "作者",
      desc: "所有景點均由編輯部實地拍攝採訪",
      published: "發佈日",
      updated: "最終更新日",
    },
    areaPage: {
      title: (area, count) => count ? `日本東京${area}夜景景點推薦【${count}個景點】` : `日本東京${area}夜景推薦 — 人氣景點＆隱藏版秘境`,
      lead: (area, spots) => {
        const count = spots.length;
        if (count === 0) return `精選東京${area}最美夜景景點，全部實地走訪！附照片、評分、交通方式。`;
        const sorted = [...spots].sort((a, b) => b.rating_avg - a.rating_avg);
        const top2 = sorted.slice(0, 2).map((s) => s.name).join("、");
        return `精選東京${area}共${count}處夜景景點，${top2}等人氣景點全部實地走訪！附照片、評分、交通方式、觀賞小撇步，給第一次來東京旅遊的你最完整的攻略。`;
      },
      count: (n) => `${n}個景點`,
      sortLabel: "排序：",
      sortRating: "評價最高",
      sortUpdated: "最近更新",
      faqHeading: (area) => `${area}夜景觀賞指南`,
      faqSpotCount: (area, n) => ({
        q: `${area}有幾個夜景景點可以去？`,
        a: `我們介紹了${area}的${n}個夜景景點。很多景點距離主要車站步行即可到達，一個晚上就能走訪好幾個喔！`,
      }),
      faqTopSpot: (area, name, rating, lead) => ({
        q: `${area}最推薦的夜景景點是哪裡？`,
        a: `${name}以平均${rating}分（滿分5分）位居第一。${lead}`,
      }),
      faqTop3: (area, list) => ({
        q: `${area}夜景景點TOP3是？`,
        a: `${area}推薦TOP3：${list}。全部都是實地造訪拍攝＆評測的喔。`,
      }),
      faqDate: (area, name) => ({
        q: `${area}適合約會的夜景景點？`,
        a: `${area}最推薦${name}！詳細頁面有氣氛介紹、交通方式和觀賞小撇步，幫你規劃完美的夜景約會。`,
      }),
      faqFree: (area, freeNames) => ({
        q: `${area}有免費的夜景景點嗎？`,
        a: freeNames
          ? `有喔！免費景點包括：${freeNames}。不花錢也能享受東京美麗夜景！`
          : `${area}有很多免費或費用低廉的景點。各景點詳細頁面可查看入場費資訊。`,
      }),
      faqBestTime: (area) => ({
        q: `${area}看夜景的最佳時間是？`,
        a: `日落後30分鐘、天空還帶著色彩的「藍色時刻」最美！東京的日落時間冬天約下午4:30、夏天約晚上7:00，依季節變化。各景點頁面都有日落時間計算器可以參考。`,
      }),
      imageAlt: (name) => `${name}的夜景`,
      mapHeading: (area) => `${area}夜景景點地圖`,
      closedBadge: "永久關閉",
      mapCount: (area, n) => `${area}共有 ${n} 個夜景景點`,
      emptyState: "此地區目前尚無已翻譯的景點。",
    },
    homePage: {
      seoTitle: (year) => `日本東京夜景景點推薦（${year}最新）— 觀光・攝影必去！收錄200處以上 | 東京夜景導覽`,
      seoDescription: "東京旅遊必看的夜景景點完整指南！收錄200處以上景點，包含東京鐵塔、晴空塔觀景台、免費觀光景點、私房秘境等。提供評分、交通資訊及日落時間，輕鬆規劃東京夜景之旅。",
      hero: {
        catchphrase: "東京夜景完全指南：從經典到私房景點",
        subtitle: (count) => `觀光・攝影推薦的東京夜景景點，從經典到私房全面介紹【收錄${count}處】`,
        searchPlaceholder: "例）和田倉噴水公園、觀景台、看得到東京鐵塔、澀谷區",
        searchAriaLabel: "搜尋夜景景點",
        searchButton: "搜尋",
        imgAlt: "東京夜景",
        linkSpots: "推薦夜景景點",
        linkHotels: "夜景美麗的飯店",
        linkPhoto: "夜景攝影景點",
      },
      categoryNav: {
        ariaLabel: "依類別瀏覽",
        names: { observatory: "觀景台", building: "高樓大廈", park: "公園", bridge: "橋", hotel: "飯店", event: "活動", waterfront: "水岸", mountain: "山丘" },
      },
      spotRanking: {
        heading: (year) => `東京都內夜景景點推薦排名【${year}年最新】`,
        desc1: "從實際走訪的200處以上東京夜景景點中，以排名方式推薦最佳景點！",
        desc2: "各景點的評價由美麗度、交通便利、氛圍、性價比4項指標決定。規劃約會或攝影行程時請多加利用。",
        moreLink: "查看所有東京夜景景點",
      },
      hotelRanking: {
        heading: (year) => `夜景美麗的飯店推薦排名【${year}年版】`,
        desc: "嚴選可從客房及頂樓餐廳欣賞高品質東京夜景的飯店。紀念日和約會也非常推薦。",
        moreLink: "查看所有夜景飯店",
      },
      purposeSearch: {
        heading: "依目的搜尋夜景美麗的地方",
        desc: "依約會、攝影、免費景點等目的，篩選適合的夜景景點。",
        tagNames: {
          "無料スポット": "免費景點",
          "デート向け": "約會推薦",
          "ウォーターフロント": "海濱",
          "公園・広場": "公園・廣場",
          "東京スカイツリーが見える": "看得到晴空塔",
          "展望台": "觀景台",
          "東京タワーが見える": "看得到東京鐵塔",
          "レインボーブリッジが見える": "看得到彩虹大橋",
          "富士山が見える": "看得到富士山",
          "ドライブ向け": "夜景兜風",
          "東京の夜景が綺麗なホテル": "夜景優美的飯店",
          "夜桜のライトアップ": "夜櫻點燈",
          "東京駅が見える": "看得到東京車站",
          "イルミネーション": "燈飾",
          "東京ゲートブリッジが見える": "看得到東京門大橋",
          "渋谷スクランブル交差点が見える": "看得到澀谷十字路口",
          "紅葉のライトアップ": "紅葉點燈",
          "夜景が綺麗なレストラン": "夜景優美的餐廳",
        },
      },
      areaSearch: {
        heading: "依地區搜尋夜景美麗的地方",
        desc: "從澀谷、新宿、台場等想前往的地區，搜尋東京夜景景點。",
        areaLabel: (name, count) => `${name}的夜景（${count}）`,
        areaNames: {
          minato: "港區",
          shibuya: "澀谷區",
          shinjuku: "新宿區",
          chuo: "中央區",
          sumida: "墨田區",
          koto: "江東區",
          taito: "台東區",
          kita: "北區",
          yokohama: "橫濱",
          other: "其他地區",
        },
      },
      faq: {
        heading: "東京夜景觀光客常見問題",
        items: [
          { question: "今天日落時間和最佳夜景觀賞時段是幾點？", answer: "__SUNSET_DYNAMIC__" },
          { question: "東京的展望台需要提前預訂門票嗎？", answer: "澀谷SKY、東京晴空塔等熱門景點在週末和假日容易售罄，強烈建議透過官方網站提前購票。東京都廳南展望台免費入場且無需預約。" },
          { question: "東京有哪些免費夜景景點？", answer: "東京都廳南展望台、台場海濱公園、各處河濱公園等都可以免費欣賞美麗夜景。請至各景點頁面確認入場費用資訊。" },
          { question: "東京夜間外出安全嗎？", answer: "東京是全球治安最佳的城市之一。主要夜景景點周邊深夜仍燈火通明、人潮絡繹，可以放心遊覽。展望台有閉館時間，請事先確認。" },
          { question: "可以攜帶三腳架進行夜景攝影嗎？", answer: "澀谷SKY、東京晴空塔等室內展望台原則上禁止攜帶三腳架和獨腳架。戶外公園和橋樑大多允許使用。造訪前請務必確認各景點頁面的拍攝規定。" },
          { question: "東京的展望台有中文服務嗎？", answer: "澀谷SKY、東京晴空塔、東京鐵塔等主要展望台均設有繁體中文標示，部分設施備有中文服務人員。線上購票也可使用中文，方便事先規劃行程。" },
          { question: "賞夜景的最佳季節和時間帶是什麼時候？", answer: "空氣清澈的冬季（12～2月）能見度最高，視野最為開闊。時間上，日落後20～50分鐘的「藍調時刻」是天空色彩與城市燈光最完美融合的黃金時段。" },
          { question: "什麼是魔幻時刻・藍調時刻？燈光秀從幾點開始？", answer: "__TWILIGHT_LINK__" },
        ],
        sunsetAnswer: (sunset, from, to) => `今日東京都的日落時間為${sunset}。${from}～${to}是夜景最美的觀賞時段。`,
        sunsetUnavailable: "無法取得日落時間。",
        simulatorLinkText: "日出・日落方向模擬器",
        simulatorSuffix: "可以輕鬆查詢日落的方向。",
        twilightPrefix: "大多數景點的燈光會在日落前後點亮。從天空染上橙紅色的「魔幻時刻」到深藍色的「藍調時刻」，是夜景觀賞與攝影的黃金時段。詳細說明請參閱",
        twilightLinkText: "什麼是魔幻時刻？夜景攝影黃金時間解說",
        twilightSuffix: "。",
      },
      mapSection: {
        heading: "在地圖上尋找夜景景點",
        desc: (n) => `在地圖上顯示東京・橫濱地區的${n}個夜景景點。點擊標記可查看詳細資訊。`,
        allLabel: "全部",
        countLabel: "顯示 {n} 個景點",
        loadingLabel: "地圖載入中...",
      },
    },
    searchPage: {
      breadcrumb: "搜尋結果",
      heading: (query) => `「${query}」的搜尋結果`,
      headingDefault: "搜尋夜景景點",
      found: (fields, query, count) => `在${fields}中包含「${query}」的${count}個夜景景點`,
      notFound: (query) => `找不到與「${query}」相關的景點`,
      resultCountTemplate: "搜尋結果：{count}筆",
      sortRelevance: "相關度排序",
      sortRating: "評分排序",
      sortName: "名稱排序",
      fieldSpotName: "景點名稱",
      fieldAddress: "地址",
      fieldStation: "最近車站",
      fieldReport: "造訪報告",
      fieldLead: "介紹文",
      fieldTag: "標籤",
      fieldCategory: "地區",
      matchHit: (fields) => `${fields}中匹配`,
    },
    notFound: {
      title: "找不到頁面",
      desc: "您尋找的頁面可能已被移動或刪除。",
      button: "返回首頁",
    },
    homeAuthor: {
      heading: "關於東京夜景導航",
      name: "Takahiro",
      title: "夜景攝影師 / 網站總監",
      desc1: "每月20〜30萬PV的東京夜景專業媒體。實際走訪拍攝，從知名景點到隱藏景點，為您介紹200處以上的夜景景點。",
      desc2: "希望將東京夜景的魅力傳遞給國內外更多人，懷著這份心意持續運營本站。",
      achievementsLabel: "主要成就",
      achievements: [
        "拍攝東京鐵塔官方網站的縮時攝影影像",
        "拍攝王子大飯店帕克東京客房及餐廳照片",
        "為NHK、BS TBS、朝日電視台等提供影像與照片",
      ],
      moreLink: "查看更多個人簡介及活動實績",
    },
  },
  cn: {
    seoH1: (name) => `${name}的交通方式・营业时间・夜景看点指南`,
    seoDescription: (name, area, type, lead) => {
      if (type === "hotel")
        return `介绍位于${area}的${name}夜景信息。客房与餐厅的夜景、交通方式、住宿费用等，想找能欣赏夜景的酒店的朋友请务必看看！`;
      if (type === "event")
        return `介绍${name}的活动信息。举办时间、举办地点、交通方式等，想了解活动详情的朋友请务必看看！`;
      return `介绍位于${area}的${name}夜景・夕阳信息。前往${name}的交通方式、地址、营业时间、门票、最近车站、眺望看点及最佳造访时间等，想了解的朋友请务必看看！`;
    },
    heroImageAlt: (name) => `${name}的夜景`,
    closedBadge: "永久关闭",
    rating: {
      header: (name, area) => `${name}的夜景（${area}）`,
      beautiful: "美丽度",
      access: "交通便利",
      atmosphere: "氛围",
      cost: "性价比",
      topLink: "东京夜景景点一览",
      topLinkHref: "/cn",
    },
    overview: {
      heading: (name) => name ? `${name}访问报告` : "访问报告",
    },
    gallery: {
      heading: (name) => name ? `${name}的景色・照片` : "景色・照片",
    },
    info: {
      heading: (name) => name ? `${name}的基本信息` : "基本信息",
      address: "地址",
      hours: "营业时间",
      holiday: "休息日",
      fee: "门票价格",
      height: "观景台高度",
      features: "夜景特色",
      links: "相关链接",
      officialSite: "官方网站",
      sns: "社交媒体",
      relatedSite: "相关网站",
      categoryListLabel: (name) => `${name}夜景景点一览`,
      eventPeriod: "活动期间",
      eventVenue: "活动地点",
      eventHours: "活动时间",
      hotelInfo: "酒店信息",
      checkinCheckout: "入住 / 退房",
      amenity: "设施服务",
    },
    access: {
      heading: (name) => `${name}的交通方式・停车场`,
      caption: "交通信息",
      station: "电车・最近车站",
      parking: "停车场",
      map: "地图",
    },
    bestTime: {
      heading: (name) => `${name || "此景点"}的最佳夜景观赏・拍摄时间`,
      label: (dateLabel) => `今日（${dateLabel}）最佳夜景拍摄时间`,
      desc: "天空的蓝色与城市灯光交织的「魔幻时刻」。",
      sunset: (time) => `今日日落时间为 ${time}。`,
    },
    review: {
      heading: (name) => `${name || "此景点"}的访客评价`,
      noReviews: "目前还没有关于此景点的评价。",
      formTitle: "分享您的评价",
      formDesc: "欢迎在下方留言分享您的到访感受或目前的拥挤状况！您的评论将帮助下一位访客。",
      ratingLabel: "综合评分",
      ratingPlaceholder: "请选择",
      titleLabel: "评论标题",
      titlePlaceholder: "请输入评论标题",
      contentLabel: "留言",
      contentPlaceholder: "（范例）平日19点左右到访。不太拥挤，可以坐在长椅上悠闲地欣赏夜景。",
      nameLabel: "姓名",
      namePlaceholder: "请输入姓名（昵称也可以！）",
      submit: "提交评论",
      ariaRating: (rating) => `评分 ${rating} / 5`,
    },
    faq: {
      heading: "常见问题（FAQ）",
    },
    movie: {
      heading: (name) => `${name}延时摄影`,
      timeLapseLink: "查看更多延时摄影视频",
    },
    related: {
      heading: (area) => `${area}的夜景景点`,
      more: (area) => `查看更多${area}的夜景景点`,
      asideLabel: "相关景点",
      imageAlt: (name) => `从${name}眺望的夜景`,
    },
    recommend: {
      heading: "为您推荐的夜景景点",
    },
    share: {
      heading: "觉得这篇文章有帮助吗？请分享",
      x: "发文",
      line: "LINE",
      hatena: "Hatena",
      copy: "复制链接",
      copied: "已复制！",
      weibo: "微博",
    },
    anchor: {
      report: "访问报告",
      gallery: "照片・景色",
      info: "基本信息",
      access: "交通方式",
      besttime: "最佳观赏时间",
      review: "访客评价",
      faq: "常见问题",
      movie: "延时摄影",
      navAriaLabel: "页面导航",
    },
    footer: {
      author: "东京夜景导航编辑部",
      authorLabel: "作者",
      desc: "所有景点均由编辑部实地拍摄采访",
      published: "发布日",
      updated: "最終更新日",
    },
    areaPage: {
      title: (area, count) => count ? `日本东京${area}夜景景点推荐【${count}个景点】` : `日本东京${area}夜景推荐 — 热门景点＆隐藏宝藏`,
      lead: (area, spots) => {
        const count = spots.length;
        if (count === 0) return `精选东京${area}最美夜景景点，全部实地走访！附照片、评分、交通方式。`;
        const sorted = [...spots].sort((a, b) => b.rating_avg - a.rating_avg);
        const top2 = sorted.slice(0, 2).map((s) => s.name).join("、");
        return `精选东京${area}共${count}处夜景景点，${top2}等热门景点全部实地走访！附照片、评分、交通方式、观赏小贴士，给第一次来东京旅游的你最全面的攻略。`;
      },
      count: (n) => `${n}个景点`,
      sortLabel: "排序：",
      sortRating: "评价最高",
      sortUpdated: "最近更新",
      faqHeading: (area) => `${area}夜景观赏指南`,
      faqSpotCount: (area, n) => ({
        q: `${area}有几个夜景景点可以去？`,
        a: `我们介绍了${area}的${n}个夜景景点。很多景点距离主要车站步行即可到达，一个晚上就能逛好几个！`,
      }),
      faqTopSpot: (area, name, rating, lead) => ({
        q: `${area}最值得去的夜景景点是哪里？`,
        a: `${name}以平均${rating}分（满分5分）位居第一。${lead}`,
      }),
      faqTop3: (area, list) => ({
        q: `${area}夜景景点TOP3是？`,
        a: `${area}推荐TOP3：${list}。全部都是实地走访拍摄＆评测的哦。`,
      }),
      faqDate: (area, name) => ({
        q: `${area}适合约会的夜景景点？`,
        a: `${area}最推荐${name}！详情页面有氛围介绍、交通方式和观赏小贴士，帮你规划完美的夜景约会。`,
      }),
      faqFree: (area, freeNames) => ({
        q: `${area}有免费的夜景景点吗？`,
        a: freeNames
          ? `有的！免费景点包括：${freeNames}。不花钱也能欣赏东京美丽夜景！`
          : `${area}有很多免费或费用低廉的景点。各景点详情页面可查看门票信息。`,
      }),
      faqBestTime: (area) => ({
        q: `${area}看夜景的最佳时间是？`,
        a: `日落后30分钟、天空还带着色彩的"蓝色时刻"最美！东京的日落时间冬天约下午4:30、夏天约晚上7:00，随季节变化。各景点页面都有日落时间计算器可以参考。`,
      }),
      imageAlt: (name) => `${name}的夜景`,
      mapHeading: (area) => `${area}夜景景点地图`,
      closedBadge: "永久关闭",
      mapCount: (area, n) => `${area}共有 ${n} 个夜景景点`,
      emptyState: "此地区暂无已翻译的景点。",
    },
    homePage: {
      seoTitle: (year) => `日本东京夜景景点推荐（${year}最新）— 观光・摄影必去！收录200处以上 | 东京夜景导览`,
      seoDescription: "东京旅游必看的夜景景点完整指南！收录200处以上景点，包含东京塔、晴空塔观景台、免费观光景点、小众秘境等。提供评分、交通信息及日落时间，轻松规划东京夜景之旅。",
      hero: {
        catchphrase: "东京夜景全攻略：完整指南",
        subtitle: (count) => `观光・摄影推荐的东京夜景景点，从经典到小众全面介绍【收录${count}处】`,
        searchPlaceholder: "例）和田仓喷水公园、观景台、能看到东京塔、涩谷区",
        searchAriaLabel: "搜索夜景景点",
        searchButton: "搜索",
        imgAlt: "东京夜景",
        linkSpots: "推荐夜景景点",
        linkHotels: "夜景优美的酒店",
        linkPhoto: "夜景摄影景点",
      },
      categoryNav: {
        ariaLabel: "按类别浏览",
        names: { observatory: "观景台", building: "高楼大厦", park: "公园", bridge: "桥", hotel: "酒店", event: "活动", waterfront: "水边", mountain: "山丘" },
      },
      spotRanking: {
        heading: (year) => `东京都内夜景景点推荐排名【${year}年最新】`,
        desc1: "从实际走访的200处以上东京夜景景点中，以排名方式推荐最佳景点！",
        desc2: "各景点的评价由美丽度、交通便利、氛围、性价比4项指标决定。规划约会或摄影行程时请多加利用。",
        moreLink: "查看所有东京夜景景点",
      },
      hotelRanking: {
        heading: (year) => `夜景优美的酒店推荐排名【${year}年版】`,
        desc: "精选可从客房及顶层餐厅欣赏高品质东京夜景的酒店。纪念日和约会也非常推荐。",
        moreLink: "查看所有夜景酒店",
      },
      purposeSearch: {
        heading: "按目的搜索夜景优美的地方",
        desc: "按约会、摄影、免费景点等目的，筛选适合的夜景景点。",
        tagNames: {
          "無料スポット": "免费景点",
          "デート向け": "约会推荐",
          "ウォーターフロント": "海滨",
          "公園・広場": "公园・广场",
          "東京スカイツリーが見える": "能看到晴空塔",
          "展望台": "观景台",
          "東京タワーが見える": "能看到东京塔",
          "レインボーブリッジが見える": "能看到彩虹大桥",
          "富士山が見える": "能看到富士山",
          "ドライブ向け": "夜景兜风",
          "東京の夜景が綺麗なホテル": "夜景优美的酒店",
          "夜桜のライトアップ": "夜樱灯光秀",
          "東京駅が見える": "能看到东京站",
          "イルミネーション": "灯饰",
          "東京ゲートブリッジが見える": "能看到东京门大桥",
          "渋谷スクランブル交差点が見える": "能看到涩谷十字路口",
          "紅葉のライトアップ": "红叶灯光秀",
          "夜景が綺麗なレストラン": "夜景优美的餐厅",
        },
      },
      areaSearch: {
        heading: "按地区搜索夜景优美的地方",
        desc: "从涩谷、新宿、台场等想去的地区，搜索东京夜景景点。",
        areaLabel: (name, count) => `${name}的夜景（${count}）`,
        areaNames: {
          minato: "港区",
          shibuya: "涩谷区",
          shinjuku: "新宿区",
          chuo: "中央区",
          sumida: "墨田区",
          koto: "江东区",
          taito: "台东区",
          kita: "北区",
          yokohama: "横滨",
          other: "其他地区",
        },
      },
      faq: {
        heading: "东京夜景观光客常见问题",
        items: [
          { question: "今天日落时间和最佳夜景观赏时段是几点？", answer: "__SUNSET_DYNAMIC__" },
          { question: "东京的观景台需要提前预订门票吗？", answer: "涩谷SKY、东京晴空塔等热门景点在周末和节假日容易售罄，强烈建议通过官方网站提前购票。东京都厅南展望台免费入场且无需预约。" },
          { question: "东京有哪些免费夜景景点？", answer: "东京都厅南展望台、台场海滨公园、各处河滨公园都可以免费欣赏美丽夜景。请在各景点页面确认入场费用信息。" },
          { question: "东京夜间外出安全吗？", answer: "东京是全球治安最好的城市之一。主要夜景景点周边深夜仍灯火通明、人流不断，可以放心游览。观景台有闭馆时间，请提前确认。" },
          { question: "可以携带三脚架进行夜景拍摄吗？", answer: "涩谷SKY、东京晴空塔等室内观景台原则上禁止携带三脚架和独脚架。户外公园和桥梁大多允许使用。造访前请务必确认各景点页面的拍摄规定。" },
          { question: "东京的观景台有中文服务吗？", answer: "涩谷SKY、东京晴空塔、东京塔等主要观景台均设有简体中文标示，部分设施备有中文服务人员。线上购票也可使用中文，方便提前规划行程。" },
          { question: "欣赏夜景的最佳季节和时间是什么时候？", answer: "空气清澈的冬季（12～2月）能见度最高，视野最为开阔。时间上，日落后20～50分钟的「蓝调时刻」是天空色彩与城市灯光最完美融合的黄金时段。" },
          { question: "什么是魔幻时刻・蓝调时刻？灯光秀从几点开始？", answer: "__TWILIGHT_LINK__" },
        ],
        sunsetAnswer: (sunset, from, to) => `今日东京都的日落时间为${sunset}。${from}～${to}是夜景最美的观赏时段。`,
        sunsetUnavailable: "无法获取日落时间。",
        simulatorLinkText: "日出・日落方向模拟器",
        simulatorSuffix: "可以轻松查询日落的方向。",
        twilightPrefix: "大多数景点的灯光会在日落前后点亮。从天空染上橙红色的「魔幻时刻」到深蓝色的「蓝调时刻」，是夜景观赏与拍摄的黄金时段。详细说明请参阅",
        twilightLinkText: "什么是魔幻时刻？夜景拍摄黄金时间解说",
        twilightSuffix: "。",
      },
      mapSection: {
        heading: "在地图上寻找夜景景点",
        desc: (n) => `在地图上显示东京・横滨地区的${n}个夜景景点。点击标记可查看详细信息。`,
        allLabel: "全部",
        countLabel: "显示 {n} 个景点",
        loadingLabel: "地图加载中...",
      },
    },
    searchPage: {
      breadcrumb: "搜索结果",
      heading: (query) => `"${query}"的搜索结果`,
      headingDefault: "搜索夜景景点",
      found: (fields, query, count) => `在${fields}中包含"${query}"的${count}个夜景景点`,
      notFound: (query) => `未找到与"${query}"相关的景点`,
      resultCountTemplate: "搜索结果：{count}条",
      sortRelevance: "相关度排序",
      sortRating: "评分排序",
      sortName: "名称排序",
      fieldSpotName: "景点名称",
      fieldAddress: "地址",
      fieldStation: "最近车站",
      fieldReport: "造访报告",
      fieldLead: "介绍文",
      fieldTag: "标签",
      fieldCategory: "地区",
      matchHit: (fields) => `${fields}中匹配`,
    },
    notFound: {
      title: "找不到页面",
      desc: "您寻找的页面可能已被移动或删除。",
      button: "返回首页",
    },
    homeAuthor: {
      heading: "关于东京夜景导航",
      name: "Takahiro",
      title: "夜景摄影师 / 网站总监",
      desc1: "每月20～30万PV的东京夜景专业媒体。实际走访拍摄，从知名景点到隐藏景点，为您介绍200处以上的夜景景点。",
      desc2: "希望将东京夜景的魅力传递给国内外更多人，怀着这份心意持续运营本站。",
      achievementsLabel: "主要成就",
      achievements: [
        "拍摄东京铁塔官方网站的延时摄影视频",
        "拍摄王子大饭店帕克东京客房及餐厅照片",
        "为NHK、BS TBS、朝日电视台等提供影像与照片",
      ],
      moreLink: "查看更多个人简介及活动实绩",
    },
  },
} satisfies Record<SiteLocale, ComponentLabels>;

export function getComponentLabels(localeSlug: string): ComponentLabels {
  return LABELS[localeSlug as SiteLocale] ?? LABELS.ja;
}

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

/* ---- LanguageSwitcher: aria-label ---- */
export const LANG_SWITCHER_LABELS: Record<SiteLocale, string> = {
  ja: "言語を選択",
  en: "Select language",
  ko: "언어 선택",
  tw: "選擇語言",
  cn: "选择语言",
};

/* ---- アフィリエイトリンクのローカライズ ---- */
/**
 * サービス名ごとの正規表現パターンと翻訳ラベル。
 * DB内の表記ゆれ（「空室を見る」「空室状況をチェック」「予約する」等）に対応するため
 * サービス名を検出してテキスト全体を置換する。
 */
const AFFILIATE_SERVICE_PATTERNS: Array<{
  pattern: RegExp;
  labels: Record<string, string>;
}> = [
  {
    pattern: /楽天トラベル[^<]*/g,
    labels: {
      en: "Check availability on Rakuten Travel",
      ko: "라쿠텐 트래블에서 빈방 확인",
      tw: "在樂天旅遊查看空房",
      cn: "在乐天旅游查看空房",
    },
  },
  {
    pattern: /Booking\.com[^<]*/g,
    labels: {
      en: "Check availability on Booking.com",
      ko: "Booking.com에서 빈방 확인",
      tw: "在Booking.com查看空房",
      cn: "在Booking.com查看空房",
    },
  },
  {
    pattern: /じゃらん(?:\.net)?[^<]*/g,
    labels: {
      en: "Check availability on Jalan.net",
      ko: "Jalan.net에서 빈방 확인",
      tw: "在Jalan.net查看空房",
      cn: "在Jalan.net查看空房",
    },
  },
  {
    pattern: /一休(?:\.com)?[^<]*/g,
    labels: {
      en: "Check availability on Ikyu.com",
      ko: "Ikyu.com에서 빈방 확인",
      tw: "在一休.com查看空房",
      cn: "在一休.com查看空房",
    },
  },
];

/**
 * アフィリエイトリンクHTML内の日本語ボタンラベルを指定ロケールに置換する。
 * サービス名を正規表現で検出するため、DB内の表記ゆれにも対応。
 * ja または未指定の場合はそのまま返す。
 */
export function localizeAffiliateHtml(html: string, locale: string | null | undefined): string {
  if (!locale || locale === "ja") return html;
  let result = html;
  for (const { pattern, labels } of AFFILIATE_SERVICE_PATTERNS) {
    const translated = labels[locale];
    if (translated) result = result.replace(pattern, translated);
  }
  return result;
}
