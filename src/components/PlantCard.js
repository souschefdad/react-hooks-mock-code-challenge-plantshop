import React from "react";

function PlantCard({ plantName, plantImage, price }) {

  
  return (
    <li className="card">
      <img src={plantImage} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
