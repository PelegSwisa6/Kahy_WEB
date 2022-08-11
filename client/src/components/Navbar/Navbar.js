import React, { useEffect } from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import CartIcon from "../Products/shoppingCart.jpg";

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// menu.addEventListener("click", mobileMenu);

function Navbar(setShow, size) {
  return (
    <div>
      <nav class="navbar">
        <div class="navbar__container">
          <NavLink className="navbar__links" id="navbar__logo" to="/">
            Kahy
            <span className="sr-only"></span>
          </NavLink>
          <div
            className="navbar__toggle"
            id="mobile-menu"
            onClick={() => mobileMenu()}
          >
            <span class="bar" onClick={() => mobileMenu()}>
              {" "}
            </span>{" "}
            <span class="bar" onClick={() => mobileMenu()}></span>
            <span class="bar" onClick={() => mobileMenu()}></span>
          </div>
          <ul class="navbar__menu">
            <li class="navbar__item">
              <NavLink className="navbar__links" to="/">
                Home
                <span className="sr-only"></span>
              </NavLink>

              {/* <a class="navbar__links" to="/">
                Home
              </a> */}
            </li>
            <li class="navbar__item">
              <NavLink className="navbar__links" to="/Wwd">
                About
                <span className="sr-only"></span>
              </NavLink>
            </li>
            <li class="navbar__item">
              <NavLink className="navbar__links" to="/Services">
                Services
                <span className="sr-only"></span>
              </NavLink>
            </li>
            <li class="navbar__item">
              <NavLink className="navbar__links" to="/products">
                Products
                <span className="sr-only"></span>
              </NavLink>
            </li>

            {/* <div className="nav-cart" width=""> */}
            {/* <span>{cart.length}</span> */}

            <li>
              <Link to="/cart">
                <img
                  className="CART"
                  src={CartIcon}
                  alt=""
                  width={1}
                  height={1}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

export default Navbar;
