import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function evaluatePrompt(input: string, systemPrompt: string): Promise<string> {
  const result = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: input },
    ],
  });
  return result.choices[0]?.message.content || "";
}
