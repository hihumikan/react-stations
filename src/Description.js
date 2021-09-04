import React, { useState } from 'react'
import { DogImage } from './DogImage'

export function Description() {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )
  return (
    <div>
      <div className="content">
        <p>犬の画像を表示するサイトです</p>
        <DogImage src={dogUrl} />
      </div>
      <div>
        <button
          className="button"
          onClick={() =>
            fetch('https://dog.ceo/api/breeds/image/random')
              .then(response => response.json())
              .then(data => setDogUrl(data.message))
          }
        >
          更新
        </button>
      </div>
    </div>
  )
}
