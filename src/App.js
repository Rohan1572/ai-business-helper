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
      <PageTrackingRoutes
        businessName={businessName}
        businessType={businessType}
        setBusinessName={setBusinessName}
        setBusinessType={setBusinessType}
      />
    </Router>
  );
}

function PageTrackingRoutes({
  businessName,
  businessType,
  setBusinessName,
  setBusinessType,
}) {
  usePageTracking(); // ✅ Hook runs inside Router context

  return (
    <div className="app-wrapper">
      {/* <Header /> */}
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
