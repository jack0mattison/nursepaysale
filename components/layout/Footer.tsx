import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-bg-light/50">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold text-primary">Salary by Band</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/band-5-nurse-salary" className="transition hover:text-primary">
                  Band 5
                </Link>
              </li>
              <li>
                <Link href="/band-6-nurse-salary" className="transition hover:text-primary">
                  Band 6
                </Link>
              </li>
              <li>
                <Link href="/band-7-nurse-salary" className="transition hover:text-primary">
                  Band 7
                </Link>
              </li>
              <li>
                <Link href="/band-8a-nurse-salary" className="transition hover:text-primary">
                  Band 8a
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Tools &amp; Guides</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/tools/nhs-salary-calculator" className="transition hover:text-primary">
                  Salary Calculator
                </Link>
              </li>
              <li>
                <Link href="/guides" className="transition hover:text-primary">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/guides/nhs-agenda-for-change-explained" className="transition hover:text-primary">
                  Agenda for Change
                </Link>
              </li>
              <li>
                <Link href="/guides/band-5-to-band-6-progression" className="transition hover:text-primary">
                  Progression Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Pro</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/pro" className="transition hover:text-primary">
                  Pro Features
                </Link>
              </li>
              <li>
                <Link href="/pro/dashboard" className="transition hover:text-primary">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/privacy" className="transition hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-primary">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-8 text-center">
          <p className="text-sm font-medium text-primary">
            The UK&apos;s most detailed NHS nurse salary guide
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            Based on official NHS Agenda for Change pay scales. Updated May 2025.
          </p>
          <p className="mt-1 text-xs text-text-secondary">
            © {currentYear} NursePayScale.co.uk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
