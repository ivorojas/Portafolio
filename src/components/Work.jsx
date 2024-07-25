import React from 'react'
import './Work.css'
import dogs from '../img/pantallazo-dogs.jpg'
import weather from '../img/captura-weather.jpg'
import github from '../img/logotipo-de-github.png'
import linkedinLogo from '../img/linkedin-icon-logo.png'

export default function Work() {
  return (
    <div className='work_container' id='work' >
          <div id='work_content' >
          <div id='work_title'>
          <h3>Work</h3>
          </div>
          
          <div id='card_container' >

            <div className='card' >
              <img src={weather} className="imagen_port" alt='imagen weather app' />
              <div className='card_content' >
                <h3>Weather App</h3>
                <p>
                Search for a city located anywhere in the world and let the app display a card with its current weather information. With varying images and information according to the data brought by Open Weather API.
                </p>
                <p className='tecnologias' >-react, -html, -css,  -openWeatherApi</p>
              </div>
              <a href='https://github.com/ivorojas/weather-app' rel="noreferrer" target="_blank">
              <button className='button_card' >
                <img src={github} alt="icono github" />
              </button>
              </a>
            </div>

            <div className='card' >
              <img src={dogs} className="imagen_port" alt='imagen dogs app' />
              <div className='card_content' >
                <h3>Dogs App</h3>
                <p>
                Single Page Application that displays dogs brought through the use of an external API; the app is capable of paginating the results, sort them either by alphabetical order or weight, filter the results by creation type or temperaments, and more.
                </p>
                <p className='tecnologias' >-react, -redux, -express, -sequelize, -theDogApi</p>
              </div>
              <a href='https://github.com/ivorojas/PI-Dogs' rel="noreferrer"  target="_blank">
                <button className='button_card' >
                  <img src={github} alt="icono github" />
                </button>
              </a>
            </div>
            
          </div>
        </div>
        <footer>
					<div  className='footer'>
					<p>Designed & Built by Ivo Rojas</p>
			<a href='https://www.linkedin.com/in/ivo-rojas-753a95239/' rel="noreferrer" target="_blank">
			<button className='button-footer'>
					<img src={linkedinLogo} alt='linkedin-logo' width='30px'/>
					</button>
			</a>
			<a href='https://github.com/ivorojas' rel="noreferrer" target="_blank">
			<button className='button-footer' >
			<img src={github} alt='github-logo' width='25px'/>
					</button>
			</a>
					</div>
				</footer>
    </div>
  )
}
