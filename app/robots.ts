const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/auth/", "/pro/dashboard", "/pro/negotiation-coach", "/pro/progression-roadmap", "/pro/cv-reviewer", "/pro/interview-prep"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
