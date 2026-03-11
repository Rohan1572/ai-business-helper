import React, { useState, useEffect } from "react";
import { sendPrompt, generateImage } from "../api/openai";
import OutputBox from "./OutputBox";

const MarketingForm = ({ businessName, businessType }) => {
  const [data, setData] = useState({
    business: businessName || "",
    offer: "",
    callToAction: "",
  });
  const [output, setOutput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (businessName) setData((d) => ({ ...d, business: businessName }));
  }, [businessName]);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");
    setImageUrl("");
    setError("");

    const textPrompt = `Create a compelling marketing post for a business named ${data.business}. They are offering ${data.offer}. End the post with a strong call to action: "${data.callToAction}".`;
    const imagePrompt = `A promotional poster for social media for a business named ${data.business}, showcasing a special offer: "${data.offer}". Modern, clean, vibrant design.`;

    try {
      const [textResult, imageResult] = await Promise.all([
        sendPrompt(textPrompt),
        generateImage(imagePrompt),
      ]);
      setOutput(textResult);
      setImageUrl(imageResult);
    } catch {
      setError("Failed to generate content. Please check your API key and try again.");
    }
    setLoading(false);
  };

  const isValid = data.business && data.offer && data.callToAction;

  return (
    <div className="form-panel">
      <div className="form-card">
        <div className="form-field">
          <label className="field-label" htmlFor="mkt-business">Business Name</label>
          <input
            id="mkt-business"
            name="business"
            className="field-input"
            value={data.business}
            onChange={handleChange}
            placeholder="e.g. Sunshine Café"
          />
        </div>

        <div className="form-field">
          <label className="field-label" htmlFor="mkt-offer">Special Offer</label>
          <input
            id="mkt-offer"
            name="offer"
            className="field-input"
            value={data.offer}
            onChange={handleChange}
            placeholder="e.g. 20% off all drinks this weekend"
          />
        </div>

        <div className="form-field" style={{ marginBottom: 0 }}>
          <label className="field-label" htmlFor="mkt-cta">Call to Action</label>
          <input
            id="mkt-cta"
            name="callToAction"
            className="field-input"
            value={data.callToAction}
            onChange={handleChange}
            placeholder="e.g. Visit us today!"
          />
        </div>
      </div>

      <div className="form-submit-row">
        <button
          className="btn-primary form-submit-btn"
          onClick={handleSubmit}
          disabled={loading || !isValid}
        >
          {loading ? (
            <><span className="spinner" /> Generating…</>
          ) : (
            "✦ Generate Content & Image"
          )}
        </button>
        {loading && (
          <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
            This may take a moment…
          </span>
        )}
      </div>

      {error && (
        <p style={{ marginTop: 16, color: "var(--error)", fontSize: "0.9rem" }}>
          ⚠ {error}
        </p>
      )}

      <OutputBox content={output} title="Marketing Copy" />

      {imageUrl && (
        <div className="image-preview-wrapper">
          <img src={imageUrl} alt="AI-generated marketing visual" />
        </div>
      )}
    </div>
  );
};

export default MarketingForm;
