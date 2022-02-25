import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (data) => {
    setCart((curr) => [...curr, data]);
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart: cart, addToCart: addToCartHandler }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
