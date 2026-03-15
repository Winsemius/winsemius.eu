"use client";

import { useReveal } from "../hooks/useReveal";

const principles = [
  {
    number: "01",
    title: "Effects over platforms",
    text: "Capability is measured in operational outcomes — area denial, ISR coverage, comms uptime, logistics throughput — not asset inventories. Procurement must be reoriented around effects.",
  },
  {
    number: "02",
    title: "Surge capacity is readiness",
    text: "A nation that can scale from concept to full operational capability in six weeks is more defensible than one with a large static stockpile and no credible path to rapid expansion.",
  },
  {
    number: "03",
    title: "Contracts that reward readiness",
    text: "Replace per-unit payments with availability fees and capacity credits. Bind suppliers to availability, time-to-surge, MTTR, and iteration speed — not just delivery.",
  },
  {
    number: "04",
    title: "Sovereignty through openness",
    text: "Real strategic autonomy comes from open interfaces, multi-vendor ecosystems, and source code transparency — not from protectionism that relocates dependency.",
  },
  {
    number: "05",
    title: "Open capital markets to defence",
    text: "Some of the most strategically important technology in Europe is chronically underfunded. Governance frameworks that give investors transparency without compromising security are a solvable problem.",
  },
  {
    number: "06",
    title: "A horizontal technology stack",
    text: "Modular building blocks across air, ground, sea, and space — comms, sensing, power, mechatronics — enabling faster adaptation and genuine supplier competition.",
  },
];

export default function Principles() {
  const ref = useReveal();

  return (
    <section id="principles" className="relative bg-void py-24 md:py-32 border-t border-border" ref={ref}>
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Doctrine</span>
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-5xl">
            How we think
          </h2>
          <p className="mt-4 text-base text-text-secondary max-w-2xl">
            The positions behind our work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <div
              key={p.number}
              className={`reveal stagger-${(i % 6) + 1} briefing-card p-6 hover:border-amber/30 transition-colors duration-300`}
            >
              <span className="text-xs font-mono tracking-[0.15em] text-amber">
                {p.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-text font-display">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal stagger-5 mt-12">
          <a
            href="/principles"
            className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-[0.1em] text-amber transition-colors hover:text-amber-bright group"
          >
            <span>Read full policy framework</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
