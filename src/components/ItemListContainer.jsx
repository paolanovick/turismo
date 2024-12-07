/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import withLoading from "../hoc/withLoading.jsx"; // Asegúrate de que el componente ItemList esté importado correctamente

const ItemListContainer = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Usamos fetch con .then()
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => setCountries(res));
  }, []);

  return <ItemList countries={countries} />;
};

export default ItemListContainer;
