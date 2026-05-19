import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini Setup
  const ai = new GoogleGenAI({ 
    apiKey: process.env.GEMINI_API_KEY || "", 
    httpOptions: { headers: { "User-Agent": "aistudio-build" } } 
  });

  // API Routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const model = "gemini-3-flash-preview";
      
      const chat = ai.chats.create({
        model: model,
        config: {
          systemInstruction: "You are an expert JEE (Joint Entrance Examination) coach. You help students with Physics, Chemistry, and Maths. You provide clear, concise explanations, solving steps, and motivation. You are encouraging and technical. Answer in markdown.",
        },
      });

      // Simple history mapping if needed
      // For now, let's just use simple generateContent if history is complex, 
      // but chats.create is better for stateful.
      
      const result = await chat.sendMessage({ message });
      res.json({ text: result.text });
    } catch (error: any) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to get AI response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
