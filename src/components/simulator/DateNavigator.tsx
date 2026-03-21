"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface DateNavigatorProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  variant: "sidebar" | "footer";
}

function formatDateValue(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function DateNavigator({
  selectedDate,
  onDateChange,
  variant,
}: DateNavigatorProps) {
  const goToPrevDay = () => {
    const prev = new Date(selectedDate);
    prev.setDate(prev.getDate() - 1);
    onDateChange(prev);
  };

  const goToNextDay = () => {
    const next = new Date(selectedDate);
    next.setDate(next.getDate() + 1);
    onDateChange(next);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val) {
      const [y, m, d] = val.split("-").map(Number);
      onDateChange(new Date(y, m - 1, d));
    }
  };

  if (variant === "sidebar") {
    return (
      <div className="sim-datepicker-sidebar">
        <input
          type="date"
          className="sim-datepicker-sidebar__input"
          value={formatDateValue(selectedDate)}
          onChange={handleInputChange}
        />
      </div>
    );
  }

  return (
    <div className="sim-datepicker">
      <button className="sim-datepicker__btn" onClick={goToPrevDay}>
        <ChevronLeft size={16} /> 前日
      </button>
      <input
        type="date"
        className="sim-datepicker__input"
        value={formatDateValue(selectedDate)}
        onChange={handleInputChange}
      />
      <button className="sim-datepicker__btn" onClick={goToNextDay}>
        翌日 <ChevronRight size={16} />
      </button>
    </div>
  );
}
