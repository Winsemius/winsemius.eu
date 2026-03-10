"use client";

import { useReveal } from "../hooks/useReveal";

const clusters = [
  {
    step: "01",
    title: "Assemble",
    description:
      "We form the consortium — capability-based clustering, industrial teaming agreements, IP vehicles, and strategic positioning. Ready to sign before the call lands.",
    outcome: "Consortia that exist as legal entities, not as slide decks.",
  },
  {
    step: "02",
    title: "Contract",
    description:
      "We draft, negotiate, and close. Contract structuring, export control, compliance frameworks, pre-commitment funding, and escrow arrangements.",
    outcome: "Validation-to-contract in weeks.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "We run the programme office and the sprint. Operators, developers, and decision-makers producing tested capability with a signed procurement pathway.",
    outcome: "Capability delivered across borders, licences approved, supply chains secured.",
  },
];

export default function HowWeWork() {
  const ref = useReveal();

  return (
    <section id="services" className="bg-white py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_1px_1fr_1px_1fr]">
          {clusters.map((c, i) => (
            <>
              {i > 0 && (
                <div
                  key={`divider-${i}`}
                  className="hidden bg-stone md:block"
                />
              )}
              <div key={c.step} className={`reveal stagger-${i + 1}`}>
                <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  {c.step}
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  {c.title}
                </h3>
                <p className="mt-6 text-[15px] leading-relaxed text-slate">
                  {c.description}
                </p>
                <p className="mt-8 border-t border-stone pt-6 text-sm font-medium text-ink">
                  {c.outcome}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
