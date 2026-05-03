"use client";

import LocationSearch from "./LocationSearch";
import SunTimesDisplay from "./SunTimesDisplay";
import SimpleCalendar from "./SimpleCalendar";
import ShareButton from "@/components/shared/ShareButton";
import AdSenseUnit from "@/components/ads/AdSenseUnit";
import { ADS } from "@/lib/ads";

interface SimulatorSidebarProps {
  sunriseTime: string | null;
  sunsetTime: string | null;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onLocationFound: (lat: number, lng: number) => void;
  shareText: string;
  showLandmarks: boolean;
  onToggleLandmarks: () => void;
}

export default function SimulatorSidebar({
  sunriseTime,
  sunsetTime,
  selectedDate,
  onDateChange,
  onLocationFound,
  shareText,
  showLandmarks,
  onToggleLandmarks,
}: SimulatorSidebarProps) {
  return (
    <div className="sim-sidebar">
      <div className="sim-sidebar__header">
        <h1 className="sim-sidebar__title">日の出・日の入り方角ナビ</h1>
        <p className="sim-sidebar__lead">日付・場所を指定して日の出・日の入りの方角と時刻を地図上で確認できる無料ツール。ダイヤモンド富士・夕日撮影や旅行の計画に。</p>
      </div>
      <div className="sim-sidebar__body">
        <div className="sim-sidebar__section">
          <LocationSearch onLocationFound={onLocationFound} />
        </div>

        <div className="sim-sidebar__section">
          <SimpleCalendar selectedDate={selectedDate} onDateChange={onDateChange} />
        </div>

        <div className="sim-sidebar__section">
          <SunTimesDisplay
            sunriseTime={sunriseTime}
            sunsetTime={sunsetTime}
            variant="sidebar"
          />
        </div>

        <div className="sim-sidebar__section">
          <AdSenseUnit {...ADS.SIMULATOR_SIDEBAR} />
        </div>

        <div className="sim-sidebar__section">
          <button
            className={`landmark-toggle-btn ${showLandmarks ? "landmark-toggle-btn--on" : "landmark-toggle-btn--off"}`}
            onClick={onToggleLandmarks}
          >
            <span className="landmark-toggle-btn__icon">🗼</span>
            <span className="landmark-toggle-btn__label">ランドマーク</span>
            <span className="landmark-toggle-btn__state">{showLandmarks ? "表示中" : "非表示"}</span>
          </button>
        </div>

        <div className="sim-sidebar__section">
          <ShareButton
            shareText={shareText}
            className="share-btn--full"
          />
          <p className="sim-share__title">\気に入ったらシェア/</p>
          <ul className="sim-share__links">
            <li>
              <a
                href="https://twitter.com/intent/tweet?text=日の出・日の入りの方角方位線シミュレーター&url=https://nightscape.tokyo/simulator"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X(Twitter)でシェア"
                className="sim-share__link--x"
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
                className="sim-share__link--fb"
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
                className="sim-share__link--hatena"
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
                className="sim-share__link--line"
              >
                LINE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
