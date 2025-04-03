import React from "react";

import { Link } from "react-router-dom";

const Card = ({
  id,
  image,
  title,
  price,
  description,
  hasDiscount,
  discount,
}) => {
  let discountPrice = 0;
  if (hasDiscount) {
    discountPrice = (price - (price * discount) / 100.0).toFixed(2);
  }

  return (
    <div
      key={id}
      className="card shadow-lg p-3 mb-5"
      style={{ width: "18rem", margin: "10px" }}
    >
      <img src={image} alt={title} className="img-fluid card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p
          className="card-text"
          //   style={{
          //     overflow: "auto",
          //     textOverflow: "ellipsis",
          //     maxHeight: "150px",
          //   }}
        >
          {description}
        </p>
        <p
          className={hasDiscount ? "card-text text-old-discount" : "card-text"}
        >
          <b>${price}</b>
        </p>
        {hasDiscount ? (
          <p className="card-text text-discount">
            <label className="porc-discount">-{discount}%</label>
            {"    "}
            <b>${discountPrice}</b>
          </p>
        ) : (
          ""
        )}
        {hasDiscount ? (
          <Link to={`/descuentos/${id}`} className="btn btn-primary text-center">
            Detalle
          </Link>
          // ""
        ) : (
          <Link to={`/productos/${id}`} className="btn btn-primary text-center">
            Detalle
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
