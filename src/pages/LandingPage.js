import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css"; // Make sure to create this!

function LandingPage({ setBusinessName, setBusinessType }) {
  const [localBusinessName, setLocalBusinessName] = useState("");
  const [localBusinessType, setLocalBusinessType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Passing the values to the parent component using props
    setBusinessName(localBusinessName);
    setBusinessType(localBusinessType);
    navigate("/dashboard");
  };

  return (
    <div className="landing-page">
      <h1 className="landing-title">🚀 Welcome to AI Business Helper</h1>
      <p className="landing-subtitle">Let's set up your business profile!</p>

      <form className="landing-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Business Name:</label>
          <input
            type="text"
            placeholder="e.g. Bella's Nail Salon"
            value={localBusinessName}
            onChange={(e) => setLocalBusinessName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Type of Business:</label>
          <input
            type="text"
            placeholder="e.g. Nail Salon, Cafe, Auto Repair"
            value={localBusinessType}
            onChange={(e) => setLocalBusinessType(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="start-button">
          Start Now
        </button>
      </form>
    </div>
  );
}

export default LandingPage;
