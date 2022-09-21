import React from 'react'
import Task from "./Task";
import s from './tasks.module.css'

function Tasks({ input }) {
  return (
    <div className='tasks'>
        {input.map((e,i)=>(
          <Task text={e} key={i}/>
        ))}
    </div>
    
  )
}

export default Tasks