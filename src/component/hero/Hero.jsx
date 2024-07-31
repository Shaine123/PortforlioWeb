import React from 'react'
import './hero.css'
import { Location } from '../../asset/icon'
const Hero = () => {
  return (
    <div className='hero-container'>
        <h1 className='main'>Hi, I'm Shaine!</h1>
        <p className='detail1'>
          <img src={Location} alt="loc" />
           Poblacion,Sta.Catalina, PH
           </p>
        <p ><span style={{color:'white'}}>Currently a Fresh Graduate</span><span className='detail2'> from Negros Oriental State University, with a degree of Bachelor of Science In Information Technology</span></p>
    </div>
  )
}

export default Hero
