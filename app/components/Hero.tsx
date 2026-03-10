import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-ink">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32">
        <div className="max-w-3xl">
          <Image
            src="/logobrilonly.svg"
            alt="Winsemius Group"
            width={48}
            height={20}
            className="mb-12 brightness-0 invert opacity-40"
          />

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-7xl">
            From consortium
            <br />
            to capability.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#8A9BB5]">
            We build defence partnerships, run the projects, write the contracts,
            and deliver across borders. All from one desk in Amsterdam.
          </p>

          <a
            href="#contact"
            className="mt-12 inline-block bg-accent px-8 py-4 text-sm font-medium tracking-widest text-white uppercase transition-all hover:bg-accent-dark"
          >
            Start a conversation
          </a>
        </div>
      </div>

      {/* Subtle gradient at bottom for transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-light to-transparent" />
    </section>
  );
}
