"use client";

import { useState, useRef, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const EXAMPLE_PROMPTS = [
  "Dutch startup, TRL 4 autonomous drone swarm for maritime ISR. €2M needed to reach TRL 6.",
  "Belgian cyber defence SME, post-revenue, need €5M for NATO-grade SOC platform scale-up.",
  "Estonian dual-use sensor company, TRL 3, want to enter EU defence market from scratch.",
  "We make counter-drone RF systems, TRL 7, need production funding for a Dutch MoD contract.",
];

function formatResponse(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("# ") && !trimmed.startsWith("## ")) {
      elements.push(
        <h3
          key={i}
          className="text-lg font-bold text-amber tracking-[-0.02em] mt-6 mb-3 first:mt-0"
        >
          {trimmed.replace(/^#\s+/, "")}
        </h3>
      );
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h4
          key={i}
          className="text-sm font-mono uppercase tracking-[0.12em] text-amber/80 mt-5 mb-2 border-b border-border/50 pb-1"
        >
          {trimmed.replace(/^##\s+/, "")}
        </h4>
      );
    } else if (trimmed.startsWith("- **")) {
      const match = trimmed.match(/^- \*\*(.+?)\*\*:?\s*(.*)/);
      if (match) {
        elements.push(
          <div key={i} className="flex gap-2 text-sm leading-relaxed ml-2 mb-1">
            <span className="text-amber/50 shrink-0">&#8250;</span>
            <span>
              <span className="text-text font-medium">{match[1]}:</span>{" "}
              <span className="text-text-secondary">{match[2]}</span>
            </span>
          </div>
        );
      }
    } else if (trimmed.startsWith("- ")) {
      const content = trimmed.replace(/^-\s+/, "");
      const labelMatch = content.match(/^(.+?):\s+(.*)/);
      if (labelMatch) {
        elements.push(
          <div key={i} className="flex gap-2 text-sm leading-relaxed ml-2 mb-1">
            <span className="text-amber/50 shrink-0">&#8250;</span>
            <span>
              <span className="text-text-secondary">{labelMatch[1]}:</span>{" "}
              <span className="text-text">{labelMatch[2]}</span>
            </span>
          </div>
        );
      } else {
        elements.push(
          <div key={i} className="flex gap-2 text-sm leading-relaxed ml-2 mb-1">
            <span className="text-amber/50 shrink-0">&#8250;</span>
            <span className="text-text-secondary">{content}</span>
          </div>
        );
      }
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(
        <p key={i} className="text-sm font-medium text-text mt-3 mb-1">
          {trimmed.replace(/\*\*/g, "")}
        </p>
      );
    } else if (trimmed === "") {
      elements.push(<div key={i} className="h-1" />);
    } else {
      elements.push(
        <p key={i} className="text-sm leading-relaxed text-text-secondary mb-1">
          {trimmed}
        </p>
      );
    }
  });

  return elements;
}

export default function FundingStrategist() {
  const sectionRef = useReveal();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (resultRef.current && messages.length > 0) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [messages]);

  async function submit(text: string) {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/strategist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      setMessages([...newMessages, { role: "assistant", content: data.response }]);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit(input);
    }
  }

  function reset() {
    setMessages([]);
    setInput("");
    setError(null);
    inputRef.current?.focus();
  }

  const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");
  const hasResult = !!lastAssistant;

  return (
    <section
      id="strategist"
      className="relative bg-surface py-24 md:py-32 border-t border-border overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="reveal mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
              AI Tool
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-text md:text-4xl">
            Funding Strategist
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary max-w-2xl">
            Describe your project in a few sentences. Get a structured Funding Decision
            Card with lanes, deadlines, consortium design, and a 2-week sprint plan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Input panel */}
          <div className="reveal stagger-1 lg:col-span-2">
            <div className="briefing-card p-6">
              <label className="block text-xs font-mono uppercase tracking-[0.15em] text-amber mb-3">
                Your project
              </label>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. Dutch startup building autonomous counter-drone systems, TRL 5, need €3M to reach production..."
                rows={5}
                className="w-full resize-none bg-surface border border-border px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-amber/50 transition-colors font-body"
                disabled={loading}
              />

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => submit(input)}
                  disabled={loading || !input.trim()}
                  className="flex-1 px-5 py-3 text-xs font-mono uppercase tracking-[0.1em] border border-amber bg-amber/10 text-amber hover:bg-amber/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {loading ? "Analysing..." : "Generate Strategy"}
                </button>
                {hasResult && (
                  <button
                    onClick={reset}
                    className="px-4 py-3 text-xs font-mono uppercase tracking-[0.1em] border border-border text-text-muted hover:border-amber/30 hover:text-text-secondary transition-colors"
                  >
                    Reset
                  </button>
                )}
              </div>

              <p className="mt-3 text-[0.65rem] font-mono text-text-muted">
                Enter to submit &middot; AI-generated strategic guidance &middot; verify
                independently
              </p>

              {/* Example prompts */}
              {!hasResult && !loading && (
                <div className="mt-6 border-t border-border pt-4">
                  <span className="text-[0.65rem] font-mono uppercase tracking-[0.15em] text-text-muted block mb-3">
                    Try an example
                  </span>
                  <div className="grid gap-1.5">
                    {EXAMPLE_PROMPTS.map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setInput(prompt);
                          inputRef.current?.focus();
                        }}
                        className="text-left px-3 py-2 text-xs text-text-secondary border border-border/50 hover:border-amber/30 hover:text-text transition-all duration-200 bg-surface/50 leading-relaxed"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Result panel */}
          <div className="reveal stagger-2 lg:col-span-3" ref={resultRef}>
            <div className="briefing-card p-6 min-h-[400px] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-amber">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                  Funding Decision Card
                </div>
                {hasResult && (
                  <span className="text-[0.6rem] font-mono text-text-muted">
                    Winsemius Strategist
                  </span>
                )}
              </div>

              {loading && (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex gap-1.5 justify-center mb-4">
                      <span
                        className="h-2 w-2 rounded-full bg-amber/60 animate-pulse"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="h-2 w-2 rounded-full bg-amber/60 animate-pulse"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="h-2 w-2 rounded-full bg-amber/60 animate-pulse"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                    <p className="text-xs font-mono text-text-muted">
                      Analysing funding lanes...
                    </p>
                  </div>
                </div>
              )}

              {!loading && !hasResult && (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center max-w-sm">
                    <div className="h-12 w-12 rounded-full border border-amber/20 flex items-center justify-center mb-4 mx-auto">
                      <span className="text-amber text-lg">&#9670;</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Your Funding Decision Card will appear here — with recommended
                      lanes, deadlines, consortium design, and a GO/NO-GO sprint plan.
                    </p>
                  </div>
                </div>
              )}

              {!loading && lastAssistant && (
                <div className="flex-1 overflow-y-auto pr-2 -mr-2 custom-scrollbar">
                  {formatResponse(lastAssistant.content)}

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="text-xs text-text-muted leading-relaxed">
                      Need hands-on support?{" "}
                      <a
                        href="mailto:info@winsemius.eu"
                        className="text-amber hover:text-amber-bright transition-colors"
                      >
                        info@winsemius.eu
                      </a>{" "}
                      &middot; Follow up with more details to refine this strategy.
                    </p>

                    {/* Follow-up input */}
                    <div className="flex gap-2 mt-3">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            submit(input);
                          }
                        }}
                        placeholder="Ask a follow-up..."
                        className="flex-1 bg-surface border border-border px-3 py-2 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-amber/50 transition-colors font-body"
                        disabled={loading}
                      />
                      <button
                        onClick={() => submit(input)}
                        disabled={loading || !input.trim()}
                        className="px-4 py-2 text-xs font-mono uppercase tracking-[0.1em] border border-amber bg-amber/10 text-amber hover:bg-amber/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-6 flex justify-center">
            <div className="px-4 py-2 text-sm text-red border border-red/20 bg-red/5">
              {error}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
