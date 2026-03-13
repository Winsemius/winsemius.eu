import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Core Principles & Policy Framework — Winsemius Group",
  description:
    "Winsemius Group's working positions on defence capability, procurement, industrial policy, and capital markets.",
};

const principles = [
  {
    number: "01",
    title: "Effects Over Platforms",
    lead: "The wrong question has been driving European defence investment for decades.",
    body: `Governments and ministries have organised their thinking around platforms — how many aircraft, ships, or drones they own — and have treated that count as a proxy for capability. What matters is not what a force possesses but what it can achieve. Winsemius measures capability in operational outcomes:`,
    bullets: [
      "Area denial coverage (km²)",
      "ISR coverage, resolution, and refresh rate",
      "Communications uptime and redundancy",
      "Logistics throughput (tonnes/day)",
    ],
    footer:
      "Asset inventories are an input, not an output. Policy, procurement, and budget allocations must be reoriented around effects accordingly.",
  },
  {
    number: "02",
    title: "Surge Capacity as the True Measure of Readiness",
    lead: "If effects are the right measure of capability, then surge capacity is the right measure of readiness.",
    body: `Winsemius defines this as the ability to scale from concept to full operational capability within six weeks. A nation that can do that with a modest peacetime inventory is more defensible than one with a large static stockpile and no credible path to rapid expansion. Achieving genuine surge capacity requires structural changes:`,
    bullets: [
      "Pre-positioned tooling and supply chains",
      "Capacity Credits: pre-paid production capacity held in reserve and activated on short notice",
      "Availability Fees: supplier compensation for maintaining readiness, not only for delivering units",
      "Mean Time To Restore (MTTR) as a binding performance metric in every contract",
    ],
    footer:
      "Without these mechanisms in place, surge capacity remains a planning assumption rather than an operational reality.",
  },
  {
    number: "03",
    title: "A Focused Theatre: JEF, the Baltic, and the Drone Wall",
    lead: "Winsemius operates with a deliberately concentrated geographic and institutional focus.",
    body: `The Joint Expeditionary Force — a ten-nation grouping comprising the UK, Netherlands, Denmark, Sweden, Norway, Finland, Estonia, Latvia, Lithuania, and Iceland — is NATO-compatible but considerably more agile than the Alliance as a whole. Its Northern Flank and Baltic orientation aligns with the most pressing near-term security challenges in Europe.`,
    bullets: [
      "The Drone Wall is Winsemius's primary demonstrator project",
      "A continuous surveillance and denial capability along the Baltic frontier",
      "Dual-use by design, providing a live stress test of the surge capacity model",
      "The first of several replicable capability templates across the JEF region",
    ],
    footer: null,
  },
  {
    number: "04",
    title: "A Horizontal Technology Stack",
    lead: "Most defence technology has been built vertically, with bespoke platforms that cannot share components across adjacent systems.",
    body: `Winsemius's position is that this architecture is both strategically limiting and economically wasteful. The alternative is a horizontal technology stack — modular building blocks that operate across air, ground, sea, and space:`,
    bullets: [
      "Communications: RF, laser, and LEO mesh networks",
      "Sensing and Imaging: EO, IR, radar, and hyperspectral capabilities with AI processing at the edge",
      "Power and Energy: battery, solar, and hybrid power configurations",
      "Mechatronics: rapid prototyping and in-theatre manufacturing capability",
    ],
    footer:
      "This architecture enables faster adaptation, genuine supplier competition, and a significantly lower cost of iteration than bespoke platform development allows.",
  },
  {
    number: "05",
    title: "Contracts That Reward Readiness, Not Delivery",
    lead: "The legacy procurement model pays for units delivered and then loses interest in whether those units remain available or improvable.",
    body: `Winsemius considers this a fundamental misalignment of incentives. Outcome-based contracts must be structured around four binding performance metrics:`,
    bullets: [
      "Availability: is production and operational capacity ready when required?",
      "Time-to-Surge: how quickly can capability scale under pressure?",
      "MTTR: how fast is capability restored after disruption?",
      "Iteration Speed: how many improvements are introduced into fielded systems per quarter?",
    ],
    footer:
      "Shifting to this model means replacing per-unit payments with availability fees and capacity credits. It requires new contracting expertise within defence ministries and new accountability from suppliers — and Winsemius believes it should become the procurement standard across JEF nations.",
  },
  {
    number: "06",
    title: "Sovereignty Through Openness",
    lead: "There is a version of tech sovereignty that Winsemius rejects: the idea that strategic autonomy means building everything domestically.",
    body: `This tends to produce capability dependent on a small number of domestic vendors rather than a large number of foreign ones — the dependency problem is not solved, it is merely relocated. Real sovereignty is structural:`,
    bullets: [
      "Open interfaces and standards across all capability layers",
      "Multi-vendor ecosystems where genuine competition keeps the market honest",
      "Source code transparency in operationally critical systems",
      "Procurement rules that make vendor lock-in contractually impermissible",
    ],
    footer:
      "A nation that has built its capability on open architecture can replace any component, onboard any new supplier, and adapt to any new requirement. That is what strategic autonomy looks like in practice.",
  },
  {
    number: "07",
    title: "Opening Capital Markets to Defence Technology",
    lead: "One of the most consequential policy failures in European defence has been the effective exclusion of dual-use technology companies from mainstream capital markets.",
    body: `Investors have found the governance complexity, export control requirements, and classification concerns around defence-adjacent technology difficult to navigate. The result is that some of the most strategically important technology development in Europe is chronically underfunded. What it requires is a governance framework that gives investors transparency without compromising operational security:`,
    bullets: [
      "Clear documentation of usage and application at the appropriate classification level",
      "Export control and ITAR compliance built into company structures from the outset",
      "Reporting frameworks designed for institutional investor audiences",
      "Liquidity pathways including public listings and secondary markets",
    ],
    footer:
      "Amsterdam's Zuidas financial district is well-placed to anchor this kind of dual-use capital ecosystem. Winsemius sees building it as inseparable from the broader procurement and capability agenda.",
  },
];

