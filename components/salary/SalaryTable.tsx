import { bands, londonWeighting } from "@/data/bands";
import { locations } from "@/data/locations";
import { formatCurrency, formatCurrencyMonthly } from "@/lib/salary-utils";

interface SalaryTableProps {
  band: string;
  locationSlug: string;
}

function getWeightedSalary(base: number, weightingKey: keyof typeof londonWeighting): number {
  const w = londonWeighting[weightingKey];
  if (w.percent === 0) return base;
  const allowance = Math.min(Math.max(base * w.percent, w.min), w.max);
  return base + allowance;
}

export function SalaryTable({ band, locationSlug }: SalaryTableProps) {
  const bandData = bands[band];
  const location = locations.find((l) => l.slug === locationSlug);
  if (!bandData || !location) return null;

  const weighting = location.weighting;
  const entry = bandData.entry_salary;
  const top = bandData.top_salary;
  const midIndex = Math.floor(bandData.pay_points.length / 2);
  const mid = bandData.pay_points[midIndex] ?? entry;

  const entryWeighted = getWeightedSalary(entry, weighting);
  const midWeighted = getWeightedSalary(mid, weighting);
  const topWeighted = getWeightedSalary(top, weighting);

  const rows = [
    { label: "Entry", annual: entryWeighted },
    ...(bandData.pay_points.length > 2 ? [{ label: "Mid point", annual: midWeighted }] : []),
    { label: "Top of band", annual: topWeighted },
  ];

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-bg-light">
          <tr>
            <th className="px-4 py-3 font-semibold text-primary">Pay point</th>
            <th className="px-4 py-3 font-semibold text-primary">Annual salary</th>
            <th className="px-4 py-3 font-semibold text-primary">Monthly</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-border">
              <td className="px-4 py-3 text-text-primary">{row.label}</td>
              <td className="px-4 py-3 font-medium text-text-primary">
                {formatCurrency(row.annual)}
                {weighting !== "none" && (
                  <span className="ml-1 text-xs text-text-secondary">
                    (incl. {londonWeighting[weighting].label})
                  </span>
                )}
              </td>
              <td className="px-4 py-3 text-text-secondary">
                {formatCurrencyMonthly(row.annual)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
