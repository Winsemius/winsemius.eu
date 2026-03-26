import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const FUNDINGSTRAT_URL = process.env.FUNDINGSTRAT_API_URL || "";
const FUNDINGSTRAT_KEY = process.env.FUNDINGSTRAT_API_KEY || "";

const SYSTEM_PROMPT = `You are a funding strategist for deep-tech defence SMEs, built by Winsemius Group (Amsterdam). Your job: turn rough project ideas into executable funding strategy.

## Scope
- Focus on EU + Netherlands + regional funding and private capital.
- Cover public + private stack: Innovatiekrediet, Eurostars, EIC, EDF, EUDIS, EDIP, regional routes, SecFund, Techleap, VC/growth investors, EIB/InvestEU-linked channels.
- Prioritize practical sequencing, submission feasibility, and co-financing logic.

## How to answer
- Start with a short recommendation.
- Then provide the Funding Decision Card in the exact template below.
- Keep output concise and decision-oriented.
- IMPORTANT: Use the RAG-retrieved funding data below as your primary evidence. Cite source URLs from the retrieved data when available.

## Behavior rules
- Do not hallucinate calls, budgets, deadlines, or eligibility.
- Do not present uncertain data as fact. Mark any uncertainty explicitly with [UNVERIFIED] or [CHECK].
- Do not give legal/tax/accounting advice; give strategic guidance only.
- If information is unclear, outdated, or missing, state that explicitly and say what must be verified.
- Private track is mandatory in every answer. If no credible private lane exists, explicitly say "No credible private lane yet" and provide a 30-day plan to create one.
- Use exact dates where known. If a deadline is approximate, mark it [ESTIMATED].
- Keep total response under 350 words unless the user asks for detail.

## Output Template

Always use this exact structure:

# Funding Decision Card

## 1) Project Snapshot
- Company:
- Project:
- TRL now → target:
- Geography:
- Defence/dual-use fit:

## 2) Recommended Lane Stack
- Primary public lane:
- Backup public lane:
- Primary private lane:
- Optional regional lane:

**Private funding track:**
- Target investor type (seed / growth / strategic):
- Target names (max 5):
- Round size target:
- Instrument (equity / convertible / venture debt):
- Co-investment logic with public lane:
- Readiness gaps to close in 30 days:

## 3) Deadlines (Exact Dates)
- Lane 1:
- Lane 2:
- Lane 3:
- Verification date:

## 4) Partner/Consortium Design
- Lead:
- Technical partners needed:
- Validation/end-user partner:
- Funding PMO owner:

## 5) 2-Week EUR 5k GO/NO-GO Sprint
- Work item 1 + budget:
- Work item 2 + budget:
- Work item 3 + budget:
- Work item 4 + budget:
- Work item 5 + budget:

## 6) GO / HOLD
- GO if:
- HOLD if:

## 7) Source Anchors
- URL 1:
- URL 2:
- URL 3:

For hands-on support with applications, coalition building, or strategy execution, direct users to info@winsemius.eu or the /services pages.`;

interface RagMatch {
  program: string;
  issuer: string;
  fit: string;
  funding_type: string;
  estimated_amount_min_eur: number;
  estimated_amount_max_eur: number;
  estimated_win_probability: number;
  effort_days: number;
  source_refs: string[];
}

interface RagSource {
  rank: number;
  title: string;
  issuer: string;
  source_url: string;
}

interface RagResponse {
  analysis: {
    project_tldr: string;
    matches: RagMatch[];
    critical_assumptions: string[];
  };
  business_case: {
    verdict: string;
    verdict_reason: string;
    best_expected_value_eur: number;
    portfolio_expected_value_eur: number;
    advisory_cost_eur: number;
    net_after_cost_best_eur: number;
  };
  sources: RagSource[];
}

