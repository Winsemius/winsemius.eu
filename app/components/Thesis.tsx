"use client";

import { useReveal } from "../hooks/useReveal";

export default function Thesis() {
  const ref = useReveal();

  return (
    <section className="bg-parchment py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal max-w-3xl">
          <p className="text-2xl leading-relaxed tracking-[-0.02em] text-ink md:text-3xl font-display font-medium">
            Europe has the technology, the budgets, and the ambition. What it
            lacks is the industrial policy architecture to connect them. We
            build that architecture&mdash;through sharp analysis, funded
            programmes, and coalitions that deliver.
          </p>
          <p className="mt-8 text-base leading-relaxed text-slate">
            An independent intermediary at the intersection of government,
            industry, and capital. Based in Amsterdam, focused on the JEF
            region and the Baltic.
          </p>
        </div>
      </div>
    </section>
  );
}
