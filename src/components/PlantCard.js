import React, {useState} from "react";

function PlantCard({ plant, removePlant }) {

const [show, setShow] = useState(true);
function handleClick() {
  setShow(!show);
}

function removedPlants() {
  removePlant(plant.id)
}


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {show? (
        <button className="primary" onClick = {handleClick}>In Stock</button>
      ) : (
        <button onClick = {handleClick}>Out of Stock </button>
      )}
      <button onClick = {removedPlants}>🚮</button>
    </li>
  );
}

export default PlantCard;
