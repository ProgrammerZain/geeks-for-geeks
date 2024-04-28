// client/src/components/Header.js
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { itemContext } from "../context/ItemContext";
import Cart from "./Cart";
import ProductList from "./ProductList";
const Navbar = () => {
  const { itemsInCart, totalPrice } = useContext(itemContext);
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <h1 className="ecom">My Ecommerce Website</h1>
        </div>
        <div
          className="navbar-items flex jc-sb mt5"
          onClick={() => setOpenCart(!openCart)}
        >
          <h3 style={{ color: "green" }}>Total Price: {totalPrice}</h3>
          {openCart ? (
            <div className="cart-num flex">
              <FontAwesomeIcon icon={faCartShopping} size="2x" />
            </div>
          ) : (
            <div className="cart-items">{itemsInCart}</div>
          )}
        </div>
      </nav>
      {openCart ? <Cart /> : <ProductList />}
    </>
  );
};

export default Navbar;
