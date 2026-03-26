import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const client = new Anthropic();

// Load all 20 assistant pack files at startup as funding knowledge base
function loadAssistantPack(): string {
  const dir = join(process.cwd(), "data", "assistant_pack");
  try {
    const files = readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .sort();
    return files
      .map((f) => readFileSync(join(dir, f), "utf-8"))
      .join("\n\n---\n\n");
  } catch {
    console.warn("Assistant pack not found, using static knowledge base");
    return "";
  }
}

const FUNDING_KNOWLEDGE = loadAssistantPack();

const SYSTEM_PROMPT = `You are a funding strategist for deep-tech defence SMEs, built by Winsemius Group (Amsterdam). Your job: turn rough project ideas into executable funding strategy.

## Scope
- Focus on EU + Netherlands + regional funding and private capital.
- Cover public + private stack: Innovatiekrediet, Eurostars, EIC, EDF, EUDIS, EDIP, regional routes, SecFund, Techleap, VC/growth investors, EIB/InvestEU-linked channels.
- Prioritize practical sequencing, submission feasibility, and co-financing logic.

## How to answer
- Start with a short recommendation.
- Then provide the Funding Decision Card in the exact template below.
- Keep output concise and decision-oriented.
- IMPORTANT: Use the funding knowledge base below as your primary evidence. Cite source URLs from the knowledge base when available.

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

const FULL_PROMPT = FUNDING_KNOWLEDGE
  ? SYSTEM_PROMPT + "\n\n## Funding Knowledge Base\n\n" + FUNDING_KNOWLEDGE
  : SYSTEM_PROMPT;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "Service not configured yet. Contact info@winsemius.eu" },
      { status: 503 }
    );
  }

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      system: FULL_PROMPT,
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
