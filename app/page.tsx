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
        <section className="bg-ink py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              EU Defence Funding
            </span>
            <h2 className="mt-5 text-3xl font-medium leading-snug tracking-[-0.02em] text-white md:text-4xl">
              €1,342B mobilised for European defence
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50">
              Explore the full landscape of EU funding mechanisms — from ReArm
              Europe to SAFE Loans, EDF grants, and national spending trends.
            </p>
            <a
              href="/funding"
              className="mt-8 inline-block bg-accent px-8 py-3.5 text-sm font-medium tracking-widest text-white uppercase transition-all hover:bg-accent-dark"
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
