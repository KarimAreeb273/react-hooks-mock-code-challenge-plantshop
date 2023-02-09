import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, removePlant}) {
const plantCards = plants.map(plant => <PlantCard key={plant.id} plant={plant} removePlant = {removePlant}/>);

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
