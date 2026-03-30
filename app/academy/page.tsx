"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";
import { militaryDroneOpsCourse } from "./data/course-data";

const course = militaryDroneOpsCourse;

const audiences = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Military Personnel",
    description: "Officers and operators transitioning to drone-integrated operations",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Defence Industry",
    description: "Engineers and programme managers working with UAS technology",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
        <path d="M2 20h20M5 20V8l7-5 7 5v12" />
        <path d="M9 20v-4h6v4" />
      </svg>
    ),
    title: "Government & Policy",
    description: "Procurement officers and policy makers overseeing drone programmes",
  },
];

const learningPoints = [
  "EU EASA regulatory framework and military exemptions",
  "Drone systems technology: fixed-wing, multirotor, VTOL, payloads, and sensors",
  "Mission planning, airspace classification, and risk assessment",
  "Flight operations, emergency procedures, and crew resource management",
  "ISR techniques, surveillance patterns, and real-time data exploitation",
  "Counter-UAS threat detection and electronic warfare fundamentals",
];

const steps = [
  {
    number: "01",
    label: "Enrol",
    description: "Choose your programme and get instant access",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Learn",
    description: "Work through video lessons and reading material at your own pace",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Test",
    description: "Validate your knowledge with graded assessments",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    number: "04",
    label: "Certify",
    description: "Download your Winsemius Defence certificate",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Do I need prior drone experience?",
    a: "No, the foundation programme starts from basics. It is designed for defence professionals who are new to drone operations and need a comprehensive grounding in regulations, technology, and tactical employment.",
  },
  {
    q: "Is this an official EASA certification?",
    a: "This is a professional knowledge certification issued by Winsemius Group. For official EASA remote pilot certificates, we partner with accredited examination centres and can guide you through the process.",
  },
  {
    q: "How long do I have to complete the course?",
    a: "You have 12 months from enrolment to complete all modules and assessments. Most students complete the programme in 4-6 weeks at a self-paced schedule.",
  },
  {
    q: "Can my organisation enrol multiple people?",
    a: "Yes, we offer group pricing for 5+ seats with dedicated support and progress reporting for team leads. Contact us for a tailored quote.",
  },
  {
    q: "What happens if I fail a quiz?",
    a: "You can retake each quiz unlimited times. We encourage reviewing the module material before reattempting. Your highest score is recorded.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. Upon completing all six modules and passing all quizzes with a score of 70% or higher, you will receive a digital Winsemius Defence Drone Certificate that you can download and share.",
  },
];

const credibilityPoints = [
  "Aligned with EASA regulations",
  "Based on NATO STANAG frameworks",
  "Updated quarterly with latest doctrine",
];

