import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>
        © {new Date().getFullYear()} AI Business Assistant. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
