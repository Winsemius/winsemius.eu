"use client";

import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="bg-ink py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            Let&apos;s talk about your programme.
          </h2>
          <a
            href="mailto:info@winsemius.eu?subject=Working%20Meeting%20Request"
            className="mt-10 inline-block bg-accent px-10 py-4 text-sm font-medium tracking-widest text-white uppercase transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
          >
            Book a working meeting
          </a>
        </div>

        <div className="reveal stagger-1 mt-20 flex flex-col items-center gap-6 text-center text-sm text-[#8A9BB5] md:flex-row md:justify-center md:gap-12 md:text-left">
          <a
            href="mailto:info@winsemius.eu"
            className="transition-colors hover:text-white"
          >
            info@winsemius.eu
          </a>
          <a
            href="https://www.linkedin.com/company/winsemius-group/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://signal.group/#CjQKIGjxYpDyXsAfW-Xj7lU4FOce1zteQL9-pEY5s5VOh6I3EhAlavSFr0XTHu3jaLrPdc5k"
            className="transition-colors hover:text-white"
          >
            Signal
          </a>
        </div>
      </div>
    </section>
  );
}
