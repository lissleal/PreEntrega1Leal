import React from 'react'
import "./Footer.scss"
import linkedin from "./assets/linkedin.png"
import github from "./assets/github.png"
import portafolio from "./assets/portafolio.png"


const Footer = () => {
  return (
    <div className='footer'>
      <div className='iconos'>
        <a href="https://www.linkedin.com/in/lissett-leal/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
        <a href="https://github.com/lissleal" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
        <a href="https://lissleal.github.io/portfolio/" target="_blank" rel="noopener noreferrer"><img src={portafolio} alt="" /></a>
      </div>
      <p>Derechos Reservados Lissett Leal</p>
      <p>Página realizada con fines educativos</p>
    </div>
  )
}

export default Footer