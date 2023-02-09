import React, {useState} from "react";

function NewPlantForm({ plants, setPlants }) {

const [newPlant, setNewPlant] = useState({})

function handlePlantChange (e) {
  setNewPlant({...newPlant, [e.target.name]: e.target.value})
}

function handleSubmit (e) {
  e.preventDefault()
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPlant),
})
  .then(res => res.json())
  .then(plant => setPlants([...plants, plant]))
}

  return (
    <div className="new-plant-form" onSubmit = {handleSubmit}>
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" onChange = {handlePlantChange} />
        <input type="text" name="image" placeholder="Image URL" onChange = {handlePlantChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange = {handlePlantChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
