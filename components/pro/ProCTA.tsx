import Link from "next/link";

interface ProCTAProps {
  variant: "mid-page" | "bottom";
}

export function ProCTA({ variant }: ProCTAProps) {
  if (variant === "mid-page") {
    return (
      <div className="rounded-lg bg-primary p-6 text-white">
        <p className="font-semibold">Get your personalised NHS salary negotiation script</p>
        <p className="mt-1 text-sm opacity-90">Join 1,000+ nurses using AI to advance their careers.</p>
        <Link
          href="/pro"
          className="mt-4 inline-block rounded bg-white px-4 py-2 font-medium text-primary hover:bg-bg-light"
        >
          Start for £9.99/month
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-2 border-primary bg-bg-light p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-primary">Ready to negotiate with confidence?</h2>
      <p className="mt-2 text-text-secondary">
        Get your personalised NHS salary negotiation script. Join 1,000+ nurses using AI to advance their careers.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href="/pro"
          className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:bg-primary-light"
        >
          Start Free Trial
        </Link>
        <Link
          href="/pro"
          className="rounded-lg border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-white"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
