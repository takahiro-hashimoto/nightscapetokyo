"use client";

import { useState, useCallback } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import MoonCalendar from "./MoonCalendar";

interface MoonFooterProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onSearchClick: () => void;
}

function formatDateLabel(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}/${m}/${d}`;
}

export default function MoonFooter({
  selectedDate,
  onDateChange,
  onSearchClick,
}: MoonFooterProps) {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const goToPrevDay = useCallback(() => {
    const prev = new Date(selectedDate);
    prev.setDate(prev.getDate() - 1);
    onDateChange(prev);
  }, [selectedDate, onDateChange]);

  const goToNextDay = useCallback(() => {
    const next = new Date(selectedDate);
    next.setDate(next.getDate() + 1);
    onDateChange(next);
  }, [selectedDate, onDateChange]);

  const handleDateSelect = useCallback((date: Date) => {
    onDateChange(date);
    setCalendarOpen(false);
  }, [onDateChange]);

  return (
    <>
      <div className="moon-sp-footer">
        <button className="moon-sp-footer__search" onClick={onSearchClick}>
          スポット検索（マーカーの位置変更）
          <Search size={14} />
        </button>
        <div className="sim-datepicker">
          <button className="sim-datepicker__btn" onClick={goToPrevDay}>
            <ChevronLeft size={14} /> 前日
          </button>
          <button
            className="sim-datepicker__date-btn"
            onClick={() => setCalendarOpen(true)}
          >
            {formatDateLabel(selectedDate)}
          </button>
          <button className="sim-datepicker__btn" onClick={goToNextDay}>
            翌日 <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* カレンダーオーバーレイ */}
      {calendarOpen && (
        <div className="sp-overlay moon-footer-calendar__overlay" onClick={() => setCalendarOpen(false)}>
          <div
            className="moon-footer-calendar__container"
            onClick={(e) => e.stopPropagation()}
          >
            <MoonCalendar selectedDate={selectedDate} onDateChange={handleDateSelect} />
          </div>
        </div>
      )}
    </>
  );
}
