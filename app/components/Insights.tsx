"use client";

import { useReveal } from "../hooks/useReveal";

const papers = [
  {
    tag: "Position Paper",
    title: "The Funding Gap: Making the Case for a JEF Defence Capital Facility",
    summary:
      "A policy paper arguing for a dedicated, multi-government funding facility for JEF-aligned dual-use defence technology. Pooled public capital as a catalyst for private investment.",
    href: "#",
    status: "Coming soon",
  },
  {
    tag: "Position Paper",
    title: "From Purchase Orders to Performance Contracts",
    summary:
      "The legislative and institutional case for replacing platform-based procurement with outcome-based SLA contracting across JEF defence ministries. Model contract frameworks and a transition roadmap.",
    href: "#",
    status: "Coming soon",
  },
  {
    tag: "Position Paper",
    title: "Open by Default: Mandating Open Architecture in European Defence",
    summary:
      "Why requiring open interfaces and multi-vendor competition as a condition of public defence contracts is the single most effective lever to accelerate innovation and reduce capability costs.",
    href: "#",
    status: "Coming soon",
  },
  {
    tag: "Analysis",
    title: "The Drone Wall: A Baltic Surge Capacity Demonstrator",
    summary:
      "Continuous surveillance and denial along the Baltic frontier, dual-use by design. The first replicable capability template for the JEF region.",
    href: "#",
    status: "Coming soon",
  },
];

export default function Insights() {
  const ref = useReveal();

  return (
    <section id="insights" className="bg-parchment py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal">
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-ink md:text-5xl">
            Insights
          </h2>
          <p className="mt-4 text-base text-slate max-w-xl">
            Our positions on European defence policy and funding.
          </p>
        </div>

        <div className="mt-14 grid gap-0 divide-y divide-rule">
          {papers.map((p, i) => (
            <div
              key={i}
              className={`reveal stagger-${i + 1} flex flex-col py-8 md:flex-row md:items-start md:gap-8 md:px-4 md:-mx-4`}
            >
              <span className="shrink-0 text-xs font-medium tracking-[0.1em] text-accent uppercase md:mt-1.5 md:w-32">
                {p.tag}
              </span>
              <div className="mt-2 md:mt-0 flex-1">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink font-display md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate max-w-2xl">
                  {p.summary}
                </p>
              </div>
              <span className="mt-4 shrink-0 text-xs font-medium tracking-[0.1em] text-muted uppercase md:mt-1.5 md:ml-auto">
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
