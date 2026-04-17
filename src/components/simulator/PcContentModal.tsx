"use client";

import { useEffect } from "react";

interface PcContentModalProps {
  content: "howto" | "trivia" | "links";
  onClose: () => void;
}

export default function PcContentModal({
  content,
  onClose,
}: PcContentModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="modal-overlay sim-modal__overlay" onClick={onClose}>
      <div
        className="sim-modal__container"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 560, padding: 24 }}
      >
        {content === "howto" && <HowtoContent />}
        {content === "trivia" && <TriviaContent />}
        {content === "links" && <LinksContent />}
      </div>
    </div>
  );
}

function HowtoContent() {
  return (
    <>
      <h2 className="sim-modal__title">日の出・日の入りナビの使い方</h2>
      <ul style={{ paddingLeft: 20 }}>
        <li style={{ marginBottom: 8 }}>
          夕日と朝日の時刻や方角をチェックできるシミュレーションツールです。
        </li>
        <li style={{ marginBottom: 8 }}>
          スポット検索は住所、郵便番号、施設名に対応しています。
        </li>
        <li style={{ marginBottom: 8 }}>
          時差など考慮していないので日本国内向けのツールとしてお使いください。
        </li>
        <li style={{ marginBottom: 8 }}>
          マーカーと方位線はクリックやドラッグ&ドロップによって自由に動かすことができます。
        </li>
      </ul>
    </>
  );
}

function TriviaContent() {
  return (
    <>
      <h2 className="sim-modal__title">日の出・日の入りに関する豆知識</h2>
      <div className="sim-definition">
        <dl className="sim-definition__body">
          <dt>夏至（6月21日）</dt>
          <dd>
            1年でもっとも日が出ている時間が長い日。北東から朝日が昇り、北西に夕日が沈んでいく。
          </dd>
          <dt>冬至（12月22日）</dt>
          <dd>
            1年でもっとも日が出ている時間が短い日。南東から朝日が昇り、南西に夕日が沈んでいく。
          </dd>
          <dt>春分（3月20日）/ 秋分（9月22日）</dt>
          <dd>
            昼と夜の時間がほぼ同じになる日。真東から朝日が上り、真西に夕日が沈んでいく。
          </dd>
          <dt>日の出・日の入り時刻の地域差</dt>
          <dd>
            同じ日でも東に行くほど日の出・日の入りが早くなります。（経度で1度東に進むごとに、4分ずつ日の出・日の入りが早くなる）
          </dd>
        </dl>
      </div>
    </>
  );
}

function LinksContent() {
  const links = [
    {
      title: "国立天文台 暦計算室",
      url: "https://eco.mtk.nao.ac.jp/koyomi/",
      desc: "日の出・日の入り、薄明時刻、月の出入りなどを高精度に計算。地点と日付を指定して秒単位の時刻を取得可能。",
    },
    {
      title: "気象庁",
      url: "https://www.jma.go.jp/",
      desc: "天気予報・注意報と併せて地域ごとの天文情報を提供。雲量や視程と組み合わせて撮影可否の判断に有用です。",
    },
    {
      title: "国土地理院（測地成果閲覧サービス）",
      url: "https://vldb.gsi.go.jp/sokuchi/surveycalc/",
      desc: "緯度・経度・標高に基づく計算に対応。地形の影響を考慮した太陽出没時刻の把握に適する。",
    },
    {
      title: "海上保安庁 海洋情報部（潮汐・天文）",
      url: "https://www1.kaiho.mlit.go.jp/KAN1/",
      desc: "潮汐表や航海用天文暦に基づく出没時刻を提供。港湾・沿岸エリアの観測点データが充実。",
    },
    {
      title: "国土交通省 港湾局（港湾カレンダー）",
      url: "https://www.mlit.go.jp/kowan/",
      desc: "主要港湾の公式情報。港湾ごとのページで潮汐や関連カレンダーを参照可能。",
    },
    {
      title: "気象庁 天文現象カレンダー",
      url: "https://www.data.jma.go.jp/ovd/astronomy/calendar/",
      desc: "年間の主な天文現象を一覧化。主要地点の日の出・日の入り確認やイベント日程の把握に便利。",
    },
    {
      title: "SCW（天気予報 / 観測情報）",
      url: "https://supercweather.com/",
      desc: "スーパーコンピュータによる高解像度予報。雲量・降水・風向などを時間単位で詳細確認可能。",
    },
    {
      title: "日本気象協会 tenki.jp",
      url: "https://tenki.jp/",
      desc: "NTT-ME運営の気象情報サイト。注意報・警報や花粉情報も含む総合天気情報を提供。",
    },
    {
      title: "海天気.jp",
      url: "https://www.umitenki.jp/",
      desc: "海上や沿岸部の天気・風向・風速・波浪・潮汐に特化。海沿い撮影のコンディション確認に有効。",
    },
    {
      title: "てんきとくらす",
      url: "https://tenkura.n-kishou.co.jp/",
      desc: "山・高原・キャンプ場などアウトドア向けの天気予報を提供。登山や高地からの朝夕景撮影に最適。",
    },
    {
      title: "富士山ライブカメラ",
      url: "https://live-fuji.jp/",
      desc: "複数地点からのリアルタイム映像で富士山周辺の天候を確認可能。雲の動きや視程チェックに便利。",
    },
  ];

  return (
    <>
      <h2 className="sim-modal__title">お役立ちリンク集</h2>
      <p style={{ marginBottom: 16 }}>
        気象状況を把握するのに便利なwebサイトをご紹介します。
      </p>
      <div className="sim-definition">
        <dl className="sim-definition__body">
          {links.map((link) => (
            <div key={link.url}>
              <dt>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              </dt>
              <dd>{link.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
