import SunCalc from "suncalc";

export function getSunsetTime(
  date: Date,
  lat = 35.6762,
  lng = 139.6503
): { sunset: string; bestStart: string; bestEnd: string; dateLabel: string } {
  const times = SunCalc.getTimes(date, lat, lng);
  const sunsetDate = times.sunset;

  // JST に変換（UTC+9）
  const jst = new Date(sunsetDate.getTime() + 9 * 60 * 60 * 1000);
  const sunsetHour = jst.getUTCHours();
  const sunsetMin = jst.getUTCMinutes();

  // マジックアワー: 日没+20分 〜 日没+40分
  const bestStartMin = sunsetMin + 20;
  const bestEndMin = sunsetMin + 40;

  const sunset = formatTime(sunsetHour, sunsetMin);
  const bestStart = formatTime(
    sunsetHour + Math.floor(bestStartMin / 60),
    bestStartMin % 60
  );
  const bestEnd = formatTime(
    sunsetHour + Math.floor(bestEndMin / 60),
    bestEndMin % 60
  );

  const dateLabel = `${date.getMonth() + 1}/${date.getDate()}`;

  return { sunset, bestStart, bestEnd, dateLabel };
}

function formatTime(h: number, m: number): string {
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
