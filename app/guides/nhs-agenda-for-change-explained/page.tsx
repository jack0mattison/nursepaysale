import Link from "next/link";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ArticleSchema } from "@/components/seo/ArticleSchema";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

export const metadata = {
  title: "NHS Agenda for Change Explained 2026 | Complete Pay Guide for Nurses",
  description:
    "Everything you need to know about NHS Agenda for Change pay bands, salary progression, and how your pay is calculated. Updated for 2025/26.",
  alternates: { canonical: `${baseUrl}/guides/nhs-agenda-for-change-explained` },
};

const FAQ_ITEMS = [
  {
    question: "What is the starting salary for a nurse under Agenda for Change?",
    answer:
      "Newly qualified registered nurses start at Band 5, with a starting salary of £31,049 per year in England for 2025/26. This increases automatically through pay points to a maximum of £37,796 at the top of Band 5.",
  },
  {
    question: "Does Agenda for Change apply to agency nurses?",
    answer:
      "No — agency nurses are not employed directly by the NHS and are therefore not covered by AfC. Agency rates are set by the agency and are often higher per hour than AfC equivalent pay, though agency workers do not receive NHS benefits such as the pension scheme and annual leave entitlements.",
  },
  {
    question: "How often does NHS pay increase under Agenda for Change?",
    answer:
      "There are two types of pay increase — incremental progression (annual, automatic, within your band) and cost of living pay awards (annual, recommended by the Pay Review Body, applied from April each year).",
  },
  {
    question: "Can I be downbanded?",
    answer:
      "In theory yes, though it is rare. If your role changes significantly and a job evaluation determines it warrants a lower band, downbanding can occur. In practice this is uncommon and unions would typically challenge any attempt to downband existing staff.",
  },
  {
    question: "Is Agenda for Change the same as the NHS pay scale?",
    answer:
      "Yes — Agenda for Change and the NHS pay scale refer to the same thing. The pay scale is the set of salary figures that result from the AfC banding system.",
  },
];

