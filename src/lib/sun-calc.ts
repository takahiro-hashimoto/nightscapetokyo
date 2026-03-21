import SunCalc from "suncalc";

export interface SunData {
  sunriseTime: string | null;
  sunsetTime: string | null;
  sunriseAzimuth: number | null;
  sunsetAzimuth: number | null;
}

const RAD_TO_DEG = 180 / Math.PI;

function formatTime(date: Date): string {
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
}

export function calculateSunData(
  date: Date,
  lat: number,
  lng: number
): SunData {
  const noon = new Date(date);
  noon.setHours(12, 0, 0, 0);

  const times = SunCalc.getTimes(noon, lat, lng);

  let sunriseAzimuth: number | null = null;
  let sunsetAzimuth: number | null = null;

  if (times.sunrise) {
    const pos = SunCalc.getPosition(times.sunrise, lat, lng);
    sunriseAzimuth = pos.azimuth * RAD_TO_DEG + 180;
  }

  if (times.sunset) {
    const pos = SunCalc.getPosition(times.sunset, lat, lng);
    sunsetAzimuth = pos.azimuth * RAD_TO_DEG + 180;
  }

  return {
    sunriseTime: times.sunrise ? formatTime(times.sunrise) : null,
    sunsetTime: times.sunset ? formatTime(times.sunset) : null,
    sunriseAzimuth,
    sunsetAzimuth,
  };
}
