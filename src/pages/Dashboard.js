import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarketingForm from "../components/MarketingForm";
import LegalForm from "../components/LegalForm";
import CustomerRelationsForm from "../components/CustomerRelationsForm";
import InventoryForm from "../components/InventoryForm";
import HRHiringForm from "../components/HRHiringForm";
import "../styles/Dashboard.css";

const MODULES = [
  {
    id: "Marketing",
    icon: "📣",
    iconClass: "marketing",
    title: "Marketing",
    desc: "Generate compelling social posts, ad copy, and promotional content with AI-generated visuals.",
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, #ff6b6b, #ffa500)",
    tag: "Text + Image",
  },
  {
    id: "Legal",
    icon: "⚖️",
    iconClass: "legal",
    title: "Legal Documents",
    desc: "Draft NDAs, lease agreements, and business contracts with professional legal language.",
    color: "#7c61ff",
    gradient: "linear-gradient(135deg, #7c61ff, #c261ff)",
    tag: "Documents",
  },
  {
    id: "Customer Relations",
    icon: "💬",
    iconClass: "customer",
    title: "Customer Relations",
    desc: "Craft polished, empathetic responses to customer complaints and support requests.",
    color: "#61b8ff",
    gradient: "linear-gradient(135deg, #61b8ff, #7c61ff)",
    tag: "Responses",
  },
  {
    id: "Inventory",
    icon: "📦",
    iconClass: "inventory",
    title: "Inventory",
    desc: "Generate rich product descriptions that convert browsers into buyers.",
    color: "#10d48e",
    gradient: "linear-gradient(135deg, #10d48e, #00b4d8)",
    tag: "Descriptions",
  },
  {
    id: "HR & Hiring",
    icon: "👥",
    iconClass: "hr",
    title: "HR & Hiring",
    desc: "Create detailed, compelling job descriptions to attract the best talent.",
    color: "#f5a623",
    gradient: "linear-gradient(135deg, #f5a623, #ff6b6b)",
    tag: "Job Postings",
  },
];

function Dashboard({ businessName, businessType }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const navigate = useNavigate();

  const activeModule = MODULES.find((m) => m.id === selectedModule);

  const renderContent = () => {
    const props = { businessName, businessType };
    switch (selectedModule) {
      case "Marketing": return <MarketingForm {...props} />;
      case "Legal": return <LegalForm {...props} />;
      case "Customer Relations": return <CustomerRelationsForm {...props} />;
      case "Inventory": return <InventoryForm {...props} />;
      case "HR & Hiring": return <HRHiringForm {...props} />;
      default:
        return (
          <>
            {/* Topbar */}
            <div className="dashboard-topbar">
              <div>
                <p className="topbar-greeting">Good day 👋</p>
                <h1 className="topbar-title">
                  {businessName
                    ? <><span className="gradient-text">{businessName}</span>'s Dashboard</>
                    : "Your Dashboard"}
                </h1>
                <p className="topbar-desc">
                  Choose a department below to start generating AI-powered content.
                </p>
              </div>
            </div>

            {/* Module Cards */}
            <div className="module-grid">
              {MODULES.map((mod) => (
                <button
                  key={mod.id}
                  className="module-card"
                  onClick={() => setSelectedModule(mod.id)}
                  style={{ '--card-gradient': mod.gradient }}
                >
                  <div
                    className="module-card-icon"
                    style={{ background: `${mod.color}22`, color: mod.color }}
                  >
                    {mod.icon}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <h3 className="module-card-title" style={{ marginBottom: 0 }}>{mod.title}</h3>
                    <span className="badge badge-accent">{mod.tag}</span>
                  </div>
                  <p className="module-card-desc">{mod.desc}</p>
                  <span
                    className="module-card-arrow"
                    style={{ color: mod.color }}
                  >
                    Open module →
                  </span>
                </button>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="dashboard-root">
      {/* ── Top Navigation Bar ── */}
      <header className="dashboard-header">
        <div className="header-logo">
          <div className="header-logo-icon">🤖</div>
          <div className="header-logo-text">AI Business Helper</div>
        </div>

        <div className="header-actions">
          {(businessName || businessType) && (
            <div className="business-badge-inline">
              <div className="business-avatar">🏢</div>
              <span className="business-name-inline">{businessName || "Your Business"}</span>
            </div>
          )}
          <button className="btn-secondary back-btn" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="dashboard-main">
        <div className="dashboard-main-content">
          {/* Breadcrumb when module is selected */}
          {activeModule && (
            <div style={{ marginBottom: 28 }}>
              <div className="dashboard-topbar" style={{ marginBottom: 0 }}>
                <div>
                  <button
                    onClick={() => setSelectedModule(null)}
                    className="btn-secondary"
                    style={{ marginBottom: 16, padding: "8px 16px" }}
                  >
                    ← All Departments
                  </button>
                  <div className="form-panel-header">
                    <div
                      className="panel-icon"
                      style={{
                        background: `${activeModule.color}22`,
                        fontSize: "1.6rem",
                      }}
                    >
                      {activeModule.icon}
                    </div>
                    <div>
                      <h1 className="panel-title">{activeModule.title}</h1>
                      <p className="panel-subtitle">{activeModule.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
