import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";

const Productos = ({ id, hasDiscount, discount }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const getProducts = React.useCallback(async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const getProduct = React.useCallback(async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/" + id);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [id]);

  useEffect(() => {
    if (id != undefined) {
      getProduct();
    } else {
      getProducts();
    }
  }, [id, getProduct, getProducts]);

  return (
    <>
      <h1 className="text-center">
        {products.length > 0 && product == null ? "Productos" : "Detalle"}
        {"  "}
        {hasDiscount ? <i className="bi bi-tags-fill porc-discount"></i> : ""}
      </h1>
      <div className="d-flex gap-3 flex-wrap justify-content-center mt-5">
        {products.length > 0 && product == null ? (
          products.map((producto, key) => (
            <Card
              key={key}
              id={producto.id}
              image={producto.image}
              title={producto.title}
              price={producto.price}
              hasDiscount={hasDiscount}
              discount={discount}
              description={producto.description}
            ></Card>
          ))
        ) : product !== null ? (
          <Card
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            hasDiscount={hasDiscount}
            discount={discount}
            description={product.description}
          ></Card>
        ) : (
          <div
            className="spinner-border text-primary mt-5"
            style={{ width: "4rem", height: "4rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <a href="/descuentos" className="btn btn-primary text-center">
          <i className="bi bi-arrow-left"></i>
          <span className="ms-2">Volver</span>
        </a>
      </div>
    </>
  );
};

export default Productos;
