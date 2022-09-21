import React, { useState } from 'react'
import Form from "./Form";
import Tasks from './Tasks'
import s from "./todo.module.css";

function Tod() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className={s.boxMain}>
      <h2>To-Do</h2>
      <div className={s.boxContainer}>
          <Form seteo={setTasks} input={tasks} />
          <Tasks input={tasks}/>
      </div>
    </div>
  )
}

export default Tod