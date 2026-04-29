import SunCalc from "suncalc";

export interface MoonData {
  moonriseTime: string | null;
  moonsetTime: string | null;
  moonriseAzimuth: number | null;
  moonsetAzimuth: number | null;
  phase: number;        // 0–1
  illumination: number; // 0–1
  phaseName: string;    // 新月/三日月/上弦の月/十三夜月/満月/十六夜/下弦の月/有明の月
}

const RAD_TO_DEG = 180 / Math.PI;

function formatTime(date: Date): string {
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function getPhaseName(phase: number): string {
  if (phase < 0.0625) return "新月";
  if (phase < 0.1875) return "三日月";
  if (phase < 0.3125) return "上弦の月";
  if (phase < 0.4375) return "十三夜月";
  if (phase < 0.5625) return "満月";
  if (phase < 0.6875) return "十六夜";
  if (phase < 0.8125) return "下弦の月";
  if (phase < 0.9375) return "有明の月";
  return "新月";
}

export function calculateMoonData(
  date: Date,
  lat: number,
  lng: number
): MoonData {
  const noon = new Date(date);
  noon.setHours(12, 0, 0, 0);

  const times = SunCalc.getMoonTimes(noon, lat, lng);
  const illuminationData = SunCalc.getMoonIllumination(noon);

  const phase = illuminationData.phase;
  const illumination = illuminationData.fraction;
  const phaseName = getPhaseName(phase);

  let moonriseAzimuth: number | null = null;
  let moonsetAzimuth: number | null = null;

  const moonriseValid =
    times.rise instanceof Date && !isNaN(times.rise.getTime());
  const moonsetValid =
    times.set instanceof Date && !isNaN(times.set.getTime());

  if (moonriseValid) {
    const pos = SunCalc.getMoonPosition(times.rise, lat, lng);
    moonriseAzimuth = pos.azimuth * RAD_TO_DEG + 180;
  }

  if (moonsetValid) {
    const pos = SunCalc.getMoonPosition(times.set, lat, lng);
    moonsetAzimuth = pos.azimuth * RAD_TO_DEG + 180;
  }

  return {
    moonriseTime: moonriseValid ? formatTime(times.rise) : null,
    moonsetTime: moonsetValid ? formatTime(times.set) : null,
    moonriseAzimuth,
    moonsetAzimuth,
    phase,
    illumination,
    phaseName,
  };
}
