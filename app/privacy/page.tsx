import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — NursePayScale.co.uk" },
  description:
    "How NursePayScale.co.uk collects, uses and protects your personal data. Covers analytics, cookies, subscriptions and AI tools.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
        <Link href="/" className="text-primary-light hover:underline">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-text-primary">Privacy Policy</span>
      </nav>

      <header>
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Last updated: 28 February 2026
        </p>
      </header>

      <div className="legal-content mt-10 max-w-none [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:pb-2 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:border-b [&_h2]:border-border [&_h2]:scroll-mt-24 [&_h2:first-of-type]:mt-0 [&_p]:text-text-primary [&_li]:text-text-primary [&_strong]:text-text-primary [&_table]:text-text-primary [&_a]:text-primary-light [&_a:hover]:underline [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_code]:rounded [&_code]:bg-border [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm">
        <h2 id="who-we-are">Who We Are</h2>
        <p>
          NursePayScale.co.uk is a UK-based website providing NHS Agenda for
          Change salary information, tools and career resources for nurses and
          healthcare professionals. For privacy-related enquiries, contact us at{" "}
          <a
            href="mailto:privacy@nursepayscale.co.uk"
            className="text-primary-light hover:underline"
          >
            privacy@nursepayscale.co.uk
          </a>
          .
        </p>

        <h2 id="information-you-provide">Information You Provide</h2>
        <ul>
          <li>
            <strong>Pro subscription:</strong> When you subscribe to
            NursePayScale Pro we collect your name, email and payment
            information. Payments are processed via Stripe — we never store full
            card details on our servers.
          </li>
          <li>
            <strong>Calculator and tool usage:</strong> Band, location and pay
            point selections in our salary calculator and other free tools are
            processed locally in your browser or on our server. No account is
            required for free tools and we do not link this usage to you
            personally unless you are signed in.
          </li>
          <li>
            <strong>AI career tools (Pro):</strong> Content you submit to our AI
            career tools (e.g. CV review, interview prep) is sent to Anthropic
            (Claude API) to generate responses. This information is not stored
            beyond the active session unless you explicitly save outputs within
            the service.
          </li>
        </ul>

        <h2 id="information-collected-automatically">
          Information Collected Automatically
        </h2>
        <ul>
          <li>
            <strong>Google Analytics 4 (GA4):</strong> We use GA4 to collect
            anonymised data such as pages visited, time on site, device type,
            browser, approximate city-level location and referral source. This
            uses cookies (e.g. <code>_ga</code>, <code>_gid</code>). You can
            opt out using the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:underline"
            >
              Google Analytics opt-out browser add-on
            </a>
            .
          </li>
          <li>
            <strong>Google AdSense (or similar ad networks):</strong> We may use
            advertising services that set cookies to show ads based on your
            prior visits. You can manage ad preferences at{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:underline"
            >
              Google Ad Settings
            </a>
            .
          </li>
          <li>
            <strong>Vercel hosting:</strong> Our hosting provider (Vercel)
            collects standard server log data such as IP address, browser type,
            referring page and date/time of requests.
          </li>
        </ul>

        <h2 id="how-we-use">How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and maintain the site and its features</li>
          <li>Process Pro subscription payments</li>
          <li>Generate results from AI career tools</li>
          <li>Analyse usage to improve the service</li>
          <li>Display relevant advertising</li>
          <li>Communicate with you about your subscription (e.g. renewal,
            receipts)</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 id="legal-basis">Legal Basis (UK GDPR)</h2>
        <p>We process personal data on the following bases:</p>
        <ul>
          <li>
            <strong>Contract:</strong> Processing necessary to perform our
            contract with you (e.g. Pro subscription).
          </li>
          <li>
            <strong>Legitimate interests:</strong> Analytics and advertising to
            operate and improve the site, where balanced against your rights.
          </li>
          <li>
            <strong>Consent:</strong> Non-essential cookies and any optional
            marketing, where we ask for your consent.
          </li>
        </ul>

        <h2 id="cookies">Cookies</h2>
        <p>
          We use the following types of cookies. You can manage non-essential
          cookies via your browser settings or the opt-out links above.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-border text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-light">
                <th className="p-3 font-semibold text-primary">Type</th>
                <th className="p-3 font-semibold text-primary">Purpose</th>
                <th className="p-3 font-semibold text-primary">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3">Essential</td>
                <td className="p-3">
                  Session management, subscription status
                </td>
                <td className="p-3">Session cookies, auth</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">Analytics</td>
                <td className="p-3">Understand usage</td>
                <td className="p-3">Google Analytics (_ga, _gid)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">Advertising</td>
                <td className="p-3">Serve relevant ads</td>
                <td className="p-3">Google AdSense, DoubleClick</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="third-party">Third-Party Services</h2>
        <p>
          We use the following third-party services. Each has its own privacy
          policy governing how they process data:
        </p>
        <ul>
          <li>
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:underline"
            >
              Vercel
            </a>{" "}
            (hosting)
          </li>
          <li>
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:underline"
            >
              Supabase
            </a>{" "}
            (database)
          </li>
          <li>
            <a
              href="https://stripe.com/gb/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:underline"
            >
              Stripe
            </a>{" "}
            (payments)
          </li>
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:underline"
            >
              Google Analytics
            </a>
          </li>
          <li>
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:underline"
            >
              Google AdSense
            </a>
          </li>
          <li>
            <a
              href="https://www.anthropic.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:underline"
            >
              Anthropic
            </a>{" "}
            (AI features)
          </li>
        </ul>

        <h2 id="retention">Data Retention</h2>
        <ul>
          <li>
            <strong>Analytics:</strong> Retained for up to 14 months in line with
            our analytics provider settings.
          </li>
          <li>
            <strong>Subscription data:</strong> Retained for the duration of
            your subscription and for up to 6 years thereafter for tax and
            accounting purposes where required.
          </li>
          <li>
            <strong>AI interactions:</strong> Not retained beyond the active
            session unless you save content within the service.
          </li>
        </ul>

        <h2 id="your-rights">Your Rights (UK GDPR)</h2>
        <p>Under UK data protection law you have the right to:</p>
        <ul>
          <li><strong>Access</strong> your personal data</li>
          <li><strong>Rectify</strong> inaccurate data</li>
          <li><strong>Erase</strong> your data in certain circumstances</li>
          <li><strong>Restrict</strong> processing in certain circumstances</li>
          <li><strong>Data portability</strong> — receive your data in a
            structured, machine-readable format</li>
          <li><strong>Object</strong> to processing based on legitimate
            interests</li>
          <li><strong>Withdraw consent</strong> where processing is based on
            consent</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:privacy@nursepayscale.co.uk"
            className="text-primary-light hover:underline"
          >
            privacy@nursepayscale.co.uk
          </a>
          . We will respond within 30 days.
        </p>

        <h2 id="security">Data Security</h2>
        <p>
          We use HTTPS encryption for data in transit. Payment card details are
          handled entirely by Stripe and are not stored on our systems. We apply
          access controls to databases and limit access to personal data to
          those who need it to operate the service.
        </p>

        <h2 id="children">Children&apos;s Privacy</h2>
        <p>
          NursePayScale.co.uk is not directed at individuals under 16. We do
          not knowingly collect personal data from children. If you believe a
          child has provided us with personal data, please contact us and we
          will delete it.
        </p>

        <h2 id="transfers">International Transfers</h2>
        <p>
          Some of our service providers process data outside the UK. Where we
          do so, we ensure appropriate safeguards are in place (such as
          standard contractual clauses approved by the UK authorities) so that
          your data is protected to an equivalent standard.
        </p>

        <h2 id="changes">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be
          posted on this page with an updated &quot;Last updated&quot; date. We
          encourage you to review this page periodically.
        </p>

        <h2 id="contact">Contact &amp; Complaints</h2>
        <p>
          For privacy enquiries or to exercise your rights, email{" "}
          <a
            href="mailto:privacy@nursepayscale.co.uk"
            className="text-primary-light hover:underline"
          >
            privacy@nursepayscale.co.uk
          </a>
          . You have the right to complain to the Information Commissioner&apos;s
          Office (ICO) at{" "}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light hover:underline"
          >
            ico.org.uk
          </a>
          .
        </p>
      </div>
    </article>
  );
}
