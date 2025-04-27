import React, { useState } from "react";
import { sendPrompt } from "../api/openai";

function MarketingForm({ businessName, businessType }) {
  const [promotion, setPromotion] = useState("");
  const [style, setStyle] = useState("");
  const [specialOffer, setSpecialOffer] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const prompt = `
You are an expert marketer. 
Create a catchy social media post and flyer text for the following business:

Business Name: ${businessName || "[Business Name]"}
Business Type: ${businessType || "[Business Type]"}
Promotion: ${promotion}
Style/Vibe: ${style || "Professional and friendly"}
Special Offer: ${specialOffer || "None"}

Make the text engaging and persuasive.
`;

      const result = await sendPrompt(prompt);
      setResponse(result);
    } catch (error) {
      setResponse("Failed to generate content. Please try later.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Marketing Assistant 🎯</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <label>What would you like to promote?</label>
        <input
          type="text"
          placeholder="E.g., Grand opening, 20% off new menu"
          value={promotion}
          onChange={(e) => setPromotion(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />

        <label>Style/Vibe (optional)</label>
        <input
          type="text"
          placeholder="e.g., Fun and colorful, Modern and sleek"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px" }}
        />

        <label>Special Offer (optional)</label>
        <input
          type="text"
          placeholder="E.g., Free drink with purchase"
          value={specialOffer}
          onChange={(e) => setSpecialOffer(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px" }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {loading ? "Generating..." : "Generate Content"}
        </button>
      </form>

      {response && (
        <div
          style={{
            marginTop: "20px",
            background: "#f9f9f9",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>Generated Content:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default MarketingForm;
