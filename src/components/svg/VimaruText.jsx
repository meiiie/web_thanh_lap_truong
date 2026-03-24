export default function VimaruText({ className = "", color = "#ffffff" }) {
  return (
    <svg
      viewBox="0 0 680 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="VIMARU"
    >
      <text
        x="0"
        y="58"
        fill={color}
        fontFamily="var(--font-body), Arial, sans-serif"
        fontSize="64"
        fontWeight="700"
        letterSpacing="0.12em"
      >
        VIMARU
      </text>
    </svg>
  );
}
