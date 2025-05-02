import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarketingForm from "../components/MarketingForm";
import LegalForm from "../components/LegalForm";
import CustomerRelationsForm from "../components/CustomerRelationsForm";
import InventoryForm from "../components/InventoryForm";
import HRHiringForm from "../components/HRHiringForm";

import "../styles/Dashboard.css"; // Make sure you create this file!

function Dashboard({ businessName, businessType }) {
  const [selectedBubble, setSelectedBubble] = useState("");
  const navigate = useNavigate();

  const renderBubbleContent = () => {
    switch (selectedBubble) {
      case "Marketing":
        return (
          <MarketingForm
            businessName={businessName}
            businessType={businessType}
          />
        );
      case "Legal":
        return (
          <LegalForm businessName={businessName} businessType={businessType} />
        );
      case "Customer Relations":
        return (
          <CustomerRelationsForm
            businessName={businessName}
            businessType={businessType}
          />
        );
      case "Inventory":
        return (
          <InventoryForm
            businessName={businessName}
            businessType={businessType}
          />
        );
      case "HR & Hiring":
        return (
          <HRHiringForm
            businessName={businessName}
            businessType={businessType}
          />
        );
      default:
        return (
          <p style={{ marginTop: "20px" }}>
            Select a bubble above to get started!
          </p>
        );
    }
  };

  const handleBackClick = () => {
    navigate("/"); // Navigate back to the landing page
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Choose a Department 🏢</h1>

      {/* Back Button */}
      <button className="back-button" onClick={handleBackClick}>
        Back to Landing Page
      </button>

      <div className="bubbles-container">
        {[
          "Marketing",
          "Legal",
          "Customer Relations",
          "Inventory",
          "HR & Hiring",
        ].map((bubble) => (
          <button
            key={bubble}
            className={`bubble ${selectedBubble === bubble ? "active" : ""}`}
            onClick={() => setSelectedBubble(bubble)}
          >
            {bubble}
          </button>
        ))}
      </div>

      <div className="bubble-content">{renderBubbleContent()}</div>
    </div>
  );
}

export default Dashboard;
