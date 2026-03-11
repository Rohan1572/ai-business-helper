import React, { useState } from "react";
import { sendPrompt } from "../api/openai";
import OutputBox from "./OutputBox";

const LegalForm = ({ businessName }) => {
  const [data, setData] = useState({ type: "", parties: "" });
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
    const prompt = `Draft a basic ${data.type} agreement ${businessName ? `for ${businessName}, ` : ""}between ${data.parties}. Include responsibilities, key terms, and any legal considerations. Format it clearly with sections.`;
    try {
      const result = await sendPrompt(prompt);
      setOutput(result);
    } catch {
      setError("Failed to generate legal document. Please try again.");
    }
    setLoading(false);
  };

  const isValid = data.type && data.parties;

  return (
    <div className="form-panel">
      <div className="form-card">
        <div className="form-field">
          <label className="field-label" htmlFor="legal-type">Type of Agreement</label>
          <input
            id="legal-type"
            name="type"
            className="field-input"
            value={data.type}
            onChange={handleChange}
            placeholder="e.g. NDA, Lease Agreement, Service Contract"
          />
        </div>

        <div className="form-field" style={{ marginBottom: 0 }}>
          <label className="field-label" htmlFor="legal-parties">Parties Involved</label>
          <textarea
            id="legal-parties"
            name="parties"
            className="field-textarea"
            value={data.parties}
            onChange={handleChange}
            placeholder="e.g. Company A and Freelancer B, including their roles and responsibilities"
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
            <><span className="spinner" /> Drafting…</>
          ) : (
            "✦ Generate Document"
          )}
        </button>
      </div>

      {error && (
        <p style={{ marginTop: 16, color: "var(--error)", fontSize: "0.9rem" }}>
          ⚠ {error}
        </p>
      )}

      <OutputBox content={output} title="Legal Document" />
    </div>
  );
};

export default LegalForm;
