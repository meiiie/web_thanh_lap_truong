import WaveDivider from "@/components/svg/WaveDivider";

export default function SectionWave({
  color = "var(--surface-0)",
  flip = false,
  className = "",
}) {
  return (
    <div
      className={`section-wave ${className}`}
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        height: "60px",
        marginTop: "-1px",
        marginBottom: "-1px",
        lineHeight: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <WaveDivider color={color} flip={flip} />
    </div>
  );
}
