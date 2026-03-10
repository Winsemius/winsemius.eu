import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FundingExplorer from "./components/FundingExplorer";
import FundingLandscape from "./components/FundingLandscape";
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
        <About />
        <Services />
        <FundingExplorer />
        <FundingLandscape />
        <Philosophy />
        <Insights />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
