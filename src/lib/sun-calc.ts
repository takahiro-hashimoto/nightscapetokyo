import SunCalc from "suncalc";

export interface SunData {
  sunriseTime: string | null;
  sunsetTime: string | null;
  sunriseAzimuth: number | null;
  sunsetAzimuth: number | null;
}

const RAD_TO_DEG = 180 / Math.PI;

// 表示・日付判定はJST固定。サーバー（Vercel=UTC）でも閲覧者のTZでも同じ結果になる
const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

function formatTime(date: Date): string {
  const jst = new Date(date.getTime() + JST_OFFSET_MS);
  return `${jst.getUTCHours()}:${String(jst.getUTCMinutes()).padStart(2, "0")}`;
}

export function calculateSunData(
  date: Date,
  lat: number,
  lng: number
): SunData {
  // 指定時刻が属するJSTの日の正午（= UTC 03:00）を基準に計算する
  const jst = new Date(date.getTime() + JST_OFFSET_MS);
  const noon = new Date(
    Date.UTC(jst.getUTCFullYear(), jst.getUTCMonth(), jst.getUTCDate(), 3, 0, 0)
  );

  const times = SunCalc.getTimes(noon, lat, lng);

  let sunriseAzimuth: number | null = null;
  let sunsetAzimuth: number | null = null;

  const sunriseValid = times.sunrise && !isNaN(times.sunrise.getTime());
  const sunsetValid = times.sunset && !isNaN(times.sunset.getTime());

  if (sunriseValid) {
    const pos = SunCalc.getPosition(times.sunrise, lat, lng);
    sunriseAzimuth = pos.azimuth * RAD_TO_DEG + 180;
  }

  if (sunsetValid) {
    const pos = SunCalc.getPosition(times.sunset, lat, lng);
    sunsetAzimuth = pos.azimuth * RAD_TO_DEG + 180;
  }

  return {
    sunriseTime: sunriseValid ? formatTime(times.sunrise) : null,
    sunsetTime: sunsetValid ? formatTime(times.sunset) : null,
    sunriseAzimuth,
    sunsetAzimuth,
  };
}
