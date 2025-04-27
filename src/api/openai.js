import axios from "axios";

const API_KEY = "";

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
