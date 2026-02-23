import Link from "next/link";

export function Footer() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

  return (
    <footer className="border-t border-border bg-bg-light/50 mt-auto">
      <div className="mx-auto max-w-content px-4 py-8 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold text-primary">Salary by Band</h3>
            <ul className="mt-2 space-y-1 text-sm text-text-secondary">
              <li><Link href="/band-5-nurse-salary" className="hover:text-primary">Band 5</Link></li>
              <li><Link href="/band-6-nurse-salary" className="hover:text-primary">Band 6</Link></li>
              <li><Link href="/band-7-nurse-salary" className="hover:text-primary">Band 7</Link></li>
              <li><Link href="/band-8a-nurse-salary" className="hover:text-primary">Band 8a</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Tools &amp; Guides</h3>
            <ul className="mt-2 space-y-1 text-sm text-text-secondary">
              <li><Link href="/tools/nhs-salary-calculator" className="hover:text-primary">Salary Calculator</Link></li>
              <li><Link href="/guides" className="hover:text-primary">Guides</Link></li>
<li><Link href="/guides/nhs-agenda-for-change-explained" className="hover:text-primary">Agenda for Change</Link></li>
              <li><Link href="/guides/band-5-to-band-6-progression" className="hover:text-primary">Progression Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Pro</h3>
            <ul className="mt-2 space-y-1 text-sm text-text-secondary">
              <li><Link href="/pro" className="hover:text-primary">Pro Features</Link></li>
              <li><Link href="/pro/dashboard" className="hover:text-primary">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Legal</h3>
            <ul className="mt-2 space-y-1 text-sm text-text-secondary">
              <li><Link href="/privacy" className="hover:text-primary">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-text-secondary">
          Based on official NHS Agenda for Change pay scales. Updated May 2025.
        </p>
      </div>
    </footer>
  );
}
