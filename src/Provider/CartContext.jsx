import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartContextFunction = () => {
  return useContext(CartContext);
};

export const CarritoContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const handleAumentar = () => {
    const value = count + 1;
    setCount(value);
  };
  const handleRestar = () => {
    if (count > 0) {
      const value = count - 1;
      setCount(value);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, count, setCount, handleAumentar, handleRestar }}
    >
      {children}
    </CartContext.Provider>
  );
};
