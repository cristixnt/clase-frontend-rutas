import React, { useState } from "react";
import Productos from "./Productos";
import { useParams, Link } from "react-router-dom";

const Descuentos = () => {
  const { id } = useParams();

  const [discount, setDiscount] = useState(10);

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  return (
    <div>
      <div className="banner-discount">¡¡¡ Descuentos !!!</div>
      <div className="container input-discount input-group mb-3 mt-12">
        <span className="input-group-text" id="basic-addon1">
          <i className="bi bi-tag"></i>
        </span>
        <select
          className="form-select"
          onChange={handleDiscountChange}
          aria-label="Default select example"
          defaultValue={20}
        >
          <option value={20}>20%</option>
          <option value={35}>35%</option>
          <option value={50}>50%</option>
          <option value={60}>60%</option>
        </select>
      </div>
      <Productos id={id} hasDiscount={true} discount={discount}></Productos>
    </div>
  );
};

export default Descuentos;
