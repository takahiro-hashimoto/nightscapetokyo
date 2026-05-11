"use client";

import { useState, useMemo } from "react";
import { Cloud, Droplets, Eye, Thermometer, ChevronLeft, ChevronRight } from "lucide-react";
import { useWeather } from "@/hooks/useWeather";

interface WeatherWidgetProps {
  lat: number;
  lng: number;
  date?: Date;
  showNavigation?: boolean;
  suitabilityLabel?: string;
}

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];
const MAX_FUTURE_DAYS = 3;

function getSuitability(cloud: number, visKm: number): { label: string; className: string } {
  if (cloud <= 20 && visKm >= 8) return { label: "良好", className: "weather-widget__suitability--good" };
  if (cloud <= 50 && visKm >= 5) return { label: "普通", className: "weather-widget__suitability--fair" };
  return { label: "不良", className: "weather-widget__suitability--poor" };
}

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

function formatNavLabel(d: Date): string {
  return `${d.getMonth() + 1}/${d.getDate()}（${WEEKDAYS[d.getDay()]}）`;
}

export default function WeatherWidget({ lat, lng, date, showNavigation = false, suitabilityLabel = "月撮影" }: WeatherWidgetProps) {
  const [offset, setOffset] = useState(0);

  const targetDate = useMemo(() => {
    if (showNavigation) return addDays(startOfToday(), offset);
    return date ?? startOfToday();
  }, [showNavigation, offset, date]);

  const state = useWeather(lat, lng, targetDate);

  const Nav = showNavigation ? (
    <div className="weather-widget__nav">
      <button
        type="button"
        className="weather-widget__nav-btn"
        onClick={() => setOffset((o) => o - 1)}
        disabled={offset <= 0}
        aria-label="前日"
      >
        <ChevronLeft size={13} />
      </button>
      <span className="weather-widget__nav-date">
        {offset === 0 ? "今日" : formatNavLabel(targetDate)}
      </span>
      <button
        type="button"
        className="weather-widget__nav-btn"
        onClick={() => setOffset((o) => o + 1)}
        disabled={offset >= MAX_FUTURE_DAYS}
        aria-label="翌日"
      >
        <ChevronRight size={13} />
      </button>
    </div>
  ) : null;

  if (state.status === "idle" || state.status === "loading") {
    return (
      <div className="weather-widget weather-widget--loading">
        {Nav}
        <span className="weather-widget__loading-text">天気情報を取得中…</span>
      </div>
    );
  }

  if (state.status === "far-future") {
    return (
      <div className="weather-widget weather-widget--unavailable">
        {Nav}
        <span className="weather-widget__unavailable-text">天気予報は14日先まで</span>
      </div>
    );
  }

  if (state.status === "error") {
    return null;
  }

  const { data } = state;
  const suitability = getSuitability(data.cloud, data.visKm);

  return (
    <div className="weather-widget">
      {Nav}
      <div className="weather-widget__header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https:${data.conditionIcon}`}
          alt={data.conditionText}
          className="weather-widget__icon"
          width={40}
          height={40}
        />
        <div className="weather-widget__condition">
          <span className="weather-widget__condition-text">{data.conditionText}</span>
          <span className="weather-widget__label-badge">
            {data.isCurrentWeather ? "現在の天気" : "当日の予報"}
          </span>
        </div>
        <div className={`weather-widget__suitability ${suitability.className}`}>
          <span className="weather-widget__suitability-label">{suitabilityLabel}</span>
          <span className="weather-widget__suitability-value">{suitability.label}</span>
        </div>
      </div>

      <div className="weather-widget__stats">
        <div className="weather-widget__stat">
          <Thermometer size={11} className="weather-widget__stat-icon" />
          <span className="weather-widget__stat-value">
            {Math.round(data.tempMaxC)}° / {Math.round(data.tempMinC)}°
          </span>
        </div>
        <div className="weather-widget__stat">
          <Cloud size={11} className="weather-widget__stat-icon" />
          <span className="weather-widget__stat-value">雲量 {data.cloud}%</span>
        </div>
        <div className="weather-widget__stat">
          <Droplets size={11} className="weather-widget__stat-icon" />
          <span className="weather-widget__stat-value">湿度 {data.humidity}%</span>
        </div>
        <div className="weather-widget__stat">
          <Eye size={11} className="weather-widget__stat-icon" />
          <span className="weather-widget__stat-value">視程 {data.visKm}km</span>
        </div>
      </div>
    </div>
  );
}
