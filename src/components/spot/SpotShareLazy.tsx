"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type SpotShareType from "./SpotShare";

const SpotShare = dynamic(() => import("./SpotShare"), { ssr: false });

export default function SpotShareLazy(props: ComponentProps<typeof SpotShareType>) {
  return <SpotShare {...props} />;
}
