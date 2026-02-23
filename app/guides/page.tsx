import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata = {
  title: "Guides | NHS Nurse Salary & Career",
  description: "Guides to NHS Agenda for Change, band progression, pension and London weighting.",
};

export default function GuidesIndexPage() {
  return (
    <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold text-primary">Guides</h1>
      <p className="mt-2 text-text-secondary">
        Understanding NHS pay, progression and pension.
      </p>
      <ul className="mt-8 space-y-3">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/guides/${g.slug}`}
              className="block rounded-lg border border-border p-4 text-text-primary hover:border-primary hover:bg-bg-light"
            >
              <span className="font-medium">{g.title}</span>
              <p className="mt-1 text-sm text-text-secondary">{g.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
