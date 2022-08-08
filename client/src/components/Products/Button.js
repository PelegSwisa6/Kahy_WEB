import React from "react";
import "./Products.css";

function Button({ button, filter }) {
  return (
    <div className="filter-container">
      <h1>Sort by:</h1>
      <br />
      {button.map((cat, i) => {
        return (
          <button class="filbtn" onClick={() => filter(cat)}>
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
