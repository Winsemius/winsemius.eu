import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Military Drone Operations Fundamentals — Winsemius Drone Academy",
  description:
    "Foundation course covering EU drone regulations, drone systems technology, mission planning, flight operations, ISR tactics, and counter-UAS. 6 modules, ~12 hours, certificate on completion.",
  openGraph: {
    title: "Military Drone Operations Fundamentals — Winsemius Drone Academy",
    description:
      "Foundation course: EU regulations, drone systems, mission planning, ISR, and counter-UAS for defence professionals.",
    url: "https://winsemius.eu/academy/military-drone-ops",
    siteName: "Winsemius Group",
    type: "website",
  },
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
