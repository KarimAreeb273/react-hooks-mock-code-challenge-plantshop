import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([]);
const [addPlant, setAddPlant] = useState("")

const plantNew = plants.filter(plant => plant.name.toLowerCase().includes(addPlant.toLowerCase()))

function removePlant(id) {
  const noPlants = plants.filter(plant => plant.id!== id)
  setPlants(noPlants)
}

useEffect (() => {
  fetch("http://localhost:6001/plants")
  .then(res => res.json())
  .then(plants => setPlants(plants))
}, [])

  return (
    <main>
      <NewPlantForm plants = {plants} setPlants = {setPlants}/>
      <Search addPlant = {setAddPlant}/>
      <PlantList plants = {plantNew} removePlant = {removePlant}/> 
    </main>
  );
}

export default PlantPage;
