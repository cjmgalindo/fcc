import React from 'react'
import Cards  from "./Cards"
import s from './Page.module.css'

function tributo() {
  return (
    <div className={s.boxMain}>
      <h1>

      Here is what our alumni say about 
      <br/> 
      freeCodeCamp:

      </h1>
      <Cards />
    </div>
  )
}

export default tributo