"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import "@/app/(ja)/moon/moon.css";

interface Props {
  faq: { q: string; a: string }[];
}

const SEEN_KEY = "moon_seen_info";

export default function MoonInfoModal({ faq }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(SEEN_KEY)) setOpen(true);
    const handler = () => setOpen(true);
    window.addEventListener("moon:open-info", handler);
    return () => window.removeEventListener("moon:open-info", handler);
  }, []);

  const handleClose = () => {
    localStorage.setItem(SEEN_KEY, "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="moon-info-modal" onClick={handleClose}>
      <div
        className="moon-info-modal__container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="moon-info-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ダークヘッダー */}
        <div className="moon-info-modal__header">
          <h1 id="moon-info-modal-title" className="moon-info-modal__title">
            月の出・月の入り時刻方角ナビ
            <span className="moon-info-modal__subtitle">月出・月入の方角と時刻シミュレーター</span>
          </h1>
          <button
            className="moon-info-modal__close"
            onClick={handleClose}
            aria-label="閉じる"
          >
            <X size={18} />
          </button>
        </div>

        {/* スクロール可能ボディ */}
        <div className="moon-info-modal__body">
          <p className="moon-info-modal__lead">
            月の出・月の入りの方角（月出方位角）と時刻を地図上で確認できる無料Webアプリです。
            マーカーを動かすだけで任意地点の月齢情報をチェックできます。
            満月や新月の撮影スポットの下見・風景写真の構図検討・天体観測の計画などにご活用ください。
          </p>

          {/* 使い方 */}
          <div className="moon-info-modal__section">
            <h2 className="moon-info-modal__section-title">シミュレーターの使い方</h2>
            <ol className="moon-info-modal__howto">
              <li>地図上をタップ、またはマーカーをドラッグして調べたい地点に移動する</li>
              <li>月の出・月の入りの時刻と方角が自動で更新される</li>
              <li>月齢カレンダーで日付を変えると情報も連動して切り替わる</li>
              <li>施設名・住所・郵便番号で地点を検索することも可能</li>
              <li>現在地ボタンで現在地の月情報をすぐに確認できる</li>
            </ol>
          </div>

          {/* CTA */}
          <button onClick={handleClose} className="moon-info-modal__btn">
            地図を使う →
          </button>

          {/* 豆知識 */}
          <div className="moon-info-modal__section">
            <h2 className="moon-info-modal__section-title">月の出・月の入りの豆知識</h2>
            <div className="moon-definition">
              <dl className="moon-definition__body">
                <dt>月の満ち欠けの周期</dt>
                <dd>月は約29.5日（朔望月）で新月から満月を経て再び新月に戻ります。この周期を「月齢」で表し、月齢0が新月、月齢15前後が満月にあたります。</dd>
                <dt>月出・月入の方位角の変化</dt>
                <dd>月の出る方角は毎日少しずつ変わります。満月に近い月は太陽とほぼ反対方向から昇り、新月に近い月は太陽に近い方角から昇ります。季節によっても大きく変化します。</dd>
                <dt>月と潮汐の関係</dt>
                <dd>月の引力は地球の海面を引き寄せ、潮の満ち引きを生み出します。満月・新月のころは大潮となり、上弦・下弦のころは小潮になります。海沿いの撮影では潮位の確認もおすすめです。</dd>
                <dt>月の出・月の入り時刻の地域差</dt>
                <dd>同じ日でも東に行くほど月の出・月の入りが早くなります。東西に広い日本では地域差が生まれるため、撮影地点に合わせて確認することが大切です。</dd>
                <dt>月光写真と方位角</dt>
                <dd>満月の光は思いのほか明るく、ISO感度を調整することで月明かりを活かした夜景撮影が可能です。このツールで月の位置と方角を事前に確認しておくと構図計画に役立ちます。</dd>
              </dl>
            </div>
          </div>

          {/* FAQ */}
          <div className="moon-info-modal__section">
            <h2 className="moon-info-modal__section-title">よくある質問</h2>
            <dl>
              {faq.map(({ q, a }) => (
                <div key={q} className="moon-faq-item">
                  <dt className="moon-faq-q">{q}</dt>
                  <dd className="moon-faq-a">{a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="moon-info-modal__top-link">
            <Link href="/">← 東京夜景ナビトップへ戻る</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
