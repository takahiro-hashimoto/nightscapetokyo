"use client";

import { useState } from "react";

/* =========================================
   Types
   ========================================= */

type Mode = "forward" | "reverse";

/* =========================================
   Helpers
   ========================================= */

function formatDuration(totalSeconds: number): string {
  if (!isFinite(totalSeconds) || totalSeconds < 0) return "—";
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);
  if (h > 0) return `${h}時間${m}分${s}秒`;
  if (m > 0) return `${m}分${s}秒`;
  return `${s}秒`;
}

function formatShots(n: number): string {
  if (!isFinite(n) || n < 0) return "—";
  return Math.floor(n).toLocaleString("ja-JP") + " 枚";
}

/* =========================================
   Sub-components
   ========================================= */

function FpsSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const options = [24, 30, 60];
  return (
    <div className="tl-calc-fps-group" role="group" aria-label="フレームレート">
      {options.map((fps) => (
        <label key={fps} className={`tl-calc-fps-btn${value === fps ? " is-active" : ""}`}>
          <input
            type="radio"
            name="fps"
            value={fps}
            checked={value === fps}
            onChange={() => onChange(fps)}
            className="sr-only"
          />
          {fps} fps
        </label>
      ))}
    </div>
  );
}

function ResultCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="tl-calc-result-card">
      <p className="tl-calc-result-label">{label}</p>
      <p className="tl-calc-result-value">{value}</p>
      {sub && <p className="tl-calc-result-sub">{sub}</p>}
    </div>
  );
}

function NumberInput({
  id,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  id: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="tl-calc-input-group">
      <input
        id={id}
        type="number"
        className="tl-calc-input"
        value={value}
        min={min}
        max={max}
        step={step ?? 1}
        onChange={(e) => {
          const v = Number(e.target.value);
          if (!isNaN(v)) onChange(Math.max(min, Math.min(max, v)));
        }}
      />
      <span className="tl-calc-unit">{unit}</span>
    </div>
  );
}

/* =========================================
   Forward Calculator (撮影設定 → 動画情報)
   ========================================= */

function ForwardCalculator() {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(0);
  const [interval, setInterval] = useState(5);
  const [fps, setFps] = useState(30);

  const totalSeconds = hours * 3600 + minutes * 60;
  const shots = interval > 0 ? Math.floor(totalSeconds / interval) : 0;
  const videoDuration = fps > 0 ? shots / fps : 0;
  const playbackSpeed = interval * fps;

  return (
    <div className="tl-calc-body">
      {/* Inputs */}
      <div className="tl-calc-inputs">
        <div className="tl-calc-row">
          <label className="tl-calc-label">
            <span className="tl-calc-label-icon">⏱</span>
            撮影時間
          </label>
          <div className="tl-calc-time-inputs">
            <NumberInput id="fw-hours" value={hours} min={0} max={24} unit="時間" onChange={setHours} />
            <NumberInput id="fw-minutes" value={minutes} min={0} max={59} unit="分" onChange={setMinutes} />
          </div>
        </div>

        <div className="tl-calc-row">
          <label htmlFor="fw-interval" className="tl-calc-label">
            <span className="tl-calc-label-icon">📷</span>
            撮影間隔
          </label>
          <NumberInput id="fw-interval" value={interval} min={1} max={3600} unit="秒" onChange={setInterval} />
        </div>

        <div className="tl-calc-row">
          <span className="tl-calc-label">
            <span className="tl-calc-label-icon">🎬</span>
            フレームレート
          </span>
          <FpsSelector value={fps} onChange={setFps} />
        </div>
      </div>

      {/* Results */}
      <div className="tl-calc-results">
        <ResultCard
          label="撮影枚数"
          value={formatShots(shots)}
          sub={`${totalSeconds.toLocaleString("ja-JP")} 秒 ÷ ${interval} 秒`}
        />
        <ResultCard
          label="動画の長さ"
          value={videoDuration > 0 ? formatDuration(videoDuration) : "—"}
          sub={`${Math.floor(shots).toLocaleString("ja-JP")} 枚 ÷ ${fps} fps`}
        />
        <ResultCard
          label="再生速度"
          value={isFinite(playbackSpeed) && playbackSpeed > 0 ? `${playbackSpeed.toLocaleString("ja-JP")} 倍速` : "—"}
          sub={`${interval} 秒 × ${fps} fps`}
        />
      </div>
    </div>
  );
}

/* =========================================
   Reverse Calculator (動画の長さ → 撮影時間)
   ========================================= */

function ReverseCalculator() {
  const [videoDuration, setVideoDuration] = useState(60);
  const [interval, setInterval] = useState(5);
  const [fps, setFps] = useState(30);

  const shots = videoDuration * fps;
  const shootingSeconds = shots * interval;
  const playbackSpeed = interval * fps;

  return (
    <div className="tl-calc-body">
      {/* Inputs */}
      <div className="tl-calc-inputs">
        <div className="tl-calc-row">
          <label htmlFor="rv-duration" className="tl-calc-label">
            <span className="tl-calc-label-icon">🎞</span>
            希望する動画の長さ
          </label>
          <NumberInput id="rv-duration" value={videoDuration} min={1} max={3600} unit="秒" onChange={setVideoDuration} />
        </div>

        <div className="tl-calc-row">
          <label htmlFor="rv-interval" className="tl-calc-label">
            <span className="tl-calc-label-icon">📷</span>
            撮影間隔
          </label>
          <NumberInput id="rv-interval" value={interval} min={1} max={3600} unit="秒" onChange={setInterval} />
        </div>

        <div className="tl-calc-row">
          <span className="tl-calc-label">
            <span className="tl-calc-label-icon">🎬</span>
            フレームレート
          </span>
          <FpsSelector value={fps} onChange={setFps} />
        </div>
      </div>

      {/* Results */}
      <div className="tl-calc-results">
        <ResultCard
          label="必要な撮影時間"
          value={shootingSeconds > 0 ? formatDuration(shootingSeconds) : "—"}
          sub={`${Math.floor(shots).toLocaleString("ja-JP")} 枚 × ${interval} 秒`}
        />
        <ResultCard
          label="撮影枚数"
          value={formatShots(shots)}
          sub={`${videoDuration} 秒 × ${fps} fps`}
        />
        <ResultCard
          label="再生速度"
          value={`${playbackSpeed.toLocaleString("ja-JP")} 倍速`}
          sub={`${interval} 秒 × ${fps} fps`}
        />
      </div>
    </div>
  );
}

/* =========================================
   Main Export
   ========================================= */

export default function TimeLapseCalculator() {
  const [mode, setMode] = useState<Mode>("forward");

  return (
    <div className="tl-calc">
      {/* Tab switcher */}
      <div className="tl-calc-tabs" role="tablist">
        <button
          role="tab"
          aria-selected={mode === "forward"}
          className={`tl-calc-tab${mode === "forward" ? " is-active" : ""}`}
          onClick={() => setMode("forward")}
        >
          <span className="tl-calc-tab-icon">▶</span>
          順算：動画の長さを求める
        </button>
        <button
          role="tab"
          aria-selected={mode === "reverse"}
          className={`tl-calc-tab${mode === "reverse" ? " is-active" : ""}`}
          onClick={() => setMode("reverse")}
        >
          <span className="tl-calc-tab-icon">◀</span>
          逆算：撮影時間を求める
        </button>
      </div>

      {mode === "forward" ? <ForwardCalculator /> : <ReverseCalculator />}
    </div>
  );
}
