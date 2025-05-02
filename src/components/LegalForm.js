import React, { useState } from "react";
import "../styles/LegalForm.css";
import { sendPrompt } from "../api/openai";

const LegalForm = () => {
  const [data, setData] = useState({ type: "", parties: "" });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePrompt = ({ type, parties }) =>
    `Draft a basic ${type} agreement between ${parties}. Include responsibilities, key terms, and any legal considerations.`;

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
      setOutput("Failed to generate legal document.");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h3>Legal Agreement Generator</h3>
      <form onSubmit={handleSubmit} className="form">
        <label>Type of Agreement</label>
        <input
          name="type"
          value={data.type}
          onChange={handleChange}
          placeholder="e.g. NDA, Lease Agreement"
        />
        <label>Parties Involved</label>
        <textarea
          name="parties"
          value={data.parties}
          onChange={handleChange}
          placeholder="e.g. Company A and Freelancer B"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Document"}
        </button>
      </form>
      {output && <div className="output-box">{output}</div>}
    </div>
  );
};

export default LegalForm;
