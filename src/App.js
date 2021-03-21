import React from 'react'

import Card from './components/Card.js'

export const App = () => {
  return (
    <div>
      <Card
        image="./assets/card-image.png"
        number="01."
        title="The beginning of everything."
        date="JANUARY 2021" />
    </div>
  )
}