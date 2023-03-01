import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant
  const [ isInStock, setInStock ] = useState(true)

  const inStock = <button className="primary">In Stock</button>;
  const soldOut = <button>Out of Stock</button>

  const toggleButton = () => {
    setInStock(isInStock => !isInStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <label id="button" onClick={toggleButton}>{ isInStock ? inStock : soldOut}</label> 
    </li>
  );
}

export default PlantCard;
