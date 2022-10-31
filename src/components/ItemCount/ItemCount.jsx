import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../Provider/CartContext";

const ItemCount = () => {
  const { count, handleAumentar, handleRestar } =
    useContext(CartContext);
  return (
    <div>
      <Button variant="contained" onClick={handleAumentar}>
        Agregar
      </Button>
      <Button variant="contained" onClick={handleRestar}>
        Restar
      </Button>
      <h2>{count}</h2>
      <Button variant="contained">Agregar al carrito</Button>
      <Button variant="contained">Quitar del carrito</Button>
      <Button variant="contained">Finalizar compra</Button>
    </div>
  );
};

export default ItemCount;
