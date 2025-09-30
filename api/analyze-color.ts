// Import tipe untuk environment serverless (contoh untuk Vercel)
// Jika menggunakan platform lain, Anda mungkin perlu menyesuaikannya.
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const MODEL_NAME = "gemini-2.5-flash";
// Ambil API Key dari environment variables
const API_KEY = process.env.GOOGLE_API_KEY;

// Fungsi untuk mengubah data URL (base64) menjadi format yang dimengerti Gemini
function fileToGenerativePart(base64Data: string) {
  // Ekstrak mimeType dan data base64 murni
  const match = base64Data.match(/^data:(image\/\w+);base64,(.*)$/);
  if (!match) {
    throw new Error('Invalid base64 string');
  }
  const mimeType = match[1];
  const data = match[2];
  
  return {
    inlineData: {
      data,
      mimeType,
    },
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Hanya izinkan metode POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const { image } = req.body; // Gambar dalam format base64 data URL

    if (!image) {
      return res.status(400).json({ error: 'No image provided' });
    }

    const imagePart = fileToGenerativePart(image);

    const prompt = `
      Anda adalah seorang analis warna pribadi profesional.
      Analisis warna kulit dari gambar yang diberikan. Fokus pada area kulit yang paling jelas terlihat.
      Tentukan 'skin tone' (misalnya, Warm Medium, Cool Light, Neutral Deep).
      Tentukan 'musim warna' (Color Season) yang paling cocok (Autumn, Winter, Spring, Summer).
      Berikan 5 'recommendedColors' dalam format hex code yang paling cocok untuk musim tersebut.
      Berikan 5 'complementaryColors' dalam format hex code yang juga cocok.
      
      Balas HANYA dengan format JSON yang valid tanpa teks tambahan atau markdown. Strukturnya harus seperti ini:
      {
        "skinTone": "...",
        "season": "...",
        "recommendedColors": ["#...", "#...", "#...", "#...", "#..."],
        "complementaryColors": ["#...", "#...", "#...", "#...", "#..."]
      }
    `;

    const generationConfig = {
      temperature: 0.4,
      topK: 32,
      topP: 1,
      maxOutputTokens: 4096,
    };

    const safetySettings = [
      { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
      { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
      { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
      { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    ];

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [imagePart, { text: prompt }] }],
      generationConfig,
      safetySettings,
    });

    const responseText = result.response.text();
    
    // Coba parse response sebagai JSON
    const jsonResponse = JSON.parse(responseText);

    res.status(200).json(jsonResponse);

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).json({ error: 'Failed to analyze image', details: errorMessage });
  }
}