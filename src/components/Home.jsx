import React from 'react'
import "./Home.css"
import NavBar from "./NavBar";
import About from "./About";
import Logo from "../img/logo.png"

export default function Home() {
  return (
    <div className='home-container' id="home"  >

      <NavBar />
   

      <div id='container-content' >
 
          <div id='texto-landing' >
           <p id='my-name' >hi my name is </p>
        <h1 id='ivo-rojas' >IVO ROJAS</h1>
  
          <p id='introduction' >i'm a full-stack developer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet dicta, 
            suscipit reiciendis illum doloribus, rem iure ipsam, in nam earum placeat magni. </p>
          </div>
          <div id='logo' >
            <img src={Logo} width="190px" />
          </div>

      </div>

    </div>
  )
}