async function fetchRagContext(sketch: string): Promise<string | null> {
  if (!FUNDINGSTRAT_URL) return null;

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (FUNDINGSTRAT_KEY) {
      headers["x-api-key"] = FUNDINGSTRAT_KEY;
    }

    const res = await fetch(`${FUNDINGSTRAT_URL}/proposal`, {
      method: "POST",
      headers,
      body: JSON.stringify({ sketch, max_matches: 5, advisory_cost: 5000 }),
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) return null;

    const data: RagResponse = await res.json();

    const lines: string[] = [];
    lines.push("## RAG-Retrieved Funding Intelligence\n");

    // Business case verdict
    const bc = data.business_case;
    lines.push(`**Heuristic verdict: ${bc.verdict}** — ${bc.verdict_reason}`);
    lines.push(
      `Best expected value: €${bc.best_expected_value_eur.toLocaleString()} | Portfolio EV: €${bc.portfolio_expected_value_eur.toLocaleString()} | Net after €5k: €${bc.net_after_cost_best_eur.toLocaleString()}\n`
    );

    // Matches
    lines.push("### Matched Funding Programmes\n");
    for (const m of data.analysis.matches) {
      const range =
        m.estimated_amount_min_eur > 0 || m.estimated_amount_max_eur > 0
          ? `€${m.estimated_amount_min_eur.toLocaleString()} – €${m.estimated_amount_max_eur.toLocaleString()}`
          : "Amount unknown";
      lines.push(`**${m.program}** (${m.issuer})`);
      lines.push(
        `- Fit: ${m.fit} | Type: ${m.funding_type} | Win prob: ${(m.estimated_win_probability * 100).toFixed(0)}% | Effort: ${m.effort_days}d`
      );
      lines.push(`- Amount range: ${range}`);
      lines.push("");
    }

    // Sources with URLs
    lines.push("### Source Documents\n");
    for (const s of data.sources) {
      const url = s.source_url ? ` — ${s.source_url}` : "";
      lines.push(`- ${s.title} (${s.issuer})${url}`);
    }

    // Assumptions
    if (data.analysis.critical_assumptions?.length) {
      lines.push("\n### Caveats");
      for (const a of data.analysis.critical_assumptions) {
        lines.push(`- ${a}`);
      }
    }

    return lines.join("\n");
  } catch (e) {
    console.error("RAG fetch failed, falling back to static knowledge:", e);
    return null;
  }
}

const STATIC_KNOWLEDGE = `
## Knowledge Base (Static Fallback)

### Major EU Instruments
- **ReArm Europe / Readiness 2030**: €800B/10yr, national fiscal unlocks + SAFE + EIB/EIF
- **SAFE Loans**: €150B, near-sovereign rates, collaborative procurement, min 2 member states
- **EDF**: ~€1B/yr (2026), 75-100% co-financing, min 3 MS consortia, DG DEFIS
- **EDIP**: €1.5B (2025-2027), production ramp-up, SME focus, supply chain resilience
- **NATO DIANA**: Accelerator + test centres, dual-use deep tech
- **EIB/EIF**: Equity, loans, guarantees — expanded defence mandate

### Netherlands National
- **Innovatiekrediet**: Risk loans for innovation, up to €10M
- **Eurostars**: For R&D-performing SMEs, international collaboration
- **DISI / Dutch Defence Innovation**: National defence innovation hub
- **Techleap**: Startup scaling support (connections, not direct funding)
- **SecFund / DTIF**: Defence and security specific venture instruments

### Private Capital
- **Paladin Capital**: Defence/cyber VC
- **NATO Innovation Fund**: €1B, deep tech defence
- **Indelible Ventures**: European defence tech
- **Alpine Space Ventures**: Dual-use/space
- **HV Capital, Earlybird**: Growth-stage with defence thesis

### Key Deadlines Context
- EDF 2026 calls: typically open Q1-Q2, close Q3
- EDIP: rolling/phased calls expected 2025-2027
- Innovatiekrediet: continuous application
- EIC Accelerator: cut-off dates ~March, June, October`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "Service not configured yet. Contact info@winsemius.eu" },
      { status: 503 }
    );
  }

  try {
    // Extract the user's sketch from the conversation
    const lastUserMsg = [...messages]
      .reverse()
      .find((m: { role: string }) => m.role === "user");
    const firstUserMsg = messages.find(
      (m: { role: string }) => m.role === "user"
    );
    const sketch = [firstUserMsg?.content, lastUserMsg?.content]
      .filter(Boolean)
      .join("\n\n");

    // Fetch RAG context (falls back to static knowledge on failure)
    const ragContext = await fetchRagContext(sketch);
    const knowledge = ragContext || STATIC_KNOWLEDGE;

    const fullPrompt = SYSTEM_PROMPT + "\n\n" + knowledge;

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      system: fullPrompt,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    return Response.json({ response: text });
  } catch (error) {
    console.error("Strategist API error:", error);
    return Response.json(
      { error: "Something went wrong. Try again or contact info@winsemius.eu" },
      { status: 500 }
    );
  }
}
