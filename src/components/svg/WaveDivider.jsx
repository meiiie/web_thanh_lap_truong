export default function WaveDivider({
  className = "",
  color = "var(--surface-0, #ffffff)",
  flip = false,
}) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      {/* Back wave — subtle */}
      <path
        d="M0 80 Q180 40 360 65 Q540 90 720 55 Q900 20 1080 50 Q1260 80 1440 45 L1440 120 L0 120Z"
        fill={color}
        opacity="0.35"
      />
      {/* Mid wave */}
      <path
        d="M0 70 Q240 30 480 60 Q720 90 960 50 Q1200 10 1440 55 L1440 120 L0 120Z"
        fill={color}
        opacity="0.6"
      />
      {/* Front wave — solid */}
      <path
        d="M0 90 Q200 60 400 75 Q600 95 800 65 Q1000 35 1200 60 Q1350 78 1440 70 L1440 120 L0 120Z"
        fill={color}
      />
    </svg>
  );
}
