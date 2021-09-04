import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export function DogListContainer() {
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(Object.keys(data.message))
      })
  }, [])
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('none')
  const handleClick = event => {
    setSelectedBreed(event.target.value)
  }
  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={handleClick}
      />
      <p>{selectedBreed}</p>
    </div>
  )
}
