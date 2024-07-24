import React from 'react'
import "./Home.css"
import NavBar from "./NavBar";
import Logo from "../img/logo.png"

export default function Home() {
  return (
    <div className='home-container' id="home"  >

      <NavBar />
   

      <div id='container-content' >
 
          <div id='texto-landing' >
           <p id='my-name' >hi my name is </p>
        <h1 id='ivo-rojas' >IVO ROJAS</h1>
  
          <p id='introduction' >I'm a full-stack developer from Argentina, Buenos Aires, with strong Front-End skills. I am currently entering the IT world to develop web experiences and overcome new challenges. </p>
          </div>
          <div id='logo' >
            <img src={Logo} alt='logo' width="190px" />
          </div>

      </div>

    </div>
  )
}
