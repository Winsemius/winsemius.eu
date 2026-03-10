import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logobrilonly.svg"
              alt="Winsemius"
              width={32}
              height={14}
              className="brightness-0 invert opacity-40"
            />
            <span className="text-sm text-[#8A9BB5]">Winsemius Group BV</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#5A6A80]">
            <span>Hillegomstraat 7-H, 1058 LN Amsterdam</span>
            <span>KvK 97604380</span>
            <span>VAT NL868130266B01</span>
          </div>

          <p className="text-xs text-[#5A6A80]">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-[#8A9BB5]"
            >
              CC BY-NC-SA 4.0
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
