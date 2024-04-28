import React, { useContext, useState } from "react";
import { itemContext } from "../context/ItemContext";
import ProductItem from "./ProductItem";
function Cart() {
  const { productInCart } = useContext(itemContext);
  const [cart, setCart] = useState(productInCart);
  return (
    <div className="item-card">
      {cart.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Cart;
