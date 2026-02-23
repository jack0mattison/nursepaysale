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
    specialism?: string;
    target_band?: string;
    years_experience?: string;
    location?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const {
    current_band = "",
    specialism = "",
    target_band = "",
    years_experience = "",
    location = "",
  } = body;

  const userPrompt = `Create a career progression roadmap for an NHS nurse:
- Current band: ${current_band}
- Specialism: ${specialism}
- Target band: ${target_band}
- Years experience: ${years_experience}
- Location: ${location}

Provide:
1. Realistic timeline to reach Band ${target_band}
2. Three specific competencies they need to develop
3. Two recommended CPD qualifications with approximate cost
4. Practical next step they can take this month

Keep it motivating but realistic. Use NHS-specific terminology.`;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 800,
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
