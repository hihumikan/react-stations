// DO NOT DELETE
import React, { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  return (
    <div>
      <header>
        <h2>Dogアプリ</h2>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} />
      <div>
        <button
          onClick={() =>
            fetch(
              'https://dog.ceo/api/breeds/image/random',
            )
              .then(response => response.json())
              .then(data => setDogUrl(data.message))
          }
        >
          更新
        </button>
        {dogUrl}
      </div>
    </div>
  )
}
