"use client";

import LocationSearch from "@/components/simulator/LocationSearch";
import MoonTimesDisplay from "./MoonTimesDisplay";
import MoonCalendar from "./MoonCalendar";
import ShareButton from "@/components/shared/ShareButton";
import AdSenseUnit from "@/components/ads/AdSenseUnit";
import { ADS } from "@/lib/ads";

interface MoonSidebarProps {
  moonriseTime: string | null;
  moonsetTime: string | null;
  phaseName: string;
  illumination: number;
  phase: number;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onLocationFound: (lat: number, lng: number) => void;
  shareText: string;
  showLandmarks: boolean;
  onToggleLandmarks: () => void;
}

export default function MoonSidebar({
  moonriseTime,
  moonsetTime,
  phaseName,
  illumination,
  phase,
  selectedDate,
  onDateChange,
  onLocationFound,
  shareText,
  showLandmarks,
  onToggleLandmarks,
}: MoonSidebarProps) {
  return (
    <div className="moon-sidebar">
      <div className="moon-sidebar__header">
        <h1 className="moon-sidebar__title">月の出・月の入り時刻方角ナビ</h1>
        <p className="moon-sidebar__lead">日付・場所を指定して月の出・月の入りの方角と時刻を地図上で確認できる無料ツール。満月・月夜の撮影計画や天体観測の下見に。</p>
      </div>
      <div className="moon-sidebar__body">
        <div className="moon-sidebar__section">
          <LocationSearch onLocationFound={onLocationFound} />
        </div>

        <div className="moon-sidebar__section">
          <MoonCalendar selectedDate={selectedDate} onDateChange={onDateChange} />
        </div>

        <div className="moon-sidebar__section">
          <MoonTimesDisplay
            moonriseTime={moonriseTime}
            moonsetTime={moonsetTime}
            phaseName={phaseName}
            illumination={illumination}
            phase={phase}
            variant="sidebar"
          />
        </div>

        <div className="moon-sidebar__section">
          <AdSenseUnit {...ADS.MOON_SIDEBAR} />
        </div>

        <div className="moon-sidebar__section">
          <button
            className={`landmark-toggle-btn ${showLandmarks ? "landmark-toggle-btn--on" : "landmark-toggle-btn--off"}`}
            onClick={onToggleLandmarks}
          >
            <span className="landmark-toggle-btn__icon">🗼</span>
            <span className="landmark-toggle-btn__label">ランドマーク</span>
            <span className="landmark-toggle-btn__state">{showLandmarks ? "表示中" : "非表示"}</span>
          </button>
        </div>

        <div className="moon-sidebar__section">
          <ShareButton
            shareText={shareText}
            className="share-btn--full"
          />
          <p className="moon-share__title">\気に入ったらシェア/</p>
          <ul className="moon-share__links">
            <li>
              <a
                href="https://twitter.com/intent/tweet?text=月の出・月の入りの方角方位線シミュレーター&url=https://nightscape.tokyo/moon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X(Twitter)でシェア"
                className="moon-share__link--x"
              >
                𝕏
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://nightscape.tokyo/moon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebookでシェア"
                className="moon-share__link--fb"
              >
                f
              </a>
            </li>
            <li>
              <a
                href="https://b.hatena.ne.jp/add?url=https://nightscape.tokyo/moon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="はてなブックマーク"
                className="moon-share__link--hatena"
              >
                B!
              </a>
            </li>
            <li>
              <a
                href="https://line.me/R/msg/text/?https://nightscape.tokyo/moon"
                target="_blank"
                rel="nofollow noreferrer"
                aria-label="LINEでシェア"
                className="moon-share__link--line"
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
