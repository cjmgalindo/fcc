import React from 'react'
import { NavLink,Link, Outlet} from 'react-router-dom'
import s from './Layout.module.css'
import logo from './img/logoSmall.svg'


function header() {
  return (
    <>
      <header>
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <nav>
            <ul>
                <li>
                  <NavLink 
                  className={({isActive}) => isActive ? s.active : s.inactive}
                  to="/"
                  
                  >Home</NavLink>
                </li>
                <li>
                <NavLink 
                className={({isActive}) => isActive ? s.active : s.inactive}
                to="/calculadora">Calculadora</NavLink>
                </li>
                <li>
                <NavLink 
                className={({isActive}) => isActive ? s.active : s.inactive}
                to="/contador">Contador</NavLink>
                </li>
                <li>
                <NavLink 
                className={({isActive}) => isActive ? s.active : s.inactive}
                to="/Todo">ToDo</NavLink>
                </li>
                <li>
                <NavLink 
                className={({isActive}) => isActive ? s.active : s.inactive}
                to="/Tributo">Tributo</NavLink>
                </li>
            </ul>
            
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Hecho por <a href="https://www.linkedin.com/in/cjmgalindo/">@cjmgalindo</a></p>
      </footer>
    </>
  )
}

export default header