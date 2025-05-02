import React, { useState } from "react";
import "../styles/CustomerRelations.css";
import { sendPrompt } from "../api/openai";

const CustomerRelationsForm = () => {
  const [data, setData] = useState({ issue: "", tone: "polite" });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePrompt = ({ issue, tone }) =>
    `Draft a ${tone} response to a customer complaint about: ${issue}. Ensure the message maintains professionalism and resolves the concern.`;

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
      setOutput("Failed to generate response.");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h3>Customer Complaint Response</h3>
      <form onSubmit={handleSubmit} className="form">
        <label>Customer Issue</label>
        <textarea
          name="issue"
          value={data.issue}
          onChange={handleChange}
          placeholder="Describe the issue..."
        />
        <label>Response Tone</label>
        <select name="tone" value={data.tone} onChange={handleChange}>
          <option value="polite">Polite</option>
          <option value="apologetic">Apologetic</option>
          <option value="firm">Firm</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Response"}
        </button>
      </form>
      {output && <div className="output-box">{output}</div>}
    </div>
  );
};

export default CustomerRelationsForm;
