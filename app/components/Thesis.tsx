"use client";

import { useReveal } from "../hooks/useReveal";

export default function Thesis() {
  const ref = useReveal();

  return (
    <section className="bg-parchment py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal max-w-3xl">
          <p className="text-2xl leading-relaxed tracking-[-0.01em] text-ink md:text-3xl font-serif">
            European defence policy is built on structural assumptions that are
            badly out of date. Closing the gap between stated ambition and
            operational reality requires more than increased budgets&mdash;it
            requires a different way of thinking about what capability actually
            is, how it should be contracted, and who should be financing it.
          </p>
          <p className="mt-8 text-base leading-relaxed text-slate">
            We are the intermediary that connects governments, defence
            technology companies, and capital markets. Policy influence,
            funding strategy, and coalition building&mdash;from position paper
            to signed agreement.
          </p>
        </div>
      </div>
    </section>
  );
}
