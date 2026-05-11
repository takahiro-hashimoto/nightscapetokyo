"use client";

import dynamic from "next/dynamic";

const DevEditLink = dynamic(() => import("@/components/layout/DevEditLink"), { ssr: false });

export default DevEditLink;
