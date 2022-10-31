import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ItemDetail({ detail }) {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }} className="detalle">
      <h1 gutterBottom variant="h3" component="div">
        Detalle de producto
      </h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9} md={4} lg={3}>
          <h2 gutterBottom variant="h5" component="div">
            {detail.nombre}
          </h2>
        </Grid>
        <Grid item xs={12} sm={9} md={4} lg={6}>
          <Card>
            <CardMedia
              component="img"
              height="350"
              image={detail.image}
              alt="green iguana"
            />
            <CardContent>
              <h3 gutterBottom variant="h5" component="div">
                {detail.nombre}
              </h3>
              <h4 gutterBottom variant="h5" component="div">
                {detail.descripcion}
              </h4>
            </CardContent>
          </Card>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid xs={12} sm={9} md={4} lg={3}>
          <h2 gutterBottom variant="h5" component="div">
            ${detail.precio}
          </h2>
          <ItemCount />
        </Grid>
      </Grid>
    </Box>
  );
}
