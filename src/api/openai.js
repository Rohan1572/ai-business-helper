import axios from "axios";

if (!process.env.REACT_APP_OPENAI_API_KEY) {
  console.warn("⚠️ Missing REACT_APP_OPENAI_API_KEY in .env");
}

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  },
});

// ✅ Function to send text prompt
export const sendPrompt = async (userPrompt) => {
  try {
    const { data } = await openai.post("/chat/completions", {
      model: "gpt-4",
      messages: [{ role: "user", content: userPrompt }],
      temperature: 0.7,
    });

    return data.choices?.[0]?.message?.content || "";
  } catch (err) {
    console.error("OpenAI API error:", err.response?.data || err.message);
    throw new Error("There was a problem fetching your AI response.");
  }
};

// ✅ Function to generate image using DALL·E
export const generateImage = async (imagePrompt) => {
  try {
    const { data } = await openai.post("/images/generations", {
      prompt: imagePrompt,
      n: 1,
      model: "dall-e-3",
    });

    return data.data?.[0]?.url || "";
  } catch (err) {
    console.error("OpenAI Image API error:", err.response?.data || err.message);
    throw new Error("There was a problem generating the image.");
  }
};
