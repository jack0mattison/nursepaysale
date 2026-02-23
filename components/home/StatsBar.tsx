const STATS = [
  { label: "395+ Salary Pages" },
  { label: "9 NHS Bands Covered" },
  { label: "37 UK Locations" },
  { label: "Updated May 2025" },
];

export function StatsBar() {
  return (
    <section className="border-y border-slate-200/80 bg-white">
      <div className="mx-auto max-w-content px-4 py-6 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
          {STATS.map(({ label }) => (
            <span
              key={label}
              className="text-sm font-semibold text-slate-700 sm:text-base"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
