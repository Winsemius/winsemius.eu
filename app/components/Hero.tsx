"use client";

const nodes = [
  { x: 520, y: 80, r: 3, accent: true },
  { x: 610, y: 140, r: 2.5, accent: false },
  { x: 700, y: 60, r: 2, accent: false },
  { x: 780, y: 170, r: 3.5, accent: true },
  { x: 560, y: 220, r: 2, accent: false },
  { x: 650, y: 280, r: 2.5, accent: false },
  { x: 740, y: 320, r: 3, accent: true },
  { x: 830, y: 240, r: 2, accent: false },
  { x: 900, y: 120, r: 2.5, accent: false },
  { x: 870, y: 350, r: 2, accent: false },
  { x: 480, y: 340, r: 2.5, accent: false },
  { x: 590, y: 400, r: 3, accent: false },
  { x: 720, y: 430, r: 2, accent: true },
  { x: 820, y: 440, r: 2.5, accent: false },
  { x: 680, y: 160, r: 2, accent: false },
  { x: 760, y: 80, r: 2.5, accent: false },
  { x: 500, y: 160, r: 2, accent: false },
  { x: 850, y: 60, r: 2, accent: false },
];

const edges = [
  [0, 1], [0, 4], [1, 2], [1, 5], [1, 14],
  [2, 15], [2, 3], [3, 7], [3, 8], [3, 15],
  [4, 5], [4, 10], [4, 16], [5, 6], [5, 14],
  [6, 7], [6, 9], [6, 12], [7, 8], [7, 9],
  [8, 17], [9, 13], [10, 11], [11, 12],
  [12, 13], [0, 16],
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-end bg-paper pb-24 pt-32 md:pb-32 overflow-hidden">
      {/* Constellation network graphic */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <svg
          viewBox="0 0 960 500"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMaxYMid slice"
          style={{
            maskImage: "radial-gradient(ellipse 70% 80% at 80% 50%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 80% 50%, black 20%, transparent 70%)",
          }}
        >
          {edges.map(([a, b], i) => (
            <line
              key={`e${i}`}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="var(--color-stone)"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}
          {nodes.map((n, i) => (
            <circle
              key={`n${i}`}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.accent ? "var(--color-accent)" : "var(--color-stone)"}
              opacity={n.accent ? 0.6 : 0.45}
              style={n.accent ? { animation: `pulse-subtle ${3 + (i % 3)}s ease-in-out infinite`, transformOrigin: `${n.x}px ${n.y}px` } : undefined}
            />
          ))}
        </svg>
      </div>

      {/* Bottom gradient overlay for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment/60 to-transparent pointer-events-none" />

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-8">
            Defence &middot; Industrial Policy &middot; Capital
          </p>

          <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-ink md:text-7xl lg:text-8xl">
            Where defence policy
            <br />
            meets capital.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-slate md:text-xl">
            We connect European governments, defence technology companies,
            and capital markets. Policy influence. Funding strategy.
            Coalition building.
          </p>
        </div>

        <div className="mt-20 border-t border-rule pt-6 flex flex-col gap-2 sm:flex-row sm:gap-8 text-sm text-muted">
          <span>Amsterdam</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Est. 2024</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>JEF &middot; Baltic &middot; Northern Flank</span>
        </div>
      </div>
    </section>
  );
}
