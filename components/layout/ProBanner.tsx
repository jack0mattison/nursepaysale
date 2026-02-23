"use client";

import Link from "next/link";

export function ProBanner() {
  return (
    <div className="sticky bottom-0 z-40 border-t border-border bg-primary px-4 py-2 text-white shadow-lg">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-sm font-medium">
          Get your personalised NHS salary negotiation script — join 1,000+ nurses using AI to advance their careers.
        </p>
        <Link
          href="/pro"
          className="shrink-0 rounded bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-bg-light"
        >
          Start for £9.99/month
        </Link>
      </div>
    </div>
  );
}
