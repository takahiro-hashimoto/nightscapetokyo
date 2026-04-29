"use client";

import { HelpCircle } from "lucide-react";
import SunTimesDisplay from "./SunTimesDisplay";

interface SimulatorHeaderProps {
  sunriseTime: string | null;
  sunsetTime: string | null;
}

export default function SimulatorHeader({
  sunriseTime,
  sunsetTime,
}: SimulatorHeaderProps) {
  const handleMenuClick = () => {
    window.dispatchEvent(new Event("sim:open-info"));
  };

  return (
    <div className="sim-sp-header">
      <div className="sim-sp-header__top">
        <p className="sim-sp-header__title">日の出・日の入り方角ナビ</p>
        <button className="sim-sp-header__btn" onClick={handleMenuClick} aria-label="メニューを開く">
          <HelpCircle size={20} />
        </button>
      </div>
      <SunTimesDisplay
        sunriseTime={sunriseTime}
        sunsetTime={sunsetTime}
        variant="header"
      />
    </div>
  );
}
