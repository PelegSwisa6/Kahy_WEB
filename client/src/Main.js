import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./Main.css";
import Wwd from "./components/Wwd/Wwd";
import Services from "./components/Services/Services";
import photos from "./components/Products/Products.json";
import { useState, useEffect } from "react";
import items from "./components/Products/Products.json";
import Menu from "./components/Products/Menu";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App/App";
import Cart from "./components/Products/Cart";
const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function Main() {
  const { products } = photos;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  //
  // const [cartItems, setCartItems] = useState([]);

  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar__menu");
  const navLogo = document.querySelector("#navbar__logo");

  const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  };

  const [menuItem, setMenuItem] = useState(items); //items
  const [buttons, setButtons] = useState(allCategories); //allCategories
  // useEffect(() => {
  //   fetch("/api/hello")
  //     .then((res) => res.json())
  //     .then((helloRes) => {
  //       setMenuItem(helloRes);
  //     });
  // }, []);
  // useEffect(() => {
  //   setButtons(menuItem);
  // }, []);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };
  return (
    <Router>
      <Navbar mobileMenu={mobileMenu} />
      {/* <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart> */}

      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Cart>
          }
        />
        <Route path="/wwd" element={<Wwd />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/products" element={<Menu menuItem={menuItem} />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/products1" element={<Button />} /> */}
        <Route
          path="/products"
          element={
            <Menu
              menuItem={menuItem}
              button={buttons}
              filter={filter}
              products={products}
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
            />
          }
        >
          {/* <Route element={<Button button={buttons} filter={filter} />} /> */}
          {/* <Route path=":postSlug" element={<Post />} /> */}
        </Route>
      </Routes>
      {/* <Cart /> */}
    </Router>
  );
}

export default Main;
