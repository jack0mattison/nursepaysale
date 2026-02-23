"use client";

import { ReactNode } from "react";

interface ToolFormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting?: boolean;
  submitLabel?: string;
}

export function ToolForm({
  children,
  onSubmit,
  isSubmitting = false,
  submitLabel = "Submit",
}: ToolFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {children}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:bg-primary-light disabled:opacity-50"
      >
        {isSubmitting ? "Generating…" : submitLabel}
      </button>
    </form>
  );
}
