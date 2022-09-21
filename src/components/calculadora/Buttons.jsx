import React from "react";
import s from "./buttons.module.css";
import Button from "./Button";

function Buttons({event, operation,addoperation}) {
  let values = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "=", 0, ".", "/"];

  return (
    <div className={s.boxButtons}>
      {values.map((e,i)=>(
        (e==="=") ? <Button s="btn" key={i} event={operation}> {e} </Button> :
        (e === '+' || e === '-' ||e === '*' ||e === '/') ? 
        <Button s="operator" key={i} event={()=>addoperation(e)}> {e} </Button> : 
        <Button s="btn" key={i} event={()=>event(e)}>{e} </Button>
      ))}
    </div>
  );
}

export default Buttons;
