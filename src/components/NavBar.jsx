import React from 'react'
import { NavHashLink } from 'react-router-hash-link';
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className='nav-container' id="home" >

      <nav className='nav'>

        <NavHashLink to="#about" className="nav-link" smooth >
          <button className='nav-button'>
          about
          </button>
        </NavHashLink>

        <NavHashLink to="#work" className="nav-link" smooth>
        <button className='nav-button'>
        work
        </button>
        </NavHashLink>
     
        <a className='lets_connect' href="mailto:ivo.2001@hotmail.com">
        let's connect!
        </a>

      </nav>

    </div>


  )
}
