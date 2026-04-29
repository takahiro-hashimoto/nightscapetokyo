"use client";

import { HelpCircle } from "lucide-react";
import MoonTimesDisplay from "./MoonTimesDisplay";

interface MoonHeaderProps {
  moonriseTime: string | null;
  moonsetTime: string | null;
  phaseName: string;
  illumination: number;
}

export default function MoonHeader({
  moonriseTime,
  moonsetTime,
  phaseName,
  illumination,
}: MoonHeaderProps) {
  const handleMenuClick = () => {
    window.dispatchEvent(new Event("moon:open-info"));
  };

  return (
    <header className="moon-sp-header">
      <div className="moon-sp-header__top">
        <h1 className="moon-sp-header__title">月の出・月の入り時刻方角ナビ</h1>
        <button
          className="moon-sp-header__btn"
          onClick={handleMenuClick}
          aria-label="メニューを開く"
        >
          <HelpCircle size={20} />
        </button>
      </div>
      <MoonTimesDisplay
        moonriseTime={moonriseTime}
        moonsetTime={moonsetTime}
        phaseName={phaseName}
        illumination={illumination}
        variant="header"
      />
    </header>
  );
}
