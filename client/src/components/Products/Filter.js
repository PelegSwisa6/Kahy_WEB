import React, { useEffect } from "react";
import "./Products.css";
import menuItem from "./Products";
import popular from "./Products";

function Filter({ filter }) {
  return (
    <div class="filter-container">
      <button class="filbtn" type="button" onClick={() => filter("men")}>
        All
      </button>
      <button class="filbtn" type="button" onClick={() => filter("men")}>
        Black
      </button>
      <button class="filbtn">White</button>
    </div>
  );
}

export default Filter;
