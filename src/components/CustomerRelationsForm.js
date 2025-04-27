import React, { useState } from "react";

function CustomerRelations() {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Generated response for review: ${review}`);
  };

  return (
    <div>
      <h2>Customer Relations 🤝</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Paste a customer review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "80%",
            height: "120px",
            marginBottom: "1rem",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#6366f1",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Generate Reply
        </button>
      </form>
    </div>
  );
}

export default CustomerRelations;
