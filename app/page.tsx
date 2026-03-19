import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Thesis from "./components/Thesis";
import Services from "./components/Services";
import Principles from "./components/Principles";
import Insights from "./components/Insights";
import FundingSection from "./components/FundingSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Introduction />
        <Thesis />
        <Services />
        <Principles />
        <Insights />
        <FundingSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
