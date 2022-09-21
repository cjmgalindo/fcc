import data from './data'
import React from 'react'
import Card from './Card'
import s from './Cards.module.css';


function Cards() {
  return (
    <div className={s.cards}>
        {
            data.map(e => (
                <Card 
                    img = {e.img}
                    name = {e.name} 
                    country = {e.country}
                    position = {e.position}
                    company = {e.company}
                    testimony = {e.testimony}
                    key = {e.id}
                />
            ))
        }
    </div>
  )
}

export default Cards;