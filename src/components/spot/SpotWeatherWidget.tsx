"use client";

import { useHourlyWeather } from "@/hooks/useHourlyWeather";

interface Props {
  lat: number;
  lng: number;
  date: Date;
  locale?: string | null;
}

const WEEKDAYS: Record<string, string[]> = {
  ja: ["日", "月", "火", "水", "木", "金", "土"],
  ko: ["일", "월", "화", "수", "목", "금", "토"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  tw: ["日", "一", "二", "三", "四", "五", "六"],
  cn: ["日", "一", "二", "三", "四", "五", "六"],
};

const HOUR_SUFFIX: Record<string, string> = {
  ja: "時",
  ko: "시",
  en: ":00",
  tw: "時",
  cn: "时",
};

function formatDateLabel(dateStr: string, locale: string | null | undefined): string {
  const d = new Date(dateStr);
  const weekdays = WEEKDAYS[locale ?? "ja"] ?? WEEKDAYS.ja;
  return `${d.getMonth() + 1}/${d.getDate()}（${weekdays[d.getDay()]}）`;
}

export default function SpotWeatherWidget({ lat, lng, date, locale }: Props) {
  const state = useHourlyWeather(lat, lng, date);
  const hourSuffix = HOUR_SUFFIX[locale ?? "ja"] ?? HOUR_SUFFIX.ja;

  const today = new Date();
  const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const selectedDateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const isToday = selectedDateStr === dateStr;

  return (
    <div className="weather-widget">
      <div className="weather-widget__title">
        天気予報<span className="weather-widget__title-sub">（撮影参考）</span>
      </div>

      {state.status === "far-future" ? (
        <p className="weather-widget__notice">14日先までの予報のみ対応</p>
      ) : state.status === "error" ? (
        <p className="weather-widget__notice">天気情報を取得できませんでした</p>
      ) : (
        <>
          <div className="weather-widget__date-row">
            <span className="weather-widget__date-label">
              {isToday ? "TODAY" : selectedDateStr.slice(5).replace("-", "/")}
            </span>
            <span className="weather-widget__date-right">
              {formatDateLabel(selectedDateStr, locale)}
            </span>
          </div>

          <div className="weather-widget__hours">
            {state.status === "loading" || state.status === "idle"
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="weather-widget__hour weather-widget__hour--skeleton">
                    <span className="weather-widget__hour-time">—</span>
                    <div className="weather-widget__hour-icon-placeholder" />
                    <span className="weather-widget__hour-temp">—</span>
                    <span className="weather-widget__hour-precip">—</span>
                  </div>
                ))
              : state.data.hours.map((h) => {
                  const isCurrent = h.hour === state.data.currentHour;
                  return (
                    <div
                      key={h.hour}
                      className={`weather-widget__hour${isCurrent ? " weather-widget__hour--current" : ""}`}
                    >
                      <span className="weather-widget__hour-time">{h.hour}{hourSuffix}</span>
                      {h.conditionIcon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`https:${h.conditionIcon}`}
                          alt=""
                          className="weather-widget__hour-icon"
                          width={32}
                          height={32}
                        />
                      ) : (
                        <div className="weather-widget__hour-icon-placeholder" />
                      )}
                      <span className="weather-widget__hour-temp">{h.tempC}°</span>
                      <span
                        className={`weather-widget__hour-precip${h.precipProb >= 50 ? " weather-widget__hour-precip--high" : ""}`}
                      >
                        {h.precipProb}%
                      </span>
                    </div>
                  );
                })}
          </div>
        </>
      )}
    </div>
  );
}
