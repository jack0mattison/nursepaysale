"use client";

import { bands, londonWeighting } from "@/data/bands";
import { locations } from "@/data/locations";
import {
  formatCurrency,
  getIncomeTax,
  getNationalInsurance,
  getNhsPensionContribution,
  getNhsPensionRate,
  getTakeHomeAnnual,
} from "@/lib/salary-utils";
import { useMemo, useState } from "react";

function getWeightedSalary(base: number, weightingKey: keyof typeof londonWeighting): number {
  const w = londonWeighting[weightingKey];
  if (w.percent === 0) return base;
  const allowance = Math.min(Math.max(base * w.percent, w.min), w.max);
  return base + allowance;
}

export function SalaryCalculator() {
  const [band, setBand] = useState("5");
  const [payPointIndex, setPayPointIndex] = useState(0);
  const [locationSlug, setLocationSlug] = useState("manchester");
  const [includePension, setIncludePension] = useState(true);

  const bandData = bands[band];
  const location = locations.find((l) => l.slug === locationSlug);
  const payPoints = bandData?.pay_points ?? [];
  const safePayPointIndex = Math.min(payPointIndex, payPoints.length - 1);
  const baseSalary = payPoints[safePayPointIndex] ?? 0;
  const grossAnnual = location
    ? getWeightedSalary(baseSalary, location.weighting)
    : baseSalary;

  const results = useMemo(() => {
    const tax = getIncomeTax(grossAnnual);
    const ni = getNationalInsurance(grossAnnual);
    const pension = includePension ? getNhsPensionContribution(grossAnnual) : 0;
    const takeHome = grossAnnual - tax - ni - pension;
    const pensionRate = includePension ? getNhsPensionRate(grossAnnual) : 0;
    return {
      grossAnnual,
      grossMonthly: grossAnnual / 12,
      tax,
      ni,
      pension,
      pensionRate,
      takeHomeAnnual: takeHome,
      takeHomeMonthly: takeHome / 12,
    };
  }, [grossAnnual, includePension]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block text-sm font-medium text-text-primary">Band</label>
          <select
            value={band}
            onChange={(e) => {
              setBand(e.target.value);
              setPayPointIndex(0);
            }}
            className="mt-1 w-full rounded border border-border px-3 py-2 text-text-primary"
          >
            {Object.entries(bands).map(([k, v]) => (
              <option key={k} value={k}>
                {v.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary">Pay point</label>
          <select
            value={safePayPointIndex}
            onChange={(e) => setPayPointIndex(Number(e.target.value))}
            className="mt-1 w-full rounded border border-border px-3 py-2 text-text-primary"
          >
            {payPoints.map((p, i) => (
              <option key={i} value={i}>
                {formatCurrency(p)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary">Location</label>
          <select
            value={locationSlug}
            onChange={(e) => setLocationSlug(e.target.value)}
            className="mt-1 w-full rounded border border-border px-3 py-2 text-text-primary"
          >
            {locations.map((loc) => (
              <option key={loc.slug} value={loc.slug}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includePension}
              onChange={(e) => setIncludePension(e.target.checked)}
              className="rounded border-border"
            />
            <span className="text-sm text-text-primary">Include NHS pension</span>
          </label>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-bg-light p-4">
        <h3 className="font-semibold text-primary">Your estimate</h3>
        <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-text-secondary">Gross annual</dt>
            <dd className="font-medium">{formatCurrency(results.grossAnnual)}</dd>
          </div>
          <div>
            <dt className="text-text-secondary">Gross monthly</dt>
            <dd className="font-medium">{formatCurrency(results.grossMonthly)}</dd>
          </div>
          <div>
            <dt className="text-text-secondary">Income tax</dt>
            <dd className="font-medium">{formatCurrency(results.tax)}</dd>
          </div>
          <div>
            <dt className="text-text-secondary">National Insurance</dt>
            <dd className="font-medium">{formatCurrency(results.ni)}</dd>
          </div>
          {includePension && (
            <>
              <div>
                <dt className="text-text-secondary">NHS pension ({Math.round(results.pensionRate * 100)}%)</dt>
                <dd className="font-medium">{formatCurrency(results.pension)}</dd>
              </div>
            </>
          )}
          <div>
            <dt className="text-text-secondary">Take-home monthly</dt>
            <dd className="font-semibold text-primary">{formatCurrency(results.takeHomeMonthly)}</dd>
          </div>
          <div>
            <dt className="text-text-secondary">Take-home annual</dt>
            <dd className="font-semibold text-primary">{formatCurrency(results.takeHomeAnnual)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
