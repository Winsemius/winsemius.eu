import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FundingExplorer from "../components/FundingExplorer";
import FundingLandscape from "../components/FundingLandscape";
import FundingCharts from "../components/FundingCharts";
import FundingStats from "../components/FundingStats";

export const metadata = {
  title: "EU Defence Funding — Winsemius Group",
  description:
    "Explore the scale and purpose of EU defence funding mechanisms. €1,342B total mobilised across ReArm Europe, SAFE Loans, and national spending.",
};

export default function FundingPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#0f1729]">
        <div className="pt-28" />
        <FundingExplorer />
        <FundingLandscape />
        <FundingCharts />
        <FundingStats />
      </main>
      <Footer />
    </>
  );
}
