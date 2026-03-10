import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* Left: text */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              About
            </span>
            <h2
              className="mt-4 text-3xl font-light leading-snug tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We don&apos;t coordinate the ecosystem.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Winsemius is an independent intermediary in defence ecosystems. We
              run the programme office, assemble the consortia, close the
              contracts, and deliver across borders — from operator input to
              signed capability.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Single desk, no hand-offs, no duplication.
            </p>

            <div className="mt-12 space-y-4">
              <h3
                className="text-xs font-semibold tracking-[0.2em] text-accent uppercase"
              >
                Impact
              </h3>
              {[
                "Single point of contact, reduced delivery risk.",
                "Validation-to-contract in weeks.",
                "Ecosystems that breathe and scale.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-l-2 border-accent/30 py-2 pl-4"
                >
                  <p className="text-sm font-medium text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photos + for whom */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`overflow-hidden ${i % 2 === 1 ? "mt-6" : ""}`}
                >
                  <Image
                    src={`/guy_${i}.png`}
                    alt="Team member"
                    width={300}
                    height={300}
                    className="h-48 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                For Whom
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Defence",
                  "Deep-tech SMEs",
                  "Primes",
                  "Financiers",
                  "Research & Technology Organisations",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border border-warm bg-white px-4 py-2 text-xs font-medium tracking-wide text-slate"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
