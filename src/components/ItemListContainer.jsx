/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemListContainer = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Usamos fetch con .then()
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => setCountries(res));
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <Card key={country.cca3} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={country.flags[0]}
            alt={`Flag of ${country.name.common}`}
          />
          <Card.Body>
            <Card.Title>{country.name.common}</Card.Title>
            <Card.Text>
              <strong>Capital:</strong>{" "}
              {country.capital ? country.capital[0] : "N/A"}
              <br />
              <strong>Region:</strong> {country.region}
              <br />
              <strong>Subregion:</strong> {country.subregion}
              <br />
            </Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ItemListContainer;
