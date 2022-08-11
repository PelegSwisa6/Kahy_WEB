import React from "react";
import "./Products.css";
import Slider from "./RangeSlider/Slider";
import SearchBar from "./SearchBar/SearchBar";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import "./SearchBar/SearchBar.css";

function Menu({
  menuItem,
  button,
  filter,
  onAdd,
  searchTerm,
  setSearchTerm,
  setMenuItem,
  setButtons,
}) {
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((helloRes) => {
        console.log(helloRes);
        setMenuItem(helloRes);
        setButtons(helloRes);
      });
  }, []);

  const allCategories = [
    "All",
    ...new Set(button.map((item) => item.category)),
  ];
  return (
    <div className="item">
      <div>
        <div className="filter-container">
          {allCategories.map((cat, i) => {
            return (
              <button
                class="filter__btn"
                key={i}
                type="button"
                onClick={() => filter(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <form class="form-inline">
          <i class="fas fa-search" aria-hidden="true"></i>
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            class="form-control7"
            type="text"
            placeholder="Search here.."
            aria-label="Search"
          ></input>
        </form>
        {/* <Slider /> */}
      </div>
      <div className="slider">
        <h1 className="price">Min Price</h1>

        <input
          type="range"
          class="form-range"
          min="0"
          max="1000"
          step="10"
          id="customRange3"
        ></input>
        <h1 className="price"> Max Price</h1>
      </div>

      <div className="template_Container">
        {menuItem
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <div class="content">
                <img class="photosCard" src={val.image} />
                <h3 class="title"> {val.title} </h3>
                {/* <p class="title"> {val.description} </p> */}
                <h1 class="srice"> {val.price} $</h1>

                <button class="Cart" onClick={() => onAdd(val)}>
                  Add To Cart
                </button>
              </div>
            );
          })}
      </div>

      {/* {menuItem.map((item) => {
        return (
          <body>
            <div class="content">
              <img class="photosCard" src={item.image} />
              <h3 class="title"> {item.title} </h3>
              <p class="title"> {item.description} </p>
              <h6 class="price"> {item.price} $</h6>

              <button class="Cart" onClick={() => onAdd(item)}>
                Add To Cart
              </button>
            </div>
          </body>
        );
      })} */}
    </div>
  );
}

export default Menu;