export default function AcademyPage() {
  const heroRef = useReveal();
  const audienceRef = useReveal();
  const featuredRef = useReveal();
  const curriculumRef = useReveal();
  const howRef = useReveal();
  const credibilityRef = useReveal();
  const faqRef = useReveal();
  const ctaRef = useReveal();

  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Nav />
      <main className="bg-void">
        {/* ─── HERO ─── */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden" ref={heroRef}>
          {/* Subtle grid background */}
          <div className="absolute inset-0 grid-bg opacity-[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-b from-amber/[0.03] via-transparent to-transparent" />

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="reveal max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-amber" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber">
                  Professional Training
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-[-0.04em] text-text md:text-6xl lg:text-7xl leading-[1.05]">
                Winsemius Defence
                <br />
                <span className="text-amber">Drone Academy</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl leading-relaxed text-text-secondary max-w-2xl">
                Professional certification programmes for military and defence drone operations.
                EU-compliant training from regulations to tactical deployment.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 bg-amber px-7 py-3.5 text-sm font-mono uppercase tracking-[0.1em] text-void hover:bg-amber-bright transition-colors duration-200 font-semibold"
                >
                  Browse Courses
                </a>
                <a
                  href="mailto:info@winsemius.eu?subject=Drone%20Academy%20—%20Advisor%20Request"
                  className="inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-7 py-3.5 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
                >
                  Talk to an Advisor
                </a>
              </div>
            </div>

            {/* Trust bar */}
            <div className="reveal stagger-2 mt-16 border-t border-border pt-8">
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted mb-6">
                Trusted by defence professionals across 12 NATO nations
              </p>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  { value: "500+", label: "Graduates" },
                  { value: "6", label: "Certification tracks" },
                  { value: "97%", label: "Pass rate" },
                  { value: "EASA", label: "Aligned curriculum" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl md:text-3xl font-display font-bold text-amber">{s.value}</p>
                    <p className="mt-1 text-sm text-text-secondary">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHO IS THIS FOR ─── */}
        <section className="bg-surface py-20 md:py-28 border-t border-b border-border" ref={audienceRef}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal text-center mb-14">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber">
                Target Audience
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl">
                Who Is This For?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {audiences.map((a, i) => (
                <div
                  key={i}
                  className={`reveal stagger-${i + 1} border border-border bg-void p-8 md:p-10 transition-all duration-300 hover:border-amber/30 group`}
                >
                  <div className="mb-6 w-14 h-14 border border-amber/20 bg-amber/5 flex items-center justify-center group-hover:bg-amber/10 transition-colors duration-300">
                    {a.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-text mb-3">
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED COURSE ─── */}
        <section id="courses" className="py-20 md:py-28" ref={featuredRef}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-amber" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber">
                  Featured Programme
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl">
                Our Flagship Course
              </h2>
            </div>

            <div className="reveal stagger-1 grid gap-8 lg:grid-cols-5">
              {/* Left: Course info */}
              <div className="lg:col-span-3 border border-border bg-surface p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-void bg-amber px-2.5 py-1 font-semibold">
                    Foundation
                  </span>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-[0.1em]">
                    {course.duration} &middot; {course.modules.length} modules
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-text tracking-[-0.02em]">
                  {course.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  {course.description}
                </p>

                <div className="mt-8">
                  <h4 className="text-sm font-mono uppercase tracking-[0.15em] text-text-muted mb-4">
                    What you will learn
                  </h4>
                  <ul className="space-y-3">
                    {learningPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-sm text-text-secondary">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Pricing card */}
              <div className="lg:col-span-2 border border-amber/20 bg-surface p-8 md:p-10 flex flex-col">
                <div className="mb-6">
                  <p className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted mb-2">
                    Course Investment
                  </p>
                  <p className="text-3xl font-display font-bold text-text">
                    Contact for pricing
                  </p>
                  <p className="mt-1 text-xs text-text-muted">Group discounts available for 5+ seats</p>
                </div>

                <Link
                  href="/academy/military-drone-ops"
                  className="block w-full bg-amber text-center py-3.5 text-sm font-mono uppercase tracking-[0.1em] text-void font-semibold hover:bg-amber-bright transition-colors duration-200"
                >
                  Enrol Now
                </Link>

                <p className="text-center text-xs text-text-muted mt-3">
                  30-day money-back guarantee
                </p>

                <div className="mt-8 border-t border-border pt-6 space-y-3">
                  {[
                    "6 in-depth modules",
                    "30 graded quiz questions",
                    "Certificate of completion",
                    "12 months access",
                    "Self-paced learning",
                    "Expert-developed content",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CURRICULUM ACCORDION ─── */}
        <section className="bg-surface py-20 md:py-28 border-t border-border" ref={curriculumRef}>
          <div className="mx-auto max-w-4xl px-6">
            <div className="reveal text-center mb-14">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber">
                Curriculum
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl">
                What You Will Learn
              </h2>
              <p className="mt-4 text-base text-text-secondary max-w-2xl mx-auto">
                Six comprehensive modules covering everything from EU regulations to counter-drone warfare.
              </p>
            </div>

            <div className="reveal stagger-1 space-y-0">
              {course.modules.map((m, i) => {
                const isOpen = openModule === i;
                return (
                  <div key={m.id} className="border border-border border-b-0 last:border-b bg-void">
                    <button
                      onClick={() => setOpenModule(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 p-5 md:p-6 text-left hover:bg-surface-raised/30 transition-colors duration-200 group"
                    >
                      <span className="text-lg font-mono text-amber/50 shrink-0 w-8">
                        {String(m.number).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-display font-semibold text-text group-hover:text-amber transition-colors duration-200">
                          {m.title}
                        </h3>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 shrink-0 mr-4">
                        <span className="text-xs font-mono text-text-muted uppercase tracking-[0.1em]">
                          {m.sections.length} sections
                        </span>
                        <span className="text-xs text-text-muted">&middot;</span>
                        <span className="text-xs font-mono text-text-muted uppercase tracking-[0.1em]">
                          {m.duration}
                        </span>
                      </div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`text-text-muted shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border">
                        <p className="mt-4 text-sm text-text-secondary leading-relaxed mb-4">
                          {m.description}
                        </p>
                        <div className="space-y-2">
                          {m.sections.map((s, si) => (
                            <div key={si} className="flex items-center gap-3 py-1.5">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-muted shrink-0">
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                              </svg>
                              <span className="text-sm text-text-secondary">{s.title}</span>
                            </div>
                          ))}
                          <div className="flex items-center gap-3 py-1.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber shrink-0">
                              <polyline points="9 11 12 14 22 4" />
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            <span className="text-sm text-amber">{m.quiz.length}-question quiz</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="py-20 md:py-28 border-t border-border" ref={howRef}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal text-center mb-14">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber">
                Process
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl">
                How It Works
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`reveal stagger-${i + 1} text-center`}
                >
                  <div className="mx-auto mb-6 w-16 h-16 border border-amber/20 bg-amber/5 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono text-amber/50 uppercase tracking-[0.15em]">
                    Step {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-display font-semibold text-text">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CREDIBILITY ─── */}
        <section className="bg-surface py-20 md:py-28 border-t border-border" ref={credibilityRef}>
          <div className="mx-auto max-w-4xl px-6">
            <div className="reveal grid gap-10 md:grid-cols-2 items-center">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber">
                  Our Expertise
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl">
                  Developed by Defence Experts
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  Winsemius Group brings deep expertise in European defence technology, procurement, and
                  operations. Our training programmes are developed by practitioners who understand
                  the operational realities of military drone deployment.
                </p>
              </div>
              <div className="space-y-4">
                {credibilityPoints.map((point, i) => (
                  <div
                    key={i}
                    className={`reveal stagger-${i + 1} flex items-center gap-4 border border-border bg-void p-5`}
                  >
                    <div className="w-10 h-10 border border-amber/20 bg-amber/5 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-text">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-20 md:py-28 border-t border-border" ref={faqRef}>
          <div className="mx-auto max-w-3xl px-6">
            <div className="reveal text-center mb-14">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber">
                FAQ
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="reveal stagger-1 space-y-0">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="border border-border border-b-0 last:border-b bg-surface">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-surface-raised/30 transition-colors duration-200"
                    >
                      <h3 className="text-base font-display font-semibold text-text">
                        {faq.q}
                      </h3>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`text-text-muted shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border">
                        <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-surface py-20 md:py-28 border-t border-border" ref={ctaRef}>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="reveal">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-text md:text-4xl">
                Ready to upskill your team?
              </h2>
              <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
                Get in touch to discuss your training needs or browse our programmes to get started today.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:info@winsemius.eu?subject=Drone%20Academy%20enquiry"
                  className="inline-flex items-center gap-2 bg-amber px-7 py-3.5 text-sm font-mono uppercase tracking-[0.1em] text-void hover:bg-amber-bright transition-colors duration-200 font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 border border-amber/30 bg-amber/5 px-7 py-3.5 text-sm font-mono uppercase tracking-[0.1em] text-amber hover:bg-amber/10 transition-colors duration-200"
                >
                  Browse Courses
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
