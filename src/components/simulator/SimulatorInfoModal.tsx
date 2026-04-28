"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import "@/app/(ja)/simulator/simulator.css";

interface Props {
  faq: { q: string; a: string }[];
}

export default function SimulatorInfoModal({ faq }: Props) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("sim:open-info", handler);
    return () => window.removeEventListener("sim:open-info", handler);
  }, []);

  const handleClose = () => setOpen(false);

  if (!open) return null;

  return (
    <div className="sim-info-modal" onClick={handleClose}>
      <div
        className="sim-info-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ダークヘッダー */}
        <div className="sim-info-modal__header">
          <h1 className="sim-info-modal__title">
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

          {/* おすすめの情報サイト */}
          <div className="sim-info-modal__section">
            <h2 className="sim-info-modal__section-title">おすすめの情報サイト</h2>
            <div className="sim-definition">
              <dl className="sim-definition__body">
                <dt><a href="https://eco.mtk.nao.ac.jp/koyomi/" target="_blank" rel="noopener noreferrer">国立天文台 暦計算室</a></dt>
                <dd>日の出・日の入り、薄明時刻、月の出入りなどを高精度に計算。地点と日付を指定して秒単位の時刻を取得可能。</dd>
                <dt><a href="https://www.jma.go.jp/" target="_blank" rel="noopener noreferrer">気象庁</a></dt>
                <dd>天気予報・注意報と併せて地域ごとの天文情報を提供。雲量や視程と組み合わせて撮影可否の判断に有用です。</dd>
                <dt><a href="https://vldb.gsi.go.jp/sokuchi/surveycalc/" target="_blank" rel="noopener noreferrer">国土地理院（測地成果閲覧サービス）</a></dt>
                <dd>緯度・経度・標高に基づく計算に対応。地形の影響を考慮した太陽出没時刻の把握に適する。</dd>
                <dt><a href="https://www1.kaiho.mlit.go.jp/KAN1/" target="_blank" rel="noopener noreferrer">海上保安庁 海洋情報部（潮汐・天文）</a></dt>
                <dd>潮汐表や航海用天文暦に基づく出没時刻を提供。港湾・沿岸エリアの観測点データが充実。</dd>
                <dt><a href="https://www.data.jma.go.jp/ovd/astronomy/calendar/" target="_blank" rel="noopener noreferrer">気象庁 天文現象カレンダー</a></dt>
                <dd>年間の主な天文現象を一覧化。主要地点の日の出・日の入り確認やイベント日程の把握に便利。</dd>
                <dt><a href="https://supercweather.com/" target="_blank" rel="noopener noreferrer">SCW（天気予報 / 観測情報）</a></dt>
                <dd>スーパーコンピュータによる高解像度予報。雲量・降水・風向などを時間単位で詳細確認可能。</dd>
                <dt><a href="https://tenki.jp/" target="_blank" rel="noopener noreferrer">日本気象協会 tenki.jp</a></dt>
                <dd>NTT-ME運営の気象情報サイト。注意報・警報や花粉情報も含む総合天気情報を提供。</dd>
                <dt><a href="https://www.umitenki.jp/" target="_blank" rel="noopener noreferrer">海天気.jp</a></dt>
                <dd>海上や沿岸部の天気・風向・風速・波浪・潮汐に特化。海沿い撮影のコンディション確認に有効。</dd>
                <dt><a href="https://tenkura.n-kishou.co.jp/" target="_blank" rel="noopener noreferrer">てんきとくらす</a></dt>
                <dd>山・高原・キャンプ場などアウトドア向けの天気予報を提供。登山や高地からの朝夕景撮影に最適。</dd>
                <dt><a href="https://live-fuji.jp/" target="_blank" rel="noopener noreferrer">富士山ライブカメラ</a></dt>
                <dd>複数地点からのリアルタイム映像で富士山周辺の天候を確認可能。雲の動きや視程チェックに便利。</dd>
              </dl>
            </div>
          </div>

          <p className="sim-info-modal__top-link">
            <Link href="/">← 東京夜景ナビトップへ戻る</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
