/* eslint-disable no-unused-vars */

import React from "react";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <div>
        {/* Pasamos los elementos como props al NavBar */}
        <NavBar nombre="TravelAr" botonLabel="Paquetes" carritoValor={5} />
      </div>
     
     
    </>
  );
}

export default App;
