import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Cloudi-Fi, a Cloud Network Access Platform.
Your goal is to explain Cloudi-Fi's value proposition: Unlocking Universal Zero Trust with a secure and global solution.
Key features to highlight:
- Captive Portal: Cloud-based authentication for guest and BYOD.
- Compliance: Effortless global compliance with logs.
- Analytics: Full network visibility.
- Zero Trust Security: Strict identification and authentication.
- IoT/OT Onboarding: Cloud-DHCP fingerprinting.

Be concise, professional, and helpful. If asked about technical implementation, suggest contacting sales.
`;

export const getChatResponse = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the AI service at the moment (Missing API Key).";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Construct the chat history for the prompt context
    // Ideally we would use ai.chats.create for stateful history, but for this stateless implementation
    // we will pass recent context or just answer the single query with system instruction.
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: newMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I didn't receive a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the network right now. Please try again later.";
  }
};
