import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import detalle from "../../Data/Data.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);
  const { itemId } = useParams();
  const [loading, setLoading] = useState(true);
  console.log(detalle);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(detalle);
        setLoading(false);
      }, 3000);
    });

    getData.then((res) =>
      setDetail(res.find((det) => det.id === parseInt(itemId)))
    );
  }, [itemId]);

  return <div>{loading ? <Loader /> : <ItemDetail detail={detail} />}</div>;
};

export default ItemDetailContainer;
