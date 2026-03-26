"use client";

import { useReveal } from "../hooks/useReveal";

export default function Thesis() {
  const ref = useReveal();

  return (
    <section className="relative bg-surface py-24 md:py-32 border-t border-border" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          {/* Briefing label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Situation Assessment</span>
          </div>

          <p className="text-2xl leading-relaxed tracking-[-0.02em] text-text md:text-3xl font-display font-medium max-w-3xl">
            Europe has the technology, the budgets, and the ambition. What it
            lacks is the industrial policy architecture to connect them.
          </p>
          <p className="mt-8 text-base leading-relaxed text-text-secondary max-w-2xl">
            We build that architecture&mdash;through sharp analysis, funded
            programmes, and coalitions that deliver. An independent
            intermediary at the intersection of government, industry, and
            capital. Based in Amsterdam, focused on the JEF region and the
            Baltic.
          </p>
        </div>
      </div>
    </section>
  );
}
