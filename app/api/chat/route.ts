import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { readFile } from "fs/promises";
import path from "path";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

async function getKnowledgeBase(): Promise<string> {
  try {
    const knowledgeBasePath = process.env.KNOWLEDGE_BASE_PATH || "./knowledge/about-me.md";
    const fullPath = path.join(process.cwd(), knowledgeBasePath);
    const content = await readFile(fullPath, "utf-8");
    return content;
  } catch (error) {
    console.warn("Knowledge base not found, using default:", error);
    return `
# About Young

I'm Young, a full-stack developer specializing in:
- Modern web development (Next.js, React, TypeScript)
- AI integration (Claude, OpenAI)
- Backend development (FastAPI, Python)
- Cloud infrastructure (AWS)

Current projects:
- Language Learning Platform: AI-powered learning platform
- Card Consultation Platform: Online consultation platform
- AI Square: Multi-language AI learning platform
- Medical Decision Platform: AI-powered medical platform
- Professional Consultation Platform: Consultation API
- Healthcare Platform: AWS infrastructure migration

I'm passionate about building innovative solutions that combine modern web technologies with AI capabilities.
    `.trim();
  }
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "ANTHROPIC_API_KEY not configured" },
        { status: 500 }
      );
    }

    const knowledgeBase = await getKnowledgeBase();
    const aiName = process.env.AI_NAME || "Young's AI Assistant";
    const model = process.env.AI_MODEL || "claude-sonnet-4-20250514";

    const systemPrompt = `You are ${aiName}, an AI assistant representing Young, a full-stack developer.

Your knowledge base about Young:
${knowledgeBase}

Your role:
- Answer questions about Young's background, skills, and projects
- Be friendly, professional, and helpful
- If you don't know something specific, be honest about it
- Encourage visitors to explore the website or reach out directly for detailed discussions
- Keep responses concise but informative

Remember: You represent Young's professional brand. Be authentic and helpful!`;

    const response = await anthropic.messages.create({
      model: model,
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages,
    });

    const textContent = response.content.find((block) => block.type === "text");
    const assistantMessage = textContent && "text" in textContent ? textContent.text : "";

    return NextResponse.json({
      message: assistantMessage,
      id: response.id,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    );
  }
}
