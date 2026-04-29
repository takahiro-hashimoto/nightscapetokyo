"use client";

import { useState, useCallback } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { formatDateLabel, addDays } from "@/lib/date-utils";

interface MapFooterProps {
  variant: "sim" | "moon";
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onSearchClick: () => void;
  CalendarComponent: React.ComponentType<{
    selectedDate: Date;
    onDateChange: (date: Date) => void;
  }>;
}

export default function MapFooter({
  variant,
  selectedDate,
  onDateChange,
  onSearchClick,
  CalendarComponent,
}: MapFooterProps) {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const goToPrevDay = useCallback(() => {
    onDateChange(addDays(selectedDate, -1));
  }, [selectedDate, onDateChange]);

  const goToNextDay = useCallback(() => {
    onDateChange(addDays(selectedDate, 1));
  }, [selectedDate, onDateChange]);

  const handleDateSelect = useCallback((date: Date) => {
    onDateChange(date);
    setCalendarOpen(false);
  }, [onDateChange]);

  const p = `${variant}-sp-footer`;

  return (
    <>
      <div className={p}>
        <button className={`${p}__search`} onClick={onSearchClick}>
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

      {calendarOpen && (
        <div
          className={`sp-overlay ${variant}-footer-calendar__overlay`}
          onClick={() => setCalendarOpen(false)}
        >
          <div
            className={`${variant}-footer-calendar__container`}
            onClick={(e) => e.stopPropagation()}
          >
            <CalendarComponent selectedDate={selectedDate} onDateChange={handleDateSelect} />
          </div>
        </div>
      )}
    </>
  );
}
