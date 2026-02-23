import { createClient } from "@/lib/supabase/server";
import { anthropic } from "@/lib/anthropic";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an expert NHS career coach with deep knowledge of the Agenda for Change pay system, NHS trusts, and nursing career progression in the UK. You help nurses prepare for salary discussions and band applications. Always be specific, practical, and grounded in how the NHS actually works.`;

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_pro")
    .eq("id", user.id)
    .single();

  if (!profile?.is_pro) {
    return NextResponse.json({ error: "Pro subscription required" }, { status: 403 });
  }

  if (!process.env.ANTHROPIC_API_KEY?.trim()) {
    return NextResponse.json(
      { error: "AI service is not configured. Add ANTHROPIC_API_KEY to your environment variables." },
      { status: 503 }
    );
  }

  let body: {
    current_band?: string;
    pay_point?: string;
    years_in_post?: string;
    nhs_trust?: string;
    appraisal_timeframe?: string;
    key_achievements?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const {
    current_band = "",
    pay_point = "",
    years_in_post = "",
    nhs_trust = "",
    appraisal_timeframe = "",
    key_achievements = "",
  } = body;

  const userPrompt = `Write a salary negotiation script for an NHS nurse with these details:
- Current band: ${current_band}
- Current pay point: ${pay_point}
- Years in current post: ${years_in_post}
- NHS Trust: ${nhs_trust}
- Appraisal in: ${appraisal_timeframe}
- Key achievements: ${key_achievements}

Provide:
1. An opening statement to use in their appraisal (2-3 sentences)
2. Three specific talking points with evidence framing
3. How to handle the most common objection ('budgets are tight')
4. A closing ask with specific language

Be specific and practical. Use NHS-specific language.`;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userPrompt }],
    });

    const textBlock = message.content.find((b) => b.type === "text");
    const text = textBlock && "text" in textBlock ? textBlock.text : "";

    return NextResponse.json({ content: text });
  } catch (err) {
    console.error("Anthropic API error:", err);
    const status = err && typeof err === "object" && "status" in err ? (err as { status: number }).status : undefined;
    let errorMessage = "Failed to generate response";
    if (status === 401) errorMessage = "Invalid or missing API key. Add ANTHROPIC_API_KEY to your environment.";
    else if (status === 429) errorMessage = "Too many requests. Please try again in a moment.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
