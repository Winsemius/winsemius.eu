"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    _paq?: Array<unknown[]>;
  }
}

export default function MatomoTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window._paq) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    window._paq.push(["setCustomUrl", url]);
    window._paq.push(["setDocumentTitle", document.title]);
    window._paq.push(["trackPageView"]);
  }, [pathname, searchParams]);

  return null;
}
