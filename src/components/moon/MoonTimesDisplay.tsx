"use client";

interface MoonTimesDisplayProps {
  moonriseTime: string | null;
  moonsetTime: string | null;
  phaseName: string;
  illumination: number;
  variant: "sidebar" | "header";
}

export default function MoonTimesDisplay({
  moonriseTime,
  moonsetTime,
  phaseName,
  illumination,
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
            {phaseName}（{illuminationPercent}%）
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="moon-hour">
      <table className="moon-hour__table">
        <thead>
          <tr>
            <th>
              <span className="moon-hour__header">月出時刻</span>
            </th>
            <th>
              <span className="moon-hour__header">月入時刻</span>
            </th>
          </tr>
        </thead>
        <tbody className="moon-hour__body">
          <tr>
            <td>{moonriseTime ?? "－"}</td>
            <td>{moonsetTime ?? "－"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
