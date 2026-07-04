"use client";

import { useState, useEffect } from "react";
import type { HourlyWeatherResult } from "@/app/api/weather-hourly/route";

export type { HourlyWeatherResult };

type HourlyWeatherState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: HourlyWeatherResult }
  | { status: "far-future" }
  | { status: "error" };

function toDateStr(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// 約1km精度に丸める。天気の粒度には十分で、URLが安定するためCDNキャッシュに乗る
function roundCoord(n: number): number {
  return Math.round(n * 100) / 100;
}

export function useHourlyWeather(rawLat: number, rawLng: number, date: Date): HourlyWeatherState {
  const lat = roundCoord(rawLat);
  const lng = roundCoord(rawLng);
  const dateStr = toDateStr(date);
  const [state, setState] = useState<HourlyWeatherState>({ status: "idle" });

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(dateStr);
    const diffDays = Math.floor((target.getTime() - today.getTime()) / 86400000);

    if (diffDays > 14) {
      setState({ status: "far-future" });
      return;
    }

    setState({ status: "loading" });
    const controller = new AbortController();

    fetch(`/api/weather-hourly?lat=${lat}&lng=${lng}&date=${dateStr}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("api error");
        return res.json() as Promise<HourlyWeatherResult>;
      })
      .then((data) => setState({ status: "success", data }))
      .catch((err) => {
        if (err.name !== "AbortError") setState({ status: "error" });
      });

    return () => controller.abort();
  }, [lat, lng, dateStr]);

  return state;
}
