import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Thesis from "./components/Thesis";
import Principles from "./components/Principles";
import Insights from "./components/Insights";
import FundingSection from "./components/FundingSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="h-px flex-1 bg-rule" />
      <div className="mx-4 h-2 w-2 rounded-full bg-accent/30" />
      <div className="h-px flex-1 bg-rule" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SectionDivider />
        <Thesis />
        <SectionDivider />
        <Principles />
        <SectionDivider />
        <Insights />
        <FundingSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
