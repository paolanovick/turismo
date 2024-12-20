
/* eslint-disable no-unused-vars */

import React, { useState } from "react";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importamos React Router

function App() {
  const [cartCount, setCartCount] = useState(0); // Estado para contar los productos en el carrito
  const [cartItems, setCartItems] = useState([]); // Guardar los países agregados al carrito

  const handleAddToCart = (country) => {
    setCartItems((prevItems) => [...prevItems, country]); // Agregar el país al carrito
    setCartCount((prevCount) => prevCount + 1); // Incrementar el contador del carrito
  };

  return (
    <Router>
      <NavBar
        nombre="TravelAr"
        botonLabel="Paquetes"
        carritoValor={cartCount}
      />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/paises"
          element={<ItemListContainer handleAddToCart={handleAddToCart} />}
        />
      </Routes>
    </Router>
  );
}

// Componente de bienvenida (Inicio)
const Inicio = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenidos a la página de viajes</h1>
    </div>
  );
};

export default App;
