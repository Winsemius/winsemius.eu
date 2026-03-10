"use client";

import { useReveal } from "../hooks/useReveal";

const insights = [
  {
    title: "Effects Tech Layer",
    description:
      "Cross-domain technology architecture for defence: comms, sensing, power, and mechatronics.",
    badge: "Policy Framework",
    href: "/compendium/deel-i/effects-tech-layer",
  },
  {
    title: "Surge Capacity",
    description:
      "Building scalable production capacity with time-to-surge under 6 weeks.",
    badge: "Industrial Policy",
    href: "/compendium/deel-i/surge-capacity",
  },
  {
    title: "Ecosystem SLAs",
    description:
      "Outcome-based contracts with availability fees and capacity credits.",
    badge: "Contracting",
    href: "/compendium/deel-i/ecosysteem-slas",
  },
  {
    title: "Tech Sovereignty",
    description:
      "Open architectures and multi-vendor ecosystems to prevent lock-in.",
    badge: "Strategy",
    href: "/compendium/deel-ii/tech-soevereiniteit",
  },
];

export default function Insights() {
  const ref = useReveal();

  return (
    <section id="insights" className="bg-sand py-28 md:py-36" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Insights
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium leading-snug tracking-[-0.02em] md:text-4xl">
            Strategic frameworks for defence innovation
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((item, i) => (
            <a
              key={item.title}
              href={item.href}
              className={`reveal stagger-${i + 1} group flex flex-col border border-warm bg-white p-7 transition-all hover:border-accent hover:shadow-lg`}
            >
              <span className="text-[10px] font-semibold tracking-[0.15em] text-accent uppercase">
                {item.badge}
              </span>
              <h3 className="mt-3 text-base font-medium leading-snug tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                {item.description}
              </p>
              <span className="mt-4 text-xs font-medium text-accent transition-transform group-hover:translate-x-1">
                Read more &rarr;
              </span>
            </a>
          ))}
        </div>

        <div className="reveal stagger-5 mt-12 text-center">
          <a
            href="/compendium/"
            className="inline-block border border-ink px-8 py-3.5 text-sm font-medium tracking-widest text-ink uppercase transition-all hover:bg-ink hover:text-white"
          >
            View full compendium
          </a>
        </div>
      </div>
    </section>
  );
}
