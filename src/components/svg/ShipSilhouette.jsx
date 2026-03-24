export default function ShipSilhouette({
  className = "",
  color = "currentColor",
  strokeWidth = 1.5,
}) {
  return (
    <svg
      viewBox="0 0 480 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Hull */}
      <path
        d="M40 140 Q60 170 140 170 L380 170 Q440 170 460 140 L440 120 Q420 100 360 100 L120 100 Q80 100 60 120 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Deck */}
      <path
        d="M100 100 L100 75 Q100 70 105 70 L395 70 Q400 70 400 75 L400 100"
        stroke={color}
        strokeWidth={strokeWidth}
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bridge */}
      <path
        d="M180 70 L180 42 Q180 38 184 38 L280 38 Q284 38 284 42 L284 70"
        stroke={color}
        strokeWidth={strokeWidth}
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Mast */}
      <path
        d="M232 38 L232 10"
        stroke={color}
        strokeWidth={strokeWidth}
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        strokeLinecap="round"
      />
      {/* Flag */}
      <path
        d="M232 10 L260 18 L232 26"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Funnel */}
      <path
        d="M330 70 L325 45 Q325 42 328 42 L348 42 Q351 42 351 45 L346 70"
        stroke={color}
        strokeWidth={strokeWidth}
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Waterline detail */}
      <path
        d="M70 135 Q120 128 200 130 Q300 132 400 128 L450 132"
        stroke={color}
        strokeWidth={strokeWidth * 0.6}
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
