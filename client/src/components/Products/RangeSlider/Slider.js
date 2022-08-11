import React from "react";
// import from "module";
import "../RangeSlider/Slider.css";

function Slider() {
  return (
    <div className="slider">
      <h1 className="price">Min Price</h1>

      <input
        type="range"
        class="form-range"
        min="0"
        max="100"
        step="10"
        id="customRange3"
      ></input>
      <h1 className="price"> Max Price</h1>
    </div>
  );
}

export default Slider;
