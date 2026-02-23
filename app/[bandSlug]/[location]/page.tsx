import Link from "next/link";
import { notFound } from "next/navigation";
import { bands } from "@/data/bands";
import { locations } from "@/data/locations";
import { SalaryTable } from "@/components/salary/SalaryTable";
import { TakeHomeTable } from "@/components/salary/TakeHomeTable";
import { LocationCompare } from "@/components/salary/LocationCompare";
import { ProgressionBar } from "@/components/salary/ProgressionBar";
import { ProCTA } from "@/components/pro/ProCTA";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

const BAND_SLUG_PATTERN = /^band-(.+)-nurse-salary$/;

function parseBandFromSlug(bandSlug: string): string | null {
  const match = bandSlug.match(BAND_SLUG_PATTERN);
  if (!match) return null;
  const band = match[1];
  return bands[band] ? band : null;
}

export async function generateStaticParams() {
  const params: { bandSlug: string; location: string }[] = [];
  for (const band of Object.keys(bands)) {
    const bandSlug = `band-${band}-nurse-salary`;
    for (const loc of locations) {
      params.push({ bandSlug, location: loc.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bandSlug: string; location: string }>;
}) {
  const { bandSlug, location } = await params;
  const band = parseBandFromSlug(bandSlug);
  const loc = locations.find((l) => l.slug === location);
  const bandData = band ? bands[band] : null;
  const title = bandData && loc
    ? `Band ${band} Nurse Salary ${loc.name} 2025 | NHS Pay Scale Guide`
    : "NHS Nurse Salary | NursePayScale.co.uk";
  const description = bandData && loc
    ? `Find out exactly what a Band ${band} nurse earns in ${loc.name} in 2025. Full pay scale breakdown, take-home pay estimates and progression tips.`
    : "NHS nurse salary and pay scale guide.";
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${bandSlug}/${location}`,
    },
  };
}

export default async function BandLocationPage({
  params,
}: {
  params: Promise<{ bandSlug: string; location: string }>;
}) {
  const { bandSlug, location } = await params;
  const band = parseBandFromSlug(bandSlug);
  const loc = locations.find((l) => l.slug === location);
  if (!band || !loc) notFound();

  const bandData = bands[band];

  const otherCities = locations
    .filter((l) => l.slug !== location)
    .slice(0, 5)
    .map((l) => ({ slug: l.slug, name: l.name }));

  const bandKeys = ["2", "3", "4", "5", "6", "7", "8a", "8b", "9"];
  const currentIndex = bandKeys.indexOf(band);
  const adjacentBands = [
    bandKeys[currentIndex - 1],
    bandKeys[currentIndex + 1],
  ].filter(Boolean);

  const faqs = [
    {
      question: `What does a Band ${band} nurse earn in ${loc.name}?`,
      answer: `In ${loc.name}, a Band ${band} nurse earns between £${bandData.entry_salary.toLocaleString()} and £${bandData.top_salary.toLocaleString()} per year (base salary), depending on pay point. ${loc.weighting !== "none" ? "London weighting or fringe allowance may apply in this area." : ""}`,
    },
    {
      question: `How do I progress from Band ${band}?`,
      answer: bandData.next_band
        ? `Most Band ${band} nurses progress to Band ${bandData.next_band} after around ${bandData.avg_years_to_progress} years, by gaining experience and taking on responsibilities that match the higher band's job profile.`
        : `Band ${band} is the top of the clinical scale. Progression is typically into senior leadership or specialist consultant roles.`,
    },
    {
      question: "What is the NHS Agenda for Change pay scale?",
      answer: "Agenda for Change (AfC) is the NHS pay system. Jobs are matched to pay bands (2–9) and pay points within each band. Salaries are set nationally with London weighting where applicable.",
    },
    {
      question: "When do NHS pay scales change?",
      answer: "NHS pay is usually updated each financial year (April). The figures on this page reflect the 2025/26 pay scales.",
    },
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: `Band ${band} Nurse Salary`, url: `/${bandSlug}` },
    { name: loc.name, url: `/${bandSlug}/${location}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <article className="mx-auto max-w-content px-4 py-6 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Band {band} Nurse Salary in {loc.name} 2025
            </h1>
            <p className="mt-3 text-text-secondary">
              Find out exactly what a Band {band} nurse earns in {loc.name}. Below are the full Agenda for Change pay scales for Band {band} in {loc.name}, including entry, mid and top salaries, plus estimated take-home pay after tax, National Insurance and NHS pension.
            </p>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-primary">Band {band} pay scale in {loc.name}</h2>
              <div className="mt-3">
                <SalaryTable band={band} locationSlug={location} />
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-primary">Estimated take-home pay</h2>
              <p className="mt-1 text-sm text-text-secondary">
                Estimates based on 2025/26 tax and NHS pension rates.
              </p>
              <div className="mt-3">
                <TakeHomeTable band={band} locationSlug={location} />
              </div>
            </section>

            <section className="mt-8">
              <ProCTA variant="mid-page" />
            </section>

            <section className="mt-8">
              <LocationCompare band={band} locationSlug={location} />
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-primary">Progression to the next band</h2>
              {bandData.next_band && bandData.avg_years_to_progress ? (
                <p className="mt-2 text-text-secondary">
                  Many Band {band} nurses progress to Band {bandData.next_band} after around {bandData.avg_years_to_progress} years in role. Typical Band {bandData.next_band} roles include:{" "}
                  {bands[bandData.next_band]?.typical_roles.slice(0, 2).join(", ")}.
                </p>
              ) : (
                <p className="mt-2 text-text-secondary">
                  Band {band} is the top of the AfC scale. Progression is into senior leadership or other high-level roles.
                </p>
              )}
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-primary">What comes after Band {band}?</h2>
              <p className="mt-2 text-text-secondary">
                {bandData.next_band ? (
                  <>
                    The next step is Band {bandData.next_band}. Use our{" "}
                    <Link href={`/band-${bandData.next_band}-nurse-salary/${location}`} className="text-primary-light hover:underline">
                      Band {bandData.next_band} salary page for {loc.name}
                    </Link>{" "}
                    to see pay scales, or try the{" "}
                    <Link href="/tools/nhs-salary-calculator" className="text-primary-light hover:underline">
                      salary calculator
                    </Link>{" "}
                    to model your take-home pay.
                  </>
                ) : (
                  "Band 9 is the top of the Agenda for Change scale. Beyond this, roles are typically executive or board-level."
                )}
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-primary">Frequently asked questions</h2>
              <div className="mt-3">
                <FAQSchema faqs={faqs} />
              </div>
            </section>

            <section className="mt-8">
              <ProCTA variant="bottom" />
            </section>
          </div>

          <aside className="space-y-6">
            <ProgressionBar currentBand={band} />
            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-primary">Same band, other cities</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {otherCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/${bandSlug}/${c.slug}`}
                      className="text-primary-light hover:underline"
                    >
                      Band {band} nurse salary {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-primary">Same location, other bands</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {adjacentBands.map((b) => (
                  <li key={b}>
                    <Link
                      href={`/band-${b}-nurse-salary/${location}`}
                      className="text-primary-light hover:underline"
                    >
                      Band {b} nurse salary {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/tools/nhs-salary-calculator"
              className="block rounded-lg border border-primary bg-bg-light p-4 text-center font-medium text-primary hover:bg-primary hover:text-white"
            >
              Use the salary calculator
            </Link>
          </aside>
        </div>
      </article>
    </>
  );
}
