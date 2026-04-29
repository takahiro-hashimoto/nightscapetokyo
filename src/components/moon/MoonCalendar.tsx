"use client";

import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SunCalc from "suncalc";

interface MoonCalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

function MoonPhaseIcon({ phase, size = 28 }: { phase: number; size?: number }) {
  const r = Math.floor(size / 2) - 1;
  const cx = size / 2;
  const cy = size / 2;

  if (phase <= 0.02 || phase >= 0.98) {
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={cx} cy={cy} r={r} fill="#1a1a2e" stroke="#555" strokeWidth="0.5" />
      </svg>
    );
  }
  if (phase >= 0.48 && phase <= 0.52) {
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={cx} cy={cy} r={r} fill="#f5c842" />
      </svg>
    );
  }

  const c = Math.cos(phase * 2 * Math.PI);
  const waxing = phase < 0.5;
  const terminatorX = Math.round(r * Math.abs(c) * 10000) / 10000;
  const isGibbous = c < 0;
  const outerSweep = waxing ? 1 : 0;
  const termSweep = isGibbous ? outerSweep : (1 - outerSweep);

  const path = [
    `M ${cx} ${cy - r}`,
    `A ${r} ${r} 0 0 ${outerSweep} ${cx} ${cy + r}`,
    `A ${terminatorX} ${r} 0 0 ${termSweep} ${cx} ${cy - r}`,
    "Z",
  ].join(" ");

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="#1a1a2e" stroke="#333" strokeWidth="0.5" />
      <path d={path} fill="#f5c842" suppressHydrationWarning />
    </svg>
  );
}

export default function MoonCalendar({ selectedDate, onDateChange }: MoonCalendarProps) {
  const [viewYear, setViewYear] = useState(() => selectedDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(() => selectedDate.getMonth());

  useEffect(() => {
    setViewYear(selectedDate.getFullYear());
    setViewMonth(selectedDate.getMonth());
  }, [selectedDate.getFullYear(), selectedDate.getMonth()]);

  const calendarData = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const days = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(viewYear, viewMonth, d);
      const illum = SunCalc.getMoonIllumination(date);
      days.push({ day: d, date, phase: illum.phase });
    }
    return { firstDay, days };
  }, [viewYear, viewMonth]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const today = new Date();

  return (
    <div className="moon-calendar">
      <div className="moon-calendar__header">
        <button className="moon-calendar__nav" onClick={prevMonth} aria-label="前月">
          <ChevronLeft size={16} />
        </button>
        <span className="moon-calendar__month">{viewYear}年{viewMonth + 1}月</span>
        <button className="moon-calendar__nav" onClick={nextMonth} aria-label="翌月">
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="moon-calendar__weekdays">
        {["日", "月", "火", "水", "木", "金", "土"].map((d, i) => (
          <div key={d} className={`moon-calendar__weekday${i === 0 ? " moon-calendar__weekday--sun" : i === 6 ? " moon-calendar__weekday--sat" : ""}`}>
            {d}
          </div>
        ))}
      </div>

      <div className="moon-calendar__grid">
        {Array.from({ length: calendarData.firstDay }, (_, i) => (
          <div key={`e${i}`} className="moon-calendar__cell moon-calendar__cell--empty" />
        ))}
        {calendarData.days.map(({ day, date, phase }) => {
          const isToday = date.toDateString() === today.toDateString();
          const isSelected = date.toDateString() === selectedDate.toDateString();
          return (
            <button
              key={day}
              className={[
                "moon-calendar__cell",
                isToday ? "moon-calendar__cell--today" : "",
                isSelected ? "moon-calendar__cell--selected" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => onDateChange(date)}
              aria-label={`${viewMonth + 1}月${day}日`}
            >
              <MoonPhaseIcon phase={phase} size={20} />
              <span className="moon-calendar__day">{day}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
