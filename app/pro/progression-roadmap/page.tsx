"use client";

import { ToolForm } from "@/components/pro/ToolForm";
import { ProGate } from "@/components/pro/ProGate";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProgressionRoadmapPage() {
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
        router.push("/auth/login?redirect=/pro/progression-roadmap");
        return;
      }
      const { data: profile } = await supabase.from("profiles").select("is_pro").eq("id", user.id).single();
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
      specialism: (form.elements.namedItem("specialism") as HTMLInputElement).value,
      target_band: (form.elements.namedItem("target_band") as HTMLInputElement).value,
      years_experience: (form.elements.namedItem("years_experience") as HTMLInputElement).value,
      location: (form.elements.namedItem("location") as HTMLInputElement).value,
    };
    try {
      const res = await fetch("/api/ai/roadmap", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Something went wrong"); return; }
      setResult(data.content);
    } catch { setError("Request failed"); } finally { setSubmitting(false); }
  }

  if (loading) return <div className="mx-auto max-w-content px-4 py-8">Loading…</div>;

  return (
    <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-primary">Progression Roadmap</h1>
      <p className="mt-1 text-text-secondary">Get a realistic timeline and steps to reach your target band.</p>
      <ProGate isUserPro={isPro ?? false}>
        <div className="mt-8">
          <ToolForm onSubmit={handleSubmit} isSubmitting={submitting} submitLabel="Generate roadmap">
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label className="block text-sm font-medium">Current band</label><input name="current_band" type="text" placeholder="e.g. 5" className="mt-1 w-full rounded border border-border px-3 py-2" /></div>
              <div><label className="block text-sm font-medium">Target band</label><input name="target_band" type="text" placeholder="e.g. 6" className="mt-1 w-full rounded border border-border px-3 py-2" /></div>
              <div><label className="block text-sm font-medium">Specialism</label><input name="specialism" type="text" placeholder="e.g. ICU" className="mt-1 w-full rounded border border-border px-3 py-2" /></div>
              <div><label className="block text-sm font-medium">Years experience</label><input name="years_experience" type="text" placeholder="e.g. 3" className="mt-1 w-full rounded border border-border px-3 py-2" /></div>
              <div><label className="block text-sm font-medium">Location</label><input name="location" type="text" placeholder="e.g. Manchester" className="mt-1 w-full rounded border border-border px-3 py-2" /></div>
            </div>
          </ToolForm>
          {result && <div className="mt-8 rounded-lg border border-border bg-bg-light p-4"><h2 className="font-semibold text-primary">Your roadmap</h2><div className="prose mt-3 whitespace-pre-wrap text-text-primary">{result}</div></div>}
        </div>
      </ProGate>
    </article>
  );
}
