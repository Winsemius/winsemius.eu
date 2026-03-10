import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Insights from "./components/Insights";
import Audience from "./components/Audience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Insights />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
