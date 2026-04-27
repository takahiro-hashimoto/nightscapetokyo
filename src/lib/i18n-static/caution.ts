import type { StaticPageLabels } from "./types";

type CautionSection = { heading: string; texts: string[]; contactLink?: string };

export const CAUTION_LABELS: Record<string, StaticPageLabels & { sections: CautionSection[] }> = {
  ja: {
    title: "利用規約",
    summary: "東京夜景ナビをご利用いただくにあたり、著作権・免責事項・Cookie・リンク等に関するルールを記載しています。",
    description: "東京夜景ナビの利用規約です。",
    sections: [],
  },
  en: {
    title: "Terms of Use",
    summary: "Rules regarding copyright, disclaimers, cookies, advertising, analytics, and links for using Tokyo Night View Guide.",
    description: "Terms of use for Tokyo Night View Guide. Covers copyright, disclaimers, cookies, advertising, analytics, and links.",
    sections: [
      {
        heading: "Copyright",
        texts: [
          "All photos, images, and text published on Tokyo Night View Guide are protected by copyright. Unauthorized reproduction, copying, or modification is strictly prohibited.",
          "Photos on this site are not free stock materials. In principle, commercial use requires a fee. Please contact us via the inquiry form for photo purchases or commercial licensing inquiries.",
          "Please do not redistribute the free smartphone wallpapers available on this site on other websites or social media.",
        ],
        contactLink: "Contact / Inquiry Form",
      },
      {
        heading: "Disclaimer",
        texts: [
          "While we make every effort to provide the latest and most accurate information about night view spots and other content, we strongly recommend verifying business hours, admission fees, and other critical details on official websites.",
          "We accept no responsibility for any accidents, troubles, or damages arising from information published on this site.",
        ],
      },
      {
        heading: "Use of Cookies",
        texts: [
          "This site uses cookies for ad delivery and access analysis purposes.",
          "Cookies are used to identify browsers but cannot identify specific individuals, so anonymity is maintained.",
          "If you do not want cookies to be used, you can disable them in your browser settings.",
        ],
      },
      {
        heading: "Advertising",
        texts: [
          "This site uses third-party advertising services (Google AdSense, A8.net) that use cookies to display ads relevant to users' interests.",
          "While cookies allow this site to identify your computer, they cannot identify you personally.",
          "For details on disabling cookies and Google AdSense, please refer to 'Advertising – Policies and Terms – Google' (https://policies.google.com/technologies/ads).",
        ],
      },
      {
        heading: "Analytics",
        texts: [
          "This site uses Google Analytics to collect, record, and analyze access data via cookies.",
          "The information collected by Google Analytics does not include personally identifiable information, and is managed under Google's privacy policy.",
          "You can opt out of data collection by disabling cookies in your browser settings. For more information on Google's data collection practices, please refer to Google's policy pages.",
        ],
      },
      {
        heading: "Links",
        texts: [
          "All pages on this site are link-free, but please refrain from displaying them within framesets.",
          "URLs for pages other than the top page may change without notice. Please be aware of this in advance.",
        ],
      },
    ],
  },
  ko: {
    title: "이용약관",
    summary: "도쿄 야경 네비 이용 시 저작권·면책사항·쿠키·광고·접속 분석·링크 등에 관한 규칙을 기재합니다.",
    description: "도쿄 야경 네비의 이용약관입니다. 저작권·면책사항·쿠키·광고·접속 분석·링크에 관한 규칙을 기재합니다.",
    sections: [
      {
        heading: "저작권",
        texts: [
          "도쿄 야경 네비(이하 본 사이트)에 게재된 사진·이미지·문장 등 모든 것에 저작권이 있습니다. 무단 전재·복제·가공을 일체 금지합니다.",
          "본 사이트에 게재된 사진은 프리 소재가 아닙니다. 사진 이용은 원칙적으로 유료입니다. 사진의 상업적 이용·구매 등에 관해서는 문의 양식을 통해 연락해 주세요.",
          "무료 배포 중인 스마트폰 배경화면을 웹사이트나 SNS에서 공개하거나 배포하는 것은 삼가해 주세요.",
        ],
        contactLink: "문의 양식",
      },
      {
        heading: "면책사항",
        texts: [
          "본 사이트에 게재된 야경 스폿 등의 정보는 가능한 한 최신·정확한 정보를 게재하도록 노력하고 있으나, 영업시간·요금 등의 정확한 정보는 공식 사이트 등에서 확인하실 것을 권장합니다.",
          "만약 본 사이트 정보로 인해 사고·트러블 등이 발생하더라도 일체의 책임을 지지 않으므로 미리 양해해 주시기 바랍니다.",
        ],
      },
      {
        heading: "쿠키 사용",
        texts: [
          "본 사이트에서는 광고 배신과 접속 분석을 위해 쿠키를 사용하고 있습니다.",
          "쿠키에 의해 브라우저를 식별하고 있지만, 특정 개인을 식별할 수 없는 상태로 익명성이 유지됩니다.",
          "쿠키 사용을 원하지 않는 경우, 브라우저에서 쿠키를 비활성화할 수 있습니다.",
        ],
      },
      {
        heading: "광고",
        texts: [
          "본 사이트에서는 제3자 배신 광고 서비스(Google 애드센스, A8.net)를 이용하며, 이용자의 관심에 맞는 광고를 표시하기 위해 쿠키를 사용하고 있습니다.",
          "쿠키를 사용함으로써 본 사이트는 이용자의 컴퓨터를 식별할 수 있게 되지만, 이용자 개인을 특정할 수는 없습니다.",
          "쿠키 비활성화 방법과 Google 애드센스에 관한 자세한 내용은 「광고 – 정책과 약관 – Google」(https://policies.google.com/technologies/ads)을 확인해 주세요.",
        ],
      },
      {
        heading: "접속 분석",
        texts: [
          "본 사이트에서는 접속 분석 도구 Google 애널리틱스를 사용하여 쿠키 정보를 통해 접속을 수집·기록·분석하고 있습니다.",
          "Google 애널리틱스의 정보에는 특정 개인을 식별하는 정보가 포함되지 않으며, Google사의 개인정보 처리방침에 의해 관리됩니다.",
          "접속 정보 수집은 쿠키를 비활성화하여 거부할 수 있습니다. Google사의 정보 수집 방식에 대해서는 Google사의 정책 페이지를 참조해 주세요.",
        ],
      },
      {
        heading: "링크",
        texts: [
          "본 사이트는 기본적으로 모든 페이지가 링크 프리입니다. 단, 프레임셋 내 표시는 삼가해 주세요.",
          "톱 페이지 이외의 URL은 사이트 운영 사정상 예고 없이 변경될 수 있습니다. 미리 양해해 주시기 바랍니다.",
        ],
      },
    ],
  },
  tw: {
    title: "使用條款",
    summary: "使用東京夜景導覽時，關於著作權·免責聲明·Cookie·廣告·存取分析·連結等規則。",
    description: "東京夜景導覽的使用條款。著作權·免責聲明·Cookie·廣告·存取分析·連結相關規則。",
    sections: [
      {
        heading: "著作權",
        texts: [
          "東京夜景導覽（以下稱本網站）刊載的照片、圖片、文章等所有內容均有著作權。禁止未經授權的轉載、複製及加工。",
          "本網站刊載的照片非免費素材。照片使用原則上為付費。如需商業使用·購買照片，請透過詢問表單聯繫我們。",
          "請勿在網站或社群媒體上公開或散布本網站提供的免費手機桌布。",
        ],
        contactLink: "聯絡表單",
      },
      {
        heading: "免責聲明",
        texts: [
          "本網站對夜景景點等刊載資訊盡力提供最新·準確的內容，但建議您在官方網站等確認營業時間·費用等的正確資訊。",
          "萬一因本網站資訊發生事故·糾紛等，本網站概不負責，敬請事先知悉。",
        ],
      },
      {
        heading: "Cookie使用",
        texts: [
          "本網站為廣告投放及存取分析使用Cookie。",
          "Cookie用於識別瀏覽器，但無法識別特定個人，匿名性得以維護。",
          "若不希望使用Cookie，可在瀏覽器設定中停用。",
        ],
      },
      {
        heading: "廣告",
        texts: [
          "本網站使用第三方廣告服務（Google AdSense、A8.net），並使用Cookie以根據使用者興趣顯示商品及服務的廣告。",
          "雖然Cookie可使本網站識別您的電腦，但無法識別您個人。",
          "停用Cookie的方法及Google AdSense的詳細資訊，請參閱「廣告 – Google政策與條款」（https://policies.google.com/technologies/ads）。",
        ],
      },
      {
        heading: "存取分析",
        texts: [
          "本網站使用存取分析工具Google Analytics，透過Cookie資訊收集、記錄及分析存取情況。",
          "Google Analytics的資訊不包含可識別特定個人的資訊，由Google的隱私權政策管理。",
          "您可透過停用Cookie來拒絕存取資訊的收集。關於Google的資訊收集方式，請參閱Google的政策頁面。",
        ],
      },
      {
        heading: "連結",
        texts: [
          "本網站基本上所有頁面均可自由連結，但請勿在框架集內顯示。",
          "頂層頁面以外的URL可能因網站運營需要而不另行通知地變更，敬請事先知悉。",
        ],
      },
    ],
  },
  cn: {
    title: "使用条款",
    summary: "使用东京夜景导航时，关于著作权·免责声明·Cookie·广告·访问分析·链接等规则。",
    description: "东京夜景导航的使用条款。著作权·免责声明·Cookie·广告·访问分析·链接相关规则。",
    sections: [
      {
        heading: "著作权",
        texts: [
          "东京夜景导航（以下称本网站）刊载的照片、图片、文章等所有内容均受著作权保护。禁止未经授权的转载、复制及加工。",
          "本网站刊载的照片非免费素材。照片使用原则上为付费。如需商业使用·购买照片，请通过咨询表单联系我们。",
          "请勿在网站或社交媒体上公开或散布本网站提供的免费手机壁纸。",
        ],
        contactLink: "联系表单",
      },
      {
        heading: "免责声明",
        texts: [
          "本网站对夜景景点等刊载信息尽力提供最新·准确的内容，但建议您在官方网站等确认营业时间·费用等的正确信息。",
          "万一因本网站信息发生事故·纠纷等，本网站概不负责，敬请事先知悉。",
        ],
      },
      {
        heading: "Cookie使用",
        texts: [
          "本网站为广告投放及访问分析使用Cookie。",
          "Cookie用于识别浏览器，但无法识别特定个人，匿名性得以维护。",
          "若不希望使用Cookie，可在浏览器设置中禁用。",
        ],
      },
      {
        heading: "广告",
        texts: [
          "本网站使用第三方广告服务（Google AdSense、A8.net），并使用Cookie以根据用户兴趣显示商品及服务的广告。",
          "虽然Cookie可使本网站识别您的电脑，但无法识别您个人。",
          "禁用Cookie的方法及Google AdSense的详细信息，请参阅「广告 – Google政策与条款」（https://policies.google.com/technologies/ads）。",
        ],
      },
      {
        heading: "访问分析",
        texts: [
          "本网站使用访问分析工具Google Analytics，通过Cookie信息收集、记录及分析访问情况。",
          "Google Analytics的信息不包含可识别特定个人的信息，由Google的隐私政策管理。",
          "您可通过禁用Cookie来拒绝访问信息的收集。关于Google的信息收集方式，请参阅Google的政策页面。",
        ],
      },
      {
        heading: "链接",
        texts: [
          "本网站基本上所有页面均可自由链接，但请勿在框架集内显示。",
          "顶层页面以外的URL可能因网站运营需要而不另行通知地变更，敬请事先知悉。",
        ],
      },
    ],
  },
};
