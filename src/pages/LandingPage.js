import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css"; // Ensure this file is created!

function LandingPage({ setBusinessName, setBusinessType }) {
  const [localBusinessName, setLocalBusinessName] = useState("");
  const [localBusinessType, setLocalBusinessType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localBusinessName || !localBusinessType) return;
    setIsSubmitting(true);
    setBusinessName(localBusinessName);
    setBusinessType(localBusinessType);

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500); // Simulate some delay while navigating
  };

  return (
    <div className="landing-page">
      <h1 className="landing-title">🚀 Welcome to AI Business Helper</h1>
      <p className="landing-subtitle">Let’s set up your business profile!</p>

      <form className="landing-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="businessName">Business Name:</label>
          <input
            type="text"
            id="businessName"
            placeholder="e.g. Bella's Nail Salon"
            value={localBusinessName}
            onChange={(e) => setLocalBusinessName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="businessType">Type of Business:</label>
          <input
            type="text"
            id="businessType"
            placeholder="e.g. Nail Salon, Cafe, Auto Repair"
            value={localBusinessType}
            onChange={(e) => setLocalBusinessType(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="start-button"
          disabled={isSubmitting || !localBusinessName || !localBusinessType}
        >
          {isSubmitting ? "Setting Up..." : "Start Now"}
        </button>
      </form>
    </div>
  );
}

export default LandingPage;
