
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askLogisticsBot(query: string, context?: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are LogiBot, an expert logistics assistant for GlobalShip Express (a premium shipping company like DHL). 
                 Provide helpful, professional advice on shipping, customs, tracking, and international trade.
                 ${context ? `Relevant context: ${context}` : ''}
                 User query: ${query}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my logistics database. Please try again in a moment.";
  }
}

export async function getLogisticsNews() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "What are the latest important global logistics and supply chain news updates for today? Focus on major ports, air freight, and trade route impacts.",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    
    const text = response.text;
    const grounding = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    return {
      text,
      sources: grounding.map((chunk: any) => ({
        title: chunk.web?.title || 'Source',
        uri: chunk.web?.uri || '#'
      }))
    };
  } catch (error) {
    console.error("News Grounding Error:", error);
    return null;
  }
}
