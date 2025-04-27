import React, { useState } from "react";

function LegalForm() {
  const [docType, setDocType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Generating a sample ${docType}`);
  };

  return (
    <div>
      <h2>Legal Help 🧾</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={docType}
          onChange={(e) => setDocType(e.target.value)}
          style={{ padding: "0.5rem", width: "80%", marginBottom: "1rem" }}
        >
          <option value="">Select Document Type</option>
          <option value="Refund Policy">Refund Policy</option>
          <option value="Waiver Form">Waiver Form</option>
          <option value="Hiring Letter">Hiring Letter</option>
          <option value="Service Agreement">Service Agreement</option>
        </select>
        <br />
        <button
          type="submit"
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#10b981",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Generate Document
        </button>
      </form>
    </div>
  );
}

export default LegalForm;
