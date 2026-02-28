import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Terms of Use — NursePayScale.co.uk" },
  description:
    "Terms and conditions for using NursePayScale.co.uk, including our salary calculator, guides and Pro subscription.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
        <Link href="/" className="text-primary-light hover:underline">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-text-primary">Terms of Use</span>
      </nav>

      <header>
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Last updated: 28 February 2026
        </p>
      </header>

      <div className="prose prose-slate mt-10 max-w-none prose-headings:font-semibold prose-headings:text-primary prose-headings:mt-8 prose-headings:mb-4 prose-p:text-text-primary prose-li:text-text-primary prose-strong:text-text-primary">
        <h2 id="about">About the Site</h2>
        <p>
          NursePayScale.co.uk provides NHS Agenda for Change salary information,
          a salary calculator, career guides and AI-powered career tools for UK
          nurses and healthcare professionals. The site is operated from the
          United Kingdom.
        </p>

        <h2 id="use-of-site">Use of the Site</h2>
        <p>
          You may use the site for personal, non-commercial use. You agree not
          to:
        </p>
        <ul>
          <li>Use the site in any way that violates applicable laws</li>
          <li>Attempt to gain unauthorised access to our systems, other
            accounts or any data not intended for you</li>
          <li>Use automated means (scraping, bots, crawlers) without our prior
            permission</li>
          <li>Republish or redistribute substantial parts of the site without
            attribution or permission</li>
          <li>Transmit any harmful, offensive or unlawful content</li>
        </ul>

        <h2 id="salary-disclaimer">Salary Information Disclaimer</h2>
        <div className="rounded-lg border-2 border-primary/20 bg-bg-light p-5 not-prose my-6">
          <p className="mb-3 font-semibold text-primary">
            Important — please read
          </p>
          <ul className="list-disc space-y-2 pl-5 text-text-primary text-sm sm:text-base">
            <li>
              All salary figures on this site are estimates based on publicly
              available NHS Agenda for Change pay scales. They are for general
              guidance only.
            </li>
            <li>
              Your actual salary may differ based on your employer, contract
              type, location supplements, unsocial hours payments, salary
              sacrifice and other factors.
            </li>
            <li>
              We update our data regularly but do not guarantee that it is
              current at all times. Always confirm with your employer or
              official NHS sources.
            </li>
            <li>
              Calculator estimates of tax, National Insurance and pension
              deductions are for guidance only. Check with your employer or a
              financial adviser for accurate figures.
            </li>
            <li>
              Nothing on this site constitutes financial, tax or employment
              advice. You should not rely on it as such.
            </li>
          </ul>
        </div>

        <h2 id="pro-subscription">NursePayScale Pro — Subscription</h2>
        <ul>
          <li>
            NursePayScale Pro is billed at £9.99 per month, charged monthly via
            Stripe.
          </li>
          <li>
            Your subscription renews automatically each billing period until
            you cancel. You may cancel at any time via your account or
            subscription dashboard; cancellation takes effect at the end of the
            current billing period.
          </li>
          <li>
            We do not offer partial refunds for unused portions of a billing
            period.
          </li>
          <li>
            If we offer a free trial, you will be charged automatically when
            the trial ends unless you cancel before the trial period expires.
          </li>
        </ul>

        <h2 id="pro-ai">NursePayScale Pro — AI Features</h2>
        <ul>
          <li>
            Our AI career tools use Anthropic&apos;s Claude AI to generate
            responses. They are provided for informational and educational
            purposes only.
          </li>
          <li>
            AI outputs are not professional career, legal or financial advice.
            They may contain errors or outdated information — always verify
            independently and use your own judgement.
          </li>
          <li>
            We do not guarantee any particular outcome (e.g. promotion, pay
            rise, interview success) from using the tools.
          </li>
          <li>
            Do not enter sensitive personal information into AI tools (e.g. NHS
            employee number, National Insurance number, detailed medical or
            financial data). We are not responsible for how such data may be
            processed by third-party AI services.
          </li>
        </ul>

        <h2 id="ip">Intellectual Property</h2>
        <p>
          All content on NursePayScale.co.uk is owned by NursePayScale.co.uk or
          its licensors. NHS Agenda for Change pay data is Crown copyright and
          is reproduced here under the{" "}
          <a
            href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light hover:underline"
          >
            Open Government Licence v3.0
          </a>
          . Brief quotes with clear attribution are permitted; substantial
          reproduction or reuse of our content requires our prior written
          permission.
        </p>

        <h2 id="user-content">User Content</h2>
        <p>
          You retain ownership of any content you submit to our services (e.g.
          text you provide to AI tools). By submitting it, you grant us a
          limited licence to use, process and transmit that content only as
          necessary to provide the service to you (e.g. to generate AI
          responses).
        </p>

        <h2 id="availability">Availability</h2>
        <p>
          We aim to keep the site available and up to date, but we do not
          guarantee uninterrupted access or that any particular feature will
          always be available. We may modify, suspend or discontinue any part of
          the service without liability to you.
        </p>

        <h2 id="liability">Limitation of Liability</h2>
        <ul>
          <li>
            The site and all content are provided &quot;as is&quot; without
            warranties of any kind (express or implied) to the fullest extent
            permitted by law.
          </li>
          <li>
            We are not liable for any indirect, consequential or special
            damages arising from your use of the site (including loss of
            profits, data or opportunity).
          </li>
          <li>
            For paid (Pro) subscribers, our total liability in connection with
            the subscription and use of the site is capped at an amount equal
            to the fees you have paid to us in the 12 months preceding the
            claim.
          </li>
          <li>
            Nothing in these terms excludes or limits our liability for death
            or personal injury caused by our negligence, fraud or fraudulent
            misrepresentation, or any other liability that cannot be excluded
            or limited under applicable law.
          </li>
        </ul>

        <h2 id="governing-law">Governing Law</h2>
        <p>
          These terms are governed by the laws of England and Wales. Any
          disputes shall be subject to the exclusive jurisdiction of the courts
          of England and Wales.
        </p>

        <h2 id="contact">Contact</h2>
        <p>
          For general enquiries, contact us at{" "}
          <a
            href="mailto:hello@nursepayscale.co.uk"
            className="text-primary-light hover:underline"
          >
            hello@nursepayscale.co.uk
          </a>
          . For privacy matters, see our{" "}
          <Link href="/privacy" className="text-primary-light hover:underline">
            Privacy Policy
          </Link>{" "}
          and contact{" "}
          <a
            href="mailto:privacy@nursepayscale.co.uk"
            className="text-primary-light hover:underline"
          >
            privacy@nursepayscale.co.uk
          </a>
          .
        </p>
      </div>
    </article>
  );
}
