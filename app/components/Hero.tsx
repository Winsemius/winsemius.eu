import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      {/* Network mesh background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="white" />
            </pattern>
            <radialGradient id="fade" cx="30%" cy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="fadeMask">
              <rect width="100%" height="100%" fill="url(#fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fadeMask)" />
          {/* Connecting lines */}
          <line x1="15%" y1="20%" x2="35%" y2="35%" stroke="white" strokeWidth="0.5" opacity="0.4" />
          <line x1="35%" y1="35%" x2="25%" y2="60%" stroke="white" strokeWidth="0.5" opacity="0.3" />
          <line x1="25%" y1="60%" x2="45%" y2="75%" stroke="white" strokeWidth="0.5" opacity="0.2" />
          <line x1="10%" y1="45%" x2="35%" y2="35%" stroke="white" strokeWidth="0.5" opacity="0.25" />
          <line x1="35%" y1="35%" x2="50%" y2="20%" stroke="white" strokeWidth="0.5" opacity="0.15" />
          <line x1="45%" y1="75%" x2="55%" y2="55%" stroke="white" strokeWidth="0.5" opacity="0.2" />
          {/* Nodes */}
          <circle cx="15%" cy="20%" r="2.5" fill="white" opacity="0.3" />
          <circle cx="35%" cy="35%" r="3" fill="white" opacity="0.4" />
          <circle cx="25%" cy="60%" r="2" fill="white" opacity="0.25" />
          <circle cx="45%" cy="75%" r="2.5" fill="white" opacity="0.2" />
          <circle cx="10%" cy="45%" r="2" fill="white" opacity="0.2" />
          <circle cx="50%" cy="20%" r="2" fill="white" opacity="0.15" />
          <circle cx="55%" cy="55%" r="2" fill="white" opacity="0.15" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <Image
              src="/logobrilonly.svg"
              alt="Winsemius Group"
              width={56}
              height={24}
              className="brightness-0 invert opacity-50"
            />
            <div className="h-px w-12 bg-white/20" />
          </div>

          <h1 className="text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-6xl md:leading-[1.1]">
            Independent intermediary in defence innovation.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#B8C4D4]">
            Programme office, consortium assembly, contracting, and international
            delivery — under one roof.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-block bg-accent px-8 py-3.5 text-sm font-medium tracking-widest text-white uppercase transition-all hover:bg-accent-dark"
            >
              Book a working meeting
            </a>
            <a
              href="#services"
              className="inline-block border border-white/20 px-8 py-3.5 text-sm font-medium tracking-widest text-white/70 uppercase transition-all hover:border-white/40 hover:text-white"
            >
              Our services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="animate-bounce opacity-30">
          <path d="M10 4 L10 20 M4 14 L10 20 L16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
