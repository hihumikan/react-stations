import React from 'react'

export function BreedsSelect( breeds, selectedBreed, setSelectedBreed ) {
  return (
    <div>
      <select  onChange={setSelectedBreed}>
        {breeds.breeds.map((breed, i) => (
          <option key={i} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  )
}
