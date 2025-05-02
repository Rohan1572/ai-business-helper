import React, { useState, useEffect } from "react";
import "../styles/MarketingForm.css";
import { sendPrompt } from "../api/openai";

const MarketingForm = ({ businessName }) => {
  const [data, setData] = useState({
    business: businessName || "", // Use the businessName prop to pre-fill the field
    offer: "",
    callToAction: "",
  });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Update the business name if it changes (in case the prop changes after component mount)
    if (businessName) {
      setData((prevData) => ({ ...prevData, business: businessName }));
    }
  }, [businessName]);

  const generatePrompt = ({ business, offer, callToAction }) =>
    `Create a compelling marketing post for a business named ${business}. They are offering ${offer}. End the post with a strong call to action: “${callToAction}”.`;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const prompt = generatePrompt(data);
    try {
      const result = await sendPrompt(prompt);
      setOutput(result);
    } catch {
      setOutput("Failed to generate content.");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h3>Create Marketing Content</h3>
      <form onSubmit={handleSubmit} className="form">
        <label>Business Name</label>
        <input
          name="business"
          value={data.business}
          onChange={handleChange}
          placeholder="e.g. Sunshine Café"
        />
        <label>Special Offer</label>
        <input
          name="offer"
          value={data.offer}
          onChange={handleChange}
          placeholder="e.g. 20% off on all drinks"
        />
        <label>Call to Action</label>
        <input
          name="callToAction"
          value={data.callToAction}
          onChange={handleChange}
          placeholder="e.g. Visit us today!"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Content"}
        </button>
      </form>
      {output && <div className="output-box">{output}</div>}
    </div>
  );
};

export default MarketingForm;
