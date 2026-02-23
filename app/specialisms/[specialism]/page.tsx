import Link from "next/link";
import { specialisms } from "@/data/specialisms";
import { bands } from "@/data/bands";
import { SalaryTable } from "@/components/salary/SalaryTable";
import { ProCTA } from "@/components/pro/ProCTA";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

export async function generateStaticParams() {
  return specialisms.map((s) => ({ specialism: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialism: string }>;
}) {
  const { specialism } = await params;
  const spec = specialisms.find((s) => s.slug === specialism);
  const title = spec
    ? `${spec.name} Salary 2025 | NHS Pay Guide`
    : "Nursing Specialism | NursePayScale.co.uk";
  const description = spec
    ? `${spec.name} salary guide. Typical band: ${spec.typicalBand}. ${spec.description}. Pay scale and progression.`
    : "NHS nursing specialism salary guide.";
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/specialisms/${specialism}`,
    },
  };
}

export default async function SpecialismPage({
  params,
}: {
  params: Promise<{ specialism: string }>;
}) {
  const { specialism } = await params;
  const spec = specialisms.find((s) => s.slug === specialism);

  if (!spec) {
    return (
      <div className="mx-auto max-w-content px-4 py-8">
        <p>Specialism not found.</p>
      </div>
    );
  }

  const bandData = bands[spec.typicalBand];

  return (
    <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold text-text-primary">
        {spec.name} Salary 2025
      </h1>
      <p className="mt-3 text-text-secondary">
        {spec.description}. Most {spec.name.toLowerCase()} roles are at Band {spec.typicalBand}, with a typical salary range of {bandData ? `£${bandData.entry_salary.toLocaleString()}–£${bandData.top_salary.toLocaleString()}` : "see band page"} per year.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-primary">Typical pay scale (Band {spec.typicalBand})</h2>
        <p className="mt-1 text-sm text-text-secondary">
          UK base rates. Use the calculator for a specific location and take-home estimate.
        </p>
        <div className="mt-3">
          <SalaryTable band={spec.typicalBand} locationSlug="manchester" />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-primary">Band {spec.typicalBand} salary by location</h2>
        <p className="mt-2">
          <Link href={`/band-${spec.typicalBand}-nurse-salary`} className="text-primary-light hover:underline">
            View Band {spec.typicalBand} nurse salary by city
          </Link>
          {" "}or use the{" "}
          <Link href="/tools/nhs-salary-calculator" className="text-primary-light hover:underline">
            salary calculator
          </Link>.
        </p>
      </section>

      <section className="mt-8">
        <ProCTA variant="bottom" />
      </section>
    </article>
  );
}
