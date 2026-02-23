import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // This file can be imported during server prerender/build; ensure we fail with actionable output.
  if (!url || !/^https?:\/\//.test(url)) {
    throw new Error(
      `Invalid NEXT_PUBLIC_SUPABASE_URL: ${JSON.stringify(url)}. Expected a full http(s) URL like "https://<project-ref>.supabase.co".`
    );
  }
  if (!anonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY. Set it in your deployment environment variables."
    );
  }

  return createBrowserClient(
    url,
    anonKey
  );
}
