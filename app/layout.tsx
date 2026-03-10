import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winsemius Group — Defence Policy & Funding Strategy",
  description:
    "Policy influence, funding strategy, and coalition building for European defence. Based in Amsterdam.",
  openGraph: {
    title: "Winsemius Group — Defence Policy & Funding Strategy",
    description:
      "We write the policy, shape the funding strategies, and build the coalitions that turn European defence ideas into funded programmes.",
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
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap"
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
                "Policy influence, funding strategy, and coalition building for European defence.",
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
