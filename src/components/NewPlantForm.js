import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [ formData, setFormData ] = useState({
    name: "",
    image: "",
    price: 0
  })
  const { name, image, price } = formData

  const handleChange = (e) => {
    const key = e.target.name;
    const value = (e.target.name === 'price') ? parseFloat(e.target.value) : e.target.value
    const newPlant = {...formData, 
      [key]: value}
    setFormData(newPlant)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newPlant => onAddPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={name} 
          placeholder="Plant name" 
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          value={image} 
          placeholder="Image URL" 
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="price" 
          value={price} step="0.01" placeholder="Price"
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
