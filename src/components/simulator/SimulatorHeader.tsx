"use client";

import { Search } from "lucide-react";
import SunTimesDisplay from "./SunTimesDisplay";

interface SimulatorHeaderProps {
  sunriseTime: string | null;
  sunsetTime: string | null;
  onSearchClick: () => void;
}

export default function SimulatorHeader({
  sunriseTime,
  sunsetTime,
  onSearchClick,
}: SimulatorHeaderProps) {
  return (
    <div className="sim-sp-header">
      <div className="sim-sp-header__top">
        <h1 className="sim-sp-header__title">日の出・日の入り方角ナビ</h1>
        <button className="sim-sp-header__btn" onClick={onSearchClick}>
          <Search size={18} />
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
