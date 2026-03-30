import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Academy — Winsemius Group",
  description:
    "Military drone operations training for defence professionals. EU regulations, drone systems, mission planning, ISR tactics, and counter-UAS — from foundation to certification.",
  openGraph: {
    title: "Drone Academy — Winsemius Group",
    description:
      "Comprehensive military drone operations training. From EU regulations to tactical deployment.",
    url: "https://winsemius.eu/academy",
    siteName: "Winsemius Group",
    type: "website",
  },
};

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
