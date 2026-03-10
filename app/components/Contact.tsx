"use client";

import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="bg-sand py-28 md:py-36" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Contact
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium leading-snug tracking-[-0.02em] md:text-4xl">
            Get in touch
          </h2>
        </div>

        {/* Primary CTA */}
        <div className="reveal stagger-1 mx-auto mt-12 max-w-lg text-center">
          <a
            href="mailto:info@winsemius.eu?subject=Working%20Meeting%20Request"
            className="inline-block bg-accent px-10 py-4 text-sm font-medium tracking-widest text-white uppercase transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
          >
            Book a working meeting
          </a>
        </div>

        <div className="reveal stagger-2 mx-auto mt-16 grid max-w-4xl gap-12 md:grid-cols-3">
          {/* Contact channels */}
          <div className="space-y-6 text-center">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Email
            </h3>
            <a
              href="mailto:info@winsemius.eu"
              className="inline-block text-sm text-ink underline underline-offset-4 transition-colors hover:text-accent"
            >
              info@winsemius.eu
            </a>
          </div>

          <div className="space-y-6 text-center">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/company/winsemius-group/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-ink underline underline-offset-4 transition-colors hover:text-accent"
            >
              Company feed
            </a>
          </div>

          <div className="space-y-6 text-center">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Signal
            </h3>
            <a
              href="https://signal.group/#CjQKIGjxYpDyXsAfW-Xj7lU4FOce1zteQL9-pEY5s5VOh6I3EhAlavSFr0XTHu3jaLrPdc5k"
              className="inline-block text-sm text-ink underline underline-offset-4 transition-colors hover:text-accent"
            >
              Join our Signal group
            </a>
          </div>
        </div>

        {/* Address + company details (secondary) */}
        <div className="reveal stagger-3 mx-auto mt-16 max-w-2xl border-t border-warm pt-10">
          <div className="flex flex-col items-center gap-6 text-center text-xs text-slate/70 sm:flex-row sm:justify-center sm:gap-12 sm:text-left">
            <div>
              <p>Hillegomstraat 7-H</p>
              <p>1058 LN Amsterdam</p>
            </div>
            <div>
              <p>Winsemius Group BV</p>
              <p>KvK: 97604380 &middot; VAT: NL868130266B01</p>
            </div>
            <div>
              <p>DUNS: 473500540</p>
              <p>IBAN: NL36ABNA0148554733</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