const whitepapers = [
  {
    title:
      "The Funding Gap: Making the Case for a JEF Defence Capital Facility",
    description:
      "A policy paper arguing for the establishment of a dedicated, multi-government funding facility for JEF-aligned dual-use defence technology. The paper would make the economic and security case for pooled public capital as a catalyst for private investment, set out a governance model that satisfies both investor and security requirements, and propose concrete steps for JEF member states to establish the facility within existing treaty frameworks.",
  },
  {
    title:
      "From Purchase Orders to Performance Contracts: A Procurement Reform Agenda for JEF Nations",
    description:
      "A policy paper making the legislative and institutional case for replacing platform-based procurement with outcome-based SLA contracting across JEF defence ministries. The paper would identify the specific legal and regulatory barriers that currently prevent availability fee and capacity credit structures, propose model contract frameworks, and set out a realistic transition roadmap.",
  },
  {
    title:
      "Open by Default: The Innovation Case for Mandating Open Architecture in European Defence",
    description:
      "A policy paper arguing that requiring open interfaces and multi-vendor competition as a condition of public defence contracts is the single most effective lever available to accelerate innovation and reduce long-run capability costs. The paper would draw on precedents from the commercial technology sector, quantify the innovation premium that open architecture generates, and propose a JEF-level policy standard.",
  },
];

export default function PrinciplesPage() {
  return (
    <>
      <Nav />
      <main className="bg-paper">
        {/* Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              Policy Framework
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-ink md:text-6xl">
              Core Principles
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate max-w-2xl">
              Winsemius Group works at the intersection of defence technology,
              industrial policy, and capital markets. The principles below
              represent our working position on how European defence capability
              should be structured, contracted, and financed.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-parchment py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-xl leading-relaxed tracking-[-0.01em] text-ink font-display font-medium md:text-2xl">
              The structural assumptions underlying most European defence policy
              are badly out of date. Closing the gap between stated ambition and
              operational reality requires more than increased budgets. It
              requires a different way of thinking about what defence capability
              actually is, how it should be contracted, and who should be
              financing it.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            {principles.map((p, i) => (
              <article
                key={p.number}
                className={`${i > 0 ? "mt-16 pt-16 border-t border-rule" : ""}`}
              >
                <span className="text-xs font-medium tracking-[0.15em] text-accent uppercase">
                  Principle {p.number}
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-ink md:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink font-medium">
                  {p.lead}
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate">
                  {p.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                      {b}
                    </li>
                  ))}
                </ul>
                {p.footer && (
                  <p className="mt-6 text-base leading-relaxed text-slate">
                    {p.footer}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Proposed White Papers */}
        <section className="bg-parchment py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              Proposed White Papers
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-ink md:text-3xl">
              Where we are taking this
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              The following white papers develop the Winsemius policy agenda in
              three priority areas.
            </p>

            <div className="mt-12 space-y-8">
              {whitepapers.map((wp, i) => (
                <div
                  key={i}
                  className="border-l-2 border-accent pl-6"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                    {wp.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {wp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 border-t border-rule">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-lg text-slate">
              Want to discuss any of these positions?
            </p>
            <a
              href="mailto:info@winsemius.eu"
              className="mt-4 inline-block text-lg font-medium text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-colors"
            >
              info@winsemius.eu
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
