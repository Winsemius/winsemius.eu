"use client";

import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="relative bg-paper py-24 md:py-32 border-t border-rule overflow-hidden" ref={ref}>
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="reveal">
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-ink md:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 text-base text-slate">
            We prefer conversations over contact forms.
          </p>
        </div>

        <div className="reveal stagger-1 mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
          <a
            href="mailto:info@winsemius.eu"
            className="text-xl font-medium text-accent transition-colors hover:text-accent-hover font-display md:text-2xl"
          >
            info@winsemius.eu
          </a>
          <a
            href="https://www.linkedin.com/company/winsemius-group/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 decoration-rule hover:decoration-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://signal.group/#CjQKIGjxYpDyXsAfW-Xj7lU4FOce1zteQL9-pEY5s5VOh6I3EhAlavSFr0XTHu3jaLrPdc5k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 decoration-rule hover:decoration-accent transition-colors"
          >
            Signal
          </a>
        </div>

        <div className="reveal stagger-2 mt-10 text-sm text-muted">
          <p>Hillegomstraat 7-H, 1058 LN Amsterdam</p>
        </div>
      </div>
    </section>
  );
}
