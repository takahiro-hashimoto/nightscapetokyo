"use client";

import MapFooter from "@/components/shared/MapFooter";
import SimpleCalendar from "./SimpleCalendar";

interface SimulatorFooterProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onSearchClick: () => void;
}

export default function SimulatorFooter(props: SimulatorFooterProps) {
  return <MapFooter variant="sim" CalendarComponent={SimpleCalendar} {...props} />;
}
