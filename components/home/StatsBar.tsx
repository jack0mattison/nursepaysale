import { FileText, LayoutGrid, MapPin, Calendar } from "lucide-react";

const STATS = [
  { label: "395+ Salary Pages", icon: FileText },
  { label: "9 NHS Bands Covered", icon: LayoutGrid },
  { label: "37 UK Locations", icon: MapPin },
  { label: "Updated May 2025", icon: Calendar },
];

export function StatsBar() {
  return (
    <section className="border-y border-slate-200/80 bg-white">
      <div className="mx-auto max-w-content px-4 py-6 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
          {STATS.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-slate-700"
            >
              <span className="text-primary">
                <Icon className="h-5 w-5 shrink-0" strokeWidth={1.5} />
              </span>
              <span className="text-sm font-semibold sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
