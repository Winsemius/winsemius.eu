import type { Metadata } from "next";
import { Suspense } from "react";
import MatomoTracker from "./components/MatomoTracker";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winsemius Group — Defence Technology, Industrial Policy & Capital",
  description:
    "At the intersection of defence technology, industrial policy, and capital markets. Policy influence, funding strategy, and coalition building for European defence.",
  openGraph: {
    title: "Winsemius Group — Defence Technology, Industrial Policy & Capital",
    description:
      "At the intersection of defence technology, industrial policy, and capital markets. Policy influence, funding strategy, and coalition building for European defence.",
    url: "https://winsemius.eu",
    siteName: "Winsemius Group",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Winsemius Group BV",
              url: "https://winsemius.eu",
              logo: "https://winsemius.eu/logobrilonly.svg",
              description:
                "At the intersection of defence technology, industrial policy, and capital markets. Policy influence, funding strategy, and coalition building.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hillegomstraat 7-H",
                addressLocality: "Amsterdam",
                postalCode: "1058 LN",
                addressCountry: "NL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@winsemius.eu",
                contactType: "customer service",
              },
              foundingDate: "2024",
              vatID: "NL868130266B01",
            }),
          }}
        />
        {/* Matomo Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              _paq.push(['enableHeartBeatTimer']);
              (function() {
                var u="https://matomo.tactcheck.com/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '5']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
          }}
        />
        <noscript>
          <img
            referrerPolicy="no-referrer-when-downgrade"
            src="https://matomo.tactcheck.com/matomo.php?idsite=5&amp;rec=1"
            style={{ border: 0 }}
            alt=""
          />
        </noscript>
      </head>
      <body className="antialiased">
        <Suspense fallback={null}>
          <MatomoTracker />
        </Suspense>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
