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
  const [selectedBreed, setSelectedBreed] = useState('')
  const [OnceBreeds, setOnceBreeds] = useState([])
  const handleSelectBreed = breed => {
    setSelectedBreed(breed)
  }
  const createUriMethod = breed => {
    return `https://dog.ceo/api/breed/${breed}/images/random/12`
  }

  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onSelectBreed={handleSelectBreed}
      />
      <p>{selectedBreed}</p>
      <button
        className="button"
        onClick={() =>
          fetch(createUriMethod(selectedBreed))
            .then(response => response.json())
            .then(data => setOnceBreeds(data.message))
        }
      >
        表示
      </button>
      {OnceBreeds.map((breed, i) => (
        <img key={i} src={breed} />
      ))}
    </div>
  )
}
