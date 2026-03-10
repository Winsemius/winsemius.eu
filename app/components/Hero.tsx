import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink"
    >
      {/* Subtle grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/logobrilonly.svg"
            alt="Winsemius Group"
            width={80}
            height={32}
            className="brightness-0 invert opacity-60"
          />
        </div>

        <h1
          className="mx-auto max-w-3xl text-4xl font-light leading-tight tracking-tight text-white md:text-6xl md:leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Independent intermediary in defence innovation.
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/50">
          Programme office, consortium assembly, contracting, and international
          delivery — under one roof.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-block rounded-none border border-accent bg-accent px-8 py-3.5 text-sm font-medium tracking-widest text-white uppercase transition-all hover:bg-accent-dark"
          >
            Book a working meeting
          </a>
          <a
            href="#services"
            className="inline-block rounded-none border border-white/20 px-8 py-3.5 text-sm font-medium tracking-widest text-white/70 uppercase transition-all hover:border-white/40 hover:text-white"
          >
            Our services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px animate-pulse bg-gradient-to-b from-transparent to-white/30" />
      </div>
    </section>
  );
}
