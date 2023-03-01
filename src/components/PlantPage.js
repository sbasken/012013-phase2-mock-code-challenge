import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [ plants, setPlants ] = useState([])
  const [ searchQuery, setSearchQuery ] = useState("")

 function handleInputChange(e) {
  setSearchQuery(e.target.value)
 }

 const filteredPlants = plants.filter(plant => (searchQuery === "") ? plants : plant.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const addPlant = (newPlant) => {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data))
  }, [])

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant}/>
      <Search searchQuery={searchQuery} onInputChange={handleInputChange}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
