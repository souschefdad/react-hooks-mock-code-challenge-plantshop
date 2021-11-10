import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then((plantsData) => {
        setPlants(plantsData)
        setIsLoaded(true)
    });
  },[]);


  const plantsListed = plants.map((plant) => {
    return <PlantCard 
    key={plant.id} 
    plantName={plant.name} 
    plantImage={plant.image} 
    price={plant.price} 
    />})

    if (!isLoaded) return <h3>Loading...</h3>;

  return (
    <ul className="cards">{plantsListed}</ul>
  );
}

export default PlantList;
