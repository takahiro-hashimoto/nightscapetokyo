"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import LocationSearch from "./LocationSearch";

interface SimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationFound: (lat: number, lng: number) => void;
}

export default function SimulatorModal({
  isOpen,
  onClose,
  onLocationFound,
}: SimulatorModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay sim-modal__overlay" onClick={onClose}>
      <div
        className="sim-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="sim-modal__close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="sim-modal__body">
          {/* 検索 */}
          <div className="sim-modal__section">
            <h2 className="sim-modal__title">気になるスポットを検索</h2>
            <LocationSearch
              onLocationFound={onLocationFound}
              onSearchComplete={onClose}
            />
            <ul className="sim-modal__list">
              <li>任意の場所の日の出と日の入りの時刻や方角をチェックできるツールです</li>
              <li>スポット検索は住所、郵便番号、施設名に対応しています</li>
              <li>時差など考慮していないので日本国内向けのツールとしてお使い下さい</li>
              <li>マーカーと方位線はタップして自由に動かすことができます</li>
            </ul>
          </div>

          {/* 豆知識 */}
          <div className="sim-modal__section">
            <h2 className="sim-modal__title">日の出・日の入りの豆知識</h2>
            <div className="sim-definition">
              <dl className="sim-definition__body">
                <dt>夏至（6/21）</dt>
                <dd>
                  1年でもっとも日が出ている時間が長い日。北東から朝日が昇り、北西に夕日が沈んでいく。
                </dd>
                <dt>冬至（12/22）</dt>
                <dd>
                  1年でもっとも日が出ている時間が短い日。南東から朝日が昇り、南西に夕日が沈んでいく。
                </dd>
                <dt>春分（3/20）・秋分（9/22）</dt>
                <dd>
                  昼と夜の時間がほぼ同じになる日。真東から朝日が上り、真西に夕日が沈んでいく。
                </dd>
                <dt>日の出・日の入り時刻の地域差</dt>
                <dd>
                  同じ日でも東に行くほど日の出・日の入りが早くなります。（経度で1度東に進むごとに、4分ずつ日の出・日の入りが早くなる）
                </dd>
              </dl>
            </div>
          </div>

          {/* FAQ */}
          <div className="sim-modal__section">
            <h2 className="sim-modal__title">よくある質問</h2>
            <div className="sim-faq">
              <div className="sim-faq__item">
                <div className="sim-faq__label sim-faq__label--q">Q</div>
                <div className="sim-faq__content">
                  <p className="sim-faq__question">
                    現在地で日の出・日の入り時刻を見るには？
                  </p>
                </div>
              </div>
              <div className="sim-faq__item">
                <div className="sim-faq__label sim-faq__label--a">A</div>
                <div className="sim-faq__content">
                  <p className="sim-faq__answer">
                    位置情報の取得を許可することで、現在地にマーカーが移動し、その地点での方角と時刻が表示されます。
                  </p>
                </div>
              </div>

              <div className="sim-faq__item">
                <div className="sim-faq__label sim-faq__label--q">Q</div>
                <div className="sim-faq__content">
                  <p className="sim-faq__question">
                    海外の国の日没・日の出時刻も調べることはできますか？
                  </p>
                </div>
              </div>
              <div className="sim-faq__item">
                <div className="sim-faq__label sim-faq__label--a">A</div>
                <div className="sim-faq__content">
                  <p className="sim-faq__answer">
                    方角計算自体は可能ですが、時差やサマータイムには対応していないため、正確な時刻は日本国内での利用を推奨しています。
                  </p>
                </div>
              </div>

              <div className="sim-faq__item">
                <div className="sim-faq__label sim-faq__label--q">Q</div>
                <div className="sim-faq__content">
                  <p className="sim-faq__question">
                    マーカーの動かし方・操作方法がわかりません
                  </p>
                </div>
              </div>
              <div className="sim-faq__item">
                <div className="sim-faq__label sim-faq__label--a">A</div>
                <div className="sim-faq__content">
                  <p className="sim-faq__answer">
                    マーカーは地図上をタップするか、ドラッグ操作で自由に移動できます。任意の地点に合わせて、日の出・日の入りの情報が更新されます。
                  </p>
                </div>
              </div>

              <div className="sim-faq__item">
                <div className="sim-faq__label sim-faq__label--q">Q</div>
                <div className="sim-faq__content">
                  <p className="sim-faq__question">
                    地図上に表示されている方位線の意味は何？
                  </p>
                </div>
              </div>
              <div className="sim-faq__item">
                <div className="sim-faq__label sim-faq__label--a">A</div>
                <div className="sim-faq__content">
                  <p className="sim-faq__answer">
                    朝日が昇る方角（日の出）と夕日が沈む方角（日の入り）を示しています。季節によって角度が変わります。
                  </p>
                </div>
              </div>

              <div className="sim-faq__item">
                <div className="sim-faq__label sim-faq__label--q">Q</div>
                <div className="sim-faq__content">
                  <p className="sim-faq__question">
                    なぜマーカーの場所によって表示される時刻が違うの？
                  </p>
                </div>
              </div>
              <div className="sim-faq__item">
                <div className="sim-faq__label sim-faq__label--a">A</div>
                <div className="sim-faq__content">
                  <p className="sim-faq__answer">
                    日本は東西に長いため、東に行くほど日の出・日の入りが早くなります。経度1度で約4分の差が出るため、同じ日でも地域差が生まれます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* おすすめの情報サイト */}
          <div className="sim-modal__section">
            <h2 className="sim-modal__title">おすすめの情報サイト</h2>
            <div className="sim-definition">
              <dl className="sim-definition__body">
                <dt>
                  <a
                    href="https://eco.mtk.nao.ac.jp/koyomi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    国立天文台 暦計算室
                  </a>
                </dt>
                <dd>
                  日の出・日の入り、薄明時刻、月の出入りなどを高精度に計算。地点と日付を指定して秒単位の時刻を取得可能。
                </dd>
                <dt>
                  <a
                    href="https://www.jma.go.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    気象庁
                  </a>
                </dt>
                <dd>
                  天気予報・注意報と併せて地域ごとの天文情報を提供。雲量や視程と組み合わせて撮影可否の判断に有用です。
                </dd>
                <dt>
                  <a
                    href="https://vldb.gsi.go.jp/sokuchi/surveycalc/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    国土地理院（測地成果閲覧サービス）
                  </a>
                </dt>
                <dd>
                  緯度・経度・標高に基づく計算に対応。地形の影響を考慮した太陽出没時刻の把握に適する。
                </dd>
                <dt>
                  <a
                    href="https://www1.kaiho.mlit.go.jp/KAN1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    海上保安庁 海洋情報部（潮汐・天文）
                  </a>
                </dt>
                <dd>
                  潮汐表や航海用天文暦に基づく出没時刻を提供。港湾・沿岸エリアの観測点データが充実。
                </dd>
                <dt>
                  <a
                    href="https://www.mlit.go.jp/kowan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    国土交通省 港湾局（港湾カレンダー）
                  </a>
                </dt>
                <dd>
                  主要港湾の公式情報。港湾ごとのページで潮汐や関連カレンダーを参照可能。
                </dd>
                <dt>
                  <a
                    href="https://www.data.jma.go.jp/ovd/astronomy/calendar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    気象庁 天文現象カレンダー
                  </a>
                </dt>
                <dd>
                  年間の主な天文現象を一覧化。主要地点の日の出・日の入り確認やイベント日程の把握に便利。
                </dd>
                <dt>
                  <a
                    href="https://supercweather.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SCW（天気予報 / 観測情報）
                  </a>
                </dt>
                <dd>
                  スーパーコンピュータによる高解像度予報。雲量・降水・風向などを時間単位で詳細確認可能。
                </dd>
                <dt>
                  <a
                    href="https://tenki.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    日本気象協会 tenki.jp
                  </a>
                </dt>
                <dd>
                  NTT-ME運営の気象情報サイト。注意報・警報や花粉情報も含む総合天気情報を提供。
                </dd>
                <dt>
                  <a
                    href="https://www.umitenki.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    海天気.jp
                  </a>
                </dt>
                <dd>
                  海上や沿岸部の天気・風向・風速・波浪・潮汐に特化。海沿い撮影のコンディション確認に有効。
                </dd>
                <dt>
                  <a
                    href="https://tenkura.n-kishou.co.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    てんきとくらす
                  </a>
                </dt>
                <dd>
                  山・高原・キャンプ場などアウトドア向けの天気予報を提供。登山や高地からの朝夕景撮影に最適。
                </dd>
                <dt>
                  <a
                    href="https://live-fuji.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    富士山ライブカメラ
                  </a>
                </dt>
                <dd>
                  複数地点からのリアルタイム映像で富士山周辺の天候を確認可能。雲の動きや視程チェックに便利。
                </dd>
              </dl>
            </div>
          </div>

          {/* シェア */}
          <div className="sim-modal__section">
            <p className="sim-share__title">\気に入ったらシェア/</p>
            <ul className="sim-share__links">
              <li>
                <a
                  href="https://twitter.com/intent/tweet?text=日の出・日の入りの方角方位線シミュレーター&url=https://nightscape.tokyo/simulator"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X(Twitter)でシェア"
                >
                  𝕏
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://nightscape.tokyo/simulator"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebookでシェア"
                >
                  f
                </a>
              </li>
              <li>
                <a
                  href="https://b.hatena.ne.jp/add?url=https://nightscape.tokyo/simulator"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="はてなブックマーク"
                >
                  B!
                </a>
              </li>
              <li>
                <a
                  href="https://line.me/R/msg/text/?https://nightscape.tokyo/simulator"
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label="LINEでシェア"
                >
                  LINE
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sim-modal__footer">
          <Link href="/" className="sim-modal__footer-link">
            東京夜景ナビ（サイトトップ）→
          </Link>
        </div>
      </div>
    </div>
  );
}
