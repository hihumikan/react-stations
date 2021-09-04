import React, { useState } from 'react'
import './App.css'
import { Header } from './Header.js'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

export const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}
