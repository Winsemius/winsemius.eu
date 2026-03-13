"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "#principles", label: "Principles" },
  { href: "#insights", label: "Insights" },
  { href: "/funding", label: "Funding" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
          ? "bg-paper/95 backdrop-blur-sm border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
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
            width={40}
            height={17}
            className="transition-all duration-300"
          />
          <span className="font-display text-xl tracking-[-0.01em] transition-colors duration-300 text-ink">
            Winsemius
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className="text-sm transition-colors duration-200 text-slate hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-sm transition-colors duration-200 text-slate"
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-rule bg-paper px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className="text-base text-ink"
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
