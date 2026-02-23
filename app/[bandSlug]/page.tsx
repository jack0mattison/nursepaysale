import Link from "next/link";
import { notFound } from "next/navigation";
import { bands } from "@/data/bands";
import { locations } from "@/data/locations";
import { formatCurrency } from "@/lib/salary-utils";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

const BAND_SLUG_PATTERN = /^band-(.+)-nurse-salary$/;

function parseBandFromSlug(bandSlug: string): string | null {
  const match = bandSlug.match(BAND_SLUG_PATTERN);
  if (!match) return null;
  const band = match[1];
  return bands[band] ? band : null;
}

export async function generateStaticParams() {
  return Object.keys(bands).map((band) => ({
    bandSlug: `band-${band}-nurse-salary`,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bandSlug: string }>;
}) {
  const { bandSlug } = await params;
  const band = parseBandFromSlug(bandSlug);
  const bandData = band ? bands[band] : null;
  const title = bandData
    ? `Band ${band} Nurse Salary 2025 | NHS Pay Scale Guide`
    : "NHS Nurse Salary | NursePayScale.co.uk";
  const description = bandData
    ? `Band ${band} nurse salary range £${bandData.entry_salary.toLocaleString()}–£${bandData.top_salary.toLocaleString()}. See pay by location, take-home estimates and progression to Band ${bandData.next_band || "senior roles"}.`
    : "NHS nurse salary and pay scale guide.";
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${bandSlug}`,
    },
  };
}

export default async function BandHubPage({
  params,
}: {
  params: Promise<{ bandSlug: string }>;
}) {
  const { bandSlug } = await params;
  const band = parseBandFromSlug(bandSlug);
  if (!band) notFound();

  const bandData = bands[band];

  return (
    <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold text-text-primary">
        Band {band} Nurse Salary 2025
      </h1>
      <p className="mt-3 text-text-secondary">
        Band {band} salaries range from {formatCurrency(bandData.entry_salary)} to {formatCurrency(bandData.top_salary)} per year. 
        Typical roles include: {bandData.typical_roles.join(", ")}.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-primary">Band {band} salary by location</h2>
        <p className="mt-1 text-sm text-text-secondary">
          Select a city to see full pay scale and take-home estimates.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {locations.map((loc) => (
            <li key={loc.slug}>
              <Link
                href={`/${bandSlug}/${loc.slug}`}
                className="block rounded-lg border border-border p-3 text-text-primary hover:border-primary hover:bg-bg-light"
              >
                {loc.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <Link
          href="/tools/nhs-salary-calculator"
          className="inline-block rounded-lg bg-primary px-4 py-2 font-medium text-white hover:bg-primary-light"
        >
          Use the salary calculator
        </Link>
      </section>
    </article>
  );
}
