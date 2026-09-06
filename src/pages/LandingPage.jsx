import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const FEATURES = [
  { icon: "📣", label: "Marketing" },
  { icon: "⚖️", label: "Legal Docs" },
  { icon: "💬", label: "Customer Relations" },
  { icon: "📦", label: "Inventory" },
  { icon: "👥", label: "HR & Hiring" },
];

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
    }, 1200);
  };

  const isValid = localBusinessName.trim() && localBusinessType.trim();

  return (
    <div className="landing-root">
      <div className="landing-container">
        <div style={{ marginBottom: 4 }}>
          <span className="landing-badge">
            <span className="landing-badge-dot" />
            <span>Powered by GPT-4 & DALL·E 3</span>
          </span>
        </div>

        <h1 className="landing-title">
          Your AI-powered
          <br />
          <span className="gradient-text">business assistant</span>
        </h1>
        <p className="landing-subtitle">
          From marketing copy to legal documents - handle every department with
          the power of AI. Let's set up your workspace in seconds.
        </p>

        <div className="landing-card">
          <h2>Set up your business profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="field-label" htmlFor="businessName">
                Business Name
              </label>
              <div className="input-wrapper">
                <span className="input-icon">🏢</span>
                <input
                  id="businessName"
                  type="text"
                  className="field-input"
                  placeholder="e.g. Bella's Nail Salon"
                  value={localBusinessName}
                  onChange={(e) => setLocalBusinessName(e.target.value)}
                  required
                  autoFocus
                />
              </div>
            </div>

            <div className="form-field">
              <label className="field-label" htmlFor="businessType">
                Type of Business
              </label>
              <div className="input-wrapper">
                <span className="input-icon">💼</span>
                <input
                  id="businessType"
                  type="text"
                  className="field-input"
                  placeholder="e.g. Nail Salon, Cafe, Auto Repair"
                  value={localBusinessType}
                  onChange={(e) => setLocalBusinessType(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary landing-submit-btn"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner" />
                  <span>Setting up your workspace...</span>
                </>
              ) : (
                <>
                  <span>Launch Dashboard</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="features-row">
          {FEATURES.map((feature) => (
            <span key={feature.label} className="feature-pill">
              <span className="feature-pill-icon">{feature.icon}</span>
              {feature.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
