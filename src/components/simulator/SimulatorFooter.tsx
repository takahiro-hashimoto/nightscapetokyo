"use client";

import { Search } from "lucide-react";
import DateNavigator from "./DateNavigator";

interface SimulatorFooterProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onSearchClick: () => void;
}

export default function SimulatorFooter({
  selectedDate,
  onDateChange,
  onSearchClick,
}: SimulatorFooterProps) {
  return (
    <div className="sim-sp-footer">
      <button className="sim-sp-footer__search" onClick={onSearchClick}>
        スポット検索（マーカーの位置変更）
        <Search size={14} />
      </button>
      <DateNavigator
        selectedDate={selectedDate}
        onDateChange={onDateChange}
        variant="footer"
      />
    </div>
  );
}
