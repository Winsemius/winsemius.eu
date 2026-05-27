"use client";

import { useReveal } from "../hooks/useReveal";

export default function FundingSection() {
  const ref = useReveal();

  return (
    <section className="relative bg-void py-24 md:py-32 border-t border-border overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="reveal briefing-card p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-amber" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Dashboard</span>
            </div>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-text md:text-4xl">
              Funding Landscape
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-secondary max-w-2xl">
              European defence funding is fragmented across dozens of instruments:
              EDF, EDIP, NATO DIANA, ReArm Europe, national programmes, and more.
              We maintain a public overview of the landscape&mdash;who funds what,
              how much, and through which mechanisms.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary max-w-2xl">
              Think of it as one of our tools: open, navigable, and kept current.
            </p>
            <a
              href="/funding"
              className="mt-8 inline-flex items-center gap-3 text-sm font-mono uppercase tracking-[0.1em] text-amber transition-colors hover:text-amber-bright group"
            >
              <span>Explore the funding landscape</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>

          <div className="reveal briefing-card p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-amber" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Free tool</span>
            </div>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-text md:text-4xl">
              Funding Path
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-secondary max-w-2xl">
              Tell us about your company and get your top three EU / NATO / NL / ESA
              funding routes in 60 seconds&mdash;matched to your stage, country and sector,
              with live data from the EU Funding &amp; Tenders Portal. Free, no fluff,
              no fantasy programmes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary max-w-2xl">
              If a route looks right, we can take the whole bid from there: strategy,
              proposal, consortium, submission&mdash;through to funding secured.
            </p>
            <a
              href="https://apply.funding.winsemius.eu"
              className="mt-8 inline-flex items-center gap-3 text-sm font-mono uppercase tracking-[0.1em] text-amber transition-colors hover:text-amber-bright group"
            >
              <span>Check your funding routes &mdash; free</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
