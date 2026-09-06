import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./styles/App.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
