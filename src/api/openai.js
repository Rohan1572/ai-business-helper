import axios from "axios";

const API_KEY =
  "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";

const openaiInstance = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

export const sendPrompt = async (userPrompt) => {
  try {
    const response = await openaiInstance.post("", {
      model: "gpt-4.1",
      messages: [{ role: "user", content: userPrompt }],
      temperature: 0.7,
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API error:", error.response || error.message);
    throw error;
  }
};
