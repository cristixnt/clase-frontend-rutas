import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import Card from "./Card";

const Detalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = React.useState(null);
  const getProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProducto(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useState(() => {
    if (id) getProduct(id);
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        {producto ? (
          <Card
            key={producto.id}
            id={producto.id}
            image={producto.image}
            title={producto.title}
            price={producto.price}
            description={producto.description}
          ></Card>
        ) : (
          <div
            className="spinner-border text-primary mt-5"
            style={{ width: "4rem", height: "4rem" }}
          >
            <span className="visually-hidden">Cargando producto</span>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Link to="/productos" className="btn btn-primary text-center">
          <i className="bi bi-arrow-left"></i>
          <span className="ms-2">Volver</span>
        </Link>
      </div>
    </div>
  );
};

export default Detalle;
Detalle;
