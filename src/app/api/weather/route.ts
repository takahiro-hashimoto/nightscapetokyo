import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const TARGET_HOURS = [6, 9, 12, 15, 18, 21];

export type HourData = {
  hour: number;
  conditionIcon: string;
  tempC: number;
  precipProb: number;
};

export type WeatherResult = {
  date: string; // YYYY-MM-DD
  hours: HourData[];
  currentHour: number | null; // nearest TARGET_HOUR ≤ now, only for today
};

export async function GET(req: NextRequest) {
  const lat = req.nextUrl.searchParams.get("lat");
  const lng = req.nextUrl.searchParams.get("lng");
  const date = req.nextUrl.searchParams.get("date"); // YYYY-MM-DD

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
      const raw = rawHours.find((r) => {
        const t = new Date(r.time);
        return t.getHours() === h;
      });
      return {
        hour: h,
        conditionIcon: raw?.condition.icon ?? "",
        tempC: Math.round(raw?.temp_c ?? 0),
        precipProb: raw?.chance_of_rain ?? 0,
      };
    });

    // current hour: largest TARGET_HOUR that is ≤ now (today only)
    let currentHour: number | null = null;
    if (date === today) {
      const nowHour = new Date().getHours();
      const active = TARGET_HOURS.filter((h) => h <= nowHour);
      currentHour = active.length > 0 ? active[active.length - 1] : TARGET_HOURS[0];
    }

    const result: WeatherResult = { date, hours, currentHour };

    return NextResponse.json(result, {
      headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600" },
    });
  } catch {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
