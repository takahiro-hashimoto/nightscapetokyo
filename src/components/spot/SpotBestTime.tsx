import { Moon } from "lucide-react";
import { getSunsetTime } from "@/lib/sunset";
import type { BestTimeLabels } from "@/lib/i18n-labels";
import SpotBestTimeBody from "./SpotBestTimeBody";

function extractWard(address: string | null | undefined): string | null {
  if (!address) return null;
  const stripped = address.replace(/^.+?[都道府県]/, "");
  const m = stripped.match(/([一-龥぀-ヿ]+(?:区|市|郡|町|村))/);
  return m?.[1] ?? null;
}

type Props = {
  spotName: string | null;
  latitude: number | null;
  longitude: number | null;
  address?: string | null;
  labels?: BestTimeLabels;
  locale?: string | null;
};

export default function SpotBestTime({
  spotName,
  latitude,
  longitude,
  address,
  labels,
  locale,
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

  const ward = extractWard(address);
  const weatherTitle = labels?.weatherHeading
    ? labels.weatherHeading(ward)
    : ward
    ? `${ward}の天気情報`
    : "天気情報";

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
        weatherTitle={weatherTitle}
        nightviewLabel={labels?.nightviewLabel ?? "夜景撮影ベストタイム"}
        sunsetOtherFormat={labels?.sunsetOtherFormat ?? "{date}の日没は {time} です。"}
        locale={locale}
      />
    </section>
  );
}
