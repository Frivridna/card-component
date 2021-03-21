import React from 'react'

import './Card.css'

const Card = ({image, date, number, title}) => {
  return (
    <article className="card">
      <div className="image-container">
        <img src={image} alt="Circles and squares" />
      </div>
      <div className="date-number-container">
        <p>{date}</p>
        <p>{number}</p>
      </div>
      <h1 className="title">{title}</h1>
    </article>
  )
}

export default Card