import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./Main.css";
import Wwd from "./components/Wwd/Wwd";
import Services from "./components/Services/Services";
import { useState, useEffect } from "react";
import Menu from "./components/Products/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App/App";
import Cart from "./components/Products/Cart";

function Main() {
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((helloRes) => {
        console.log(helloRes);
        setMenuItem(helloRes);
        setButtons(helloRes);
      });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  // const { products } = photos;
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

  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar__menu");
  const navLogo = document.querySelector("#navbar__logo");

  const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  };

  const [menuItem, setMenuItem] = useState([]); //items
  const [buttons, setButtons] = useState([]); //allCategories

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(buttons);

      return;
    }

    const filteredData = buttons.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };
  return (
    <Router>
      <Navbar mobileMenu={mobileMenu} />

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

        <Route
          path="/products"
          element={
            <Menu
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              menuItem={menuItem}
              setMenuItem={setMenuItem}
              button={buttons}
              setButtons={setButtons}
              filter={filter}
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default Main;
