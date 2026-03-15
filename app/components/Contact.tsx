"use client";

import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="relative bg-surface py-24 md:py-32 border-t border-border" ref={ref}>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Comms</span>
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            We prefer conversations over contact forms.
          </p>
        </div>

        <div className="reveal stagger-1 mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
          <a
            href="mailto:info@winsemius.eu"
            className="text-xl font-mono text-amber transition-colors hover:text-amber-bright md:text-2xl"
          >
            info@winsemius.eu
          </a>
          <a
            href="https://www.linkedin.com/company/winsemius-group/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary underline underline-offset-4 decoration-border hover:decoration-amber hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://signal.group/#CjQKIGjxYpDyXsAfW-Xj7lU4FOce1zteQL9-pEY5s5VOh6I3EhAlavSFr0XTHu3jaLrPdc5k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary underline underline-offset-4 decoration-border hover:decoration-amber hover:text-text transition-colors"
          >
            Signal
          </a>
        </div>

        <div className="reveal stagger-2 mt-10 text-sm font-mono text-text-muted">
          <p>Hillegomstraat 7-H, 1058 LN Amsterdam</p>
        </div>
      </div>
    </section>
  );
}
