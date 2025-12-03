import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey });

export const generateChipChatResponse = async (history: { role: string, text: string }[], userMessage: string): Promise<string> => {
  try {
    if (!apiKey) {
      return "I'm currently taking a nap (API Key missing). But I recommend the Ksh 200 mega feast!";
    }

    const systemInstruction = `
      You are 'Chip', the enthusiastic AI mascot for AJ ICONIC CHIPS JOINT in Eldoret, Kenya.
      We have been open since 2023.
      We are located at Outspan Centre, Eldoret.
      Opening hours: Monday to Sunday, 10:00am to 8:00pm.
      
      Menu Prices:
      - Small Snack: Ksh 70
      - Medium Crunch: Ksh 100
      - Large Satisfier: Ksh 150
      - Mega Feast: Ksh 200
      
      Payment Method: M-PESA Send Money to 0715209233 (Alex Kipchumba).
      
      Your personality: Fun, hungry, loves potatoes, uses emojis. 
      Keep answers short (under 50 words) and helpful. 
      If asked about ordering, tell them to use the cart or call ${'0715209233'}.
    `;

    const model = 'gemini-2.5-flash';
    
    // Construct the conversation
    // We only send the last few messages to keep context but save tokens
    const contents = [
      ...history.slice(-4).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      })),
      { role: 'user', parts: [{ text: userMessage }] }
    ];

    const response = await ai.models.generateContent({
      model,
      contents: contents as any, // Type assertion for compatibility if needed
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 100,
      }
    });

    return response.text || "Crunch! I missed that. Try again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oops, I dropped a fry! (Connection error, please try again).";
  }
};