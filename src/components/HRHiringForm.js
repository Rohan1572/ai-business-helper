import React, { useState } from "react";

function HRHiring() {
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Generating job description for: ${position}`);
  };

  return (
    <div>
      <h2>HR & Hiring 📋</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Role you want to hire (e.g. Manager, Cleaner)"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          style={{ padding: "0.5rem", width: "80%", marginBottom: "1rem" }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#8b5cf6",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Generate Job Post
        </button>
      </form>
    </div>
  );
}

export default HRHiring;
