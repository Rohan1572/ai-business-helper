import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");

  return (
    <Router>
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
    </Router>
  );
}

export default App;
