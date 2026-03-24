export default function CompassRose({
  className = "",
  color = "currentColor",
  size = 120,
}) {
  const r = size / 2;
  const c = r;
  const longTick = r * 0.85;
  const shortTick = r * 0.65;
  const inner = r * 0.12;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx={c} cy={c} r={r * 0.92} stroke={color} strokeWidth="0.5" opacity="0.2" />
      <circle cx={c} cy={c} r={r * 0.5} stroke={color} strokeWidth="0.4" opacity="0.12" />

      {/* Cardinal directions — long ticks */}
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={angle}
            x1={c + inner * Math.sin(rad)}
            y1={c - inner * Math.cos(rad)}
            x2={c + longTick * Math.sin(rad)}
            y2={c - longTick * Math.cos(rad)}
            stroke={color}
            strokeWidth="1"
            opacity="0.4"
            strokeLinecap="round"
          />
        );
      })}

      {/* Ordinal directions — short ticks */}
      {[45, 135, 225, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={angle}
            x1={c + inner * Math.sin(rad)}
            y1={c - inner * Math.cos(rad)}
            x2={c + shortTick * Math.sin(rad)}
            y2={c - shortTick * Math.cos(rad)}
            stroke={color}
            strokeWidth="0.6"
            opacity="0.25"
            strokeLinecap="round"
          />
        );
      })}

      {/* Center dot */}
      <circle cx={c} cy={c} r="2" fill={color} opacity="0.35" />

      {/* N marker */}
      <text
        x={c}
        y={c - longTick - 4}
        textAnchor="middle"
        dominantBaseline="auto"
        fill={color}
        fontSize={size * 0.075}
        fontWeight="600"
        opacity="0.3"
        fontFamily="var(--font-mono), monospace"
      >
        N
      </text>
    </svg>
  );
}
