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

  const contentType = req.headers.get("content-type") || "";
  let cvContent = "";
  let targetBand = "";
  let roleTitle = "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await req.formData();
    cvContent = (formData.get("cv_content") as string) || "";
    targetBand = (formData.get("target_band") as string) || "6";
    roleTitle = (formData.get("role_title") as string) || "nurse";
  } else {
    try {
      const body = await req.json();
      cvContent = body.cv_content || "";
      targetBand = body.target_band || "6";
      roleTitle = body.role_title || "nurse";
    } catch {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
  }

  if (!cvContent.trim()) {
    return NextResponse.json({ error: "CV content is required" }, { status: 400 });
  }

  const userPrompt = `Review this NHS nursing CV/personal statement for a Band ${targetBand} ${roleTitle} application:

${cvContent}

Provide:
1. Overall assessment (2-3 sentences)
2. Three specific strengths to keep
3. Three specific improvements with example rewrites
4. Key NHS/AfC keywords missing that should be added
5. One structural change to improve impact

Be specific and actionable. Reference actual NHS frameworks where relevant (e.g. NMC standards, AfC job profiles, NHS Leadership Academy frameworks).`;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1200,
      system: "You are an expert NHS careers advisor and CV reviewer. You know NMC standards, Agenda for Change job profiles, and NHS recruitment.",
      messages: [{ role: "user", content: userPrompt }],
    });

    const textBlock = message.content.find((b) => b.type === "text");
    const text = textBlock && "text" in textBlock ? textBlock.text : "";

    return NextResponse.json({ content: text });
  } catch (err) {
    console.error("Anthropic API error:", err);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
