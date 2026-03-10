"use client";

import { useReveal } from "../hooks/useReveal";

const contrasts = [
  {
    not: "Not advisors.",
    instead: "Operators.",
    detail:
      "We sign contracts, run programmes, and take delivery risk. No reports without outcomes.",
  },
  {
    not: "Not a platform.",
    instead: "A partner.",
    detail:
      "We work inside your structure, not above it. Single desk, no hand-offs, no duplication.",
  },
  {
    not: "Not generic.",
    instead: "Defence-native.",
    detail:
      "Every engagement is grounded in procurement reality, operator needs, and cross-border complexity.",
  },
];

export default function Different() {
  const ref = useReveal();

  return (
    <section className="bg-ink py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-20 md:space-y-28">
          {contrasts.map((c, i) => (
            <div key={i} className={`reveal stagger-${i + 1}`}>
              <h3 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
                <span className="text-[#8A9BB5]">{c.not}</span>{" "}
                {c.instead}
              </h3>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#8A9BB5]">
                {c.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
