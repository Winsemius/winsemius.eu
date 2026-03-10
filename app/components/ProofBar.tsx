"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 250, suffix: "+", label: "Ecosystem contacts" },
  { value: 12, suffix: "", label: "Countries" },
  { value: 50, suffix: "+", label: "Partnerships" },
  { value: 100, suffix: "+", label: "Networks" },
];

function Counter({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return <>{count}{suffix}</>;
}

export default function ProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-accent py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl" style={{ fontVariantNumeric: "tabular-nums" }}>
                <Counter target={m.value} suffix={m.suffix} started={started} />
              </p>
              <p className="mt-2 text-xs font-medium tracking-[0.1em] text-white/60 uppercase">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
