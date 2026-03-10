import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Image
              src="/logobrilonly.svg"
              alt="Winsemius"
              width={48}
              height={20}
              className="brightness-0 invert opacity-60"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              We assemble and run delivery vehicles that sign contracts and ship
              capability.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              {[
                "Programme Office",
                "Consortium Assembly",
                "Contracting Desk",
                "Sprint Delivery",
                "Strategic Positioning",
                "Export Enablement",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 transition-colors hover:text-white/80"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
              Resources
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/compendium/"
                  className="text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  Policy Compendium
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Winsemius/whitepaper/releases/download/latest/gyps-pitch.pdf"
                  className="text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  GYPS Integrator
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-69a33838740081919d3acd1d50c82489-funding-strat-advisor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  Funding Strat Advisor
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
              Connect
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:info@winsemius.eu"
                  className="text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  info@winsemius.eu
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/winsemius-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://signal.group/#CjQKIGjxYpDyXsAfW-Xj7lU4FOce1zteQL9-pEY5s5VOh6I3EhAlavSFr0XTHu3jaLrPdc5k"
                  className="text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  Signal Group
                </a>
              </li>
            </ul>
            <div className="mt-6 text-xs text-white/30">
              <p>Hillegomstraat 7-H</p>
              <p>1058 LN Amsterdam</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Winsemius Group BV.{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-white/50"
            >
              CC BY-NC-SA 4.0
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
