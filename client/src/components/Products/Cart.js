import React, { useState } from "react";
import "./Cart.css";
import CheckOut from "../Products/CheckOut/CheckOut";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

export default function Basket(props) {
  const [ButtonCheckOut, SetButtonCheckOut] = useState(false);
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <h2>
        _____________________________________________________________________
      </h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button
                id="checkOut"
                // onClick={() => alert("Thank you for shopping Kahy!")}
                onClick={() => SetButtonCheckOut(true)}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <CheckOut trigger={ButtonCheckOut} setTrigger={SetButtonCheckOut}>
        <strong>Total Price: </strong>
        <strong>${totalPrice.toFixed(2)}</strong>
        <h3 className="words">Details</h3>

        <div class="form-group">
          <label for="username" className="words">
            Full name (on the card)
          </label>
          <input
            type="text"
            name="username"
            placeholder="PELEG SWISA"
            required
            class="form-control1"
          />
        </div>

        <div class="form-group">
          <label for="username" className="words">
            City
          </label>
          <input
            type="text"
            name="username"
            placeholder="PELEG SWISA"
            required
            class="form-control1"
          />
          <label for="username" className="words">
            Street & number
          </label>
          <input
            type="text"
            name="username"
            placeholder="Dizengoff 12"
            required
            class="form-control1"
          />
        </div>

        <div class="form-card">
          <label className="words" for="cardnumber">
            Card Number
          </label>
          <input
            type="text"
            name="cardnumber"
            placeholder="XXXX XXXX XXXX XXXX"
            required
            class="form-card"
          />
        </div>

        <div class="input-group">
          <label className="words">
            <span className="words">Expiration</span>
          </label>
          <input
            type="number"
            min={0}
            max={12}
            placeholder="MM"
            name=""
            class="form-control"
            required
          />
          <input
            type="number"
            min={2022}
            max={2030}
            placeholder="YY"
            name=""
            class="form-control"
            required
          />
        </div>

        <div class="col-sm-4">
          <div class="form-group mb-4">
            <label
              className="words"
              data-toggle="tooltip"
              title="Three-digits code on the back of your card"
            >
              CVV [3 Digits]
              <i class="fa fa-question-circle"></i>
            </label>
            <input
              type="text"
              required
              class="form-control"
              placeholder="123"
            />
          </div>
        </div>

        <button
          type="button"
          class="confirm-btn"
          // onClick={(alert) => "The shipment is on its way to you Thank you!"}
          onClick={() => alert("The shipment is on its way to you Thank you!")}
        >
          {" "}
          Confirm{" "}
        </button>
      </CheckOut>
    </aside>
  );
}
