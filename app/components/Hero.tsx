export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-end bg-paper pb-24 pt-32 md:pb-32">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm tracking-[0.15em] text-muted uppercase mb-8">
            Defence &middot; Industrial Policy &middot; Capital
          </p>

          <h1 className="text-5xl leading-[1.08] tracking-[-0.02em] text-ink md:text-7xl lg:text-8xl">
            The broker between
            <br />
            <em className="italic">policy, industry,</em>
            <br />
            and capital.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-slate md:text-xl">
            Winsemius Group works at the intersection of defence technology,
            industrial policy, and capital markets. We build the coalitions,
            structure the funding, and shape the procurement frameworks that
            turn European defence ambition into operational capability.
          </p>
        </div>

        <div className="mt-20 border-t border-rule pt-6 flex flex-col gap-2 sm:flex-row sm:gap-8 text-sm text-muted">
          <span>Amsterdam</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Est. 2024</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>JEF &middot; Baltic &middot; Northern Flank</span>
        </div>
      </div>
    </section>
  );
}
