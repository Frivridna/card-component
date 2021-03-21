import React from 'react'

import './Card.css'

const Card = (props) => {
  return (
    <article className="card">
      <img className="image" src={props.image} alt="Circles and squares" />
      <div className="date-number-container">
        <p>{props.date}</p>
        <p>{props.number}</p>
      </div>
      <h1 className="card-header">{props.title}</h1>
    </article>
  );
};

export default Card

