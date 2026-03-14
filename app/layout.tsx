import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shafiul Islam — Entrepreneur, Engineer, Investor",
    template: "%s — Shafiul Islam",
  },
  description:
    "Shafiul Islam is a halal entrepreneur, software engineer, and investor building purposeful businesses including Carrot Soft and a digital marketing agency.",
  metadataBase: new URL("https://emes3ye.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://emes3ye.com",
    siteName: "Shafiul Islam",
    title: "Shafiul Islam — Entrepreneur, Engineer, Investor",
    description:
      "Halal entrepreneur, software engineer, and investor building purposeful businesses.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@emes3ye",
    title: "Shafiul Islam — Entrepreneur, Engineer, Investor",
    description:
      "Halal entrepreneur, software engineer, and investor building purposeful businesses.",
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
    <html lang="en" className={`${dmSans.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
