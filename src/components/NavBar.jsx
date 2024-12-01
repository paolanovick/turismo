/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";
import Carrito from "./Carrito";

const NavBar = ({ nombre, botonLabel, carritoValor }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f8f9fa",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>
        {nombre}
      </div>

      <Button
        label={botonLabel}
        onClick={() => console.log(`${botonLabel} clickeado`)}
      />

      <Carrito valor={carritoValor} />
    </nav>
  );
};




export default NavBar;
