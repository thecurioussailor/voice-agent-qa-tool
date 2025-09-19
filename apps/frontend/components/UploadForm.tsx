"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export function UploadForm({ onTranscript }: { onTranscript: (t: string) => void }) {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!audioFile) return;

    const formData = new FormData();
    formData.append("audio", audioFile);

    setLoading(true);
    const res = await api.post("/transcribe", formData);
    setLoading(false);

    onTranscript(res.data.transcript);
  };

  return (
    <div className="space-y-4 p-4 border rounded-xl shadow">
      <input
        type="file"
        accept=".mp3,.wav,.m4a"
        onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded">
        {loading ? "Transcribing..." : "Upload & Transcribe"}
      </button>
    </div>
  );
}
