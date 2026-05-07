"use client";

import { useReveal } from "../hooks/useReveal";
import { services } from "../services/services-data";

const serviceIcons: Record<string, React.ReactElement> = {
  "grant-and-subsidy-advisory": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 8v8M9 11h6M9 14h6" /></svg>
  ),
  "corporate-development": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l9-5 9 5v13" /><path d="M9 21v-7h6v7" /></svg>
  ),
  "financing-and-m-and-a": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
  ),
  "ecosystem-and-community": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" /><path d="M12 8v3M7.5 17.5 10 13M16.5 17.5 14 13" /></svg>
  ),
  "market-intelligence": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /><path d="M12 2v4M12 18v4" /></svg>
  ),
  "regulatory-and-compliance": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" /></svg>
  ),
  "communications-and-thought-leadership": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11a9 9 0 0 1 9-9v0a9 9 0 0 1 9 9v3a4 4 0 0 1-4 4h-1v-7h5M3 11v3a4 4 0 0 0 4 4h1v-7H3" /></svg>
  ),
  "post-award-execution": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
  ),
};

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="bg-void py-24 md:py-32 border-t border-border" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Services</span>
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-5xl">
            What we do
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
            Eight services across the defence and dual-use lifecycle &mdash; from
            strategy and intelligence through to funding, delivery, and post-award.
            Grant and subsidy advisory is our flagship.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <a
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`reveal stagger-${Math.min(i + 1, 5)} group relative bg-void p-8 transition-all duration-300 hover:bg-surface-raised/50 block ${
                s.flagship ? "lg:col-span-2 lg:row-span-1 ring-1 ring-amber/40 ring-inset" : ""
              }`}
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-amber transition-all duration-300 group-hover:w-full" />
              <div className="flex items-center gap-3 mb-4">
                <div className="text-amber/60 group-hover:text-amber transition-colors duration-300">
                  {serviceIcons[s.slug]}
                </div>
                {s.flagship && (
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-amber border border-amber/40 px-2 py-0.5">
                    Flagship
                  </span>
                )}
              </div>
              <span className="text-xs font-mono text-text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.01em] text-text font-display group-hover:text-amber transition-colors duration-300 md:text-xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {s.homepageDescription}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs font-mono tracking-[0.1em] text-amber uppercase">
                  Outcome
                </p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-text">
                  {s.outcome}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-text-muted group-hover:text-amber transition-colors duration-300">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
