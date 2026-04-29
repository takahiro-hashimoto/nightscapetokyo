"use client";

import dynamic from "next/dynamic";

const MoonClient = dynamic(() => import("./MoonClient"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        minHeight: "100svh",
        maxHeight: "100dvh",
        backgroundColor: "#eee",
        fontFamily: "sans-serif",
        color: "#666",
      }}
    >
      読み込み中...
    </div>
  ),
});

export default function MoonLoader() {
  return <MoonClient />;
}
