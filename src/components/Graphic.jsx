const tones = {
  amber: { from: "#1A1407", to: "#0C0C0E", stroke: "#E0A338", glow: "rgba(224,163,56,0.18)" },
  slate: { from: "#0F141A", to: "#0C0C0E", stroke: "#5B7894", glow: "rgba(91,120,148,0.18)" },
  green: { from: "#0C1410", to: "#0C0C0E", stroke: "#5BA37C", glow: "rgba(91,163,124,0.18)" },
};

/**
 * Placeholder grafis arsitektural (pengganti foto).
 * variant: "tower" | "villa" | "skyline"
 */
export default function Graphic({ tone = "amber", variant = "skyline", label, className = "" }) {
  const c = tones[tone] || tones.amber;
  const id = `g-${tone}-${variant}-${Math.round((label || "").length)}`;

  return (
    <div className={`group relative h-full w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 600 420"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="img"
        aria-label={label ? `Ilustrasi proyek: ${label}` : "Ilustrasi arsitektural"}
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c.from} />
            <stop offset="100%" stopColor={c.to} />
          </linearGradient>
          <radialGradient id={`${id}-glow`} cx="78%" cy="20%" r="60%">
            <stop offset="0%" stopColor={c.glow} />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <pattern id={`${id}-grid`} width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0 H0 V30" fill="none" stroke={c.stroke} strokeOpacity="0.12" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="600" height="420" fill={`url(#${id}-bg)`} />
        <rect width="600" height="420" fill={`url(#${id}-grid)`} />
        <rect width="600" height="420" fill={`url(#${id}-glow)`} />

        {variant === "tower" && <Tower stroke={c.stroke} />}
        {variant === "villa" && <Villa stroke={c.stroke} />}
        {variant === "skyline" && <Skyline stroke={c.stroke} />}

        <line x1="0" y1="360" x2="600" y2="360" stroke={c.stroke} strokeOpacity="0.4" strokeWidth="1.5" />
      </svg>

      {label && (
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
          <span className="rounded-full border border-white/10 bg-ink/60 px-3 py-1 text-[11px] font-medium tracking-wide text-bone backdrop-blur-sm">
            {label}
          </span>
        </div>
      )}

      <div
        className="graphic-sheen pointer-events-none absolute inset-0"
        style={{ background: `linear-gradient(120deg, transparent 40%, ${c.glow} 50%, transparent 60%)` }}
      />
    </div>
  );
}

function Tower({ stroke }) {
  return (
    <g stroke={stroke} strokeWidth="1.6" fill="none" strokeOpacity="0.85">
      <rect x="245" y="90" width="110" height="270" />
      <rect x="265" y="40" width="70" height="50" fill={stroke} fillOpacity="0.08" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1="245" y1={120 + i * 30} x2="355" y2={120 + i * 30} strokeOpacity="0.4" />
      ))}
      <line x1="300" y1="90" x2="300" y2="360" strokeOpacity="0.4" />
      <rect x="170" y="200" width="60" height="160" strokeOpacity="0.6" />
      <rect x="370" y="170" width="70" height="190" strokeOpacity="0.6" />
    </g>
  );
}

function Villa({ stroke }) {
  return (
    <g stroke={stroke} strokeWidth="1.6" fill="none" strokeOpacity="0.85">
      <rect x="150" y="220" width="300" height="140" />
      <path d="M150 220 L300 150 L450 220" />
      <rect x="270" y="280" width="60" height="80" fill={stroke} fillOpacity="0.08" />
      <rect x="185" y="255" width="55" height="45" strokeOpacity="0.5" />
      <rect x="360" y="255" width="55" height="45" strokeOpacity="0.5" />
      <line x1="120" y1="360" x2="480" y2="360" strokeOpacity="0.4" />
    </g>
  );
}

function Skyline({ stroke }) {
  const cols = [
    [120, 180], [165, 120], [205, 240], [255, 90],
    [300, 200], [350, 150], [395, 280], [450, 130], [495, 210],
  ];
  return (
    <g stroke={stroke} strokeWidth="1.6" fill="none" strokeOpacity="0.85">
      {cols.map(([x, h], i) => (
        <g key={i}>
          <rect x={x} y={360 - h} width="34" height={h} fillOpacity="0.06" fill={stroke} />
          {Array.from({ length: Math.floor(h / 28) }).map((_, j) => (
            <line
              key={j}
              x1={x}
              y1={360 - h + 18 + j * 28}
              x2={x + 34}
              y2={360 - h + 18 + j * 28}
              strokeOpacity="0.3"
            />
          ))}
        </g>
      ))}
    </g>
  );
}
