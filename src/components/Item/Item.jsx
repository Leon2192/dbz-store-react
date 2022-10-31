import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";

const Item = ({ producto }) => {
  return (
    <div className="item">
      <Link to={`/item/${producto.id}`} style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="imagen"
            height="140"
            image={producto.image}
          />
          <CardContent>
            <h2 gutterBottom variant="h5" component="div">
              {producto.nombre}
            </h2>
            <h3 variant="body2" color="text.secondary">
              {producto.descripcion}
            </h3>
          </CardContent>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Tooltip title="Recomendado">
              <IconButton>
                <FaHeart />
              </IconButton>
            </Tooltip>
          </Box>
        </Card>
      </Link>
    </div>
  );
};

export default Item;
