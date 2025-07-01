import { Request, Response } from "express";
import { transcribeAudio } from "../utils/whisperClient.js";
import fs from "fs";

export const transcribe = async (req: Request, res: Response) => {
    console.log("transcribe");
    const file = req.file;
    console.log(req.file);
    if (!file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    try {
        const transcript = await transcribeAudio(file.path);
        console.log(transcript);
        fs.unlinkSync(file.path);
        res.json({ transcript });
      } catch (err) {
        console.error("Transcription error:", err); // ← ADD THIS LINE
        res.status(500).json({ error: "Transcription failed" });
      }
};  