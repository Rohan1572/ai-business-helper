import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");

  return (
    <Router>
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
    </Router>
  );
}

export default App;
