"use client";

import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SimpleCalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export default function SimpleCalendar({ selectedDate, onDateChange }: SimpleCalendarProps) {
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
      days.push({ day: d, date: new Date(viewYear, viewMonth, d) });
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
    <div className="sim-calendar">
      <div className="sim-calendar__header">
        <button className="sim-calendar__nav" onClick={prevMonth} aria-label="前月">
          <ChevronLeft size={16} />
        </button>
        <span className="sim-calendar__month">{viewYear}年{viewMonth + 1}月</span>
        <button className="sim-calendar__nav" onClick={nextMonth} aria-label="翌月">
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="sim-calendar__weekdays">
        {["日", "月", "火", "水", "木", "金", "土"].map((d, i) => (
          <div
            key={d}
            className={`sim-calendar__weekday${i === 0 ? " sim-calendar__weekday--sun" : i === 6 ? " sim-calendar__weekday--sat" : ""}`}
          >
            {d}
          </div>
        ))}
      </div>

      <div className="sim-calendar__grid">
        {Array.from({ length: calendarData.firstDay }, (_, i) => (
          <div key={`e${i}`} className="sim-calendar__cell sim-calendar__cell--empty" />
        ))}
        {calendarData.days.map(({ day, date }) => {
          const isToday = date.toDateString() === today.toDateString();
          const isSelected = date.toDateString() === selectedDate.toDateString();
          return (
            <button
              key={day}
              className={[
                "sim-calendar__cell",
                isToday ? "sim-calendar__cell--today" : "",
                isSelected ? "sim-calendar__cell--selected" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => onDateChange(date)}
              aria-label={`${viewMonth + 1}月${day}日`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
