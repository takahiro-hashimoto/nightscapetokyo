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
};

export type AccessLabels = {
  heading: (name: string) => string;
  caption: string;
  station: string;
  parking: string;
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
    tagNames?: Record<string, string>;
  };
  areaSearch: {
    heading: string;
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
  };
};

export type AreaPageLabels = {
  title: (area: string) => string;
  lead: (area: string) => string;
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

export type ComponentLabels = {
  seoH1: (name: string) => string;
  seoDescription: (name: string, area: string, type: string) => string;
  heroImageAlt: (name: string) => string;
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
};

const LABELS = {
  ja: {
    seoH1: (name) => `${name}の行き方・営業時間・夜景見どころガイド`,
    seoDescription: (name, area, type) => {
      if (type === "hotel")
        return `${area}にある${name}の夜景情報を紹介。客室やレストランからの夜景・眺望、アクセス、宿泊料金など、夜景が楽しめるホテルをお探しの方はぜひ確認してみて下さい！`;
      if (type === "event")
        return `${area}で開催される${name}の情報を紹介。開催期間・時間・場所・アクセス方法など、イルミネーションや夜景イベントの詳細を知りたい方はぜひ確認してみて下さい！`;
      return `${area}にある${name}の夜景・夕景情報を紹介。${name}への行き方・住所・営業時間・入場料金・最寄駅・眺望の見どころ、何時に訪れるのがおすすめかなどを知りたい方はぜひ確認してみて下さい！`;
    },
    heroImageAlt: (name) => `${name}の夜景`,
    rating: {
      header: (name, area) => `${name || "スポット"} の夜景（${area}）`,
      beautiful: "美しさ",
      access: "アクセス",
      atmosphere: "雰囲気",
      cost: "コスパ",
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
    },
    access: {
      heading: (name) => `${name}の行き方・アクセスと駐車場`,
      caption: "アクセス情報",
      station: "電車・最寄り駅",
      parking: "駐車場",
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
      title: (area) => `${area}の夜景スポット一覧`,
      lead: (area) => `東京都${area}のおすすめ夜景スポット情報（夜景が綺麗な場所）を紹介。各夜景スポットの詳細記事には実際に訪問した感想や写真を複数枚を掲載しています。デート、旅行、撮影スポットなどを決めるのにぜひお役立てください！`,
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
      mapCount: (area, n) => `${area}エリアの夜景スポット ${n}件`,
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
      purposeSearch: { heading: "目的別に夜景が綺麗な場所を探す" },
      areaSearch: {
        heading: "エリア別に夜景が綺麗な場所を探す",
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
          { question: "夕日が沈む方向を事前に調べるにはどうしたらいいですか？", answer: "__SIMULATOR_LINK__" },
        ],
        sunsetAnswer: (sunset, from, to) => `本日の東京都の日没時間は${sunset}です。${from}〜${to}が夜景が綺麗に見える時間になります。`,
        sunsetUnavailable: "日没時間を取得できませんでした。",
        simulatorLinkText: "日の出・日の入り方角シミュレーター",
        simulatorSuffix: "を利用すると簡単に夕日が沈む方向をチェックすることができます。",
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
  },
  en: {
    seoH1: (name) => `${name}: Access, Hours & Night View Guide`,
    seoDescription: (name, area, type) => {
      if (type === "hotel")
        return `Discover night views from ${name} in ${area}. Find room views, restaurant panoramas, access info, and rates for this hotel with stunning nightscape.`;
      if (type === "event")
        return `Everything about ${name} in ${area}. Event dates, hours, location, access, and highlights of this illumination and night view event.`;
      return `Night view guide for ${name} in ${area}. Directions, address, hours, admission, nearest station, scenic highlights, and the best time to visit.`;
    },
    heroImageAlt: (name) => `Night view from ${name}`,
    rating: {
      header: (name, area) => `Night View from ${name} (${area})`,
      beautiful: "Beauty",
      access: "Access",
      atmosphere: "Atmosphere",
      cost: "Value",
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
    },
    access: {
      heading: (name) => `${name} - Access & Parking`,
      caption: "Access Information",
      station: "Train / Nearest Station",
      parking: "Parking",
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
      title: (area) => `Best Night Views in ${area}, Tokyo — Top Spots & Hidden Gems`,
      lead: (area) => `Explore the most stunning night view spots in ${area}, Tokyo — from iconic observatories to hidden rooftop gems. Every spot is personally visited with photos, ratings, access info, and tips for first-time visitors to Tokyo.`,
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
      mapCount: (area, n) => `${n} night view spots in ${area}`,
    },
    homePage: {
      seoTitle: (year) => `Best Tokyo Night View Spots (${year}) — 200+ Iconic & Hidden Gems | Tokyo Night View Guide`,
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
        areaLabel: (name, count) => `${name} (${count})`,
        areaNames: { other: "Other Areas" },
      },
      faq: {
        heading: "Frequently Asked Questions about Tokyo Night Views",
        items: [
          { question: "What time is sunset today and when is the best time for night view photography?", answer: "__SUNSET_DYNAMIC__" },
          { question: "What are the best romantic night view spots in Tokyo?", answer: "Wadakura Fountain Park, KITTE Rooftop Garden, Toyosu Gururi Park, and Wakasu Seaside Park are highly recommended. These spots offer beautiful night views in a calm, uncrowded atmosphere." },
          { question: "What are the most Instagrammable night view spots in Tokyo?", answer: "SHIBUYA SKY, Tokyo Metropolitan Government Building observatories, Tower Hall Funabori observatory, and Tokyo Tower observation deck are popular choices." },
          { question: "What are the famous landmarks in Tokyo?", answer: "Tokyo Tower, Tokyo Skytree, Rainbow Bridge, Tokyo Gate Bridge, and Tokyo Station are among the most iconic landmarks." },
          { question: "When is the best time of year for night view in Tokyo?", answer: "Winter offers the clearest air for observation deck visits. On weekdays, office buildings have more lights on, making for a more vibrant cityscape." },
          { question: "What camera equipment is recommended for night photography?", answer: "Please check our articles on recommended photography equipment for beginners and choosing cameras and lenses." },
          { question: "What camera settings should I use for night photography?", answer: "Please refer to our guides on how to take beautiful night photos with a camera and recommended camera settings." },
          { question: "How can I find out which direction the sun sets?", answer: "__SIMULATOR_LINK__" },
        ],
        sunsetAnswer: (sunset, from, to) => `Today's sunset in Tokyo is at ${sunset}. The best time for night view photography is from ${from} to ${to}.`,
        sunsetUnavailable: "Sunset time is currently unavailable.",
        simulatorLinkText: "Sunrise & Sunset Direction Simulator",
        simulatorSuffix: " makes it easy to check which direction the sun sets.",
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
  },
  ko: {
    seoH1: (name) => `${name} 가는 길・영업시간・야경 볼거리 가이드`,
    seoDescription: (name, area, type) => {
      if (type === "hotel")
        return `${area}에 위치한 ${name}의 야경 정보를 소개합니다. 객실과 레스토랑에서의 야경·전망, 교통편, 숙박 요금 등 야경을 즐길 수 있는 호텔을 찾고 계신 분은 꼭 확인해 보세요!`;
      if (type === "event")
        return `${area}에서 개최되는 ${name}의 정보를 소개합니다. 개최 기간·시간·장소·교통편 등 일루미네이션 및 야경 이벤트의 상세 정보를 알고 싶은 분은 꼭 확인해 보세요!`;
      return `${area}에 위치한 ${name}의 야경·석양 정보를 소개합니다. ${name} 가는 방법·주소·영업시간·입장료·가까운 역·전망 볼거리, 언제 방문하면 좋은지 등을 알고 싶은 분은 꼭 확인해 보세요!`;
    },
    heroImageAlt: (name) => `${name}의 야경`,
    rating: {
      header: (name, area) => `${name}의 야경 (${area})`,
      beautiful: "아름다움",
      access: "접근성",
      atmosphere: "분위기",
      cost: "가성비",
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
    },
    access: {
      heading: (name) => `${name} 오시는 길・주차장`,
      caption: "오시는 길 정보",
      station: "전철・가까운 역",
      parking: "주차장",
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
      title: (area) => `${area} 야경 명소 추천 — 인기 스폿 & 숨겨진 장소`,
      lead: (area) => `도쿄 ${area}의 인기 전망대부터 숨겨진 야경 명소까지 직접 방문하여 소개합니다. 사진, 평점, 교통편, 관람 팁 등 도쿄 여행자를 위한 완벽 가이드!`,
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
      mapCount: (area, n) => `${area} 야경 스폿 ${n}곳`,
    },
    homePage: {
      seoTitle: (year) => `도쿄 야경 명소 추천 ${year} — 관광・촬영에 딱! 200곳 이상 수록 | 도쿄 야경 가이드`,
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
        areaLabel: (name, count) => `${name} 야경 (${count})`,
        areaNames: { other: "기타 지역" },
      },
      faq: {
        heading: "도쿄 야경에 관한 자주 묻는 질문",
        items: [
          { question: "오늘의 일몰 시간과 야경 감상에 추천하는 시간대는 언제인가요?", answer: "__SUNSET_DYNAMIC__" },
          { question: "도쿄 도내에서 로맨틱한 야경 스폿을 알려주세요.", answer: "와다쿠라 분수공원, KITTE 옥상정원, 도요스 구루리공원, 와카스 해변공원 등을 추천합니다. 아름다운 야경을 감상할 수 있으면서도 사람이 적어 조용한 분위기에서 대화할 수 있습니다." },
          { question: "도쿄에서 인스타그램에 올리기 좋은 야경 스폿은 어디인가요?", answer: "SHIBUYA SKY, 도쿄도청 남전망실·북전망실, 타워홀 후나보리 전망대, 도쿄타워 전망대 등을 추천합니다." },
          { question: "도쿄의 랜드마크에는 어떤 건물이 있나요?", answer: "도쿄타워, 도쿄 스카이트리, 레인보우 브리지, 도쿄 게이트 브리지, 도쿄역 등이 유명한 랜드마크입니다." },
          { question: "도쿄 야경 감상에 추천하는 시기는 언제인가요?", answer: "전망대를 방문할 때는 공기가 맑은 겨울이 야경 감상에 추천됩니다. 또한 빌딩 야경을 볼 때는 평일이 더 많은 빛의 야경을 즐길 수 있습니다." },
          { question: "야경을 예쁘게 찍을 수 있는 추천 장비를 알려주세요!", answer: "「초보자 추천 촬영 장비」나 「카메라·렌즈 선택 방법」 등의 기사를 참고해 주세요." },
          { question: "야경을 예쁘게 찍는 카메라 설정을 알려주세요!", answer: "「카메라로 아름다운 야경 사진을 찍는 방법」이나 「카메라 설정」 등의 기사를 참고해 주세요." },
          { question: "해가 지는 방향을 미리 알 수 있는 방법이 있나요?", answer: "__SIMULATOR_LINK__" },
        ],
        sunsetAnswer: (sunset, from, to) => `오늘 도쿄도의 일몰 시간은 ${sunset}입니다. ${from}~${to}이 야경이 아름답게 보이는 시간입니다.`,
        sunsetUnavailable: "일몰 시간을 가져올 수 없습니다.",
        simulatorLinkText: "일출·일몰 방향 시뮬레이터",
        simulatorSuffix: "를 이용하면 간편하게 해가 지는 방향을 확인할 수 있습니다.",
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
  },
  tw: {
    seoH1: (name) => `${name}的交通方式・營業時間・夜景看點指南`,
    seoDescription: (name, area, type) => {
      if (type === "hotel")
        return `介紹位於${area}的${name}夜景資訊。客房與餐廳的夜景、交通方式、住宿費用等，想找能欣賞夜景的飯店的人請務必參考！`;
      if (type === "event")
        return `介紹在${area}舉辦的${name}相關資訊。舉辦期間、時間、地點、交通方式等，想了解燈飾及夜景活動詳情的人請務必參考！`;
      return `介紹位於${area}的${name}夜景・夕陽資訊。前往${name}的交通方式、地址、營業時間、門票、最近車站、眺望看點及最佳造訪時間等，想了解的人請務必參考！`;
    },
    heroImageAlt: (name) => `${name}的夜景`,
    rating: {
      header: (name, area) => `${name}的夜景（${area}）`,
      beautiful: "美麗度",
      access: "交通便利",
      atmosphere: "氛圍",
      cost: "性價比",
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
    },
    access: {
      heading: (name) => `${name}的交通方式・停車場`,
      caption: "交通資訊",
      station: "電車・最近車站",
      parking: "停車場",
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
      title: (area) => `${area}夜景推薦 — 人氣景點＆隱藏版秘境`,
      lead: (area) => `精選東京${area}最美夜景景點，從知名展望台到隱藏版秘境全部實地走訪！附照片、評分、交通方式、觀賞小撇步，給第一次來東京旅遊的你最完整的攻略。`,
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
      mapCount: (area, n) => `${area}共有 ${n} 個夜景景點`,
    },
    homePage: {
      seoTitle: (year) => `東京夜景景點推薦（${year}最新）— 觀光・攝影必去！收錄200處以上 | 東京夜景導覽`,
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
        areaLabel: (name, count) => `${name}的夜景（${count}）`,
        areaNames: { other: "其他地區" },
      },
      faq: {
        heading: "關於東京夜景的常見問題",
        items: [
          { question: "今天日落時間和推薦的夜景觀賞時段是幾點？", answer: "__SUNSET_DYNAMIC__" },
          { question: "請推薦東京都內夜景浪漫的景點。", answer: "推薦和田倉噴水公園、KITTE屋頂花園、豐洲環繞公園、若洲海濱公園等。這些景點不僅夜景美麗，而且人少，氛圍寧靜。" },
          { question: "東京都內適合拍照打卡的夜景景點在哪裡？", answer: "推薦SHIBUYA SKY、東京都廳南展望室・北展望室、Tower Hall船堀展望台、東京鐵塔展望台等。" },
          { question: "東京有哪些著名的地標建築？", answer: "東京鐵塔、東京晴空塔、彩虹大橋、東京門戶大橋、東京車站等都是著名的地標。" },
          { question: "東京夜景觀賞的最佳時機是什麼時候？", answer: "造訪展望台時，空氣清新的冬季最適合觀賞夜景。此外，觀賞大樓夜景時，平日的燈光更為明亮。" },
          { question: "請推薦適合拍攝夜景的器材！", answer: "請參考「新手推薦攝影器材」及「相機・鏡頭選購指南」等文章。" },
          { question: "請教拍攝美麗夜景的相機設定！", answer: "請參考「使用單眼相機拍攝美麗夜景的方法」及「相機設定」等文章。" },
          { question: "如何事先查詢日落方向？", answer: "__SIMULATOR_LINK__" },
        ],
        sunsetAnswer: (sunset, from, to) => `今日東京都的日落時間為${sunset}。${from}～${to}是夜景最美的觀賞時段。`,
        sunsetUnavailable: "無法取得日落時間。",
        simulatorLinkText: "日出・日落方向模擬器",
        simulatorSuffix: "可以輕鬆查詢日落的方向。",
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
  },
  cn: {
    seoH1: (name) => `${name}的交通方式・营业时间・夜景看点指南`,
    seoDescription: (name, area, type) => {
      if (type === "hotel")
        return `介绍位于${area}的${name}夜景信息。客房与餐厅的夜景、交通方式、住宿费用等，想找能欣赏夜景的酒店的朋友请务必看看！`;
      if (type === "event")
        return `介绍在${area}举办的${name}相关信息。举办时间、地点、交通方式等，想了解灯光秀及夜景活动详情的朋友请务必看看！`;
      return `介绍位于${area}的${name}夜景・夕阳信息。前往${name}的交通方式、地址、营业时间、门票、最近车站、眺望看点及最佳造访时间等，想了解的朋友请务必看看！`;
    },
    heroImageAlt: (name) => `${name}的夜景`,
    rating: {
      header: (name, area) => `${name}的夜景（${area}）`,
      beautiful: "美丽度",
      access: "交通便利",
      atmosphere: "氛围",
      cost: "性价比",
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
    },
    access: {
      heading: (name) => `${name}的交通方式・停车场`,
      caption: "交通信息",
      station: "电车・最近车站",
      parking: "停车场",
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
      title: (area) => `${area}夜景推荐 — 热门景点＆隐藏宝藏`,
      lead: (area) => `精选东京${area}最美夜景景点，从知名展望台到隐藏宝藏全部实地走访！附照片、评分、交通方式、观赏小贴士，给第一次来东京旅游的你最全面的攻略。`,
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
      mapCount: (area, n) => `${area}共有 ${n} 个夜景景点`,
    },
    homePage: {
      seoTitle: (year) => `东京夜景景点推荐（${year}最新）— 观光・摄影必去！收录200处以上 | 东京夜景导览`,
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
        areaLabel: (name, count) => `${name}的夜景（${count}）`,
        areaNames: { other: "其他地区" },
      },
      faq: {
        heading: "关于东京夜景的常见问题",
        items: [
          { question: "今天日落时间和推荐的夜景观赏时段是几点？", answer: "__SUNSET_DYNAMIC__" },
          { question: "请推荐东京都内夜景浪漫的景点。", answer: "推荐和田仓喷水公园、KITTE屋顶花园、丰洲环绕公园、若洲海滨公园等。这些景点不仅夜景美丽，而且人少，氛围宁静。" },
          { question: "东京都内适合拍照打卡的夜景景点在哪里？", answer: "推荐SHIBUYA SKY、东京都厅南展望室・北展望室、Tower Hall船堀展望台、东京塔展望台等。" },
          { question: "东京有哪些著名的地标建筑？", answer: "东京塔、东京晴空塔、彩虹大桥、东京门户大桥、东京站等都是著名的地标。" },
          { question: "东京夜景观赏的最佳时机是什么时候？", answer: "造访展望台时，空气清新的冬季最适合观赏夜景。此外，观赏大楼夜景时，工作日的灯光更为明亮。" },
          { question: "请推荐适合拍摄夜景的器材！", answer: "请参考「新手推荐摄影器材」及「相机・镜头选购指南」等文章。" },
          { question: "请教拍摄美丽夜景的相机设置！", answer: "请参考「使用单反相机拍摄美丽夜景的方法」及「相机设置」等文章。" },
          { question: "如何事先查询日落方向？", answer: "__SIMULATOR_LINK__" },
        ],
        sunsetAnswer: (sunset, from, to) => `今日东京都的日落时间为${sunset}。${from}～${to}是夜景最美的观赏时段。`,
        sunsetUnavailable: "无法获取日落时间。",
        simulatorLinkText: "日出・日落方向模拟器",
        simulatorSuffix: "可以轻松查询日落的方向。",
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
}> = {
  ja: { recommend: "おすすめ夜景スポット", area: "エリア別に探す", tag: "目的別に探す", about: "運営者情報", contact: "お問い合わせ" },
  en: { recommend: "Recommended",          area: "Browse by Area", tag: "Browse by Purpose", about: "About", contact: "Contact" },
  ko: { recommend: "추천",                 area: "지역별 탐색",     tag: "목적별 탐색",        about: "소개",  contact: "문의"  },
  tw: { recommend: "推薦",                 area: "依地區搜尋",     tag: "依目的搜尋",          about: "關於",  contact: "聯絡"  },
  cn: { recommend: "推荐",                 area: "按地区浏览",     tag: "按目的浏览",          about: "关于",  contact: "联系"  },
};

/* ---- Header: プロフィールラベル ---- */
export const PROFILE_LABELS: Record<SiteLocale, { role: string; bio: string; link: string }> = {
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
  lastUpdated: string;
}> = {
  ja: {
    toc: "≡ タップできる目次",
    tocAriaLabel: "目次",
    faqLink: "よくある質問",
    faqHeading: (tagName) => `${tagName}スポットを撮影する際によくある質問`,
    lastUpdated: "最終更新日",
  },
  en: {
    toc: "≡ Table of Contents",
    tocAriaLabel: "Table of Contents",
    faqLink: "FAQ",
    faqHeading: (tagName) => `Frequently Asked Questions About ${tagName} Spots`,
    lastUpdated: "Last updated",
  },
  ko: {
    toc: "≡ 목차",
    tocAriaLabel: "목차",
    faqLink: "자주 묻는 질문",
    faqHeading: (tagName) => `${tagName} 스폿 촬영 시 자주 묻는 질문`,
    lastUpdated: "최종 업데이트",
  },
  tw: {
    toc: "≡ 點擊查看目錄",
    tocAriaLabel: "目錄",
    faqLink: "常見問題",
    faqHeading: (tagName) => `關於${tagName}景點的常見問題`,
    lastUpdated: "最後更新",
  },
  cn: {
    toc: "≡ 点击查看目录",
    tocAriaLabel: "目录",
    faqLink: "常见问题",
    faqHeading: (tagName) => `关于${tagName}景点的常见问题`,
    lastUpdated: "最后更新",
  },
};

/* ---- TagImageSlider: ラベル ---- */
export const TAG_SLIDER_LABELS: Record<SiteLocale, {
  nightView: string;
  prev: string;
  next: string;
  imageN: (n: number) => string;
}> = {
  ja: { nightView: "の夜景", prev: "前の画像", next: "次の画像", imageN: (n) => `画像${n}` },
  en: { nightView: " night view", prev: "Previous image", next: "Next image", imageN: (n) => `Image ${n}` },
  ko: { nightView: " 야경", prev: "이전 이미지", next: "다음 이미지", imageN: (n) => `이미지 ${n}` },
  tw: { nightView: "夜景", prev: "上一張", next: "下一張", imageN: (n) => `圖片${n}` },
  cn: { nightView: "夜景", prev: "上一张", next: "下一张", imageN: (n) => `图片${n}` },
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
  facilityInfo: (name: string) => string;
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
    facilityInfo: (name) => `${name}の施設情報`,
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
    facilityInfo: (name) => `${name} facility information`,
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
    facilityInfo: (name) => `${name} 시설 정보`,
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
    facilityInfo: (name) => `${name}設施資訊`,
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
    facilityInfo: (name) => `${name}设施信息`,
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
