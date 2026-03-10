"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    headline: "Programme governance is not a reporting club.",
    subline: "It is the oxygen pump of your ecosystem.",
  },
  {
    headline: "Open architecture is not a hobby.",
    subline: "It is your life insurance against lock-in.",
  },
  {
    headline: "Cycles are measured in years. Wars are won in weeks.",
    subline: "Align your tempo with reality.",
  },
  {
    headline: "A chain breaks at its weakest link.",
    subline: "An ecosystem thrives on redundancy.",
  },
  {
    headline: "Requirement docs are just paper.",
    subline: "Capability is proven in the dirt.",
  },
  {
    headline: "Ecosystems don\u2019t scale by accident.",
    subline: "They scale by stewardship.",
  },
];

export default function Philosophy() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(index);
        setFading(false);
      }, 300);
    },
    [current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div
          className={`transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
        >
          <blockquote className="text-2xl font-medium leading-snug tracking-[-0.02em] text-white md:text-4xl md:leading-snug">
            {slides[current].headline}
          </blockquote>
          <p className="mt-6 text-lg text-white/40 italic">
            {slides[current].subline}
          </p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-accent"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
