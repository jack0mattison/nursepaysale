import { bands } from "@/data/bands";
import { locations } from "@/data/locations";
import { specialisms } from "@/data/specialisms";
import { guides } from "@/data/guides";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

export default function sitemap() {
  const now = new Date();

  const bandLocationPages = Object.keys(bands).flatMap((band) =>
    locations.map((location) => ({
      url: `${baseUrl}/band-${band}-nurse-salary/${location.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  const bandHubPages = Object.keys(bands).map((band) => ({
    url: `${baseUrl}/band-${band}-nurse-salary`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const specialismIndex = {
    url: `${baseUrl}/specialisms`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  };
  const specialismPages = specialisms.map((s) => ({
    url: `${baseUrl}/specialisms/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guidesIndex = {
    url: `${baseUrl}/guides`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  };
  const guidePages = guides.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/tools/nhs-salary-calculator`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/pro`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    ...bandHubPages,
    ...bandLocationPages,
    specialismIndex,
    ...specialismPages,
    guidesIndex,
    ...guidePages,
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];
}
