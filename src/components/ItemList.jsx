/* eslint-disable react/prop-types */



const ItemList = ({ countries}) => {
  return (
    <div>
      {countries.map((countries, index) => (
        <p key={index}>{countries.name}</p>
      ))}
    </div>
  );
};

export default ItemList;
