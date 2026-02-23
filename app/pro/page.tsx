import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

export const metadata = {
  title: "Pro – AI Career Tools for NHS Nurses",
  description: "Get personalised salary negotiation scripts, progression roadmaps, CV reviews and interview prep. Join 1,000+ nurses advancing with AI.",
  alternates: { canonical: `${baseUrl}/pro` },
};

const FEATURES = [
  {
    title: "Negotiation Coach",
    description: "Get a tailored script for your appraisal or band discussion. We use your band, trust and achievements to craft opening lines, talking points and a closing ask.",
    href: "/pro/negotiation-coach",
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

const BENEFITS = [
  "Unlimited negotiation scripts",
  "CV and personal statement reviews",
  "Interview prep with STAR outlines",
  "Progression roadmap tool",
  "Cancel anytime",
];

const FAQ = [
  {
    q: "What is Pro?",
    a: "Pro is a subscription that gives you access to AI-powered career tools: Negotiation Coach, CV Reviewer, Interview Prep and Progression Roadmap. All tools are designed for NHS nurses and use your band, location and context.",
  },
  {
    q: "How much does it cost?",
    a: "£9.99 per month. You can cancel anytime from your dashboard. No long-term commitment.",
  },
  {
    q: "Can I try before I buy?",
    a: "You can create an account and view the Pro dashboard to see what’s included. To use the AI tools (negotiation scripts, CV review, interview prep, roadmap), you’ll need an active subscription.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use industry-standard encryption and do not train AI models on your personal data. See our Privacy Policy for full details.",
  },
];

export default function ProPage() {
  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section
        className="relative px-4 py-16 sm:px-6 sm:py-20"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?career,professional')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/75" aria-hidden />
        <div className="relative z-10 mx-auto flex max-w-content flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl text-center text-white lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
              AI career tools for NHS nurses
            </p>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Advance your career with Pro
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg lg:mx-0">
              Get personalised negotiation scripts, CV reviews and interview prep — powered by AI and built for Agenda for Change.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-800 shadow-sm transition hover:bg-blue-50"
              >
                Start for £9.99/month
              </Link>
              <Link
                href="/pro/dashboard"
                className="inline-flex items-center justify-center rounded-lg border border-blue-200/80 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700/60"
              >
                I already have an account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section
        className="relative mx-auto max-w-content px-4 py-12 sm:px-6"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x800/?office,teamwork')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/85" aria-hidden />
        <div className="relative z-10">
        <h2 className="text-center text-2xl font-bold text-primary">What’s included</h2>
        <p className="mt-2 text-center text-text-secondary">
          Three core tools, plus progression roadmap — all in one subscription.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-primary">{f.title}</h3>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{f.description}</p>
              <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Use {f.title} →
              </span>
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* Pricing + benefits */}
      <section
        className="relative border-t border-border px-4 py-12 sm:px-6"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x600/?laptop,workspace')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-bg-light/90" aria-hidden />
        <div className="relative z-10">
        <div className="mx-auto max-w-content">
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Monthly subscription
            </p>
            <p className="mt-2 text-center text-4xl font-bold text-primary">
              £9.99
              <span className="text-lg font-normal text-text-secondary">/month</span>
            </p>
            <ul className="mt-6 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-text-primary">
                  <svg className="h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/auth/signup"
              className="mt-8 block w-full rounded-lg bg-primary py-3 text-center font-semibold text-white transition hover:bg-primary-light"
            >
              Get Pro
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-primary">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-border bg-white shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-4 font-medium text-text-primary [&::-webkit-details-marker]:hidden">
                {q}
                <svg className="h-5 w-5 shrink-0 text-text-secondary transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="border-t border-border px-4 py-3 text-sm text-text-secondary">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
