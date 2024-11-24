/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Carrito = ({ valor }) => {
  return (
    <div style={styles.cart}>
      🛒 <span style={styles.valor}>{valor}</span>
    </div>
  );
};

const styles = {
  cart: {
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
  },
  valor: {
    marginLeft: "5px",
    color: "#007BFF",
  },
};

export default Carrito;
