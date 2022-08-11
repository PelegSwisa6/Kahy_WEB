import React from "react";
import "./SearchBar.css";
import data1 from "../Products.json";
import { useEffect, useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <form class="form-inline">
      <i class="fas fa-search" aria-hidden="true"></i>
      <input
        size={20}
        class="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
      ></input>
    </form>
  );
}

export default SearchBar;
