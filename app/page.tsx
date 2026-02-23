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
        <section className="bg-bg-light py-12 sm:py-16">
          <div className="mx-auto max-w-content px-4 sm:px-6 text-center">
            <h1 className="text-3xl font-bold text-primary sm:text-4xl">
              Your Complete NHS Nurse Salary Guide
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Accurate pay scale data for every NHS band and location in the UK. Updated for 2025/26.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/band-5-nurse-salary"
                className="rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-light"
              >
                Find My Band Salary
              </Link>
              <Link
                href="/tools/nhs-salary-calculator"
                className="rounded-lg border-2 border-primary px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white"
              >
                Calculate Take-Home Pay
              </Link>
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
