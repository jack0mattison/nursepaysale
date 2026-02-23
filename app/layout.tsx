import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "NHS Nurse Salary Guide 2025 | NursePayScale.co.uk",
    template: "%s | NursePayScale.co.uk",
  },
  description: "Accurate NHS nurse salary and pay scale data for every band and location in the UK. Take-home calculator and career tools.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
