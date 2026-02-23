import { createClient } from "@/lib/supabase/server";
import { anthropic } from "@/lib/anthropic";
import { NextResponse } from "next/server";

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
    band?: string;
    role_title?: string;
    specialism?: string;
    questions?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const band = body.band || "6";
  const roleTitle = body.role_title || "nurse";
  const specialism = body.specialism || "";
  const questions = body.questions || "common competency-based questions";

  const userPrompt = `Act as an NHS interview coach. The candidate is preparing for a Band ${band} ${roleTitle} interview${specialism ? ` in ${specialism}` : ""}. They want help with: ${questions}.

Provide:
1. Five likely interview questions with NHS/competency focus
2. STAR-format answer outlines for two of them
3. How to link answers to NMC Code and Trust values
4. One tip for closing the interview strongly

Be specific and practical. Use NHS terminology.`;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      system: "You are an expert NHS interview coach. You know competency-based interviews, NMC Code, and how NHS panels assess candidates.",
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
