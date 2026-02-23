import { bands } from "@/data/bands";
import Link from "next/link";

interface ProgressionBarProps {
  currentBand: string;
}

export function ProgressionBar({ currentBand }: ProgressionBarProps) {
  const bandKeys = ["2", "3", "4", "5", "6", "7", "8a", "8b", "9"];
  const currentIndex = bandKeys.indexOf(currentBand);
  if (currentIndex < 0) return null;

  return (
    <div className="rounded-lg border border-border bg-white p-4">
      <h3 className="mb-3 font-semibold text-primary">Band progression</h3>
      <div className="flex flex-wrap items-center gap-1">
        {bandKeys.map((key, i) => {
          const isCurrent = key === currentBand;
          const bandData = bands[key];
          const isPast = i < currentIndex;
          if (!bandData) return null;
          return (
            <span key={key} className="flex items-center gap-1">
              {i > 0 && (
                <span className="text-text-secondary">→</span>
              )}
              {isCurrent ? (
                <span className="rounded bg-primary px-2 py-1 text-sm font-medium text-white">
                  {bandData.title}
                </span>
              ) : (
                <Link
                  href={`/band-${key}-nurse-salary`}
                  className={`rounded px-2 py-1 text-sm ${
                    isPast
                      ? "text-text-secondary hover:text-primary"
                      : "bg-bg-light text-text-primary hover:bg-primary-light hover:text-white"
                  }`}
                >
                  {bandData.title}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
