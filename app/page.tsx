import Link from "next/link";
import { bands } from "@/data/bands";
import { locations } from "@/data/locations";
import { formatCurrency } from "@/lib/salary-utils";
import { SalaryCalculator } from "@/components/calculator/SalaryCalculator";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

export const metadata = {
  title: "Your Complete NHS Nurse Salary Guide",
  description: "Accurate pay scale data for every NHS band and location in the UK. Updated for 2025/26. Calculator and career tools.",
  alternates: { canonical: baseUrl },
};

const POPULAR = [
  { band: "5", location: "london", label: "Band 5 nurse salary London" },
  { band: "6", location: "manchester", label: "Band 6 nurse salary Manchester" },
  { band: "5", location: "birmingham", label: "Band 5 nurse salary Birmingham" },
  { band: "6", location: "london", label: "Band 6 nurse salary London" },
  { band: "7", location: "manchester", label: "Band 7 nurse salary Manchester" },
  { band: "5", location: "leeds", label: "Band 5 nurse salary Leeds" },
  { band: "6", location: "bristol", label: "Band 6 nurse salary Bristol" },
  { band: "5", location: "liverpool", label: "Band 5 nurse salary Liverpool" },
  { band: "6", location: "birmingham", label: "Band 6 nurse salary Birmingham" },
  { band: "5", location: "sheffield", label: "Band 5 nurse salary Sheffield" },
  { band: "7", location: "london", label: "Band 7 nurse salary London" },
  { band: "5", location: "newcastle", label: "Band 5 nurse salary Newcastle" },
];

const BAND_CARDS = ["5", "6", "7", "8a"].map((b) => ({
  band: b,
  ...bands[b],
  href: `/band-${b}-nurse-salary`,
}));

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "NursePayScale.co.uk",
            url: baseUrl,
            description: "NHS nurse salary and pay scale guide for the UK.",
            publisher: {
              "@type": "Organization",
              name: "NursePayScale.co.uk",
              url: baseUrl,
            },
          }),
        }}
      />
      <div>
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-14 sm:py-20">
          <div className="mx-auto flex max-w-content flex-col items-start gap-10 px-4 sm:px-6 lg:flex-row lg:items-center">
            <div className="max-w-xl text-left text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                NHS nurse pay, made clear
              </p>
              <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                See your NHS nurse salary in seconds.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-blue-100">
                Instantly compare Agenda for Change pay by band, location and years in post — plus a take‑home
                calculator built just for NHS nurses.
              </p>

              <div className="mt-6 inline-flex items-baseline gap-3 rounded-full bg-blue-700/60 px-4 py-2 text-sm text-blue-100">
                <div className="relative inline-flex items-baseline gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                    Coverage
                  </span>
                  <span className="ml-2 text-2xl font-semibold leading-none text-white animate-pulse">
                    395+
                  </span>
                  <span className="text-xs font-medium text-blue-200">
                    salary pages across UK bands &amp; locations
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/band-5-nurse-salary"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-800 shadow-sm transition hover:bg-blue-50"
                >
                  Find my band salary
                </Link>
                <Link
                  href="/tools/nhs-salary-calculator"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-200/80 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700/60"
                >
                  Open salary calculator
                </Link>
              </div>

              <p className="mt-4 text-xs text-blue-200">
                Trusted by thousands of UK nurses. Updated for 2025/26 pay scales.
              </p>
            </div>

            <div className="w-full max-w-md flex-1 lg:max-w-lg">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-blue-500/20 blur-2xl" />
                <div className="relative rounded-3xl border border-white/10 bg-white/95 p-4 shadow-xl backdrop-blur">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-500">
                        Live preview
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-900">
                        NHS salary calculator
                      </p>
                    </div>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      Free tool
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <div className="border-b border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                      Band &amp; location
                    </div>
                    <div className="p-3">
                      <SalaryCalculator />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-content px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-primary">Quick band selector</h2>
          <p className="mt-1 text-text-secondary">Choose a band to see salary by location.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BAND_CARDS.map(({ band, title, entry_salary, top_salary, typical_roles, href }) => (
              <Link
                key={band}
                href={href}
                className="block rounded-xl border border-border p-5 text-left hover:border-primary hover:bg-bg-light"
              >
                <h3 className="font-semibold text-primary">{title}</h3>
                <p className="mt-1 text-sm font-medium text-text-primary">
                  {formatCurrency(entry_salary)} – {formatCurrency(top_salary)}
                </p>
                <p className="mt-1 text-xs text-text-secondary">{typical_roles[0]}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-content px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-primary">Popular searches</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {POPULAR.map(({ band, location, label }) => (
              <Link
                key={`${band}-${location}`}
                href={`/band-${band}-nurse-salary/${location}`}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm text-text-primary hover:border-primary hover:bg-bg-light"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-content px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-primary">Calculator preview</h2>
          <p className="mt-1 text-text-secondary">Estimate take-home pay. Full calculator includes tax, NI and pension.</p>
          <div className="mt-6 rounded-xl border border-border bg-white p-6">
            <SalaryCalculator />
          </div>
          <p className="mt-4">
            <Link href="/tools/nhs-salary-calculator" className="text-primary-light font-medium hover:underline">
              Open full salary calculator →
            </Link>
          </p>
        </section>

        <section className="bg-bg-light py-12">
          <div className="mx-auto max-w-content px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-primary text-center">Pro – AI career tools</h2>
            <p className="mt-2 text-center text-text-secondary max-w-xl mx-auto">
              Join 1,000+ nurses using AI to advance their careers. Negotiation scripts, progression roadmaps, CV reviews and interview prep.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-white p-6 text-center">
                <h3 className="font-semibold text-primary">Negotiation Coach</h3>
                <p className="mt-2 text-sm text-text-secondary">Get a personalised script for your appraisal or band discussion.</p>
                <Link href="/pro" className="mt-4 inline-block text-primary-light text-sm font-medium hover:underline">Learn more</Link>
              </div>
              <div className="rounded-xl border border-border bg-white p-6 text-center">
                <h3 className="font-semibold text-primary">Progression Roadmap</h3>
                <p className="mt-2 text-sm text-text-secondary">Timeline and steps to reach your target band.</p>
                <Link href="/pro" className="mt-4 inline-block text-primary-light text-sm font-medium hover:underline">Learn more</Link>
              </div>
              <div className="rounded-xl border border-border bg-white p-6 text-center">
                <h3 className="font-semibold text-primary">CV Reviewer</h3>
                <p className="mt-2 text-sm text-text-secondary">AI review of your CV or personal statement for band applications.</p>
                <Link href="/pro" className="mt-4 inline-block text-primary-light text-sm font-medium hover:underline">Learn more</Link>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/pro" className="rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-light">
                View Pro – £9.99/month
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-content px-4 py-12 sm:px-6 text-center text-sm text-text-secondary">
          <p>Based on official NHS Agenda for Change pay scales.</p>
          <p className="mt-1">Updated May 2025.</p>
          <p className="mt-1">Used by 2,400+ nurses this month.</p>
        </section>
      </div>
    </>
  );
}
