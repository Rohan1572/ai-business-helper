import React, { useState } from "react";

function InventoryForm() {
  const [productType, setProductType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Creating inventory sheet for: ${productType}`);
  };

  return (
    <div>
      <h2>Inventory Management 📦</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type of products (e.g. Bakery items, Electronics)"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          style={{ padding: "0.5rem", width: "80%", marginBottom: "1rem" }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#3b82f6",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Create Spreadsheet
        </button>
      </form>
    </div>
  );
}

export default InventoryForm;
