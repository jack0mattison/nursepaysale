import { bands, londonWeighting } from "@/data/bands";
import { locations } from "@/data/locations";
import {
  formatCurrency,
  getIncomeTax,
  getNationalInsurance,
  getNhsPensionContribution,
  getTakeHomeAnnual,
} from "@/lib/salary-utils";

interface TakeHomeTableProps {
  band: string;
  locationSlug: string;
}

function getWeightedSalary(base: number, weightingKey: keyof typeof londonWeighting): number {
  const w = londonWeighting[weightingKey];
  if (w.percent === 0) return base;
  const allowance = Math.min(Math.max(base * w.percent, w.min), w.max);
  return base + allowance;
}

export function TakeHomeTable({ band, locationSlug }: TakeHomeTableProps) {
  const bandData = bands[band];
  const location = locations.find((l) => l.slug === locationSlug);
  if (!bandData || !location) return null;

  const entry = getWeightedSalary(bandData.entry_salary, location.weighting);
  const top = getWeightedSalary(bandData.top_salary, location.weighting);

  const entryTakeHome = getTakeHomeAnnual(entry);
  const topTakeHome = getTakeHomeAnnual(top);
  const entryTax = getIncomeTax(entry);
  const topTax = getIncomeTax(top);
  const entryNi = getNationalInsurance(entry);
  const topNi = getNationalInsurance(top);
  const entryPension = getNhsPensionContribution(entry);
  const topPension = getNhsPensionContribution(top);

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-bg-light">
          <tr>
            <th className="px-4 py-3 font-semibold text-primary">Estimate</th>
            <th className="px-4 py-3 font-semibold text-primary">Entry</th>
            <th className="px-4 py-3 font-semibold text-primary">Top of band</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-border">
            <td className="px-4 py-3 text-text-secondary">Gross annual</td>
            <td className="px-4 py-3 font-medium">{formatCurrency(entry)}</td>
            <td className="px-4 py-3 font-medium">{formatCurrency(top)}</td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-4 py-3 text-text-secondary">Income tax</td>
            <td className="px-4 py-3">{formatCurrency(-entryTax)}</td>
            <td className="px-4 py-3">{formatCurrency(-topTax)}</td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-4 py-3 text-text-secondary">National Insurance</td>
            <td className="px-4 py-3">{formatCurrency(-entryNi)}</td>
            <td className="px-4 py-3">{formatCurrency(-topNi)}</td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-4 py-3 text-text-secondary">NHS pension</td>
            <td className="px-4 py-3">{formatCurrency(-entryPension)}</td>
            <td className="px-4 py-3">{formatCurrency(-topPension)}</td>
          </tr>
          <tr className="border-t border-border bg-bg-light font-medium">
            <td className="px-4 py-3 text-primary">Estimated take-home (annual)</td>
            <td className="px-4 py-3">{formatCurrency(entryTakeHome)}</td>
            <td className="px-4 py-3">{formatCurrency(topTakeHome)}</td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-4 py-3 text-text-secondary">Estimated take-home (monthly)</td>
            <td className="px-4 py-3">{formatCurrency(entryTakeHome / 12)}</td>
            <td className="px-4 py-3">{formatCurrency(topTakeHome / 12)}</td>
          </tr>
        </tbody>
      </table>
      <p className="px-4 py-2 text-xs text-text-secondary">
        Estimates based on 2025/26 tax and NHS pension rates. Actual take-home may vary.
      </p>
    </div>
  );
}
