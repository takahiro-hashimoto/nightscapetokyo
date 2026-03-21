import { Moon } from "lucide-react";
import { getSunsetTime } from "@/lib/sunset";
import type { BestTimeLabels } from "@/lib/i18n-labels";

type Props = {
  spotName: string | null;
  latitude: number | null;
  longitude: number | null;
  labels?: BestTimeLabels;
};

export default function SpotBestTime({
  spotName,
  latitude,
  longitude,
  labels,
}: Props) {
  const now = new Date();
  const { sunset, bestStart, bestEnd, dateLabel } = getSunsetTime(
    now,
    latitude ?? undefined,
    longitude ?? undefined
  );

  const heading = labels
    ? labels.heading(spotName)
    : `${spotName || "この場所"}の夜景鑑賞・撮影にベストな時間`;

  const timeLabel = labels
    ? labels.label(dateLabel)
    : `本日（${dateLabel}）の夜景撮影ベストタイム`;

  const desc = labels?.desc ?? "空の青さと街の明かりが交差する「マジックアワー」です。";
  const sunsetNote = labels
    ? labels.sunset(sunset)
    : `※本日の日没は ${sunset} です。`;

  return (
    <section
      className="content-card card-padding cv-auto"
      id="besttime"
      aria-labelledby="besttime-heading"
    >
      <h2 id="besttime-heading">
        <span className="heading-icon">
          <Moon size={18} aria-hidden="true" />
        </span>
        {heading}
      </h2>

      <div className="best-time-card">
        <div className="best-time-label">
          {timeLabel}
        </div>
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
    </section>
  );
}
