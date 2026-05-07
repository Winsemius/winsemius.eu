"use client";

import { useReveal } from "../hooks/useReveal";

const steps = [
  {
    number: "01",
    title: "Tell us your project",
    description:
      "A 30-minute conversation about your technology, stage, and ambitions. We listen for fit before we pitch a plan. Free, no obligations.",
    cta: { label: "Book a free consultation", href: "#contact" },
  },
  {
    number: "02",
    title: "We map your funding options",
    description:
      "From the 30+ programmes open at any given time across RVO, DTFA, NATO DIANA, EDA, EDF, Horizon Europe and EIC, we surface the two or three that actually fit — with eligibility, timelines, and what a winning bid looks like.",
    cta: { label: "Try the funding strategist", href: "#advisor" },
  },
  {
    number: "03",
    title: "We win the grant alongside you",
    description:
      "We assemble the consortium, write the proposal, and run it through red-team review before submission. Where it adds value, Winsemius joins the project itself — work package lead, exploitation, dissemination — and stays with you through delivery.",
    cta: null,
  },
];

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section className="relative bg-surface py-24 md:py-32 border-t border-border" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
              How it works
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-5xl">
            From first call to funded project.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
            Three steps. No paperwork in step one.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal stagger-${Math.min(i + 1, 3)} relative bg-surface p-8 md:p-10 flex flex-col`}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-amber text-2xl md:text-3xl tabular-nums">
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.01em] text-text font-display md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                {step.description}
              </p>
              {step.cta && (
                <a
                  href={step.cta.href}
                  className="mt-6 inline-flex items-center gap-2 self-start text-xs font-mono uppercase tracking-[0.15em] text-amber border-b border-amber/40 pb-1 hover:border-amber transition-colors duration-200"
                >
                  {step.cta.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
