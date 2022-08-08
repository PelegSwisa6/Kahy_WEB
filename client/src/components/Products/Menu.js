import React from "react";
import "./Products.css";

function Menu({ menuItem, button, filter, onAdd }) {
  return (
    <div className="item">
      <div className="filter-container">
        <h1>Sort by:</h1>
        <br />
        {button.map((cat, i) => {
          return (
            <button class="filter__btn" onClick={() => filter(cat)}>
              {cat}
            </button>
          );
        })}
      </div>
      {menuItem.map((item) => {
        return (
          <body>
            <div class="gallery" id="products">
              <div class="content">
                <img class="photosCard" src={item.image} />
                <h3 class="title"> {item.title} </h3>
                <p class="title"> {item.description} </p>
                <h6 class="price"> {item.price} $</h6>

                <button class="Cart" onClick={() => onAdd(item)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </body>
        );
      })}
    </div>
  );
}

export default Menu;
