import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const itemContext = createContext(undefined);
export default function CustomItemContext({ children }) {
  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [productInCart, setProductInCart] = useState([]);
  function UpdateStore() {
    setTotalPrice(
      productInCart.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0)
    );
    setItemsInCart(productInCart.length);
  }
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((err) => console.error("Error: ", err));
  }, []);
  useEffect(() => {
    UpdateStore();
  }, [productInCart]);
  function addToCart(product) {
    console.log(product);
    const arr = [...productInCart, product];
    setProductInCart(unique(arr));
    // setTotalPrice(
    //   productInCart.reduce((acc, curr) => {
    //     return acc + curr.price;
    //   }, 0)
    // );
    // setItemsInCart(productInCart.length);
    console.log(itemsInCart, "itemsInCart", totalPrice, "totalPrice");
  }
  const unique = (category) => {
    //makes sure that there are no duplicate categories in array
    if (category === undefined) {
      return;
    }
    let categories = new Set(category);
    categories = Array.from(categories);
    console.log(categories, "addToCart");
    return categories;
  };
  function removeFromCart(product) {
    console.log(productInCart);
    const newItems = [];

    productInCart.map((item) => {
      if (item._id === product._id) {
      } else {
        newItems.push(item);
      }
    });

    setProductInCart(newItems);

    // setProductInCart(productInCart.slice(productInCart.indexOf(product, 1)));
    console.log(productInCart);
  }

  return (
    <itemContext.Provider
      value={{
        product,
        totalPrice,
        itemsInCart,
        addToCart,
        removeFromCart,
        productInCart,
      }}
    >
      {children}
    </itemContext.Provider>
  );
}
