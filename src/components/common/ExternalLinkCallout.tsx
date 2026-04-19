import type { ReactNode } from "react";

type Props = {
  label?: string;
  items: ReactNode[];
};

export default function ExternalLinkCallout({ label = "関連", items }: Props) {
  return (
    <div className="m-callout m-callout--muted">
      <span className="m-callout__label">{label}</span>
      <ul className="m-callout__links">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
