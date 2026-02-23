# NursePayScale.co.uk

A programmatic SEO site for NHS nurse salary keywords in the UK, with an AI-powered Pro subscription (negotiation coach, progression roadmap, CV reviewer, interview prep).

## Tech stack

- **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**
- **Supabase** (auth + PostgreSQL)
- **Stripe** (subscriptions)
- **Anthropic Claude API** (Pro AI tools)
- **Vercel** (deployment)

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment variables**

   Copy `.env.local.example` to `.env.local` and set:

   - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
   - `ANTHROPIC_API_KEY`
   - `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID` (monthly price for £9.99)
   - `NEXT_PUBLIC_SITE_URL` (e.g. `https://nursepayscale.co.uk` or `http://localhost:3000` for dev)

3. **Supabase**

   - Create a project at [supabase.com](https://supabase.com).
   - Run the SQL from the spec (in the project docs) in the SQL editor to create `profiles`, `tool_usage`, RLS policies and the `handle_new_user` trigger.
   - In Authentication → URL configuration, set Site URL and add `http://localhost:3000/auth/callback` (and your production URL) to Redirect URLs.

4. **Stripe**

   - Create a product with a £9.99/month recurring price and set `STRIPE_PRICE_ID` to that price ID.
   - For webhooks, use `stripe listen --forward-to localhost:3000/api/stripe/webhook` and set `STRIPE_WEBHOOK_SECRET` to the signing secret.

5. **Run**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Programmatic band+location and specialism pages are statically generated at build time.

## Project structure

- `app/` – App Router pages and API routes
- `components/` – Layout, salary, calculator, Pro, SEO
- `data/` – Bands, locations, specialisms, guides
- `lib/` – Supabase, Stripe, Anthropic, salary utils
- `types/` – Shared TypeScript types

## Notes

- **Band 8b**: Added to `data/bands.ts` so progression from 8a → 8b → 9 is consistent (spec had 8a → 8b but did not define 8b).
- **Stripe webhook**: Uses raw body; the route reads `req.text()` and verifies the signature with `STRIPE_WEBHOOK_SECRET`.
- **Pro tools**: All AI routes require an authenticated user with `profiles.is_pro === true` (set by Stripe webhooks on subscription events).
