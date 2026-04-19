"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  expand?: string;
  collapse?: string;
};

export default function InfoTableCollapsible({ children, expand = "もっとみる", collapse = "閉じる" }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="itc-wrap">
      <div className={`itc-body${expanded ? " itc-body--open" : ""}`}>
        {children}
        {!expanded && <div className="itc-fade" aria-hidden="true" />}
      </div>
      <button
        type="button"
        className="itc-btn"
        onClick={() => setExpanded((e) => !e)}
      >
        {expanded ? collapse : expand}
      </button>
    </div>
  );
}
