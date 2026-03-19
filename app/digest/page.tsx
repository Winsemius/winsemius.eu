import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "European Defence Intelligence Digest — Winsemius Group",
  description:
    "Monthly synthesis of European defence think tank research, procurement signals, and policy shifts. 45+ sources distilled into actionable briefings.",
};

const thinktanks = [
  { name: "RUSI", location: "London", focus: "Full-spectrum defence & security" },
  { name: "IISS", location: "London", focus: "Strategic studies, military balance" },
  { name: "SIPRI", location: "Stockholm", focus: "Arms transfers, military spending" },
  { name: "SWP", location: "Berlin", focus: "Defence policy, EU/NATO" },
  { name: "EUISS", location: "Paris", focus: "EU CSDP, strategic foresight" },
  { name: "IFRI", location: "Paris", focus: "French/EU defence, nuclear" },
  { name: "HCSS", location: "The Hague", focus: "Defence tech, strategic foresight" },
  { name: "ICDS", location: "Tallinn", focus: "NATO, Baltic, cyber, hybrid" },
  { name: "ECFR", location: "Pan-European", focus: "EU security & sovereignty" },
  { name: "CEPA", location: "Warsaw/DC", focus: "Eastern Europe, NATO" },
  { name: "PISM", location: "Warsaw", focus: "NATO, Eastern flank" },
  { name: "Chatham House", location: "London", focus: "International security, Russia" },
  { name: "CCDCOE", location: "Tallinn", focus: "Cyber defence" },
  { name: "Hybrid CoE", location: "Helsinki", focus: "Hybrid threats" },
  { name: "FIIA", location: "Helsinki", focus: "Nordic, hybrid, NATO" },
  { name: "FRS", location: "Paris", focus: "Nuclear, space, cyber" },
  { name: "CEPS", location: "Brussels", focus: "EU defence industrial policy" },
  { name: "Egmont", location: "Brussels", focus: "EU CSDP, Belgian defence" },
  { name: "RAND Europe", location: "Cambridge", focus: "Defence capability, economics" },
  { name: "CNAS", location: "Washington", focus: "AI, autonomous weapons" },
  { name: "EDA", location: "Brussels", focus: "Defence capability, drones" },
  { name: "FOI", location: "Stockholm", focus: "Defence tech R&D" },
  { name: "GLOBSEC", location: "Bratislava", focus: "Central European security" },
  { name: "IAI", location: "Rome", focus: "EU defence, Mediterranean" },
];

const digestSample = [
  {
    source: "RUSI",
    title: "European Drone Procurement: From Ambition to Architecture",
    type: "Commentary",
    relevance:
      "Argues that EU drone procurement remains fragmented across national programmes with no common architecture. Directly relevant to JEF interoperability and Winsemius's Drone Wall thesis.",
  },
  {
    source: "SIPRI",
    title: "Military Spending in Europe: 2025 Trends",
    type: "Fact Sheet",
    relevance:
      "Documents the third consecutive year of spending increases across Northern and Eastern Europe. Baltic states now at 3%+ GDP. Quantifies the market opportunity for defence brokers operating in the JEF region.",
  },
  {
    source: "HCSS",
    title: "The SAFE Facility: Implementation Challenges and Opportunities",
    type: "Strategic Monitor",
    relevance:
      "First independent analysis of the SAFE instrument's disbursement mechanics. Identifies consortium requirements that will determine who can access the funds — and who will need intermediary support.",
  },
  {
    source: "ICDS",
    title: "Baltic Defence Industrial Cooperation: Next Steps",
    type: "Policy Paper",
    relevance:
      "Maps existing cross-border defence industrial partnerships in the Baltics and identifies gaps. Highlights the need for consortium assembly and export facilitation — core Winsemius services.",
  },
  {
    source: "ECFR",
    title: "European Sovereignty and the Defence Tech Stack",
    type: "Policy Brief",
    relevance:
      "Makes the case for open architecture as a precondition for European strategic autonomy. Aligns with Winsemius's 'Sovereignty Through Openness' principle.",
  },
];

