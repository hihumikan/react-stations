import React, { useState, useEffect } from 'react'

export function DogListContainer() {
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message)
      })
  }, [])
  const [breeds, setBreeds] = useState([])

  return <p>test</p>
}
