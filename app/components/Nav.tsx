"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const serviceItems = [
  { slug: "funding-navigator", label: "EU Funding Navigator" },
  { slug: "consortium-builder", label: "Consortium Builder" },
  { slug: "intelligence", label: "Defence Market Intelligence" },
  { slug: "procurement", label: "Procurement Fast-Track" },
  { slug: "investor-matching", label: "Investor Matching" },
  { slug: "export-compliance", label: "Export & Compliance" },
  { slug: "technology-scouting", label: "Defence Technology Scouting" },
  { slug: "mergers-acquisitions", label: "M&A Advisory" },
  { slug: "market-entry", label: "Market Entry Strategy" },
  { slug: "pricing-capture", label: "Pricing & Capture Strategy" },
];

const links = [
  { href: "/advisor", label: "Advisor", highlight: true },
  { href: "/principles", label: "Principles" },
  { href: "/funding", label: "Funding" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        setMenuOpen(false);

        if (pathname !== "/") {
          window.location.href = "/" + href;
          return;
        }

        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [pathname]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="flex items-center gap-3"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/logobrilonly.svg"
            alt="Winsemius"
            width={36}
            height={15}
            className="brightness-0 invert opacity-80"
          />
          <span className="font-display text-lg tracking-[-0.01em] text-text font-medium">
            Winsemius
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {/* Services dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="text-sm uppercase tracking-[0.1em] transition-colors duration-200 text-text-muted hover:text-amber flex items-center gap-1.5"
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== "/") {
                  window.location.href = "/#services";
                } else {
                  const el = document.querySelector("#services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Services
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="bg-void/95 backdrop-blur-md border border-border min-w-[280px] py-2">
                {serviceItems.map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-5 py-2.5 text-sm text-text-muted hover:text-amber hover:bg-surface-raised/50 transition-colors duration-150"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </li>

          {/* Other nav links */}
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className={`text-sm uppercase tracking-[0.1em] transition-colors duration-200 ${
                  "highlight" in l && l.highlight
                    ? "text-amber border border-amber/30 px-3 py-1.5 hover:bg-amber/10"
                    : "text-text-muted hover:text-amber"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-sm uppercase tracking-[0.1em] text-text-muted"
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-void/95 backdrop-blur-md px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {/* Services with expandable sub-items */}
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="text-base text-text uppercase tracking-[0.05em] flex items-center gap-2 w-full text-left"
              >
                Services
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <ul className="mt-3 ml-4 flex flex-col gap-2 border-l border-border pl-4">
                  {serviceItems.map((s) => (
                    <li key={s.slug}>
                      <a
                        href={`/services/${s.slug}`}
                        className="text-sm text-text-muted hover:text-amber transition-colors duration-150"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Other links */}
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className="text-base text-text uppercase tracking-[0.05em]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
