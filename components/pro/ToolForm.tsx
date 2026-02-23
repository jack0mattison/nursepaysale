"use client";

import type { FormEvent, ReactNode } from "react";

interface ToolFormProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void | Promise<void>;
  isSubmitting?: boolean;
  submitLabel?: string;
}

export function ToolForm({
  children,
  onSubmit,
  isSubmitting = false,
  submitLabel = "Submit",
}: ToolFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    void onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
