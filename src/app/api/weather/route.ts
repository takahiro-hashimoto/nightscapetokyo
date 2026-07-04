import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export type WeatherResult = {
  conditionText: string;
  conditionIcon: string;
  tempC: number;
  tempMaxC: number;
  tempMinC: number;
  cloud: number;
  humidity: number;
  visKm: number;
  isCurrentWeather: boolean;
};

export async function GET(req: NextRequest) {
  const lat = req.nextUrl.searchParams.get("lat");
  const lng = req.nextUrl.searchParams.get("lng");
  const date = req.nextUrl.searchParams.get("date"); // YYYY-MM-DD

  if (!lat || !lng || !date) {
    return NextResponse.json({ error: "Missing params" }, { status: 400 });
  }

  const latNum = Number(lat);
  const lngNum = Number(lng);
  if (
    !Number.isFinite(latNum) || latNum < -90 || latNum > 90 ||
    !Number.isFinite(lngNum) || lngNum < -180 || lngNum > 180 ||
    !/^\d{4}-\d{2}-\d{2}$/.test(date)
  ) {
    return NextResponse.json({ error: "Invalid params" }, { status: 400 });
  }

  const apiKey = process.env.WEATHERAPI_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  const today = new Date().toISOString().slice(0, 10);
  const isPast = date < today;
  const endpoint = isPast ? "history" : "forecast";

  const url = `https://api.weatherapi.com/v1/${endpoint}.json?key=${apiKey}&q=${latNum},${lngNum}&dt=${date}&lang=ja&aqi=no&alerts=no`;

  try {
    const res = await fetch(url, { next: { revalidate: 1800 } });
    if (!res.ok) {
      return NextResponse.json({ error: "weather api error" }, { status: res.status });
    }
    const raw = await res.json();

    const isToday = date === today;
    const forecastDay = raw.forecast?.forecastday?.[0];

    let result: WeatherResult;

    if (isToday && raw.current) {
      result = {
        conditionText: raw.current.condition.text,
        conditionIcon: raw.current.condition.icon,
        tempC: raw.current.temp_c,
        tempMaxC: forecastDay?.day?.maxtemp_c ?? raw.current.temp_c,
        tempMinC: forecastDay?.day?.mintemp_c ?? raw.current.temp_c,
        cloud: raw.current.cloud,
        humidity: raw.current.humidity,
        visKm: raw.current.vis_km,
        isCurrentWeather: true,
      };
    } else if (forecastDay) {
      const hours: { cloud: number }[] = forecastDay.hour ?? [];
      const avgCloud =
        hours.length > 0
          ? Math.round(hours.reduce((sum, h) => sum + h.cloud, 0) / hours.length)
          : 0;

      result = {
        conditionText: forecastDay.day.condition.text,
        conditionIcon: forecastDay.day.condition.icon,
        tempC: forecastDay.day.avgtemp_c,
        tempMaxC: forecastDay.day.maxtemp_c,
        tempMinC: forecastDay.day.mintemp_c,
        cloud: avgCloud,
        humidity: forecastDay.day.avghumidity,
        visKm: forecastDay.day.avgvis_km,
        isCurrentWeather: false,
      };
    } else {
      return NextResponse.json({ error: "no data" }, { status: 404 });
    }

    return NextResponse.json(result, {
      headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600" },
    });
  } catch {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
