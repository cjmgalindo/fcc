import React, { useState } from 'react'
import Button from './Button'
import s from './calculator.module.css';
import Buttons from './Buttons';
import {evaluate} from 'mathjs'

function Calculator() {

  const [input, setInput] = useState("")

  const add = value => {
    setInput(input + value )
  }

  const operation = () => {
    input ? setInput(evaluate(input)) : alert("ingrese valores para realizar los cambios");
  }
  const addoperation = value => {
    let va = input[input.length-1];
    if (va === "+" || va === "-" || va === "*" || va === "/"){
      setInput(input + "")
    }else {
      setInput(input + value)
    }
  }

  return (
    <div className={s.box}>
      <div className={s.boxCalculator}>
        <input disabled={true} type="text" value={input}/>
        <Buttons event={add} operation={operation} addoperation={addoperation}/>
        <Button s = "clear" event={() => setInput("")}>clear</Button>
      </div>
    </div>
  )
}

export default Calculator