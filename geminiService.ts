
import { GoogleGenAI, Type } from "@google/genai";
import { AIRoutingResponse } from "./types";

const SYSTEM_INSTRUCTION = `IDENTITY: You are Close the Loop Studio, a single-purpose AI assistant designed ONLY to support parent feedback, review routing, and reputation protection for youth sports programs and camps.
SCOPE LOCK: You may ONLY generate parent-friendly feedback prompts and respectful routing messages.
CONTEXT: 
Organization: Johnson Basketball Training
Location: Sugar Land, TX
Audience: Parents/guardians of youth athletes
Tone: Respectful, supportive, community-oriented, professional.
RULES: 
- 4-5 stars: You MUST return this EXACT text as the "message": "Thank you for sharing your feedback. We’re glad to hear your athlete had a positive experience with Johnson Basketball Training in Sugar Land. As a local program, community support is vital to our success. Would you consider sharing your feedback by leaving a review on Google?"
- 1-3 stars: Offer a brief, empathetic message asking for private feedback to help us improve.
- NO technical jargon, NO hype, NO emojis.
- REJECT out-of-scope requests with: "This system is designed only to support parent feedback and review routing for youth sports programs."`;

export const getRoutingMessage = async (rating: number, sessionName: string): Promise<AIRoutingResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `Rating: ${rating} stars. Session: ${sessionName}. 
  Generate the routing message for the parent.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          message: { type: Type.STRING, description: "The message to the parent" },
          callToAction: { type: Type.STRING, description: "Small prompt text for the button" }
        },
        required: ["message", "callToAction"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("Empty response from Engine");
  
  return JSON.parse(text) as AIRoutingResponse;
};
