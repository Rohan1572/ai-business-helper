import React, { useState } from "react";
import { sendPrompt } from "../api/openai";
import OutputBox from "./OutputBox";

const TONES = [
  { value: "polite", label: "😊 Polite" },
  { value: "apologetic", label: "🙏 Apologetic" },
  { value: "firm", label: "🤝 Firm" },
  { value: "empathetic", label: "💙 Empathetic" },
];

const CustomerRelationsForm = ({ businessName }) => {
  const [data, setData] = useState({ issue: "", tone: "polite" });
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
    const prompt = `Draft a ${data.tone} response${businessName ? ` from ${businessName}` : ""} to a customer complaint about: ${data.issue}. Keep it professional, empathetic, and solution-focused.`;
    try {
      const result = await sendPrompt(prompt);
      setOutput(result);
    } catch {
      setError("Failed to generate response. Please try again.");
    }
    setLoading(false);
  };

  const isValid = data.issue.trim();

  return (
    <div className="form-panel">
      <div className="form-card">
        <div className="form-field">
          <label className="field-label" htmlFor="cr-issue">
            Customer Issue
          </label>
          <textarea
            id="cr-issue"
            name="issue"
            className="field-textarea"
            value={data.issue}
            onChange={handleChange}
            placeholder="Describe the customer's complaint or issue in detail…"
            style={{ minHeight: 120 }}
          />
        </div>

        <div className="form-field" style={{ marginBottom: 0 }}>
          <label className="field-label" htmlFor="cr-tone">
            Response Tone
          </label>
          <select
            id="cr-tone"
            name="tone"
            className="field-select"
            value={data.tone}
            onChange={handleChange}
          >
            {TONES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-submit-row">
        <button
          className="btn-primary form-submit-btn"
          onClick={handleSubmit}
          disabled={loading || !isValid}
        >
          {loading ? (
            <>
              <span className="spinner" /> Drafting…
            </>
          ) : (
            "✦ Generate Response"
          )}
        </button>
      </div>

      {error && (
        <p style={{ marginTop: 16, color: "var(--error)", fontSize: "0.9rem" }}>
          ⚠ {error}
        </p>
      )}

      <OutputBox content={output} title="Customer Response" />
    </div>
  );
};

export default CustomerRelationsForm;
