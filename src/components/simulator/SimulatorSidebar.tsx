"use client";

import LocationSearch from "./LocationSearch";
import DateNavigator from "./DateNavigator";
import SunTimesDisplay from "./SunTimesDisplay";

interface SimulatorSidebarProps {
  sunriseTime: string | null;
  sunsetTime: string | null;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onLocationFound: (lat: number, lng: number) => void;
}

export default function SimulatorSidebar({
  sunriseTime,
  sunsetTime,
  selectedDate,
  onDateChange,
  onLocationFound,
}: SimulatorSidebarProps) {
  return (
    <div className="sim-sidebar">
      <div className="sim-sidebar__header">
        <p className="sim-sidebar__title">日の出・日の入り方角ナビ</p>
      </div>
      <div className="sim-sidebar__body">
        <p className="sim-sidebar__lead">
          日の出・日の入りの方角や時刻をマップ上で確認できるwebアプリ
        </p>

        <div className="sim-sidebar__section">
          <LocationSearch onLocationFound={onLocationFound} />
        </div>

        <div className="sim-sidebar__section">
          <DateNavigator
            selectedDate={selectedDate}
            onDateChange={onDateChange}
            variant="sidebar"
          />
        </div>

        <div className="sim-sidebar__section">
          <SunTimesDisplay
            sunriseTime={sunriseTime}
            sunsetTime={sunsetTime}
            variant="sidebar"
          />
        </div>

        <div className="sim-sidebar__section">
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
