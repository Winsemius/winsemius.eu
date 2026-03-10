import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowWeWork from "./components/HowWeWork";
import ProofBar from "./components/ProofBar";
import Different from "./components/Different";
import Audience from "./components/Audience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowWeWork />
        <ProofBar />
        <Different />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
