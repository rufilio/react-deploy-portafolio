import React from 'react'
import './Style/HomeComponet.css'

import { Link } from 'react-router-dom';
import { Fade, Zoom } from "react-awesome-reveal";
import { motion as m } from 'framer-motion';
import  Logo  from '../images/brain organ-bro.svg'





export const HomeComponet = () => {
  return (
    <div className='Home-Hero-Component'>
        <div className="Hero-Text-Component">
            <Fade>
            <m.div  animate={{x: "0%"}}
                    exit={{opacity: 1}}
                    initial={{x: "-100%"}}
                    transition={{duration: 0.75, ease:"easeOut"}}
                    className="Texto-Presentacion-H1">
                <h1>Welcome</h1>
            </m.div>
            </Fade>
            <Fade delay={300}>
            <m.div  animate={{ y: "0%"}}
                    exit={{opacity: 1}}
                    initial={{ y: "100%"}}
                    transition={{duration: 0.75, ease:"easeOut"}}
                    className="Texto-Presentacion-Span">
                <span>Estudio personal de Alexis Baez</span>
            </m.div> 
            </Fade>
  
            <Fade delay={600}>
            <div className="Button-Presentacion-A">
                    <Link to="/Proyectos" className='links-P'>Conoce mi trabajo</Link>
            </div>
  
            <div className="Redes-Presentacion-R-A-L">

                <a href="https://www.instagram.com/no_soyvegano/" className='links-R'><i class='bx bxl-instagram'></i></a>
                <a href="https://github.com/rufilio" className='links-R'><i class='bx bxl-github' ></i></a>
                <div className="location">
                    <a href="" className='links-L links-R'><i class="ri-map-pin-line"></i></a>
                    <span>Santo Domingo</span>
                </div>
      
            </div>
            </Fade>
        </div>



        <div className="Hero-Images-Component">
                <Zoom delay={800}>
                    <img src={Logo} alt="Images" className='Imagen-Hero' />
                </Zoom>
        </div>
    </div>
  )
}
