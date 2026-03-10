"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 250, suffix: "+", label: "Ecosystem Contacts" },
  { value: 100, suffix: "+", label: "Networks" },
  { value: 50, suffix: "+", label: "Partnerships" },
  { value: 12, suffix: "", label: "Countries" },
];

function AnimatedCounter({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-stone bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-4xl font-medium tracking-[-0.03em] text-ink md:text-5xl">
                <AnimatedCounter
                  target={m.value}
                  suffix={m.suffix}
                  started={started}
                />
              </p>
              <p className="mt-3 text-[0.65rem] font-semibold tracking-[0.15em] text-slate uppercase">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
