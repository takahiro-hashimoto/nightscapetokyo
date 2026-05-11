import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const TARGET_HOURS = [6, 9, 12, 15, 18, 21];

export type HourData = {
  hour: number;
  conditionIcon: string;
  tempC: number;
  precipProb: number;
};

export type HourlyWeatherResult = {
  date: string;
  hours: HourData[];
  currentHour: number | null;
};

export async function GET(req: NextRequest) {
  const lat = req.nextUrl.searchParams.get("lat");
  const lng = req.nextUrl.searchParams.get("lng");
  const date = req.nextUrl.searchParams.get("date");

  if (!lat || !lng || !date) {
    return NextResponse.json({ error: "Missing params" }, { status: 400 });
  }

  const apiKey = process.env.WEATHERAPI_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  const today = new Date().toISOString().slice(0, 10);
  const isPast = date < today;
  const endpoint = isPast ? "history" : "forecast";

  const url = `https://api.weatherapi.com/v1/${endpoint}.json?key=${apiKey}&q=${lat},${lng}&dt=${date}&lang=ja&aqi=no&alerts=no`;

  try {
    const res = await fetch(url, { next: { revalidate: 1800 } });
    if (!res.ok) {
      return NextResponse.json({ error: "weather api error" }, { status: res.status });
    }
    const raw = await res.json();
    const forecastDay = raw.forecast?.forecastday?.[0];
    if (!forecastDay) {
      return NextResponse.json({ error: "no data" }, { status: 404 });
    }

    const rawHours: {
      time: string;
      condition: { icon: string };
      temp_c: number;
      chance_of_rain: number;
    }[] = forecastDay.hour ?? [];

    const hours: HourData[] = TARGET_HOURS.map((h) => {
      const raw = rawHours.find((r) => new Date(r.time).getHours() === h);
      return {
        hour: h,
        conditionIcon: raw?.condition.icon ?? "",
        tempC: Math.round(raw?.temp_c ?? 0),
        precipProb: raw?.chance_of_rain ?? 0,
      };
    });

    let currentHour: number | null = null;
    if (date === today) {
      const nowHour = new Date().getHours();
      const active = TARGET_HOURS.filter((h) => h <= nowHour);
      currentHour = active.length > 0 ? active[active.length - 1] : TARGET_HOURS[0];
    }

    return NextResponse.json(
      { date, hours, currentHour } satisfies HourlyWeatherResult,
      { headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600" } }
    );
  } catch {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
