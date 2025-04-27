import React from "react";
import "../styles/BubbleNavigation.css";

const BubbleNavigation = ({ onSelectBubble }) => {
  const bubbles = [
    "Marketing",
    "Legal",
    "Customer Relations",
    "Inventory",
    "HR & Hiring",
  ];

  return (
    <div className="bubble-navigation">
      {bubbles.map((bubble) => (
        <button
          key={bubble}
          className="bubble-button"
          onClick={() => onSelectBubble(bubble)}
        >
          {bubble}
        </button>
      ))}
    </div>
  );
};

export default BubbleNavigation;
