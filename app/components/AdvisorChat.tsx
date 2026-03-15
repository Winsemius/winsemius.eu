"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_PROMPTS = [
  "We build autonomous drone swarms for ISR. What EU funding fits us?",
  "We're a Dutch cyber defence startup — where should we apply?",
  "How do we build a consortium for an EDF application?",
  "What funding exists for dual-use sensor technology?",
];

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] md:max-w-[75%] px-5 py-4 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-amber/10 border border-amber/20 text-text"
            : "bg-surface-raised border border-border text-text-secondary"
        }`}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-[0.15em] text-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Advisor
          </div>
        )}
        {msg.content}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-surface-raised border border-border px-5 py-4">
        <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-[0.15em] text-amber">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          Advisor
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-text-muted animate-pulse" style={{ animationDelay: "0ms" }} />
          <span className="h-2 w-2 rounded-full bg-text-muted animate-pulse" style={{ animationDelay: "150ms" }} />
          <span className="h-2 w-2 rounded-full bg-text-muted animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

export default function AdvisorChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/advisor", {
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
      sendMessage(input);
    }
  }

  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Chat area */}
        <div className="briefing-card overflow-hidden">
          {/* Messages */}
          <div
            ref={scrollRef}
            className="p-6 space-y-4 overflow-y-auto"
            style={{ minHeight: "400px", maxHeight: "60vh" }}
          >
            {messages.length === 0 && !loading && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="h-12 w-12 rounded-full border border-amber/30 flex items-center justify-center mb-6">
                  <span className="text-amber text-lg">&#9670;</span>
                </div>
                <p className="text-text-secondary text-sm max-w-md">
                  Describe your technology, company stage, and what you&apos;re looking for.
                  I&apos;ll identify the most relevant EU defence funding instruments for you.
                </p>

                {/* Suggested prompts */}
                <div className="mt-8 grid gap-2 w-full max-w-lg">
                  {SUGGESTED_PROMPTS.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(prompt)}
                      className="text-left px-4 py-3 text-sm text-text-secondary border border-border hover:border-amber/30 hover:text-text transition-all duration-200 bg-surface-raised/50"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <MessageBubble key={i} msg={msg} />
            ))}

            {loading && <TypingIndicator />}

            {error && (
              <div className="flex justify-center">
                <div className="px-4 py-2 text-sm text-red border border-red/20 bg-red/5">
                  {error}
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="border-t border-border p-4 bg-surface-raised/30">
            <div className="flex gap-3">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Describe your technology and funding needs..."
                rows={1}
                className="flex-1 resize-none bg-surface border border-border px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-amber/50 transition-colors font-body"
                disabled={loading}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="shrink-0 px-6 py-3 text-xs font-mono uppercase tracking-[0.1em] border border-amber bg-amber/10 text-amber hover:bg-amber/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
            <p className="mt-2 text-[0.65rem] font-mono text-text-muted">
              Press Enter to send &middot; Shift+Enter for new line &middot; AI-generated guidance — verify details independently
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
