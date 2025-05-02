import React, { useState } from "react";
import "../styles/HRHiring.css";
import { sendPrompt } from "../api/openai";

const HRForm = () => {
  const [data, setData] = useState({ position: "", qualities: "" });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePrompt = ({ position, qualities }) =>
    `Write a professional job description for a ${position} requiring: ${qualities}. Include responsibilities, qualifications, and application instructions.`;

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
      setOutput("Failed to generate job description.");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h3>Job Description Generator</h3>
      <form onSubmit={handleSubmit} className="form">
        <label>Job Title</label>
        <input
          name="position"
          value={data.position}
          onChange={handleChange}
          placeholder="e.g. Marketing Manager"
        />
        <label>Required Qualities</label>
        <textarea
          name="qualities"
          value={data.qualities}
          onChange={handleChange}
          placeholder="e.g. Communication, Time management"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate JD"}
        </button>
      </form>
      {output && <div className="output-box">{output}</div>}
    </div>
  );
};

export default HRForm;
