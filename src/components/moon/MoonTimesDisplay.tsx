"use client";

import MoonPhaseIcon from "./MoonPhaseIcon";

interface MoonTimesDisplayProps {
  moonriseTime: string | null;
  moonsetTime: string | null;
  phaseName: string;
  illumination: number;
  phase?: number;
  variant: "sidebar" | "header";
}

export default function MoonTimesDisplay({
  moonriseTime,
  moonsetTime,
  phaseName,
  illumination,
  phase,
  variant,
}: MoonTimesDisplayProps) {
  const illuminationPercent = Math.round(illumination * 100);

  if (variant === "header") {
    return (
      <div className="moon-hour-header">
        <div className="moon-hour-header__item">
          <span className="moon-hour-header__label">月出時刻</span>
          <span className="moon-hour-header__time">{moonriseTime ?? "－"}</span>
        </div>
        <div className="moon-hour-header__item">
          <span className="moon-hour-header__label">月入時刻</span>
          <span className="moon-hour-header__time">{moonsetTime ?? "－"}</span>
        </div>
        <div className="moon-hour-header__phase">
          <span className="moon-hour-header__label">月の満ち欠け</span>
          <span className="moon-hour-header__phase-name">
            {phaseName}<span className="moon-illumination">（{illuminationPercent}%）</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="moon-hour">
      <div className="moon-hour__cols">
        <div className="moon-hour__col">
          <span className="moon-hour__label">月出時刻</span>
          <span className="moon-hour__time">{moonriseTime ?? "－"}</span>
        </div>
        <div className="moon-hour__col">
          <span className="moon-hour__label">月入時刻</span>
          <span className="moon-hour__time">{moonsetTime ?? "－"}</span>
        </div>
        <div className="moon-hour__col">
          <span className="moon-hour__label">月の満ち欠け</span>
          <span className="moon-hour__phase">{phaseName}<span className="moon-illumination">（{illuminationPercent}%）</span></span>
        </div>
      </div>
    </div>
  );
}
