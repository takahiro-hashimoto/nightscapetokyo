"use client";

import { useReportWebVitals } from "next/web-vitals";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "web_vitals",
      metric_name: metric.name,
      metric_value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      metric_rating: metric.rating,
      metric_id: metric.id,
    });
  });

  return null;
}
