import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AdvisorChat from "../components/AdvisorChat";

export const metadata = {
  title: "Funding Strategy Advisor — Winsemius Group",
  description:
    "Free AI-powered defence funding strategy advisor. Get personalized guidance on EU defence funding instruments, grant applications, and positioning.",
};

export default function AdvisorPage() {
  return (
    <>
      <Nav />
      <main className="bg-void min-h-screen">
        <section className="pt-32 pb-8 md:pt-40 md:pb-12">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-amber" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                AI Advisor
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-[-0.04em] text-text md:text-5xl">
              Funding Strategy Advisor
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary max-w-2xl">
              Tell us about your technology and we&apos;ll identify the EU defence
              funding instruments most relevant to you. Free, instant, no
              strings attached.
            </p>
            <p className="mt-2 text-sm text-text-muted">
              Powered by AI. For hands-on support,{" "}
              <a href="mailto:info@winsemius.eu" className="text-amber hover:text-amber-bright transition-colors">
                get in touch
              </a>.
            </p>
          </div>
        </section>

        <AdvisorChat />
      </main>
      <Footer />
    </>
  );
}
