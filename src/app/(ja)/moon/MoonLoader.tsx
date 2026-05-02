"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/shared/LoadingScreen";
import "./moon.css";

const MoonClient = dynamic(() => import("./MoonClient"), {
  ssr: false,
  loading: () => <LoadingScreen containerClassName="moon-container" />,
});

export default function MoonLoader() {
  return <MoonClient />;
}
