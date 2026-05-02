"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/shared/LoadingScreen";
import "./simulator.css";

const SimulatorClient = dynamic(() => import("./SimulatorClient"), {
  ssr: false,
  loading: () => <LoadingScreen containerClassName="sim-container" />,
});

export default function SimulatorLoader() {
  return <SimulatorClient />;
}
