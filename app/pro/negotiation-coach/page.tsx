"use client";

import { ToolForm } from "@/components/pro/ToolForm";
import { ProGate } from "@/components/pro/ProGate";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NegotiationCoachPage() {
  const [isPro, setIsPro] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    async function check() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/auth/login?redirect=/pro/negotiation-coach");
        return;
      }
      const { data: profile } = await supabase
        .from("profiles")
        .select("is_pro")
        .eq("id", user.id)
        .single();
      setIsPro(profile?.is_pro ?? false);
      setLoading(false);
    }
    check();
  }, [supabase, router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setResult(null);
    setSubmitting(true);
    const form = e.currentTarget;
    const body = {
      current_band: (form.elements.namedItem("current_band") as HTMLInputElement).value,
      pay_point: (form.elements.namedItem("pay_point") as HTMLInputElement).value,
      years_in_post: (form.elements.namedItem("years_in_post") as HTMLInputElement).value,
      nhs_trust: (form.elements.namedItem("nhs_trust") as HTMLInputElement).value,
      appraisal_timeframe: (form.elements.namedItem("appraisal_timeframe") as HTMLInputElement).value,
      key_achievements: (form.elements.namedItem("key_achievements") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/ai/negotiation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }
      setResult(data.content);
    } catch {
      setError("Request failed");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <div className="mx-auto max-w-content px-4 py-8">Loading…</div>;

  return (
    <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-primary">Negotiation Coach</h1>
      <p className="mt-1 text-text-secondary">
        Get a personalised salary negotiation script for your appraisal or band discussion.
      </p>

      <ProGate isUserPro={isPro ?? false}>
        <div className="mt-8">
          <ToolForm onSubmit={handleSubmit} isSubmitting={submitting} submitLabel="Generate script">
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Current band</label>
                <input name="current_band" type="text" placeholder="e.g. 5" className="mt-1 w-full rounded border border-border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Pay point</label>
                <input name="pay_point" type="text" placeholder="e.g. 1" className="mt-1 w-full rounded border border-border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Years in current post</label>
                <input name="years_in_post" type="text" placeholder="e.g. 2" className="mt-1 w-full rounded border border-border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">NHS Trust</label>
                <input name="nhs_trust" type="text" placeholder="e.g. Manchester University NHS FT" className="mt-1 w-full rounded border border-border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Appraisal timeframe</label>
                <input name="appraisal_timeframe" type="text" placeholder="e.g. next month" className="mt-1 w-full rounded border border-border px-3 py-2" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Key achievements</label>
              <textarea name="key_achievements" rows={4} placeholder="Brief list of achievements to use as evidence" className="mt-1 w-full rounded border border-border px-3 py-2" />
            </div>
          </ToolForm>

          {result && (
            <div className="mt-8 rounded-lg border border-border bg-bg-light p-4">
              <h2 className="font-semibold text-primary">Your script</h2>
              <div className="prose mt-3 whitespace-pre-wrap text-text-primary">{result}</div>
            </div>
          )}
        </div>
      </ProGate>
    </article>
  );
}
