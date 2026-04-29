interface MoonPhaseIconProps {
  phase: number;
  size?: number;
}

export default function MoonPhaseIcon({ phase, size = 28 }: MoonPhaseIconProps) {
  const r = Math.floor(size / 2) - 1;
  const cx = size / 2;
  const cy = size / 2;

  // 新月
  if (phase <= 0.02 || phase >= 0.98) {
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={cx} cy={cy} r={r} fill="#1a1a2e" stroke="#555" strokeWidth="0.5" />
      </svg>
    );
  }

  // 満月：月のうさぎ
  if (phase >= 0.48 && phase <= 0.52) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        {/* 月面 */}
        <circle cx={50} cy={50} r={49} fill="#f5c842" />
        {/* うさぎシルエット */}
        <g fill="#c49020">
          {/* 左耳 */}
          <path d="M 36,46 Q 27,22 33,7 Q 38,0 43,7 Q 46,22 42,46 Z" />
          {/* 右耳 */}
          <path d="M 64,46 Q 73,22 67,7 Q 62,0 57,7 Q 54,22 58,46 Z" />
          {/* 頭 */}
          <circle cx={50} cy={55} r={15} />
          {/* 胴体 */}
          <ellipse cx={50} cy={78} rx={19} ry={14} />
          {/* しっぽ */}
          <circle cx={67} cy={75} r={5} />
        </g>
      </svg>
    );
  }

  // その他の月相
  const c = Math.cos(phase * 2 * Math.PI);
  const waxing = phase < 0.5;
  const terminatorX = Math.round(r * Math.abs(c) * 10000) / 10000;
  const isGibbous = c < 0;
  const outerSweep = waxing ? 1 : 0;
  const termSweep = isGibbous ? outerSweep : (1 - outerSweep);

  const path = [
    `M ${cx} ${cy - r}`,
    `A ${r} ${r} 0 0 ${outerSweep} ${cx} ${cy + r}`,
    `A ${terminatorX} ${r} 0 0 ${termSweep} ${cx} ${cy - r}`,
    "Z",
  ].join(" ");

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="#1a1a2e" stroke="#333" strokeWidth="0.5" />
      <path d={path} fill="#f5c842" suppressHydrationWarning />
    </svg>
  );
}
