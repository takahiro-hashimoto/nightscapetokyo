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
          <span className="sim-hour-header__time">{sunriseTime ?? "N/A"}</span>
        </div>
        <div className="sim-hour-header__item">
          <span className="sim-hour-header__label">日の入り時刻</span>
          <span className="sim-hour-header__time">{sunsetTime ?? "N/A"}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="sim-hour">
      <table className="sim-hour__table">
        <thead>
          <tr>
            <th>
              <span className="sim-hour__header">日の出時刻</span>
            </th>
            <th>
              <span className="sim-hour__header">日の入り時刻</span>
            </th>
          </tr>
        </thead>
        <tbody className="sim-hour__body">
          <tr>
            <td>{sunriseTime ?? "N/A"}</td>
            <td>{sunsetTime ?? "N/A"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
