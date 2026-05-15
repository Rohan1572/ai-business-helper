import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import usePageTracking from "./hooks/usePageTracking";

function App() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");

  return (
    <Router>
      <AppRoutes
        businessName={businessName}
        businessType={businessType}
        setBusinessName={setBusinessName}
        setBusinessType={setBusinessType}
      />
    </Router>
  );
}

function AppRoutes({
  businessName,
  businessType,
  setBusinessName,
  setBusinessType,
}) {
  usePageTracking();

  return (
    <div className="app-wrapper">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                setBusinessName={setBusinessName}
                setBusinessType={setBusinessType}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                businessName={businessName}
                businessType={businessType}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
