"use client";

import { useState, useRef, useEffect } from "react";
import { api } from "@/lib/api";
import { SessionPayload } from "@/types";
import Navbar from "@/components/landing/Navbar";

export default function Page() {
  const [transcript, setTranscript] = useState("");
  const [prompt, setPrompt] = useState(
    "You are a customer support agent. Your goal is to politely convince the user to accept a replacement instead of a refund."
  );
  const [aiResponse, setAiResponse] = useState("");
  const [latency, setLatency] = useState<number | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [conversationHistory, setConversationHistory] = useState<string[][]>([]); // [ [user, ai], ... ]
  const [looping, setLooping] = useState(false);

  useEffect(() => {
    if (looping && aiResponse) {
      speak(aiResponse);
    }
  }, [aiResponse]);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.onend = () => {
      if (looping) {
        startRecording();
      }
    };
    speechSynthesis.speak(utterance);
  };

  const handleTranscribe = async () => {
    const fileToUse = recordedBlob ? new File([recordedBlob], "recorded.wav") : audioFile;
    if (!fileToUse) return;
    const formData = new FormData();
    formData.append("audio", fileToUse);
    setLoading(true);
    const res = await api.post("/transcribe", formData);
    setTranscript(res.data.transcript);
    setLoading(false);
    return res.data.transcript;
  };

  const handleEvaluate = async (inputText: string) => {
    setLoading(true);
    const res = await api.post("/evaluate", {
      transcript: inputText,
      systemPrompt: prompt,
    });
    setAiResponse(res.data.aiResponse);
    setLatency(res.data.latencyMs);
    setLoading(false);
    setConversationHistory((prev) => [...prev, [inputText, res.data.aiResponse]]);
  };

  const handleLoopTurn = async () => {
    const text = await handleTranscribe();
    if (text) await handleEvaluate(text);
  };

  const handleSave = async () => {
    const payload: SessionPayload = {
      transcript,
      prompt,
      userInput: transcript,
      aiResponse,
      latencyMs: latency || 0,
    };
    await api.post("/session", payload);
    alert("Session saved!");
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    const chunks: Blob[] = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(chunks, { type: "audio/wav" });
      setRecordedBlob(blob);
      if (looping) await handleLoopTurn();
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const toggleLooping = () => {
    setLooping((prev) => !prev);
    if (!looping) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  return (
    <main className="p-8 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Cekura Voice QA Demo</h1>

      <div className="space-y-2">
        <input
          type="file"
          accept=".mp3,.wav,.m4a"
          onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
        />
        <div className="space-x-2">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleTranscribe}
          >
            {loading ? "Processing..." : "Upload & Transcribe"}
          </button>
          <button
            className={`px-4 py-2 rounded ${recording ? "bg-red-600" : "bg-purple-600"} text-white`}
            onClick={recording ? stopRecording : startRecording}
          >
            {recording ? "Stop Recording" : "Start Recording"}
          </button>
          <button
            className={`px-4 py-2 rounded ${looping ? "bg-yellow-600" : "bg-gray-600"} text-white`}
            onClick={toggleLooping}
          >
            {looping ? "Stop Conversation" : "Start Conversation"}
          </button>
        </div>
      </div>

      {transcript && (
        <div className="space-y-2">
          <h2 className="font-semibold">Transcript</h2>
          <textarea
            className="w-full p-2 border rounded"
            value={transcript}
            rows={4}
            onChange={(e) => setTranscript(e.target.value)}
          />
        </div>
      )}

      <div className="space-y-2">
        <h2 className="font-semibold">System Prompt</h2>
        <textarea
          className="w-full p-2 border rounded"
          value={prompt}
          rows={3}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => handleEvaluate(transcript)}
      >
        {loading ? "Evaluating..." : "Run GPT Evaluation & Speak"}
      </button>

      {aiResponse && (
        <div className="space-y-2">
          <h2 className="font-semibold">AI Response</h2>
          <textarea
            className="w-full p-2 border rounded bg-gray-50"
            readOnly
            value={aiResponse}
            rows={4}
          />
          {latency && <p className="text-sm text-gray-500">Latency: {latency}ms</p>}
        </div>
      )}

      {aiResponse && (
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          Save Session
        </button>
      )}

      {conversationHistory.length > 0 && (
        <div className="space-y-4 pt-4">
          <h2 className="font-semibold">Conversation History</h2>
          {conversationHistory.map(([user, ai], index) => (
            <div key={index} className="border p-2 rounded bg-gray-50">
              <p className="text-sm font-bold">You:</p>
              <p className="mb-2">{user}</p>
              <p className="text-sm font-bold">Agent:</p>
              <p>{ai}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
