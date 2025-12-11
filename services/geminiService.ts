import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askPartyAssistant = async (question: string): Promise<string> => {
  if (!apiKey) {
    return "Please set the API_KEY environment variable to use the AI assistant.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a helpful, witty, and festive party planning assistant for a Christmas party happening in Shenzhen, China.
      
      Here are the details of the venue:
      - Vibe: Elegant, vintage, cozy.
      - Decor: Deep red walls with wainscoting, a luxurious green velvet tufted sofa, a crystal chandelier, Persian rugs, and warm lighting.
      - Date: December 21, 2025.
      - Location: A high-rise apartment in Longhua, Shenzhen.
      
      The user (a guest) is asking: "${question}"
      
      Please provide a short, fun, and helpful answer. 
      If they ask about dress code, suggest colors that complement the red walls and green sofa (e.g., gold, silver, black, sparkle) or contrast nicely.
      If they ask what to bring, suggest wine, festive desserts, or board games.
      Keep the tone warm and inviting. Keep the response under 100 words.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Sorry, the elves are busy right now! Try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the North Pole currently.";
  }
};