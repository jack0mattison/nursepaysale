import { bands, londonWeighting } from "@/data/bands";
import { locations } from "@/data/locations";
import { formatCurrency } from "@/lib/salary-utils";
import Link from "next/link";

interface LocationCompareProps {
  band: string;
  locationSlug: string;
}

function getWeightedSalary(base: number, weightingKey: keyof typeof londonWeighting): number {
  const w = londonWeighting[weightingKey];
  if (w.percent === 0) return base;
  const allowance = Math.min(Math.max(base * w.percent, w.min), w.max);
  return base + allowance;
}

export function LocationCompare({ band, locationSlug }: LocationCompareProps) {
  const bandData = bands[band];
  const location = locations.find((l) => l.slug === locationSlug);
  if (!bandData || !location) return null;

  const localEntry = getWeightedSalary(bandData.entry_salary, location.weighting);
  const ukAverage = bandData.entry_salary; // "UK average" = no weighting
  const diff = localEntry - ukAverage;
  const percentDiff = ukAverage > 0 ? Math.round((diff / ukAverage) * 100) : 0;

  return (
    <div className="rounded-lg border border-border bg-bg-light p-4">
      <h2 className="text-lg font-semibold text-primary">How {location.name} compares</h2>
      <p className="mt-2 text-text-secondary">
        Band {band} entry salary in {location.name}:{" "}
        <strong className="text-text-primary">{formatCurrency(localEntry)}</strong>.
        UK average (no weighting):{" "}
        <strong className="text-text-primary">{formatCurrency(ukAverage)}</strong>.
      </p>
      {diff !== 0 && (
        <p className="mt-1 text-sm">
          {diff > 0 ? (
            <>
              In {location.name} you earn about{" "}
              <span className="font-medium text-success">+{formatCurrency(diff)} ({percentDiff}%)</span>{" "}
              more than the UK average for this band, due to location weighting.
            </>
          ) : (
            <>
              This is in line with the UK average for Band {band} outside London weighting areas.
            </>
          )}
        </p>
      )}
      <p className="mt-2 text-sm">
        <Link href="/tools/nhs-salary-calculator" className="text-primary-light hover:underline">
          Use the salary calculator
        </Link>{" "}
        to see take-home pay for your exact pay point and location.
      </p>
    </div>
  );
}
