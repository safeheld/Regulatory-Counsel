import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import { organizationJsonLd } from "@/lib/jsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.regulatorycounsel.co.uk";

export const metadata: Metadata = {
  title: {
    default: "Regulatory Counsel | UK Regulatory & Compliance Consulting",
    template: "%s | Regulatory Counsel",
  },
  description:
    "Expert regulatory and compliance consulting for payment institutions, EMIs, crypto firms, banks and MSBs. FCA licensing, compliance support, financial crime and more.",
  keywords: [
    "regulatory consulting",
    "FCA compliance",
    "payment institutions",
    "EMI",
    "crypto regulation",
    "financial crime",
    "AML",
    "compliance audit",
    "UK regulation",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Regulatory Counsel",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
