"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isDarkPage = pathname === "/funding";

  return (
    <footer className={`py-10 ${
      isDarkPage
        ? "border-t border-white/10 bg-[#0f1729]"
        : "border-t border-rule bg-paper"
    }`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logobrilonly.svg"
              alt="Winsemius"
              width={28}
              height={12}
              className={isDarkPage ? "brightness-0 invert opacity-40" : "opacity-40"}
            />
            <span className={`text-sm ${isDarkPage ? "text-[#8A9BB5]" : "text-muted"}`}>
              Winsemius Group BV
            </span>
          </div>

          <div className={`flex flex-wrap items-center gap-x-5 gap-y-1 text-xs ${
            isDarkPage ? "text-[#5A6A80]" : "text-muted"
          }`}>
            <span>KvK 97604380</span>
            <span>&middot;</span>
            <span>VAT NL868130266B01</span>
            <span>&middot;</span>
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-2 transition-colors ${
                isDarkPage ? "hover:text-[#8A9BB5]" : "hover:text-ink"
              }`}
            >
              CC BY-NC-SA 4.0
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
