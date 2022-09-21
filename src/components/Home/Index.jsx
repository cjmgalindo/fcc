import React from 'react'
import s from './index.module.css'
import {Link} from 'react-router-dom'

const imgs = require("../img/img.png");

const calc = require("../img/calculadora.png");
const cont = require("../img/contador.png");
const td = require("../img/todo.png");
const trib = require("../img/tributo.png");



function Index() {
  return (
    <div className={s.boxMain}>

    
      <div className={s.boxOne}>
        <h1>titulo</h1>
        <div className={s.box}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias dolore distinctio rerum pariatur dolorum placeat nihil accusantium suscipit vel, nostrum numquam fuga accusamus, expedita dignissimos perspiciatis quidem, architecto doloribus porro.
          Cum aspernatur esse eligendi iure doloribus soluta repellat, deleniti voluptatem illum amet nesciunt inventore temporibus dicta distinctio maxime fugit laudantium sed sapiente perferendis alias asperiores odit. </p>
          <img src={imgs}  alt='img' />
        </div>
      </div>

      <div className={s.boxTwo}>
        <h1>Proyectos</h1>
        
        <div className={s.cards}>
          
          <Link to='/calculadora'>
            <div className={s.card}>
              <img src={calc} alt="" />
              <p><strong>Calculadora</strong> <br />
                calculadora realizada con html, css, js y la libreria Math JS, 
              </p>
            </div>
          </Link>
          <Link to='/contador'>
            <div className={s.card}>
              <img src={cont} alt="" />
              <p><strong>Contador</strong> <br />
                App con dos botones, que representa un contador declicks uno para sumar de a 1 y otra para reiniciar el contador a 0,
                el contador utiliza los estados de react.
              </p>
            </div>
          </Link>
          
          <Link to='/todo'>
            <div className={s.card}>
              <img src={td} alt="" />
              <p><strong>To-do</strong> <br />
                Lista de tareas, con un boton para gregar las tareas y un opcion para marcar las tareas realizadas, usando useState de react.
              </p>
            </div>
          </Link>
          
        <Link to='/tributo'>
            <div className={s.card}>
              <img src={trib} alt="" />
              <p><strong>Pag. Tributo</strong> <br />
              Landing Page adaptable a dispositivos moviles y de escritorio, el cual simula la pagina de testimonios de FreeCodeCamp</p>
            </div>
        </Link>
          
          
        </div>
      </div>
    </div>
  )
}

export default Index