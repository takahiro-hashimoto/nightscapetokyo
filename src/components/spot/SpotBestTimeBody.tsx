"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getSunsetTime } from "@/lib/sunset";
import WeatherWidget from "@/components/moon/WeatherWidget";

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];
const MAX_FUTURE_DAYS = 3;

function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function addDays(base: Date, n: number): Date {
  const d = new Date(base);
  d.setDate(d.getDate() + n);
  return d;
}

function toDateStr(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

interface Props {
  latitude: number | null;
  longitude: number | null;
  desc: string;
  todaySunsetNote: string;
  nightviewLabel: string;
  sunsetOtherFormat: string;
  weatherSuitabilityLabel?: string;
  weatherTitle?: string;
}

export default function SpotBestTimeBody({
  latitude,
  longitude,
  desc,
  todaySunsetNote,
  nightviewLabel,
  sunsetOtherFormat,
  weatherSuitabilityLabel = "夜景撮影",
  weatherTitle,
}: Props) {
  const [offset, setOffset] = useState(0);

  const targetDate = useMemo(() => addDays(startOfToday(), offset), [offset]);

  const { sunset, bestStart, bestEnd, dateLabel } = useMemo(
    () => getSunsetTime(targetDate, latitude ?? undefined, longitude ?? undefined),
    [targetDate, latitude, longitude]
  );

  const navLabel = `${targetDate.getMonth() + 1}/${targetDate.getDate()}（${WEEKDAYS[targetDate.getDay()]}）`;

  const sunsetNote =
    offset === 0
      ? todaySunsetNote
      : sunsetOtherFormat.replace("{date}", dateLabel).replace("{time}", sunset);

  return (
    <div className="best-time-unified">
      <div className="best-time-nav">
        <button
          type="button"
          className="best-time-nav__btn"
          onClick={() => setOffset((o) => o - 1)}
          disabled={offset <= 0}
          aria-label="前日"
        >
          <ChevronLeft size={14} />
        </button>
        <time className="best-time-nav__date" dateTime={toDateStr(targetDate)}>
          {navLabel}
        </time>
        <button
          type="button"
          className="best-time-nav__btn"
          onClick={() => setOffset((o) => o + 1)}
          disabled={offset >= MAX_FUTURE_DAYS}
          aria-label="翌日"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="best-time-body">
        <div className="best-time-info">
          <h3 className="best-time-section-heading">{nightviewLabel}</h3>
          <p className="best-time-value">
            <time dateTime={bestStart}>{bestStart}</time>〜
            <time dateTime={bestEnd}>{bestEnd}</time>
          </p>
          <p className="best-time-desc">
            {desc}
            <br />
            {sunsetNote}
          </p>
        </div>

        <div className="best-time-weather">
          {weatherTitle && (
            <h3 className="best-time-section-heading">{weatherTitle}</h3>
          )}
          <WeatherWidget
            lat={latitude ?? 35.6895}
            lng={longitude ?? 139.6917}
            date={targetDate}
            suitabilityLabel={weatherSuitabilityLabel}
          />
        </div>
      </div>
    </div>
  );
}
