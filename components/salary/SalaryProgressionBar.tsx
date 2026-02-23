import { bands, londonWeighting } from "@/data/bands";
import { locations } from "@/data/locations";
import { formatCurrency } from "@/lib/salary-utils";

function getWeightedSalary(base: number, weightingKey: keyof typeof londonWeighting): number {
  const w = londonWeighting[weightingKey];
  if (w.percent === 0) return base;
  const allowance = Math.min(Math.max(base * w.percent, w.min), w.max);
  return base + allowance;
}

interface SalaryProgressionBarProps {
  band: string;
  locationSlug: string;
}

export function SalaryProgressionBar({ band, locationSlug }: SalaryProgressionBarProps) {
  const bandData = bands[band];
  const location = locations.find((l) => l.slug === locationSlug);
  if (!bandData || !location) return null;

  const entry = getWeightedSalary(bandData.entry_salary, location.weighting);
  const top = getWeightedSalary(bandData.top_salary, location.weighting);
  const midIndex = Math.floor(bandData.pay_points.length / 2);
  const midBase = bandData.pay_points[midIndex] ?? bandData.entry_salary;
  const mid = getWeightedSalary(midBase, location.weighting);

  const min = entry;
  const max = top;
  const range = max - min;
  const midPct = range > 0 ? ((mid - min) / range) * 100 : 50;

  const milestones = [
    { label: "Entry", value: entry, left: 0 },
    { label: "Mid point", value: mid, left: midPct },
    { label: "Top of band", value: top, left: 100 },
  ];

  return (
    <div className="rounded-xl border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-4 text-sm font-semibold text-primary">
        Salary progression in {location.name}
      </h3>
      {/* Bar with milestone markers */}
      <div className="relative h-4 w-full rounded-full bg-slate-200">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-primary/80"
          style={{ width: "100%" }}
        />
        {milestones.map((m) => (
          <div
            key={m.label}
            className="absolute top-1/2 z-10 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-primary shadow"
            style={{ left: `${m.left}%`, transform: "translate(-50%, -50%)" }}
            title={`${m.label}: ${formatCurrency(m.value)}`}
          />
        ))}
      </div>
      {/* Labels with values */}
      <div className="mt-4 flex justify-between gap-2">
        <div className="flex flex-col items-start">
          <span className="text-xs text-text-secondary">Entry</span>
          <span className="mt-0.5 text-sm font-semibold text-primary">{formatCurrency(entry)}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-text-secondary">Mid point</span>
          <span className="mt-0.5 text-sm font-semibold text-primary">{formatCurrency(mid)}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs text-text-secondary">Top of band</span>
          <span className="mt-0.5 text-sm font-semibold text-primary">{formatCurrency(top)}</span>
        </div>
      </div>
    </div>
  );
}
