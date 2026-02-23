/**
 * NHS pension contribution tiers (AfC 2025/26)
 * Percentage of pensionable pay in each tier
 */
const NHS_PENSION_TIERS = [
  { max: 13259, rate: 0.051 },
  { max: 26831, rate: 0.057 },
  { max: 32691, rate: 0.083 },
  { max: 49078, rate: 0.098 },
  { max: 62924, rate: 0.125 },
  { max: 93333, rate: 0.135 },
  { max: Infinity, rate: 0.145 },
];

/**
 * 2025/26 income tax bands (UK)
 */
const PERSONAL_ALLOWANCE = 12570;
const BASIC_RATE_MAX = 50270;   // 20%
const HIGHER_RATE_MAX = 125140; // 40%
// Above 125140: 45%

/**
 * 2025/26 NI: 8% on £12,570–£50,270; 2% above £50,270
 */
const NI_THRESHOLD = 12570;
const NI_BASIC_MAX = 50270;
const NI_BASIC_RATE = 0.08;
const NI_HIGHER_RATE = 0.02;

export function getNhsPensionRate(grossAnnual: number): number {
  for (const tier of NHS_PENSION_TIERS) {
    if (grossAnnual <= tier.max) return tier.rate;
  }
  return 0.145;
}

export function getNhsPensionContribution(grossAnnual: number): number {
  return Math.round(grossAnnual * getNhsPensionRate(grossAnnual));
}

export function getIncomeTax(grossAnnual: number): number {
  const taxable = Math.max(0, grossAnnual - PERSONAL_ALLOWANCE);
  if (taxable <= 0) return 0;
  let tax = 0;
  const basicBand = Math.min(taxable, BASIC_RATE_MAX - PERSONAL_ALLOWANCE);
  tax += basicBand * 0.2;
  if (taxable > BASIC_RATE_MAX - PERSONAL_ALLOWANCE) {
    const higherBand = Math.min(
      taxable - (BASIC_RATE_MAX - PERSONAL_ALLOWANCE),
      HIGHER_RATE_MAX - BASIC_RATE_MAX
    );
    tax += higherBand * 0.4;
  }
  if (taxable > HIGHER_RATE_MAX - PERSONAL_ALLOWANCE) {
    const additionalBand = taxable - (HIGHER_RATE_MAX - PERSONAL_ALLOWANCE);
    tax += additionalBand * 0.45;
  }
  return Math.round(tax);
}

export function getNationalInsurance(grossAnnual: number): number {
  const aboveThreshold = Math.max(0, grossAnnual - NI_THRESHOLD);
  if (aboveThreshold <= 0) return 0;
  const basicPortion = Math.min(aboveThreshold, NI_BASIC_MAX - NI_THRESHOLD);
  const higherPortion = Math.max(0, grossAnnual - NI_BASIC_MAX);
  return Math.round(basicPortion * NI_BASIC_RATE + higherPortion * NI_HIGHER_RATE);
}

export function getTakeHomeAnnual(
  grossAnnual: number,
  options: { includePension?: boolean } = {}
): number {
  const { includePension = true } = options;
  const tax = getIncomeTax(grossAnnual);
  const ni = getNationalInsurance(grossAnnual);
  const pension = includePension ? getNhsPensionContribution(grossAnnual) : 0;
  return grossAnnual - tax - ni - pension;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatCurrencyMonthly(annual: number): string {
  return formatCurrency(annual / 12);
}
