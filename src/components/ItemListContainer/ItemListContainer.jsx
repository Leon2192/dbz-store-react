import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../Data/Data.json";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import detalle from "../../Data/Data.json";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  console.log(categoryId);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(detalle);
        setLoading(false);
      }, 1000);
    });

    if (!categoryId) {
      setProductos(data);
      console.log(productos);
    } else {
      getData.then((res) => {
        setProductos(res.filter((producto) => producto.tipo === categoryId));
      });
    }
  }, [categoryId]);

  return (
    <div>
      {!categoryId ? <h1>SSJ STORE - INICIO</h1> : <h1>SSJ {categoryId}</h1>}
      {loading ? <Loader /> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
