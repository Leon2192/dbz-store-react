import { Grid } from "@mui/material";
import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      <Grid container spacing={2}>
        {productos.map((producto) => {
          return (
            <Grid key={producto.id} item xs={12} sm={6} md={4} lg={3}>
              <Item key={producto.id} producto={producto} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ItemList;
