import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EDVAULT — The Authority That Makes Outcomes-Based Contracts Work",
  description:
    "EDVAULT is a nonprofit that sits between districts and providers as a trusted, neutral third party — data hub, escrow provider, and arbiter of record.",
  openGraph: {
    title: "EDVAULT",
    description: "The authority that makes outcomes-based contracts work.",
    url: "https://edvault.org",
    siteName: "EDVAULT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
