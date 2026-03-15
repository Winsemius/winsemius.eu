"use client";

import { useEffect, useState } from "react";

function AnimatedNumber({ target, duration = 2000, prefix = "", suffix = "" }: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <span className="font-mono text-amber tabular-nums" style={{ animation: started ? "ticker-glow 3s ease-in-out infinite" : "none" }}>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
}

const nodes = [
  { x: 120, y: 80, r: 2.5, accent: true },
  { x: 240, y: 120, r: 2, accent: false },
  { x: 360, y: 60, r: 3, accent: true },
  { x: 480, y: 140, r: 2, accent: false },
  { x: 600, y: 90, r: 2.5, accent: true },
  { x: 720, y: 160, r: 2, accent: false },
  { x: 840, y: 70, r: 3, accent: true },
  { x: 180, y: 200, r: 2, accent: false },
  { x: 300, y: 240, r: 2.5, accent: false },
  { x: 420, y: 210, r: 2, accent: true },
  { x: 540, y: 260, r: 2.5, accent: false },
  { x: 660, y: 220, r: 3, accent: true },
  { x: 780, y: 250, r: 2, accent: false },
  { x: 900, y: 180, r: 2.5, accent: false },
  { x: 150, y: 320, r: 2, accent: false },
  { x: 330, y: 350, r: 2.5, accent: true },
  { x: 510, y: 330, r: 2, accent: false },
  { x: 690, y: 360, r: 2.5, accent: false },
  { x: 810, y: 340, r: 3, accent: true },
  { x: 930, y: 300, r: 2, accent: false },
];

const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [0, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13],
  [7, 14], [14, 15], [15, 16], [16, 17], [17, 18], [18, 19],
  [1, 8], [3, 9], [5, 11], [6, 13],
  [8, 15], [10, 16], [12, 18],
  [2, 9], [4, 10], [9, 15], [11, 17],
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-void">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Network visualization */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1000 420"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)",
          }}
        >
          {edges.map(([a, b], i) => (
            <line
              key={`e${i}`}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="var(--color-amber)"
              strokeWidth="0.5"
              opacity="0.15"
            />
          ))}
          {nodes.map((n, i) => (
            <g key={`n${i}`}>
              {n.accent && (
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r * 4}
                  fill="var(--color-amber)"
                  opacity="0.08"
                  style={{ animation: `pulse-subtle ${3 + (i % 3)}s ease-in-out infinite`, transformOrigin: `${n.x}px ${n.y}px` }}
                />
              )}
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill={n.accent ? "var(--color-amber)" : "var(--color-text-muted)"}
                opacity={n.accent ? 0.8 : 0.3}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-void to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-void to-transparent" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <div className="max-w-4xl">
          {/* Classification label */}
          <div className="inline-flex items-center gap-3 border border-border px-4 py-2 mb-10">
            <span className="h-2 w-2 rounded-full bg-amber" style={{ animation: "pulse-subtle 2s ease-in-out infinite" }} />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
              Defence &middot; Industrial Policy &middot; Capital
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl lg:text-[5.5rem]">
            Europe has the budgets.
            <br />
            <span className="text-amber">It lacks the architecture.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            We build the industrial policy architecture that connects
            governments, defence technology, and capital markets.
            Sharp analysis. Funded programmes. Coalitions that deliver.
          </p>
        </div>

        {/* Data ticker bar */}
        <div className="mt-20 border-t border-border pt-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted mb-2">EU Defence Spend 2025</p>
              <p className="text-2xl font-display font-bold md:text-3xl">
                <AnimatedNumber target={392} prefix="€" suffix="B" />
              </p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted mb-2">ReArm Europe</p>
              <p className="text-2xl font-display font-bold md:text-3xl">
                <AnimatedNumber target={800} prefix="€" suffix="B" duration={2500} />
              </p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted mb-2">SAFE Facility</p>
              <p className="text-2xl font-display font-bold md:text-3xl">
                <AnimatedNumber target={150} prefix="€" suffix="B" duration={1800} />
              </p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted mb-2">Total Mobilised</p>
              <p className="text-2xl font-display font-bold md:text-3xl">
                <AnimatedNumber target={1342} prefix="€" suffix="B" duration={3000} />
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-8 text-xs font-mono uppercase tracking-[0.15em] text-text-muted">
          <span>Amsterdam, NL</span>
          <span className="hidden sm:inline text-border-bright">//</span>
          <span>Est. 2024</span>
          <span className="hidden sm:inline text-border-bright">//</span>
          <span>JEF &middot; Baltic &middot; Northern Flank</span>
        </div>
      </div>
    </section>
  );
}
