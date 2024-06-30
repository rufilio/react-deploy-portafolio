import React from 'react'



import { Link } from 'react-router-dom'
import  Logo  from '../images/carta-a.png'
 


import './style/Navbar.css'


export const Navbar = () => {
  return (
    <header>
        <div className="content-navbar-header">
            <img src={Logo} alt="Images" />

            <ul>
                <li><Link to="/" className='active'>Home</Link></li>

                <li><Link to="/Proyectos" className='links'>Proyects</Link></li>

                <li><Link to="/About" className='links'>About</Link></li>
            </ul>
        </div>
    </header>
  )
}


