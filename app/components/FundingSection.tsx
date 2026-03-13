"use client";

import { useReveal } from "../hooks/useReveal";

export default function FundingSection() {
  const ref = useReveal();

  return (
    <section className="bg-paper py-24 md:py-32 border-t border-rule" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal max-w-2xl">
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-ink md:text-5xl">
            Funding Landscape
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate">
            European defence funding is fragmented across dozens of instruments:
            EDF, EDIP, NATO DIANA, ReArm Europe, national programmes, and more.
            We maintain a public overview of the landscape&mdash;who funds what,
            how much, and through which mechanisms.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Think of it as one of our tools: open, navigable, and kept current.
          </p>
          <a
            href="/funding"
            className="mt-8 inline-flex items-center gap-2 text-base font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Explore the funding landscape&thinsp;&rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
