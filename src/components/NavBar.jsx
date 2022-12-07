import React from 'react'
import {   BrowserRouter as Router,
  Switch,
  Route,
  Link ,NavLink } from "react-router-dom";
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
        <NavHashLink to="/work" className="nav-link" smooth>
        <button className='nav-button'>
        work
        </button>
        
        </NavHashLink>
        <NavHashLink to="/lets-connect" className="nav-link" smooth>
        <button id='lets_connect'>
        let's connect!
        </button>
      
        </NavHashLink>
      </nav>
    </div>


  )
}
