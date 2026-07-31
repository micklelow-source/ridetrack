type RideType =
  | "ROLLER_COASTER"
  | "DARK_RIDE"
  | "WATER_RIDE"
  | "FLAT_RIDE"
  | "KIDDIE"
  | "TRANSPORT"
  | "SHOW"
  | "OTHER";

const PALETTES: { from: string; to: string; line: string }[] = [
  { from: "#ff6b4a", to: "#ffb26b", line: "#7a2a12" },
  { from: "#0ea5b7", to: "#7fe0d6", line: "#0a3a3f" },
  { from: "#6d28d9", to: "#a78bfa", line: "#2e1065" },
  { from: "#e11d48", to: "#fb7185", line: "#5c0a1e" },
  { from: "#16a34a", to: "#86efac", line: "#0a4020" },
  { from: "#4338ca", to: "#818cf8", line: "#1e1a5c" },
  { from: "#d97706", to: "#fbbf24", line: "#5c3a05" },
];

function hash(input: string): number {
  let h = 5381;
  for (let i = 0; i < input.length; i++) {
    h = (h * 33) ^ input.charCodeAt(i);
  }
  return Math.abs(h);
}

function palette(seed: string) {
  return PALETTES[hash(seed) % PALETTES.length];
}

/** Deterministic small "postcard" illustration for a ride, based on its type and a seed (slug). No photos are used — this is generated art. */
export function RideThumbnail({
  type,
  seed,
  className,
}: {
  type: RideType;
  seed: string;
  className?: string;
}) {
  const p = palette(seed);
  const gradId = `g-${hash(seed)}`;

  return (
    <svg
      viewBox="0 0 160 100"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.from} />
          <stop offset="100%" stopColor={p.to} />
        </linearGradient>
      </defs>
      <rect width="160" height="100" fill={`url(#${gradId})`} />
      <ThumbnailMotif type={type} seed={seed} line={p.line} />
    </svg>
  );
}

function ThumbnailMotif({
  type,
  seed,
  line,
}: {
  type: RideType;
  seed: string;
  line: string;
}) {
  const h = hash(seed);
  const stroke = "rgba(255,255,255,0.9)";

  switch (type) {
    case "ROLLER_COASTER": {
      // Two hill heights vary slightly per-seed for visual variety.
      const h1 = 30 + (h % 12);
      const h2 = 42 + ((h >> 3) % 14);
      return (
        <g>
          <path
            d={`M -5 90 L 20 90 L 20 ${100 - h1} L 45 55 L 60 78 L 85 ${100 - h2} L 105 62 L 130 90 L 165 90`}
            fill="none"
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <line x1="20" y1={100 - h1} x2="20" y2="92" stroke={line} strokeWidth="3" strokeLinecap="round" />
          <circle cx="45" cy="55" r="3" fill={line} />
          <circle cx="85" cy={100 - h2} r="3" fill={line} />
        </g>
      );
    }
    case "DARK_RIDE": {
      return (
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="80"
              y1="50"
              x2={20 + i * 30}
              y2="-10"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="8"
            />
          ))}
          <path
            d="M 30 95 L 30 40 Q 80 5 130 40 L 130 95 Z"
            fill="none"
            stroke={stroke}
            strokeWidth="4"
          />
          <circle cx="45" cy="70" r="2.4" fill={stroke} />
          <circle cx="115" cy="65" r="2" fill={stroke} />
          <circle cx="80" cy="55" r="2.8" fill={stroke} />
        </g>
      );
    }
    case "WATER_RIDE": {
      return (
        <g>
          <path
            d="M -10 55 Q 15 40 40 55 T 90 55 T 140 55 T 180 55 V 105 H -10 Z"
            fill="rgba(255,255,255,0.32)"
          />
          <path
            d="M -10 72 Q 15 57 40 72 T 90 72 T 140 72 T 180 72 V 105 H -10 Z"
            fill="rgba(255,255,255,0.55)"
          />
          <path
            d="M 95 55 C 95 35 120 35 120 55 C 120 40 138 40 138 58"
            fill="none"
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>
      );
    }
    case "FLAT_RIDE": {
      const spokes = 8;
      return (
        <g transform="translate(80,52)">
          {Array.from({ length: spokes }).map((_, i) => {
            const angle = (i / spokes) * Math.PI * 2 + (h % 100) / 100;
            const x2 = Math.cos(angle) * 34;
            const y2 = Math.sin(angle) * 34;
            return (
              <line
                key={i}
                x1="0"
                y1="0"
                x2={x2}
                y2={y2}
                stroke={stroke}
                strokeWidth="3"
                strokeLinecap="round"
              />
            );
          })}
          <circle r="9" fill={stroke} />
          <circle r="9" fill="none" stroke={line} strokeWidth="2" />
        </g>
      );
    }
    case "KIDDIE": {
      return (
        <g>
          <circle cx="34" cy="26" r="14" fill="rgba(255,255,255,0.85)" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={34 + Math.cos(angle) * 16}
                y1={26 + Math.sin(angle) * 16}
                x2={34 + Math.cos(angle) * 21}
                y2={26 + Math.sin(angle) * 21}
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            );
          })}
          <path
            d="M 60 95 Q 60 60 100 60 Q 140 60 140 95 Z"
            fill="rgba(255,255,255,0.9)"
          />
          <circle cx="78" cy="95" r="7" fill={line} />
          <circle cx="122" cy="95" r="7" fill={line} />
        </g>
      );
    }
    case "TRANSPORT": {
      return (
        <g>
          <line x1="-10" y1="70" x2="170" y2="70" stroke={stroke} strokeWidth="3" />
          <line x1="-10" y1="80" x2="170" y2="80" stroke={stroke} strokeWidth="3" />
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={i}
              x1={-5 + i * 20}
              y1="68"
              x2={-11 + i * 20}
              y2="83"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="3"
            />
          ))}
          <rect x="40" y="38" width="60" height="30" rx="5" fill="rgba(255,255,255,0.92)" />
          <rect x="48" y="45" width="14" height="12" rx="2" fill={line} />
          <rect x="68" y="45" width="14" height="12" rx="2" fill={line} />
          <circle cx="52" cy="70" r="5" fill={line} />
          <circle cx="88" cy="70" r="5" fill={line} />
        </g>
      );
    }
    case "SHOW": {
      return (
        <g>
          <path d="M 0 0 H 28 V 100 Q 10 100 0 80 Z" fill="rgba(0,0,0,0.28)" />
          <path d="M 160 0 H 132 V 100 Q 150 100 160 80 Z" fill="rgba(0,0,0,0.28)" />
          <path
            d="M 80 20 L 45 95 H 115 Z"
            fill="rgba(255,255,255,0.35)"
          />
          <path d="M 65 8 L 80 -6 L 95 8 L 80 22 Z" fill={stroke} />
        </g>
      );
    }
    case "OTHER":
    default: {
      return (
        <g transform="translate(80,50)">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const r1 = 14;
            const r2 = 26;
            return (
              <polygon
                key={i}
                points={`0,0 ${Math.cos(angle - 0.15) * r2},${Math.sin(angle - 0.15) * r2} ${Math.cos(angle) * r1 * 1.6},${Math.sin(angle) * r1 * 1.6} ${Math.cos(angle + 0.15) * r2},${Math.sin(angle + 0.15) * r2}`}
                fill="rgba(255,255,255,0.75)"
              />
            );
          })}
          <circle r="12" fill={stroke} />
        </g>
      );
    }
  }
}
