"use client";

import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SunCalc from "suncalc";
import MoonPhaseIcon from "./MoonPhaseIcon";
import { useCalendarState } from "@/hooks/useCalendarState";

interface MoonCalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export default function MoonCalendar({ selectedDate, onDateChange }: MoonCalendarProps) {
  const { viewYear, viewMonth, prevMonth, nextMonth } = useCalendarState(selectedDate);

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
          const isFullMoon = phase >= 0.48 && phase <= 0.52;
          return (
            <button
              key={day}
              className={[
                "moon-calendar__cell",
                isToday ? "moon-calendar__cell--today" : "",
                isSelected ? "moon-calendar__cell--selected" : "",
                isFullMoon ? "moon-calendar__cell--full-moon" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => onDateChange(date)}
              aria-label={`${viewMonth + 1}月${day}日${isFullMoon ? "（満月）" : ""}`}
            >
              <span className={isFullMoon ? "moon-calendar__full-moon-icon" : undefined}>
                <MoonPhaseIcon phase={phase} size={20} />
              </span>
              <span className="moon-calendar__day">{day}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
