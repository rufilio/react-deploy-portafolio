import React, {useEffect, useState} from 'react'
import './Style/ProyectosComponet.css'

import {db} from '../Firebase/Config'
import { collection, getDocs} from "firebase/firestore";






export const ProyectosCoponent = () => {

    const [proyectos, setDataProyects] = useState([]);

    useEffect(() => {

        const proyects = collection(db, "proyectos");
        
  
        getDocs(proyects)
          .then((resp) => {
            setDataProyects(
              resp.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
              })
            )
          })
          
      }, [])

  return (

    <div className='Proyects-Items-Component'>
        <div className="Titulo-Card">
            <h1><i>Proyectos</i></h1>
        </div>
        
       {Array.isArray(proyectos) && proyectos.length > 0 ?(
        proyectos.map((prod) => (
            <div className="Card-Container-Main">
            <div className="Images-Card">
                <a href={prod.urlPagina} className='links-pages'><i class='bx bx-right-top-arrow-circle'></i></a>
                <img src={prod.imagen} alt="Images" />
            </div>
            <div className="Card-Texto">
                <div className="Texto-H1-Card">
                    <h1>{prod.titulo}</h1>
                </div>
                <div className="Texto-Span-Card">
                    <span>{prod.tools}</span>
                </div>
                <div className="Texto-P-Card">
                    <p></p>
                </div>
            </div>
        </div>
        ))
       ) : (
        <p>Looading..</p>)}
    </div>

  )


}
