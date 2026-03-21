import { CalendarDays, MapPin, Clock } from "lucide-react";
import type { SpotEvent as SpotEventType } from "@/lib/types";

type Props = {
  event: SpotEventType | null;
};

export default function SpotEvent({ event }: Props) {
  if (!event) return null;
  if (!event.start_date && !event.place && !event.event_hour) return null;

  return (
    <section className="content-card card-padding cv-auto">
      <h2>
        <span className="heading-icon">
          <CalendarDays size={18} aria-hidden="true" />
        </span>
        イベント情報
      </h2>
      <div className="event-card-body">
        {(event.start_date || event.end_date) && (
          <div className="event-row">
            <CalendarDays size={16} className="event-icon" />
            <span>
              {event.start_date}
              {event.end_date && ` 〜 ${event.end_date}`}
            </span>
          </div>
        )}
        {event.place && (
          <div className="event-row">
            <MapPin size={16} className="event-icon" />
            <span>{event.place}</span>
          </div>
        )}
        {event.event_hour && (
          <div className="event-row">
            <Clock size={16} className="event-icon" />
            <span>{event.event_hour}</span>
          </div>
        )}
      </div>
    </section>
  );
}