export default function NhsAgendaForChangeGuidePage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guides" },
    { name: "NHS Agenda for Change Explained", url: "/guides/nhs-agenda-for-change-explained" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema
        title="NHS Agenda for Change Explained 2026 | Complete Pay Guide for Nurses"
        description={metadata.description}
        url="/guides/nhs-agenda-for-change-explained"
        modifiedTime="2026-02-01"
      />
      <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
        <header>
          <h1 className="text-3xl font-bold text-primary sm:text-4xl">
            NHS Agenda for Change Explained: Complete 2026 Guide
          </h1>
          <p className="mt-2 text-text-secondary">
            Everything you need to know about NHS Agenda for Change pay bands, salary progression, and how your pay is calculated. Updated for 2025/26.
          </p>
        </header>

        <div className="prose prose-slate mt-10 max-w-none prose-headings:font-semibold prose-headings:text-primary prose-p:text-text-primary prose-li:text-text-primary prose-strong:text-text-primary">
          <h2 id="what-is-afc">What is Agenda for Change?</h2>
          <p>
            Agenda for Change (AfC) is the pay system used by the NHS in England, Scotland, Wales and Northern Ireland. It covers more than one million NHS staff and sets out exactly how much every employee earns, how pay increases over time, and what benefits staff are entitled to.
          </p>
          <p>
            Introduced in 2004, it replaced dozens of separate pay systems that had existed across different NHS trusts and regions. The goal was simple — create a single, transparent, fair pay structure where staff doing equivalent jobs earn equivalent pay regardless of where in the country they work.
          </p>
          <p>
            For nurses, Agenda for Change is the framework that governs virtually every aspect of your pay — from your starting salary as a newly qualified Band 5, to how long it takes to reach the top of your band, to what you&apos;ll earn if you move into a senior leadership role at Band 8 or 9.
          </p>

          <h2 id="who-does-afc-cover">Who Does Agenda for Change Cover?</h2>
          <p>
            Agenda for Change covers the vast majority of NHS staff, but not everyone. It applies to:
          </p>
          <ul>
            <li>Registered nurses and midwives</li>
            <li>Healthcare assistants and nursing associates</li>
            <li>Allied health professionals (physiotherapists, occupational therapists, radiographers)</li>
            <li>Administrative and clerical staff</li>
            <li>Estates and facilities staff</li>
            <li>Scientific and technical staff</li>
          </ul>
          <p>
            It does not apply to doctors, dentists, and very senior managers, who have separate pay arrangements. Equally, staff employed by GP practices are technically employed by the practice rather than the NHS directly, so their pay may differ from AfC rates — though many practices use AfC as a benchmark.
          </p>

          <h2 id="band-system">How the Band System Works</h2>
          <p>
            The core of Agenda for Change is its nine-band pay structure. Each band represents a different level of responsibility, skill, and experience. The higher the band, the greater the responsibility and the higher the salary.
          </p>
          <p>
            Band 2 is the entry point for support roles like healthcare assistants. Band 9 represents the most senior nursing leadership roles such as directors of nursing and chief nurses.
          </p>
          <p>
            For registered nurses, the journey typically starts at Band 5 — the entry point for newly qualified nurses who have completed their nursing degree and registered with the NMC. From there, progression to Band 6 and beyond happens through a combination of experience, additional qualifications, and taking on greater responsibility.
          </p>
          <p>
            Within each band there are multiple pay points. You start at the bottom pay point of your band and progress upward automatically based on years of service — this is called incremental progression. Once you reach the top of your band, your pay stops increasing unless you move to a higher band.
          </p>

          <h2 id="nine-bands">The Nine Bands at a Glance</h2>
          <ul className="list-none space-y-4 pl-0">
            <li>
              <strong>Band 2 — £23,615</strong>
              <br />
              <span className="text-text-secondary">Entry level support roles. Healthcare assistants, porters, domestic support workers.</span>
            </li>
            <li>
              <strong>Band 3 — £24,937 to £26,598</strong>
              <br />
              <span className="text-text-secondary">Senior healthcare assistants, nursing assistants with more responsibility.</span>
            </li>
            <li>
              <strong>Band 4 — £27,485 to £30,162</strong>
              <br />
              <span className="text-text-secondary">Nursing associates and assistant practitioners. Bridges the gap between healthcare assistants and registered nurses.</span>
            </li>
            <li>
              <strong>Band 5 — £31,049 to £37,796</strong>
              <br />
              <span className="text-text-secondary">The starting point for registered nurses. Newly qualified nurses, staff nurses across all specialisms.</span>
            </li>
            <li>
              <strong>Band 6 — £38,682 to £46,580</strong>
              <br />
              <span className="text-text-secondary">Senior and specialist nurses, deputy ward managers, health visitors, school nurses.</span>
            </li>
            <li>
              <strong>Band 7 — £47,810 to £54,710</strong>
              <br />
              <span className="text-text-secondary">Ward managers, advanced nurse practitioners, clinical nurse specialists.</span>
            </li>
            <li>
              <strong>Band 8a to 8d — £55,690 to £105,337</strong>
              <br />
              <span className="text-text-secondary">Senior leadership roles. Modern matrons, nurse consultants, heads of nursing.</span>
            </li>
            <li>
              <strong>Band 9 — £109,179 to £125,637</strong>
              <br />
              <span className="text-text-secondary">The most senior nursing roles. Directors of nursing, chief nurses.</span>
            </li>
          </ul>

          <h2 id="pay-progression">How Pay Progression Works</h2>
          <p>
            Within each band, your salary increases automatically at set intervals based on your length of service. This is called incremental pay progression and it happens regardless of performance — as long as you are meeting the basic requirements of your role, your pay moves up to the next pay point on your anniversary date.
          </p>
          <p>
            Most bands have three pay points — entry, mid, and top. Band 5 for example has pay points at £31,049, £33,706 and £37,796. A newly qualified nurse starts at £31,049 and will typically reach the top of Band 5 (£37,796) within around four years.
          </p>
          <p>
            Once you reach the top pay point of your band, incremental progression stops. The only way to increase your salary further is to apply for and be appointed to a role in a higher band.
          </p>
          <p>
            This is an important distinction that many nurses don&apos;t fully understand early in their careers — being brilliant at your job does not automatically earn you a pay rise beyond your band maximum. Career progression in the NHS requires actively moving to a higher banded role.
          </p>

          <h2 id="london-weighting">London Weighting and High Cost Area Supplements</h2>
          <p>
            Nurses working in and around London receive additional pay on top of their basic AfC salary to reflect the higher cost of living in the capital. This is called the High Cost Area Supplement (HCAS) and it comes in three tiers:
          </p>
          <ul>
            <li><strong>Inner London:</strong> 20% of basic salary, minimum £5,609, maximum £8,466 per year</li>
            <li><strong>Outer London:</strong> 15% of basic salary, minimum £4,714, maximum £5,941 per year</li>
            <li><strong>London Fringe:</strong> 5% of basic salary, minimum £1,303, maximum £2,198 per year</li>
          </ul>
          <p>
            So a Band 5 nurse starting on £31,049 in inner London would receive an additional £6,210 (20%), bringing their total to £37,259 — significantly higher than the national starting salary.
          </p>
          <p>
            It is worth noting that while London weighting meaningfully boosts your salary, the cost of living in London — particularly housing — often means that nurses in London are not necessarily better off financially than their counterparts in lower cost regions.
          </p>

          <h2 id="pay-reviews">Annual Pay Reviews</h2>
          <p>
            NHS pay under Agenda for Change is reviewed annually by the NHS Pay Review Body (PRB), an independent body that makes recommendations to the government on NHS staff pay. The government then decides whether to accept, modify or reject those recommendations.
          </p>
          <p>
            Pay rises under AfC are not guaranteed and have been a source of significant industrial tension in recent years. The 2022-23 period saw widespread nursing strikes across England as nurses rejected what they considered inadequate pay offers in the context of high inflation.
          </p>
          <p>
            The most recent pay award for 2025/26 delivered increases across all bands, with the full details published by NHS Employers each April when the new pay year begins.
          </p>

          <h2 id="other-nations">AfC in Scotland, Wales and Northern Ireland</h2>
          <p>
            While Agenda for Change applies across all four nations, pay rates can differ slightly. Scotland, Wales and Northern Ireland each have their own governments and health departments, and have at times applied different pay awards to their NHS workforces.
          </p>
          <p>
            In practical terms the differences are relatively small — the band structure and progression system is the same — but it is worth checking the specific rates for your nation if you are based outside England, as the figures on this site reflect England pay rates.
          </p>

          <h2 id="job-evaluation">Job Evaluation and Banding Decisions</h2>
          <p>
            One of the most important but least understood aspects of Agenda for Change is how jobs are banded in the first place. It is not arbitrary — each role is assessed using the NHS Job Evaluation Scheme, which scores jobs across 16 factors including knowledge, responsibility, physical and mental demands, and working conditions.
          </p>
          <p>
            The score a job receives determines which band it sits in. This means that two nurses with the same job title but different levels of responsibility could theoretically be on different bands if their roles are assessed differently.
          </p>
          <p>
            If you believe your role has been incorrectly banded, you have the right to request a job evaluation review through your line manager or HR department. Many nurses are on lower bands than their actual responsibilities warrant, and a successful review can result in a backdated pay increase.
          </p>

          <h2 id="glossary">Key Terms Glossary</h2>
          <dl className="grid gap-2 sm:grid-cols-[auto_1fr]">
            <dt className="font-semibold text-primary">AfC</dt>
            <dd>Agenda for Change, the NHS pay system</dd>
            <dt className="font-semibold text-primary">Pay point</dt>
            <dd>a specific salary level within a band</dd>
            <dt className="font-semibold text-primary">Incremental progression</dt>
            <dd>automatic annual pay increase within your band</dd>
            <dt className="font-semibold text-primary">HCAS</dt>
            <dd>High Cost Area Supplement, London weighting</dd>
            <dt className="font-semibold text-primary">PRB</dt>
            <dd>Pay Review Body, the independent body that recommends pay rises</dd>
            <dt className="font-semibold text-primary">NMC</dt>
            <dd>Nursing and Midwifery Council, the regulatory body for nurses</dd>
            <dt className="font-semibold text-primary">Job evaluation</dt>
            <dd>the process of assessing a role to determine its band</dd>
          </dl>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQSchema faqs={FAQ_ITEMS} />
        </div>

        <footer className="mt-12 border-t border-border pt-6 text-sm text-text-secondary">
          <p>
            Last updated: February 2026. Salary figures reflect NHS Agenda for Change pay rates for England 2025/26.
          </p>
          <p className="mt-2">
            <Link href="/band-5-nurse-salary" className="text-primary-light hover:underline">
              Band 5 salary by location
            </Link>
            {" · "}
            <Link href="/tools/nhs-salary-calculator" className="text-primary-light hover:underline">
              Salary calculator
            </Link>
          </p>
        </footer>
      </article>
    </>
  );
}
