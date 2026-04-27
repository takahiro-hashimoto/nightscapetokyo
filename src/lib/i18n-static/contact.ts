import type { StaticPageLabels } from "./types";

export const CONTACT_LABELS: Record<string, Omit<StaticPageLabels, "summary"> & { summary: string[] }> = {
  ja: {
    title: "お問い合わせ",
    summary: [
      "写真・映像の購入や撮影のご依頼等のお問い合わせは下記のフォームからお願いいたします。",
      "基本的に24時間以内にお返事させていただきます！",
    ],
    description: "東京夜景ナビへのお問い合わせページです。写真・映像の購入や撮影のご依頼等はこちらのフォームからお願いいたします。",
  },
  en: {
    title: "Contact",
    summary: [
      "For inquiries about photo/video purchases or shooting requests, please use the form below.",
      "We will typically respond within 24 hours. Feel free to reach out!",
    ],
    description: "Contact page for Tokyo Night View Guide. Please use the form below for photo/video purchases or shooting requests.",
  },
  ko: {
    title: "문의하기",
    summary: [
      "사진·영상 구매나 촬영 의뢰 등의 문의는 아래 양식을 이용해 주세요.",
      "기본적으로 24시간 이내에 답변 드리겠습니다. 편하게 문의해 주세요!",
    ],
    description: "도쿄 야경 네비 문의 페이지입니다. 사진·영상 구매나 촬영 의뢰는 양식을 이용해 주세요.",
  },
  tw: {
    title: "聯絡我們",
    summary: [
      "如需購買照片·影片或委託拍攝，請透過下方表單聯絡我們。",
      "我們通常會在24小時內回覆，歡迎隨時聯絡！",
    ],
    description: "東京夜景導覽聯絡頁面。如需購買照片·影片或委託拍攝，請使用表單聯絡。",
  },
  cn: {
    title: "联系我们",
    summary: [
      "如需购买照片·视频或委托拍摄，请通过下方表单联系我们。",
      "我们通常会在24小时内回复，欢迎随时联系！",
    ],
    description: "东京夜景导航联系页面。如需购买照片·视频或委托拍摄，请使用表单联系。",
  },
};
