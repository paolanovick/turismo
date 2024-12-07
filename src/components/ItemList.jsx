
/* eslint-disable react/prop-types */

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "./Button";

const ItemList = ({ countries }) => {
  return (
    <div>
      <Row className="g-2">
        {countries.map((country) => (
          <Col key={country.cca3} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card style={{ width: "12rem", margin: "10px" }}>
              <Card.Img
                variant="top"
                src={country.flags.png}
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
                <Button
                  label="Ver mas"
                  onClick={() =>  country }
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemList;
