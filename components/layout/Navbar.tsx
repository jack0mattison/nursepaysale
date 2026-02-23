"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const BAND_LINKS = [
  { label: "Band 5", href: "/band-5-nurse-salary" },
  { label: "Band 6", href: "/band-6-nurse-salary" },
  { label: "Band 7", href: "/band-7-nurse-salary" },
  { label: "Band 8", href: "/band-8a-nurse-salary" },
];

export function Navbar() {
  const pathname = usePathname();
  const [bandsOpen, setBandsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="text-xl font-bold text-primary">
          NursePayScale.co.uk
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setBandsOpen(true)}
            onMouseLeave={() => setBandsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-text-primary hover:text-primary"
            >
              Salary Bands
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {bandsOpen && (
              <div className="absolute left-0 top-full mt-1 w-48 rounded-lg border border-border bg-white py-1 shadow-lg">
                {BAND_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 text-sm text-text-primary hover:bg-bg-light hover:text-primary"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/specialisms"
            className="text-text-primary hover:text-primary"
          >
            Specialisms
          </Link>
          <Link
            href="/tools/nhs-salary-calculator"
            className="text-text-primary hover:text-primary"
          >
            Calculator
          </Link>
          <Link
            href="/guides"
            className="text-text-primary hover:text-primary"
          >
            Guides
          </Link>
          <Link
            href="/pro"
            className="rounded-lg bg-primary-light px-4 py-2 font-medium text-white hover:bg-primary"
          >
            Pro
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/pro"
            className="rounded bg-primary-light px-3 py-1.5 text-sm font-medium text-white"
          >
            Pro
          </Link>
        </div>
      </nav>
    </header>
  );
}
