import { SalaryCalculator } from "@/components/calculator/SalaryCalculator";
import { ProCTA } from "@/components/pro/ProCTA";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

export const metadata = {
  title: "NHS Salary Calculator 2025 | Take-Home Pay",
  description: "Calculate your NHS nurse take-home pay. Band, pay point, location and pension. Updated for 2025/26 tax and AfC rates.",
  alternates: { canonical: `${baseUrl}/tools/nhs-salary-calculator` },
};

export default function CalculatorPage() {
  return (
    <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold text-text-primary">
        NHS Salary Calculator
      </h1>
      <p className="mt-2 text-text-secondary">
        See your estimated take-home pay based on band, pay point, location and whether you pay into the NHS pension. Uses 2025/26 tax and NI rates.
      </p>

      <div className="mt-8">
        <SalaryCalculator />
      </div>

      <section className="mt-8">
        <ProCTA variant="mid-page" />
        <p className="mt-2 text-center text-sm text-text-secondary">
          Want a personalised salary negotiation script based on your results?
        </p>
      </section>
    </article>
  );
}
