import React from 'react'
import './style/Home.css'
import { HomeComponet } from '../assets/widgets/HomeComponet'



export const Home = () => {
  return (
    <div className='Home-Content-Init'>
      <div className="Home-Main-Container-Center">
          <HomeComponet />
      </div>
    </div>
  )
}
