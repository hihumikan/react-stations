import React from 'react'

export const BreedsSelect = ({ breeds, selectedBreed, onSelectBreed }) => {
  const handleChange = e => {
    onSelectBreed(e.target.value)
  }

  return (
    <select value={selectedBreed} onChange={handleChange}>
      {breeds.map((breed, i) => (
        <option key={i} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}
