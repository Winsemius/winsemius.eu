"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-rule bg-paper">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logobrilonly.svg"
              alt="Winsemius"
              width={28}
              height={12}
              className="opacity-40"
            />
            <span className="text-sm text-muted">
              Winsemius Group BV
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted">
            <span>KvK 97604380</span>
            <span>&middot;</span>
            <span>VAT NL868130266B01</span>
            <span>&middot;</span>
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-ink"
            >
              CC BY-NC-SA 4.0
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
