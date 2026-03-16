"use client";

const countries = [
  { id: "IS", name: "Iceland", x: 55, y: 65 },
  { id: "NO", name: "Norway", x: 155, y: 70 },
  { id: "SE", name: "Sweden", x: 190, y: 110 },
  { id: "FI", name: "Finland", x: 235, y: 85 },
  { id: "DK", name: "Denmark", x: 165, y: 210 },
  { id: "EE", name: "Estonia", x: 265, y: 155 },
  { id: "LV", name: "Latvia", x: 270, y: 195 },
  { id: "LT", name: "Lithuania", x: 260, y: 235 },
  { id: "UK", name: "United Kingdom", x: 85, y: 230 },
  { id: "NL", name: "Netherlands", x: 145, y: 280, hub: true },
];

export default function JEFMap() {
  const hub = countries.find((c) => c.hub)!;

  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      <svg viewBox="0 0 340 360" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect width="340" height="360" fill="var(--color-surface-raised)" rx="4" />

        {/* Grid */}
        <defs>
          <pattern id="jef-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-border)" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="340" height="360" fill="url(#jef-grid)" rx="4" />

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
              opacity="0.2"
              strokeDasharray="4 4"
            />
          ))}

        {/* Country nodes */}
        {countries.map((c) => (
          <g key={c.id}>
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
