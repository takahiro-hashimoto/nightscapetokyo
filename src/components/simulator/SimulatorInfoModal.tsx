"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import "@/app/(ja)/simulator/simulator.css";

interface Props {
  faq: { q: string; a: string }[];
}

const SEEN_KEY = "sim_seen_info";

export default function SimulatorInfoModal({ faq }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(SEEN_KEY)) setOpen(true);
    const handler = () => setOpen(true);
    window.addEventListener("sim:open-info", handler);
    return () => window.removeEventListener("sim:open-info", handler);
  }, []);

  const handleClose = () => {
    localStorage.setItem(SEEN_KEY, "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="sim-info-modal" onClick={handleClose}>
      <div
        className="sim-info-modal__container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sim-info-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ダークヘッダー */}
        <div className="sim-info-modal__header">
          <h1 id="sim-info-modal-title" className="sim-info-modal__title">
            日の出・日の入り方角ナビ
            <span className="sim-info-modal__subtitle">朝日と夕日の方角・時刻シミュレーター</span>
          </h1>
          <button className="sim-info-modal__close" onClick={handleClose} aria-label="閉じる">
            <X size={18} />
          </button>
        </div>

        {/* スクロール可能ボディ */}
        <div className="sim-info-modal__body">
          <p className="sim-info-modal__lead">
            日の出・日の入りの方角（方位角）と時刻を地図上で確認できる無料Webアプリです。
            マーカーを動かすだけで任意地点の日照情報をチェックできます。
            初日の出スポットの下見・風景写真の撮影構図の検討・マンションや建物の日当たり確認などにご活用ください。
          </p>

          {/* 使い方 */}
          <div className="sim-info-modal__section">
            <h2 className="sim-info-modal__section-title">シミュレーターの使い方</h2>
            <ol className="sim-info-modal__howto">
              <li>地図上をタップ、またはマーカーをドラッグして調べたい地点に移動する</li>
              <li>日の出・日の入りの時刻と方角が自動で更新される</li>
              <li>「前日 / 翌日」で日付を変更して季節ごとの変化を確認できる</li>
              <li>施設名・住所・郵便番号で地点を検索することも可能</li>
              <li>現在地ボタンで現在地の情報をすぐに確認できる</li>
            </ol>
          </div>

          {/* CTA */}
          <button onClick={handleClose} className="sim-info-modal__btn">
            地図を使う →
          </button>

          {/* 豆知識 */}
          <div className="sim-info-modal__section">
            <h2 className="sim-info-modal__section-title">日の出・日の入りの豆知識</h2>
            <div className="sim-definition">
              <dl className="sim-definition__body">
                <dt>夏至（6/21）</dt>
                <dd>1年でもっとも日照時間が長い日。方位角は北寄りになり、北東から朝日が昇り、北西に夕日が沈んでいく。</dd>
                <dt>冬至（12/22）</dt>
                <dd>1年でもっとも日照時間が短い日。方位角は南寄りになり、南東から朝日が昇り、南西に夕日が沈んでいく。</dd>
                <dt>春分（3/20）・秋分（9/22）</dt>
                <dd>昼と夜の時間がほぼ同じになる日。真東（方位角90°）から朝日が昇り、真西（270°）に夕日が沈んでいく。</dd>
                <dt>日の出・日の入り時刻の地域差</dt>
                <dd>同じ日でも東に行くほど日の出・日の入りが早くなります。（経度1度東に進むごとに約4分早まる）</dd>
                <dt>建物・マンションの日当たりと方角</dt>
                <dd>南向きが最も日照時間を確保しやすく、東向きは朝日・西向きは夕日が差し込みます。季節ごとに方位角が変わるため、このツールで年間の日差しの変化を確認できます。</dd>
              </dl>
            </div>
          </div>

          {/* FAQ */}
          <div className="sim-info-modal__section">
            <h2 className="sim-info-modal__section-title">よくある質問</h2>
            <dl>
              {faq.map(({ q, a }) => (
                <div key={q} className="faq-item">
                  <dt className="faq-q">{q}</dt>
                  <dd className="faq-a">{a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="sim-info-modal__top-link">
            <Link href="/">← 東京夜景ナビトップへ戻る</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
