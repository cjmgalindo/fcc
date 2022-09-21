import React from 'react'
import s from './task.module.css'

function Task({text}) {

  const click = (e) =>{
    e.target.classList.toggle(s.done)
  }

  return (
    <p className={s.task} onClick={click}>{text}</p>
  )
}

export default Task