import React, { useState } from "react";
import { sendPrompt } from "../api/openai";
import OutputBox from "./OutputBox";

const InventoryForm = ({ businessName, businessType }) => {
  const [data, setData] = useState({ item: "", details: "" });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");
    setError("");
    const prompt = `Create a compelling, concise product description for ${data.item}${businessName ? ` sold by ${businessName}` : ""}${businessType ? ` (a ${businessType})` : ""}. Specifications: ${data.details}. Emphasize key features, benefits, and ideal use cases. Make it engaging for online shoppers.`;
    try {
      const result = await sendPrompt(prompt);
      setOutput(result);
    } catch {
      setError("Failed to generate description. Please try again.");
    }
    setLoading(false);
  };

  const isValid = data.item.trim() && data.details.trim();

  return (
    <div className="form-panel">
      <div className="form-card">
        <div className="form-field">
          <label className="field-label" htmlFor="inv-item">Item / Product Name</label>
          <input
            id="inv-item"
            name="item"
            className="field-input"
            value={data.item}
            onChange={handleChange}
            placeholder="e.g. Wireless Noise-Cancelling Earbuds"
          />
        </div>

        <div className="form-field" style={{ marginBottom: 0 }}>
          <label className="field-label" htmlFor="inv-details">Specifications & Features</label>
          <textarea
            id="inv-details"
            name="details"
            className="field-textarea"
            value={data.details}
            onChange={handleChange}
            placeholder="e.g. Bluetooth 5.2, 40-hour battery, ANC, USB-C charging, IPX5 water resistant"
            style={{ minHeight: 110 }}
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
            "✦ Generate Description"
          )}
        </button>
      </div>

      {error && (
        <p style={{ marginTop: 16, color: "var(--error)", fontSize: "0.9rem" }}>
          ⚠ {error}
        </p>
      )}

      <OutputBox content={output} title="Product Description" />
    </div>
  );
};

export default InventoryForm;
