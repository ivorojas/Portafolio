import React from 'react'
import './Work.css'
import dogs from '../img/pantallazo-dogs.jpg'
import linkLogo from  '../img/link-icon.png'
import github from '../img/logotipo-de-github.png'

export default function Work() {
  return (
    <div className='work_container' id='work' >
        <div id='work_content' >
        <div id='work_title'>
        <h3>Work</h3>
        </div>
        
      <div id='card_container' >
        <div className='card' >
  
        </div>
        <div className='card' >
          {/*   <img src={dogs} width="350rem"/>*/}
          <img src={dogs} className="imagen_port" />
          <div className='card_content' >
          <h3>Dogs App</h3>
          <p>
          Single Page Application that displays dogs brought through the use of an external API; the app is capable of paginating the results, sort them either by alphabetical order or weight, filter the results by creation type or temperaments, and more.
          </p>
          <p className='tecnologias' >-react, -redux, -express, -sequelize</p>
          </div>
          <a href='https://app-dogs-production.up.railway.app/'  target="_blank">
          <button className='button_card' >
            <img src={linkLogo} />
          </button>
          </a>
          <a href='https://github.com/ivorojas/PI-Dogs'  target="_blank">
          <button className='button_card' >
            <img src={github} />
          </button>
          </a>
        </div>
    
      </div>
    
        </div>

      </div>
  )
}
