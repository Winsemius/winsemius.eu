import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ImpactMetrics from "./components/ImpactMetrics";
import About from "./components/About";
import LogoStrip from "./components/LogoStrip";
import Services from "./components/Services";
import Team from "./components/Team";
import Philosophy from "./components/Philosophy";
import Insights from "./components/Insights";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ImpactMetrics />
        <About />
        <LogoStrip />
        <Services />
        <Team />
        {/* Funding teaser */}
        <section className="bg-[#0f1729] py-20 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#e8a838] uppercase">
              EU Defence Funding
            </span>
            <h2
              className="mt-4 text-3xl font-light leading-snug tracking-tight text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              €1,342B mobilised for European defence
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/40">
              Explore the full landscape of EU funding mechanisms — from ReArm
              Europe to SAFE Loans, EDF grants, and national spending trends.
            </p>
            <a
              href="/funding"
              className="mt-8 inline-block border border-[#e8a838] bg-[#e8a838] px-8 py-3.5 text-sm font-medium tracking-widest text-white uppercase transition-all hover:bg-[#d49a2e]"
            >
              Explore funding landscape
            </a>
          </div>
        </section>
        <Philosophy />
        <Insights />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
