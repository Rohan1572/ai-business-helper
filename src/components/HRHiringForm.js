import React, { useState } from "react";
import { sendPrompt } from "../api/openai";
import OutputBox from "./OutputBox";

const HRHiringForm = ({ businessName, businessType }) => {
  const [data, setData] = useState({
    position: "",
    qualities: "",
    experience: "",
  });
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
    const prompt = `Write a professional, engaging job description for a ${data.position} position${businessName ? ` at ${businessName}` : ""}${businessType ? ` (a ${businessType})` : ""}. Required qualities: ${data.qualities}.${data.experience ? ` Required experience: ${data.experience}.` : ""} Include: role overview, key responsibilities, required qualifications, preferred skills, and application instructions. Make it sound like a great place to work.`;
    try {
      const result = await sendPrompt(prompt);
      setOutput(result);
    } catch {
      setError("Failed to generate job description. Please try again.");
    }
    setLoading(false);
  };

  const isValid = data.position.trim() && data.qualities.trim();

  return (
    <div className="form-panel">
      <div className="form-card">
        <div className="form-field">
          <label className="field-label" htmlFor="hr-position">
            Job Title / Position
          </label>
          <input
            id="hr-position"
            name="position"
            className="field-input"
            value={data.position}
            onChange={handleChange}
            placeholder="e.g. Senior Marketing Manager"
          />
        </div>

        <div className="form-field">
          <label className="field-label" htmlFor="hr-qualities">
            Required Skills & Qualities
          </label>
          <textarea
            id="hr-qualities"
            name="qualities"
            className="field-textarea"
            value={data.qualities}
            onChange={handleChange}
            placeholder="e.g. Strong communication, content strategy, Google Ads proficiency, team leadership"
            style={{ minHeight: 100 }}
          />
        </div>

        <div className="form-field" style={{ marginBottom: 0 }}>
          <label className="field-label" htmlFor="hr-experience">
            Experience Required{" "}
            <span
              style={{
                textTransform: "none",
                fontWeight: 400,
                color: "var(--text-muted)",
              }}
            >
              (optional)
            </span>
          </label>
          <input
            id="hr-experience"
            name="experience"
            className="field-input"
            value={data.experience}
            onChange={handleChange}
            placeholder="e.g. 3+ years in digital marketing"
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
            <>
              <span className="spinner" /> Generating…
            </>
          ) : (
            "✦ Generate Job Description"
          )}
        </button>
      </div>

      {error && (
        <p style={{ marginTop: 16, color: "var(--error)", fontSize: "0.9rem" }}>
          ⚠ {error}
        </p>
      )}

      <OutputBox content={output} title="Job Description" />
    </div>
  );
};

export default HRHiringForm;
