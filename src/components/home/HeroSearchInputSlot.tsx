"use client";

import dynamic from "next/dynamic";

const HeroSearchInput = dynamic(() => import("./HeroSearchInput"), { ssr: false });

export default function HeroSearchInputSlot({ localeSlug }: { localeSlug?: string }) {
  return <HeroSearchInput localeSlug={localeSlug} />;
}
