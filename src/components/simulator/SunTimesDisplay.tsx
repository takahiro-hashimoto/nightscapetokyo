"use client";

interface SunTimesDisplayProps {
  sunriseTime: string | null;
  sunsetTime: string | null;
  variant: "sidebar" | "header";
}

export default function SunTimesDisplay({
  sunriseTime,
  sunsetTime,
  variant,
}: SunTimesDisplayProps) {
  if (variant === "header") {
    return (
      <div className="sim-hour-header">
        <div className="sim-hour-header__item">
          <span className="sim-hour-header__label">日の出時刻</span>
          <span className="sim-hour-header__time">{sunriseTime ?? "－"}</span>
        </div>
        <div className="sim-hour-header__item">
          <span className="sim-hour-header__label">日の入り時刻</span>
          <span className="sim-hour-header__time">{sunsetTime ?? "－"}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="sim-hour">
      <div className="sim-hour__cols">
        <div className="sim-hour__col">
          <span className="sim-hour__label">日の出時刻</span>
          <span className="sim-hour__time">{sunriseTime ?? "－"}</span>
        </div>
        <div className="sim-hour__col">
          <span className="sim-hour__label">日の入り時刻</span>
          <span className="sim-hour__time">{sunsetTime ?? "－"}</span>
        </div>
      </div>
    </div>
  );
}
