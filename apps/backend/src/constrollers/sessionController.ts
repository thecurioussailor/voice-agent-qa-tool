import { prisma } from "@repo/db/client";
import { Request, Response } from "express";

export const sessions = async (req: Request, res: Response) => {
    const { transcript, prompt, userInput, aiResponse, latencyMs } = req.body;

    try {
      const session = await prisma.session.create({
        data: { transcript, prompt, userInput, aiResponse, latencyMs },
      });
      res.json({ session });
    } catch (err) {
      res.status(500).json({ error: "Failed to save session" });
    }
};