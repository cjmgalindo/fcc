import React from 'react';
import styles from './Card.module.css';

const { container, cardInfo} = styles;

function Card({img, name, country, position, company, testimony }) {
  return (
    <div className={container}>

      <img src={img} alt={`foto de ${name}`} srcSet="" />

      <div className={cardInfo}>

        <div>
          <h3>{`${name} en ${country}`}</h3>
          <p>{`${position} en ${company}`}</p>
        </div>
        <p>{testimony[0]} <b>{testimony[1]}</b> {testimony[2]}</p>
      </div>

    </div>
  )
}

// {console.log(data.containerCard)}
//         
export default Card