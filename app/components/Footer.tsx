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
            <p className="mt-4 text-sm leading-relaxed text-white/40">
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
                    className="text-sm text-white/40 transition-colors hover:text-white/70"
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
                  className="text-sm text-white/40 transition-colors hover:text-white/70"
                >
                  Policy Compendium
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Winsemius/whitepaper/releases/download/latest/gyps-pitch.pdf"
                  className="text-sm text-white/40 transition-colors hover:text-white/70"
                >
                  GYPS Integrator
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-69a33838740081919d3acd1d50c82489-funding-strat-advisor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 transition-colors hover:text-white/70"
                >
                  Funding Strat Advisor
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
              Contact
            </h4>
            <div className="mt-4 space-y-1 text-sm text-white/40">
              <p>Hillegomstraat 7-H</p>
              <p>1058 LN Amsterdam</p>
              <p className="mt-2">
                <a
                  href="mailto:info@winsemius.eu"
                  className="transition-colors hover:text-white/70"
                >
                  info@winsemius.eu
                </a>
              </p>
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
