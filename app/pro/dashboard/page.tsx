import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckoutButton } from "@/components/pro/CheckoutButton";

export default async function ProDashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login?redirect=/pro/dashboard");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_pro, subscription_status")
    .eq("id", user.id)
    .single();

  const isPro = profile?.is_pro ?? false;

  return (
    <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-primary">Pro dashboard</h1>
      <p className="mt-1 text-text-secondary">Signed in as {user.email}</p>

      {isPro ? (
        <div className="mt-8">
          <p className="text-success font-medium">You have an active Pro subscription.</p>
          <ul className="mt-4 space-y-2">
            <li><Link href="/pro/negotiation-coach" className="text-primary-light hover:underline">Negotiation Coach</Link></li>
            <li><Link href="/pro/progression-roadmap" className="text-primary-light hover:underline">Progression Roadmap</Link></li>
            <li><Link href="/pro/cv-reviewer" className="text-primary-light hover:underline">CV Reviewer</Link></li>
            <li><Link href="/pro/interview-prep" className="text-primary-light hover:underline">Interview Prep</Link></li>
          </ul>
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-border bg-bg-light p-6">
          <p className="font-medium text-text-primary">You don’t have Pro yet.</p>
          <p className="mt-1 text-sm text-text-secondary">
            Subscribe to unlock the negotiation coach, progression roadmap, CV reviewer and interview prep.
          </p>
          <div className="mt-4">
            <CheckoutButton />
          </div>
        </div>
      )}
    </article>
  );
}
