import Link from "next/link";
import { specialisms } from "@/data/specialisms";

export const metadata = {
  title: "Nursing Specialisms | Salary by Role",
  description: "Salary guides by nursing specialism: ICU, mental health, theatre, community, paediatric, A&E, midwifery and more.",
};

export default function SpecialismsIndexPage() {
  return (
    <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold text-primary">Nursing specialisms</h1>
      <p className="mt-2 text-text-secondary">
        Salary and pay scale guides by nursing role. Most roles map to a typical band; use the links for full pay scales.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {specialisms.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/specialisms/${s.slug}`}
              className="block rounded-lg border border-border p-4 text-text-primary hover:border-primary hover:bg-bg-light"
            >
              <span className="font-medium">{s.name}</span>
              <span className="ml-2 text-sm text-text-secondary">Band {s.typicalBand}</span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
