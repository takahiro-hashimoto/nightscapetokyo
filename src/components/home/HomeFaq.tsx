import Link from "next/link";
import type { HomePageLabels } from "@/lib/i18n-labels";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FaqItem[];
  sunsetTime: string | null;
  labels?: HomePageLabels["faq"];
};

function addMinutes(time: string, minutes: number): string {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + minutes;
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

function renderAnswer(
  answer: string,
  sunsetTime: string | null,
  faqLabels?: HomePageLabels["faq"]
) {
  if (answer === "__SUNSET_DYNAMIC__") {
    if (!sunsetTime) {
      return faqLabels?.sunsetUnavailable ?? "日没時間を取得できませんでした。";
    }
    const from = addMinutes(sunsetTime, 20);
    const to = addMinutes(sunsetTime, 40);
    if (faqLabels?.sunsetAnswer) {
      return faqLabels.sunsetAnswer(sunsetTime, from, to);
    }
    return `本日の東京都の日没時間は${sunsetTime}です。${from}〜${to}が夜景が綺麗に見える時間になります。`;
  }

  if (answer === "__SIMULATOR_LINK__") {
    return (
      <>
        <Link href="/simulator">
          {faqLabels?.simulatorLinkText ?? "日の出・日の入り方角シミュレーター"}
        </Link>
        {faqLabels?.simulatorSuffix ?? "を利用すると簡単に夕日が沈む方向をチェックすることができます。"}
      </>
    );
  }

  if (answer === "__MOON_LINK__") {
    return (
      <>
        <Link href="/moon/">
          {faqLabels?.moonLinkText ?? "月の出・月の入り時刻方角ナビ"}
        </Link>
        {faqLabels?.moonSuffix ?? "を使うと、日付・場所を指定して月の出・月の入りの時刻と方角を地図上で確認できます。"}
      </>
    );
  }

  if (answer === "__TWILIGHT_LINK__") {
    return (
      <>
        {faqLabels?.twilightPrefix ?? "日没とともに点灯を始めるライトアップが多く、空に夕焼け色が残る「マジックアワー」から深い青に染まる「ブルーアワー」にかけてが夜景鑑賞・撮影の黄金時間です。詳しくは"}
        <Link href="/article/twilight/">
          {faqLabels?.twilightLinkText ?? "マジックアワーとは？夜景鑑賞・撮影の黄金時間を解説"}
        </Link>
        {faqLabels?.twilightSuffix ?? "をご覧ください。"}
      </>
    );
  }

  return answer;
}

export default function HomeFaq({ faqs, sunsetTime, labels }: Props) {
  if (faqs.length === 0) return null;

  return (
    <section className="home-section" id="faq">
      <div className="home-container">
        <h2 className="home-section-heading">
          {labels?.heading ?? "東京の夜景に関するよくある質問"}
        </h2>
        <div className="home-content-card">
          <dl style={{ margin: 0 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <dt className="faq-q">{faq.question}</dt>
                <dd className="faq-a">
                  {renderAnswer(faq.answer, sunsetTime, labels)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
