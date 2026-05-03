"use client";

import { HelpCircle } from "lucide-react";
import SunTimesDisplay from "./SunTimesDisplay";
import ShareButton from "@/components/shared/ShareButton";

interface SimulatorHeaderProps {
  sunriseTime: string | null;
  sunsetTime: string | null;
  shareText: string;
}

export default function SimulatorHeader({
  sunriseTime,
  sunsetTime,
  shareText,
}: SimulatorHeaderProps) {
  const handleMenuClick = () => {
    window.dispatchEvent(new Event("sim:open-info"));
  };

  return (
    <header className="sim-sp-header">
      <div className="sim-sp-header__top">
        <h1 className="sim-sp-header__title">日の出・日の入り方角ナビ</h1>
        <div className="sim-sp-header__actions">
          <button className="sim-sp-header__btn" onClick={handleMenuClick} aria-label="メニューを開く">
            <HelpCircle size={20} />
          </button>
          <ShareButton
            shareText={shareText}
            title="日の出・日の入りナビ"
            iconOnly
            className="sim-sp-header__btn"
          />
        </div>
      </div>
      <SunTimesDisplay
        sunriseTime={sunriseTime}
        sunsetTime={sunsetTime}
        variant="header"
      />
    </header>
  );
}
