"use client";

const countries = [
  { id: "IS", name: "Iceland", x: 55, y: 75 },
  { id: "UK", name: "United Kingdom", x: 80, y: 245 },
  { id: "NO", name: "Norway", x: 150, y: 80 },
  { id: "DK", name: "Denmark", x: 160, y: 225 },
  { id: "NL", name: "Netherlands", x: 130, y: 280, hub: true },
  { id: "SE", name: "Sweden", x: 195, y: 130 },
  { id: "FI", name: "Finland", x: 240, y: 95 },
  { id: "EE", name: "Estonia", x: 260, y: 170 },
  { id: "LV", name: "Latvia", x: 265, y: 205 },
  { id: "LT", name: "Lithuania", x: 255, y: 240 },
];

// Simplified coastline paths for geographic context
const coastlines = {
  // Scandinavia outline (Norway + Sweden)
  scandinavia:
    "M135 40 L145 35 L155 45 L160 55 L158 75 L155 95 L152 115 L150 135 L148 155 L146 175 L145 190 L148 200 L155 210 L160 215 L165 220 Q170 222 175 220 L180 210 L185 195 L188 175 L192 155 L195 135 L197 115 L198 95 L196 75 L192 55 L188 45 L195 40 L205 35 L210 40 L215 50 L218 65 L220 85 L218 100 L212 115 L208 130 L205 145 L203 160 L200 175 L195 195 L190 210 L185 220 L178 228 L170 232 L160 230 L152 225 L148 218 L142 210 L140 200 L138 185 L137 170 L136 150 L135 130 L134 110 L133 90 L133 70 L134 50Z",
  // Finland
  finland:
    "M225 40 L235 38 L242 45 L248 60 L250 80 L248 100 L245 120 L240 140 L235 155 L228 165 L222 160 L220 145 L218 125 L217 105 L218 85 L220 65 L222 50Z",
  // UK
  uk: "M60 200 L72 192 L82 195 L88 205 L90 220 L88 240 L85 258 L80 270 L72 268 L66 255 L62 240 L58 225 L57 210Z",
  // Iceland
  iceland: "M35 65 Q45 55 60 58 Q72 62 70 75 Q65 85 50 85 Q35 82 30 73Z",
  // Baltics
  baltics:
    "M248 162 L268 158 L275 165 L276 180 L278 195 L276 210 L274 225 L270 240 L265 248 L255 250 L250 242 L248 228 L247 210 L246 195 L246 178Z",
  // Denmark
  denmark: "M150 218 L158 215 L165 218 L168 225 L165 232 L158 235 L152 232 L150 225Z",
  // Netherlands / Low Countries
  lowlands: "M120 268 L135 264 L142 270 L140 282 L132 288 L122 285 L118 278Z",
};

// Baltic Sea area
const balticSea =
  "M170 135 Q185 160 180 190 Q178 210 185 230 Q190 245 200 255 L240 250 L260 230 L265 200 L260 170 L245 150 L220 140 L200 130Z";

export default function JEFMap() {
  const hub = countries.find((c) => c.hub)!;

  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      <svg
        viewBox="0 0 340 360"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="340" height="360" fill="var(--color-surface-raised)" rx="4" />

        {/* Grid */}
        <defs>
          <pattern id="jef-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="0.5"
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="340" height="360" fill="url(#jef-grid)" rx="4" />

        {/* Baltic Sea */}
        <path d={balticSea} fill="var(--color-amber)" opacity="0.04" />

        {/* Coastline silhouettes */}
        {Object.entries(coastlines).map(([key, d]) => (
          <path
            key={key}
            d={d}
            fill="var(--color-text-muted)"
            opacity="0.08"
            stroke="var(--color-text-muted)"
            strokeWidth="0.5"
            strokeOpacity="0.15"
          />
        ))}

        {/* Connection lines from hub */}
        {countries
          .filter((c) => !c.hub)
          .map((c) => (
            <line
              key={`line-${c.id}`}
              x1={hub.x}
              y1={hub.y}
              x2={c.x}
              y2={c.y}
              stroke="var(--color-amber)"
              strokeWidth="0.75"
              opacity="0.15"
              strokeDasharray="4 4"
            />
          ))}

        {/* Country nodes */}
        {countries.map((c) => (
          <g key={c.id}>
            <title>{c.name}</title>

            {/* Outer glow for hub */}
            {c.hub && (
              <circle
                cx={c.x}
                cy={c.y}
                r="14"
                fill="var(--color-amber)"
                opacity="0.1"
                style={{
                  animation: "pulse-subtle 3s ease-in-out infinite",
                  transformOrigin: `${c.x}px ${c.y}px`,
                }}
              />
            )}

            {/* Node dot */}
            <circle
              cx={c.x}
              cy={c.y}
              r={c.hub ? 5 : 3.5}
              fill="var(--color-amber)"
              opacity={c.hub ? 0.9 : 0.5}
            />

            {/* Label */}
            <text
              x={c.x}
              y={c.y + (c.hub ? 20 : 16)}
              fill={c.hub ? "var(--color-amber)" : "var(--color-text-muted)"}
              fontSize={c.hub ? "9" : "7.5"}
              fontFamily="var(--font-mono)"
              fontWeight={c.hub ? "600" : "400"}
              opacity={c.hub ? 0.9 : 0.5}
              textAnchor="middle"
              letterSpacing="0.1em"
            >
              {c.id}
            </text>
          </g>
        ))}

        {/* Baltic Sea label */}
        <text
          x="215"
          y="200"
          fill="var(--color-amber)"
          fontSize="6"
          fontFamily="var(--font-mono)"
          opacity="0.2"
          letterSpacing="0.25em"
          textAnchor="middle"
          transform="rotate(-60, 215, 200)"
        >
          BALTIC SEA
        </text>

        {/* Region label */}
        <text
          x="290"
          y="30"
          fill="var(--color-text-muted)"
          fontSize="8"
          fontFamily="var(--font-mono)"
          fontWeight="500"
          opacity="0.35"
          letterSpacing="0.15em"
          textAnchor="end"
        >
          JEF REGION
        </text>
      </svg>
    </div>
  );
}
