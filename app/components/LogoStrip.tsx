const partners = [
  "NATO Innovation Fund",
  "Rheinmetall",
  "Thales",
  "Saab",
  "TNO",
  "Ministry of Defence NL",
  "DeltaQuad",
  "Keen Venture Partners",
];

export default function LogoStrip() {
  return (
    <section className="bg-sand py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-[0.65rem] font-semibold tracking-[0.2em] text-slate/60 uppercase">
          Trusted across the defence ecosystem
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((name) => (
            <span
              key={name}
              className="text-sm font-medium tracking-wide text-ink/30 transition-colors hover:text-ink/60"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
