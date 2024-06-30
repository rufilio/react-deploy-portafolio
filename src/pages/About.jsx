import React from 'react'

import {AboutComponent} from '../assets/widgets/AboutComponent'
import { motion as m } from 'framer-motion';

import './style/About.css'

export const About = () => {
  return (
    <div className='About-Main-Init'>
        <div className="About-Main-Container-Center">
            <AboutComponent/>
        </div>
    </div>
  )
}
