import React from 'react'
import s from './Button.module.css'

const {click, reiniciar} = s;

// function Button({text, event}) {
//   return (
//     <button 
//     onClick={event} 
//     className={text == "click" ? click : reiniciar} 
//     >
//     {text}
//     </button>
//   )
// }

// export default Button


//componente de clase
export default class Button extends React.Component {
  render() {
    return (
          <button 
          onClick={this.props.event} 
          className={this.props.text === "click" ? click : reiniciar} 
          >
          {this.props.text}
          </button>
        )
  }
}
