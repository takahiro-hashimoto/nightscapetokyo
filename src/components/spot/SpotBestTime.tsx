import { Moon } from "lucide-react";
import { getSunsetTime } from "@/lib/sunset";
import type { BestTimeLabels } from "@/lib/i18n-labels";
import SpotBestTimeBody from "./SpotBestTimeBody";

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
  const { sunset } = getSunsetTime(
    now,
    latitude ?? undefined,
    longitude ?? undefined
  );

  const heading = labels
    ? labels.heading(spotName)
    : `${spotName || "この場所"}の夜景鑑賞・撮影にベストな時間`;

  const desc = labels?.desc ?? "空の青さと街の明かりが交差する「マジックアワー」です。";

  const todaySunsetNote = labels
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

      <SpotBestTimeBody
        latitude={latitude}
        longitude={longitude}
        desc={desc}
        todaySunsetNote={todaySunsetNote}
        nightviewLabel={labels?.nightviewLabel ?? "夜景撮影ベストタイム"}
        sunsetOtherFormat={labels?.sunsetOtherFormat ?? "{date}の日没は {time} です。"}
      />
    </section>
  );
}
