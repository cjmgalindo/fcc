import React from 'react'
import s from "./form.module.css";

function Form({ seteo, input }) {

  const set = (e)=> {
    e.preventDefault();
    const { value } = e.target.task
    if(value) seteo([...input, value]);
    e.target.reset();
  }

  return (
    <form onSubmit={set} className={s.form}>
        <input type="text" name='task' placeholder='add new task' autoComplete='off'/>
        <button type="">+</button>
    </form>
  )
}

export default Form