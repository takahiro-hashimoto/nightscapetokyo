"use client";

import { useState, useEffect } from "react";

export function useCalendarState(selectedDate: Date) {
  const [viewYear, setViewYear] = useState(() => selectedDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(() => selectedDate.getMonth());

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  useEffect(() => {
    setViewYear(year);
    setViewMonth(month);
  }, [year, month]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  return { viewYear, viewMonth, prevMonth, nextMonth };
}
