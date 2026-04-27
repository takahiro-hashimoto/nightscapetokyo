import type { StaticPageLabels } from "./types";

type PrivacySection = { heading: string; texts: string[]; links?: { text: string; href: string }[] };

export const PRIVACY_LABELS: Record<string, StaticPageLabels & { sections: PrivacySection[] }> = {
  ja: {
    title: "プライバシーポリシー",
    summary: "東京夜景ナビにおけるプライバシーポリシー・免責事項を次の通り記載します。",
    description: "東京夜景ナビのプライバシーポリシーです。",
    sections: [],
  },
  en: {
    title: "Privacy Policy",
    summary: "The privacy policy and disclaimers for Tokyo Night View Guide are described below.",
    description: "Privacy policy for Tokyo Night View Guide. Covers personal information handling, cookies, advertising, and analytics.",
    sections: [
      {
        heading: "Purpose of Personal Information Use",
        texts: [
          "This site uses collected user information for the following purposes: web service provision, content and service quality improvement, traffic and behavioral measurement, ad delivery and performance measurement, site-related notifications, responding to inquiries, and handling violations.",
          "Collected user information is used solely for the above purposes and will not be used for any purpose beyond the original intent at the time of collection.",
        ],
      },
      {
        heading: "Third-Party Disclosure",
        texts: [
          "Personal information collected by this site will not be disclosed to third parties without user consent, except in the following cases: when providing user information to an external service provider for integration or authentication purposes; when cooperating with a national or local government agency carrying out statutory duties; or when otherwise permitted by law.",
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
          "This site uses third-party advertising services (Google AdSense, A8.net). Cookies are used to display ads relevant to your interests.",
          "While cookies allow this site to identify your computer, they cannot identify you personally.",
        ],
        links: [
          { text: "Advertising – Policies and Terms – Google", href: "https://policies.google.com/technologies/ads?gl=jp" },
        ],
      },
      {
        heading: "Analytics",
        texts: [
          "This site uses Google Analytics to collect, record, and analyze access data via cookies.",
          "Information collected by Google Analytics does not include personally identifiable information, and is managed under Google's Privacy Policy.",
          "You can opt out of data collection by disabling cookies in your browser settings.",
        ],
        links: [
          { text: "Google Privacy Policy", href: "https://policies.google.com/privacy?hl=en" },
          { text: "How Google uses data from sites that use Google services", href: "https://policies.google.com/technologies/partner-sites?hl=en" },
        ],
      },
      {
        heading: "Disclaimer",
        texts: [
          "This site accepts no responsibility whatsoever for any damages arising from its published content.",
          "While we make every effort to provide accurate and up-to-date information, we cannot guarantee the accuracy or safety of all content.",
          "We also accept no responsibility for the information or services provided by linked external sites.",
        ],
      },
      {
        heading: "Copyright",
        texts: [
          "The copyright for all text and images published on this site belongs to the operator.",
          "Unauthorized reproduction beyond the legally permitted scope of quotation is prohibited.",
        ],
      },
      {
        heading: "Policy Changes",
        texts: [
          "This site complies with applicable Japanese laws regarding personal information and will revise this privacy policy as needed.",
          "The latest version of this policy is always published on this page.",
          "Established: January 1, 2023 — Tokyo Night View Guide, Operator: Takahiro",
        ],
      },
    ],
  },
  ko: {
    title: "개인정보 처리방침",
    summary: "도쿄 야경 네비의 개인정보 처리방침 및 면책사항을 다음과 같이 기재합니다.",
    description: "도쿄 야경 네비의 개인정보 처리방침입니다. 개인정보 이용 목적, 쿠키·광고·접속 분석 도구의 취급, 면책사항에 대해 기재합니다.",
    sections: [
      {
        heading: "개인정보 이용 목적",
        texts: [
          "본 사이트는 수집한 이용자 정보를 이하에 정하는 목적을 위해 이용합니다: 웹 서비스 제공, 콘텐츠·서비스 품질 개선, 트래픽 측정 및 행동 측정, 광고 배신 및 효과 측정, 본 사이트에 관한 안내, 문의 대응, 위반 사항 대응.",
          "취득한 이용자 정보는 상기 목적에만 이용하며, 정보를 제공받았을 때의 목적 이외에는 이용하지 않습니다.",
        ],
      },
      {
        heading: "개인정보 제3자 제공",
        texts: [
          "본 사이트가 취득한 이용자 정보 중 개인정보는, 외부 서비스 연계 또는 인증을 위해 해당 외부 서비스 운영 회사에 이용자 정보를 제공하는 경우, 국가 기관 또는 지방 공공 단체의 위탁을 받아 법령에 정한 사무를 수행하는 것에 협력이 필요한 경우, 그 외 법령에서 인정되는 경우를 제외하고, 이용자의 동의 없이 제3자에게 개시하지 않습니다.",
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
          "쿠키를 사용함으로써 본 사이트는 이용자의 컴퓨터를 식별할 수 있게 되지만, 이용자 개인을 특정할 수 있는 것은 아닙니다.",
        ],
        links: [
          { text: "광고 – 정책과 약관 – Google", href: "https://policies.google.com/technologies/ads?gl=jp" },
        ],
      },
      {
        heading: "접속 분석",
        texts: [
          "본 사이트에서는 접속 분석 도구 Google 애널리틱스를 사용하여 쿠키 정보를 통해 접속을 수집·기록·분석하고 있습니다.",
          "Google 애널리틱스의 정보에는 특정 개인을 식별하는 정보가 포함되지 않으며, Google사의 개인정보 처리방침에 의해 관리됩니다.",
          "접속 정보 수집은 쿠키를 비활성화하여 거부할 수 있습니다.",
        ],
        links: [
          { text: "Google 개인정보 처리방침", href: "https://policies.google.com/privacy?hl=ko" },
          { text: "Google의 정보 수집 방식에 대하여", href: "https://policies.google.com/technologies/partner-sites?hl=ko" },
        ],
      },
      {
        heading: "면책사항",
        texts: [
          "본 사이트는 게재 내용으로 인해 발생한 손해에 대한 일체의 책임을 지지 않습니다.",
          "각 콘텐츠에서는 가능한 한 정확한 정보 제공을 위해 노력하고 있으나, 정확성이나 안전성을 보장하는 것은 아닙니다.",
          "또한 링크처의 다른 사이트에서 제공되는 정보·서비스에 대해서도 책임을 지지 않으므로 양해 부탁드립니다.",
        ],
      },
      {
        heading: "저작권",
        texts: [
          "본 사이트에 게재되어 있는 문장·이미지의 저작권은 운영자에게 귀속됩니다.",
          "법적으로 인정된 인용 범위를 초과하여 무단으로 전재하는 것을 금지합니다.",
        ],
      },
      {
        heading: "개인정보 처리방침 변경",
        texts: [
          "본 사이트는 개인정보에 관해 적용되는 일본 법령을 준수하며, 본 개인정보 처리방침의 내용을 적절히 검토하여 개선에 노력합니다.",
          "수정된 최신 개인정보 처리방침은 항상 본 페이지에서 공개됩니다.",
          "제정: 2023년 1월 1일 — 도쿄 야경 네비, 운영 책임자: 타카히로",
        ],
      },
    ],
  },
  tw: {
    title: "隱私權政策",
    summary: "東京夜景導覽的隱私權政策及免責聲明如下。",
    description: "東京夜景導覽的隱私權政策。個人資訊使用目的、Cookie·廣告·存取分析工具的處理及免責聲明。",
    sections: [
      {
        heading: "個人資訊使用目的",
        texts: [
          "本網站將收集的使用者資訊用於以下目的：網站服務提供、內容·服務品質改善、流量測量及行為測量、廣告投放及效果測量、本網站相關通知、回覆諮詢、處理違規事項。",
          "取得的使用者資訊僅用於上述目的，不會用於收集資訊時目的以外的用途。",
        ],
      },
      {
        heading: "個人資訊第三方提供",
        texts: [
          "本網站取得的使用者資訊中的個人資訊，除以下情況外，不會在未取得使用者同意的情況下向第三方揭露：為與外部服務連攜或認證而向該外部服務營運公司提供使用者資訊；配合國家機關或地方公共團體及其委託者履行法令規定事務需要協助；或其他法令允許的情況。",
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
          "本網站使用第三方廣告服務（Google AdSense、A8.net），並使用Cookie以根據使用者興趣顯示廣告。",
          "雖然Cookie可使本網站識別您的電腦，但無法識別您個人。",
        ],
        links: [
          { text: "廣告 – Google政策與條款", href: "https://policies.google.com/technologies/ads?gl=jp" },
        ],
      },
      {
        heading: "存取分析",
        texts: [
          "本網站使用存取分析工具Google Analytics，透過Cookie資訊收集、記錄及分析存取情況。",
          "Google Analytics的資訊不包含可識別特定個人的資訊，由Google的隱私權政策管理。",
          "您可透過停用Cookie來拒絕存取資訊的收集。",
        ],
        links: [
          { text: "Google隱私權政策", href: "https://policies.google.com/privacy?hl=zh-TW" },
          { text: "關於Google的資訊收集方式", href: "https://policies.google.com/technologies/partner-sites?hl=zh-TW" },
        ],
      },
      {
        heading: "免責聲明",
        texts: [
          "本網站對因刊載內容產生的任何損害概不負責。",
          "各項內容雖盡力提供準確資訊，但不保證其正確性或安全性。",
          "對於連結至外部網站所提供的資訊·服務，本網站亦不承擔責任，請事先知悉。",
        ],
      },
      {
        heading: "著作權",
        texts: [
          "本網站刊載的文章·圖片著作權歸營運者所有。",
          "禁止超出法律允許的引用範圍進行未授權轉載。",
        ],
      },
      {
        heading: "隱私權政策變更",
        texts: [
          "本網站遵守適用於個人資訊的日本法令，並將適時審視本隱私權政策的內容，致力於改善。",
          "修訂後的最新隱私權政策將始終在本頁面公開。",
          "制定：2023年1月1日 — 東京夜景導覽，營運負責人：Takahiro",
        ],
      },
    ],
  },
  cn: {
    title: "隐私政策",
    summary: "东京夜景导航的隐私政策及免责声明如下。",
    description: "东京夜景导航的隐私政策。个人信息使用目的、Cookie·广告·访问分析工具的处理及免责声明。",
    sections: [
      {
        heading: "个人信息使用目的",
        texts: [
          "本网站将收集的用户信息用于以下目的：网站服务提供、内容·服务质量改善、流量测量及行为测量、广告投放及效果测量、本网站相关通知、回复咨询、处理违规事项。",
          "取得的用户信息仅用于上述目的，不会用于收集信息时目的以外的用途。",
        ],
      },
      {
        heading: "个人信息第三方提供",
        texts: [
          "本网站取得的用户信息中的个人信息，除以下情况外，不会在未取得用户同意的情况下向第三方披露：为与外部服务联携或认证而向该外部服务运营公司提供用户信息；配合国家机关或地方公共团体及其受托者履行法令规定事务需要协助；或其他法令允许的情况。",
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
          "本网站使用第三方广告服务（Google AdSense、A8.net），并使用Cookie以根据用户兴趣显示广告。",
          "虽然Cookie可使本网站识别您的电脑，但无法识别您个人。",
        ],
        links: [
          { text: "广告 – Google政策与条款", href: "https://policies.google.com/technologies/ads?gl=jp" },
        ],
      },
      {
        heading: "访问分析",
        texts: [
          "本网站使用访问分析工具Google Analytics，通过Cookie信息收集、记录及分析访问情况。",
          "Google Analytics的信息不包含可识别特定个人的信息，由Google的隐私政策管理。",
          "您可通过禁用Cookie来拒绝访问信息的收集。",
        ],
        links: [
          { text: "Google隐私政策", href: "https://policies.google.com/privacy?hl=zh-CN" },
          { text: "关于Google的信息收集方式", href: "https://policies.google.com/technologies/partner-sites?hl=zh-CN" },
        ],
      },
      {
        heading: "免责声明",
        texts: [
          "本网站对因刊载内容产生的任何损害概不负责。",
          "各项内容虽尽力提供准确信息，但不保证其正确性或安全性。",
          "对于链接至外部网站所提供的信息·服务，本网站亦不承担责任，请事先知悉。",
        ],
      },
      {
        heading: "著作权",
        texts: [
          "本网站刊载的文章·图片著作权归运营者所有。",
          "禁止超出法律允许的引用范围进行未授权转载。",
        ],
      },
      {
        heading: "政策变更",
        texts: [
          "本网站遵守适用于个人信息的日本法令，并将适时审视本隐私政策的内容，致力于改善。",
          "修订后的最新隐私政策将始终在本页面公开。",
          "制定：2023年1月1日 — 东京夜景导航，运营负责人：Takahiro",
        ],
      },
    ],
  },
};