export default function DigestPage() {
  return (
    <>
      <Nav />
      <main className="bg-void">
        {/* Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-amber" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                Intelligence
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-text md:text-6xl">
              European Defence Intelligence Digest
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-2xl">
              A monthly synthesis of European defence think tank research,
              procurement signals, and policy shifts — distilled into actionable
              briefings with Winsemius analysis on top.
            </p>
          </div>
        </section>

        {/* Value prop */}
        <section className="bg-surface py-16 md:py-20 border-t border-b border-border">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-xl leading-relaxed tracking-[-0.01em] text-text font-display font-medium md:text-2xl">
              Europe has 45+ defence think tanks publishing hundreds of reports
              every month. Nobody has time to read them all. We do — so you
              don&apos;t have to.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="border border-border p-6">
                <p className="text-3xl font-display font-bold text-amber">45+</p>
                <p className="mt-2 text-sm text-text-secondary">Think tanks monitored</p>
              </div>
              <div className="border border-border p-6">
                <p className="text-3xl font-display font-bold text-amber">Monthly</p>
                <p className="mt-2 text-sm text-text-secondary">Publication cadence</p>
              </div>
              <div className="border border-border p-6">
                <p className="text-3xl font-display font-bold text-amber">Free</p>
                <p className="mt-2 text-sm text-text-secondary">Open access</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-text md:text-3xl">
              How it works
            </h2>
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <span className="shrink-0 text-lg font-mono text-amber/50">01</span>
                <div>
                  <h3 className="text-base font-semibold text-text">We monitor</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    Every month we scan publications from 45+ European defence
                    think tanks, research agencies, and policy institutes — from
                    RUSI and SIPRI to HCSS and ICDS.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="shrink-0 text-lg font-mono text-amber/50">02</span>
                <div>
                  <h3 className="text-base font-semibold text-text">We filter</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    We select the reports most relevant to European defence
                    technology, procurement, funding, and industrial policy.
                    Signal over noise.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="shrink-0 text-lg font-mono text-amber/50">03</span>
                <div>
                  <h3 className="text-base font-semibold text-text">We analyse</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    Each selected report gets a Winsemius relevance assessment:
                    what it means for companies, investors, and governments
                    operating in the European defence tech ecosystem.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="shrink-0 text-lg font-mono text-amber/50">04</span>
                <div>
                  <h3 className="text-base font-semibold text-text">You act</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    Published monthly on this page and distributed via LinkedIn
                    and email. One digest, all the intelligence you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample digest */}
        <section className="bg-surface py-16 md:py-24 border-t border-border">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-amber" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                Preview
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-text md:text-3xl">
              Sample: What a monthly digest looks like
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Below is a preview of the format. The first full edition launches
              in April 2026.
            </p>

            <div className="mt-10 space-y-0">
              {digestSample.map((item, i) => (
                <div
                  key={i}
                  className="py-6 border-b border-border"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-mono tracking-[0.1em] text-amber uppercase">
                      {item.source}
                    </span>
                    <span className="text-xs text-text-muted">•</span>
                    <span className="text-xs font-mono tracking-[0.05em] text-text-muted uppercase">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-text font-display">
                    {item.title}
                  </h3>
                  <div className="mt-3 border-l-2 border-amber/30 pl-4">
                    <p className="text-xs font-mono uppercase tracking-[0.1em] text-amber mb-1">
                      Winsemius Assessment
                    </p>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {item.relevance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-text md:text-3xl">
              Sources we monitor
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {thinktanks.length} European defence think tanks, research agencies,
              and policy institutes.
            </p>

            <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {thinktanks.map((tt) => (
                <div key={tt.name} className="bg-void p-4">
                  <p className="text-sm font-semibold text-text">{tt.name}</p>
                  <p className="text-xs text-text-muted mt-1">{tt.location}</p>
                  <p className="text-xs text-text-secondary mt-1">{tt.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface py-16 md:py-20 border-t border-border">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-text md:text-3xl">
              First edition: April 2026
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Get notified when it drops.
            </p>
            <a
              href="mailto:info@winsemius.eu?subject=Digest%20subscription"
              className="mt-6 inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
            >
              Subscribe via email
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
