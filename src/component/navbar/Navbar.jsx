import React from 'react'
import './navbar.css'
import { Logo } from '../../asset/icon'
const Navbar = ({moveAbout,moveIntro,moveWorks,moveContacts}) => {
  return (
    <>
      <div className="nav-bar">
        <div>
           <img src={Logo} alt="logo" />
        </div>
        <nav>
            <ul>
                <li onClick={moveIntro}>Intro</li>
                <li onClick={moveAbout}>About</li> 
                <li onClick={moveWorks}>Works</li>
                <li onClick={moveContacts}>Contact</li>
            </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
