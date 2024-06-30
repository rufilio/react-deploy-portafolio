import React, { useState } from 'react'
import './Style/AboutComponet.css'

import Imagen from '../images/Innovation-amico.svg'
import Imagen2 from '../images/Innovation-bro.svg'

import { motion as m } from 'framer-motion';
import { Fade, Zoom } from "react-awesome-reveal";




export const AboutComponent = () => {

  const initialIcons = [
    { iconClass: 'bx bxl-html5' },
    { iconClass: 'bx bxl-css3' },
    { iconClass: 'bx bxl-javascript' },
    { iconClass: 'bx bxl-react' },
    { iconClass: 'bx bxl-firebase' },
    { iconClass: 'bx bxl-php' },
    { iconClass: 'bx bxl-git' },
    { iconClass: 'bx bxl-figma' }
  ];

  const [icons, setIcons] = useState(initialIcons);

  const duplicateIcons = () => {
    setIcons(prevIcons => [...prevIcons, ...prevIcons]);
  };



  return (
    <div className='About-Me-Component'>
       <Zoom>
       <div className="Images-About-Me">
          <img src={Imagen2} alt="Images" />
        </div>
       </Zoom>
      
       <m.div 
               animate={{y: "0%"}}
               exit={{opacity: 1}}
               initial={{y: "20px"}}
               transition={{duration: 0.75, ease:"easeOut"}}
              className="Texto-About-Me">
            <Fade delay={100}>
              <div className="H1-Me">
                <h1><i>I am <span>Alex</span></i></h1>
              </div>
            </Fade>
            <div className="Me-P">
              <p>Habil en la resolucion de problemas y la prestacion de servicios al cliente, Tecnico en Sporte TI y Desarrollador Front-End con Experiencia en Back-End, Apasionado por la maquetacion, programacion y el aprendizaje.</p>
            </div>
            <div className="skills">
                <div class="tile">
                    <h1>Skills</h1>
                </div>
                <div className="skills-container">
                  <div className="cont-princ-slider">
                    <div className="slier-prin">
                      {icons.map((icon, index) => (
                        <div className="juegos_DWG" key={index}>
                          <a href="#"><i className={icon.iconClass}></i></a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
        </m.div>
       <Zoom delay={300}>
       <div className="Images-About-Me">
          <img src={Imagen} alt="Images" />
        </div>
       </Zoom>
    </div>
  )
}
