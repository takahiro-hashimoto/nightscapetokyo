/**
 * 日没時刻を簡易計算する（東京近辺用）
 * 正確な天文計算ではなく、十分実用的な近似値を返す
 */
export function getSunsetTime(
  date: Date,
  lat = 35.6762,
  lng = 139.6503
): { sunset: string; bestStart: string; bestEnd: string; dateLabel: string } {
  const dayOfYear = getDayOfYear(date);

  // 太陽の赤緯（簡易計算）
  const declination =
    23.45 * Math.sin(((360 / 365) * (dayOfYear - 81) * Math.PI) / 180);

  // 時角（日没）
  const latRad = (lat * Math.PI) / 180;
  const decRad = (declination * Math.PI) / 180;
  const hourAngle =
    Math.acos(-Math.tan(latRad) * Math.tan(decRad)) * (180 / Math.PI);

  // 太陽正午（経度補正 + 均時差近似）
  const B = ((360 / 365) * (dayOfYear - 81) * Math.PI) / 180;
  const eot =
    9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
  const solarNoon = 12 - (lng - 135) / 15 - eot / 60;

  // 日没時刻（JST）
  const sunsetDecimal = solarNoon + hourAngle / 15;
  const sunsetHour = Math.floor(sunsetDecimal);
  const sunsetMin = Math.round((sunsetDecimal - sunsetHour) * 60);

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

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function formatTime(h: number, m: number): string {
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
