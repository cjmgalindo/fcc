import React from 'react'
import s from './button.module.css'


function Button(props) {    
  return (
    <button 
    className={s[props.s]}
    onClick = {props.event}
    >
    {props.children}
    </button>
  )
}

export default Button