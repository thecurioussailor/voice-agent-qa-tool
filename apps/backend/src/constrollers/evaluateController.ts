import { Request, Response } from "express";
import { evaluatePrompt } from "../utils/openaiClient.js";
export const evaluate = async (req: Request, res: Response) => {
    const { transcript, systemPrompt } = req.body;

    if (!transcript || !systemPrompt) {
      res.status(400).json({ error: "Missing input or prompt" });
      return;
    }
  
    try {
      const start = Date.now();
      const aiResponse = await evaluatePrompt(transcript, systemPrompt);
      const latencyMs = Date.now() - start;
      res.json({ aiResponse, latencyMs });
    } catch (err) {
      res.status(500).json({ error: "LLM evaluation failed" });
    }
};
