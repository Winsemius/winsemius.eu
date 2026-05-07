import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { getService, getServiceSlugs, services } from "../services-data";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} — Winsemius`,
    description: service.intro,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Nav />
      <main className="bg-void text-text">
        {/* Hero / header */}
        <section className="relative pt-36 pb-20 md:pt-40 md:pb-28 border-b border-border">
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-text-muted hover:text-amber transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              All services
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="h-px w-8 bg-amber" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                Service
              </span>
              {service.flagship && (
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber border border-amber/40 px-2 py-1">
                  Flagship
                </span>
              )}
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.04em] text-text md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
              {service.intro}
            </p>

            <div className="mt-10 inline-block border border-border px-6 py-4">
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-amber">
                Outcome
              </p>
              <p className="mt-2 text-base font-medium text-text md:text-lg">
                {service.outcome}
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-base leading-relaxed text-text-secondary md:text-lg max-w-3xl">
              {service.body}
            </p>

            <div className="mt-16 space-y-16">
              {service.sections.map((section, i) => (
                <div key={i}>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-amber tabular-nums text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-semibold tracking-[-0.02em] text-text font-display md:text-3xl">
                      {section.title}
                    </h2>
                  </div>
                  {section.body && (
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
                      {section.body}
                    </p>
                  )}
                  {section.bullets.length > 0 && (
                    <ul className="mt-6 grid gap-3 md:grid-cols-2">
                      {section.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 border border-border p-4 hover:border-amber/30 transition-colors"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                          <span className="text-sm leading-relaxed text-text-secondary">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl max-w-2xl">
                  Tell us about your project.
                </h2>
                <p className="mt-4 max-w-2xl text-base text-text-secondary">
                  A 30-minute conversation. Free, no obligations.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 border border-amber bg-amber px-6 py-3 text-sm font-mono uppercase tracking-[0.15em] text-void hover:bg-amber/90 transition-colors"
                >
                  Book a free consultation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link
                  href="/#advisor"
                  className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-mono uppercase tracking-[0.15em] text-text-secondary hover:border-amber/50 hover:text-amber transition-colors"
                >
                  Try the funding strategist
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-amber" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                Other services
              </span>
            </div>
            <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block bg-void p-6 transition-colors hover:bg-surface-raised/50"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {s.flagship && (
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-amber border border-amber/40 px-2 py-0.5">
                        Flagship
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold tracking-[-0.01em] text-text font-display group-hover:text-amber">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">
                    {s.intro}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
