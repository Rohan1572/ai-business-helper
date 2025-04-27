import axios from "axios";

if (!process.env.REACT_APP_OPENAI_API_KEY) {
  console.warn("⚠️ Missing REACT_APP_OPENAI_API_KEY in .env");
}

// Create an Axios instance for the OpenAI API
const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  },
});

// Function to send a prompt and return the AI’s reply
export const sendPrompt = async (userPrompt) => {
  try {
    const { data } = await openai.post("/chat/completions", {
      model: "gpt-4", // or "gpt-4" if you have access
      messages: [{ role: "user", content: userPrompt }],
      temperature: 0.7,
    });

    return data.choices?.[0]?.message?.content || "";
  } catch (err) {
    console.error("OpenAI API error:", err.response?.data || err.message);
    throw new Error("There was a problem fetching your AI response.");
  }
};
