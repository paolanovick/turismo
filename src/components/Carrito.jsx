/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Carrito = ({ valor }) => {
  return (
    <cart
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      🛒 <valor style={{ marginLeft: "5px", color: "#007BFF" }}>{valor}</valor>
    </cart>
  );
};


export default Carrito;
