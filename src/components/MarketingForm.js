import React, { useState, useEffect } from "react";
import "../styles/MarketingForm.css";
import { sendPrompt, generateImage } from "../api/openai";

const MarketingForm = ({ businessName }) => {
  const [data, setData] = useState({
    business: businessName || "",
    offer: "",
    callToAction: "",
  });

  const [output, setOutput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (businessName) {
      setData((prevData) => ({ ...prevData, business: businessName }));
    }
  }, [businessName]);

  const generateTextPrompt = ({ business, offer, callToAction }) =>
    `Create a compelling marketing post for a business named ${business}. They are offering ${offer}. End the post with a strong call to action: “${callToAction}”.`;

  const generateImagePrompt = ({ business, offer }) =>
    `A promotional poster for social media for a business named ${business}, showcasing a special offer: "${offer}". Simple and elegant`;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");
    setImageUrl("");

    const textPrompt = generateTextPrompt(data);
    const imagePrompt = generateImagePrompt(data);

    try {
      const [textResult, imageResult] = await Promise.all([
        sendPrompt(textPrompt),
        generateImage(imagePrompt),
      ]);
      setOutput(textResult);
      setImageUrl(imageResult);
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
          {loading ? "Generating..." : "Generate Content & Image"}
        </button>
      </form>

      {output && (
        <div className="output-box">
          <p>{output}</p>
        </div>
      )}

      {imageUrl && (
        <div className="image-preview">
          <h4>Marketing Image</h4>
          <img src={imageUrl} alt="Marketing Visual" />
        </div>
      )}
    </div>
  );
};

export default MarketingForm;
