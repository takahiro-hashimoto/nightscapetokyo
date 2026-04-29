"use client";

import MapFooter from "@/components/shared/MapFooter";
import MoonCalendar from "./MoonCalendar";

interface MoonFooterProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onSearchClick: () => void;
}

export default function MoonFooter(props: MoonFooterProps) {
  return <MapFooter variant="moon" CalendarComponent={MoonCalendar} {...props} />;
}
