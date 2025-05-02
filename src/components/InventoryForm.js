import React, { useState } from "react";
import "../styles/InventoryForm.css";
import { sendPrompt } from "../api/openai";

const InventoryForm = () => {
  const [data, setData] = useState({ item: "", details: "" });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePrompt = ({ item, details }) =>
    `Create a concise product description for ${item} with these specifications: ${details}. Emphasize key features and ideal uses.`;

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
      setOutput("Failed to generate product description.");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h3>Product Description Generator</h3>
      <form onSubmit={handleSubmit} className="form">
        <label>Item Name</label>
        <input
          name="item"
          value={data.item}
          onChange={handleChange}
          placeholder="e.g. Wireless Earbuds"
        />
        <label>Specifications</label>
        <textarea
          name="details"
          value={data.details}
          onChange={handleChange}
          placeholder="e.g. Bluetooth 5.2, 24-hour battery life"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Description"}
        </button>
      </form>
      {output && <div className="output-box">{output}</div>}
    </div>
  );
};

export default InventoryForm;
