import React, { useState } from "react";
import PlantCard from "./PlantCard";

function NewPlantForm({ plantName, plantImage, price }) {
  // const [newForm, setNewForm] = useState([])


function handlePlantSubmit(event) {
    event.preventDefault(); 
      // return <PlantCard 
      // plantName={event.target.name.value}
      // plantImage={event.target.image.value}
      // price={event.target.price.value}
      // />
      console.log(event.target.name.value)
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePlantSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
