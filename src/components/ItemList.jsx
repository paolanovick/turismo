/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const ItemList = ({ countries}) => {
  return (
   
      <div>
        {countries.map((country) => (
          <Card key={country.cca3} style={{ width: "18rem" }}>
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
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
   
  );
};

export default ItemList;
