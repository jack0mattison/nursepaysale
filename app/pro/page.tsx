import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

export const metadata = {
  title: "Pro – AI Career Tools for NHS Nurses",
  description: "Get personalised salary negotiation scripts, progression roadmaps, CV reviews and interview prep. Join 1,000+ nurses advancing with AI.",
  alternates: { canonical: `${baseUrl}/pro` },
};

const features = [
  {
    title: "Negotiation Coach",
    description: "Get a tailored script for your appraisal or band discussion. We use your band, trust and achievements to craft opening lines, talking points and a closing ask.",
    href: "/pro/negotiation-coach",
  },
  {
    title: "Progression Roadmap",
    description: "See a realistic timeline to your target band, with competencies to develop, CPD recommendations and a practical next step this month.",
    href: "/pro/progression-roadmap",
  },
  {
    title: "CV Reviewer",
    description: "Upload your CV or personal statement. Get an assessment, strengths to keep, improvements with rewrites, and missing NHS keywords.",
    href: "/pro/cv-reviewer",
  },
  {
    title: "Interview Prep",
    description: "Prepare for Band 6+ interviews with likely questions, STAR outlines and tips that reference the NMC Code and Trust values.",
    href: "/pro/interview-prep",
  },
];

export default function ProPage() {
  return (
    <article className="mx-auto max-w-content px-4 py-12 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">
          Pro – AI career tools for NHS nurses
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Get your personalised salary negotiation script, progression roadmap, CV review and interview prep. Join 1,000+ nurses using AI to advance their careers.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/auth/signup"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-light"
          >
            Start for £9.99/month
          </Link>
          <Link
            href="/pro/dashboard"
            className="rounded-lg border border-primary px-6 py-3 font-medium text-primary hover:bg-bg-light"
          >
            I already have an account
          </Link>
        </div>
      </div>

      <section className="mt-16 grid gap-8 sm:grid-cols-2">
        {features.map((f) => (
          <div key={f.href} className="rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold text-primary">{f.title}</h2>
            <p className="mt-2 text-text-secondary">{f.description}</p>
            <Link href={f.href} className="mt-4 inline-block text-primary-light hover:underline">
              Use {f.title} →
            </Link>
          </div>
        ))}
      </section>
    </article>
  );
}
