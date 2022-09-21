import React, {useState} from 'react'
import Button from './Button';
import s from './Counter.module.css'


// //componente de clase
// class Counter extends React.Component {

// //estado
//   constructor(props) {
//     super(props)
//     this.state = {
//        contador: 0
//     }
//   }

//   render() {
//     return (
//       <div className={s.boxMain}>
//         <div className={s.boxCounter}>
//             <p>{this.state.contador}</p>
//         </div>
//         <div className={s.buttons}>
//           <Button text="click" event={()=> this.setState(this.state.contador+1) }/>
//           <Button text="reiniciar" event={()=> this.setState(0) }/>
//         </div>
//       </div>
      
//     )
//   }
// }


function Counter() {
  const [contador, setContador] = useState(0);
  return (
    <div className={s.boxMain}>
      <div className={s.boxCounter}>
          <p>{contador}</p>
      </div>
      <div className={s.buttons}>
        <Button text="click" event={()=> setContador(contador+1) }/>
        <Button text="reiniciar" event={()=> setContador(0) }/>
      </div>
    </div>
    
  )
}

export default Counter