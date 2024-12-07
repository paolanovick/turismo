/* eslint-disable no-unused-vars */

import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <>
      <div>
        <NavBar nombre="TravelAr" botonLabel="Paquetes" carritoValor={5} />
        <h1>Paises del mundo</h1>
      
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
