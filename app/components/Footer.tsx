"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-void">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logobrilonly.svg"
              alt="Winsemius"
              width={24}
              height={10}
              className="brightness-0 invert opacity-30"
            />
            <span className="text-sm text-text-muted font-mono">
              Winsemius Group BV
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-text-muted">
            <span>KvK 97604380</span>
            <span className="text-border-bright">//</span>
            <span>VAT NL868130266B01</span>
            <span className="text-border-bright">//</span>
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-amber"
            >
              CC BY-NC-SA 4.0
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
