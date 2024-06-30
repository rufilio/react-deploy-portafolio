import React from 'react'
import './style/Proyectos.css'



import { ProyectosCoponent } from '../assets/widgets/ProyectosCoponent'
import { motion as m } from 'framer-motion';




export const Proyectos = () => {
  return (
    <m.div 
          animate={{y: "0%"}}
          exit={{opacity: 1}}
          initial={{y: "100%"}}
          transition={{duration: 0.9, ease:"easeOut"}}
          className='Proyectos-Main-Init'>
        <div className="Proyectos-Main-Container-Center">
            <ProyectosCoponent />
        </div>
    </m.div>
  )
}
