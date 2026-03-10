export default function Contact() {
  return (
    <section id="contact" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Contact
          </span>
          <h2
            className="mx-auto mt-4 max-w-2xl text-3xl font-light leading-snug tracking-tight md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get in touch
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Address
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Hillegomstraat 7-H
                <br />
                1058 LN Amsterdam
                <br />
                Netherlands
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Company
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Winsemius Group BV
                <br />
                KvK: 97604380
                <br />
                VAT: NL868130266B01
                <br />
                DUNS: 473500540
                <br />
                IBAN: NL36ABNA0148554733
              </p>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Email
              </h3>
              <a
                href="mailto:info@winsemius.eu"
                className="mt-3 inline-block text-sm text-ink underline underline-offset-4 transition-colors hover:text-accent"
              >
                info@winsemius.eu
              </a>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Signal
              </h3>
              <a
                href="https://signal.group/#CjQKIGjxYpDyXsAfW-Xj7lU4FOce1zteQL9-pEY5s5VOh6I3EhAlavSFr0XTHu3jaLrPdc5k"
                className="mt-3 inline-block text-sm text-ink underline underline-offset-4 transition-colors hover:text-accent"
              >
                Join our Signal group
              </a>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/company/winsemius-group/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-ink underline underline-offset-4 transition-colors hover:text-accent"
              >
                Company feed
              </a>
            </div>

            <a
              href="mailto:info@winsemius.eu?subject=Working%20Meeting%20Request"
              className="mt-4 inline-block border border-accent bg-accent px-8 py-3.5 text-sm font-medium tracking-widest text-white uppercase transition-all hover:bg-accent-dark"
            >
              Book a working meeting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
