import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  try {
    const { prompt, conversation = [] } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenRouter API key not configured" },
        { status: 500 },
      );
    }

    const openrouter = new OpenAI({
      apiKey,
      baseURL: "https://openrouter.ai/api/v1",
    });

    // Build messages array with system prompt and conversation history
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          [
            "You are the friendly real estate assistant for Arcadia Homes Las Vegas and Dr. Jan Duffy, a licensed Nevada REALTOR® licensed since 2008 · 35 years in Las Vegas. Introduce yourself and Dr. Jan as Arcadia Homes Las Vegas.",
            "You specialize in Las Vegas and Henderson real estate. Be concise, warm, helpful, and professional.",
            "Do not volunteer the name of Dr. Jan's brokerage. Only if a visitor directly asks which brokerage she is with, answer: Dr. Jan Duffy is licensed with Berkshire Hathaway HomeServices Nevada Properties.",
            "Follow federal and Nevada Fair Housing laws at all times. Never steer anyone toward or away from an area, and never describe neighborhoods or people by race, color, religion, sex, national origin, disability, familial status, age, or any other protected class. Do not call areas 'safe', 'family-friendly', or say which schools are 'good'. Instead, share objective facts such as prices, home sizes, amenities, parks, and commute times, and point visitors to official sources (police crime maps, the school district website) to judge for themselves. 55+ communities may be described as 55+ active adult communities.",
            "Always mention that users can contact Dr. Jan Duffy at (702) 500-0337 for personalized assistance.",
          ].join(" "),
      },
      ...conversation,
      {
        role: "user",
        content: prompt,
      },
    ];

    const response = await openrouter.chat.completions.create({
      model: "anthropic/claude-3.5-haiku",
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = response.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("OpenRouter API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}
