// client/src/components/ProductItem.js
import React, { useContext, useState } from "react";
import { itemContext } from "../context/ItemContext";

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart, productInCart } = useContext(itemContext);
  function checkCart() {
    let disable = false;
    productInCart.map((item) => {
      if (item._id === product._id) {
        disable = true;
      }
    });
    return disable;
  }
  const [add, setAdd] = useState(!checkCart());
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const handleRemoveToCart = (product) => {
    console.log("product removed", product);
    removeFromCart(product);
  };
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-details">
        <h3 style={{ fontWeight: "700" }}>{product.name}</h3>
        <p style={{ fontWeight: "300" }}>{product.description}</p>
        <p style={{ fontWeight: "500" }}>Price: {product.price} Rs</p>
        <button
          onClick={() => {
            handleAddToCart(product);
            setAdd(false);
          }}
          disabled={!add}
        >
          Add to Cart
        </button>
        <button
          onClick={() => {
            handleRemoveToCart(product);
            setAdd(true);
          }}
          disabled={add}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
