import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' in React 18+
import "./styles/App.css"; // Global styles
import App from "./App"; // Main App component

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
