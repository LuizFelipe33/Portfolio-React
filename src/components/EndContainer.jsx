import React from 'react'
import Projects from './Projects'
import '../styles/components/endContainer.sass'

import web from '../imgs/Web.png'
import ia from '../imgs/IA.jpg'
import java from '../imgs/java.png'
import ides from '../imgs/IDEs.png'
import python from '../imgs/pyhton.png'
import logica from '../imgs/logica.png'
import udemy from '../imgs/udemy.png'


const certificados = [
    {id: 1, img: web},
    {id: 2, img: ia},
    {id: 3, img: java},
    {id: 4, img: ides},
    {id: 5, img: python},
    {id: 6, img: logica},
    {id: 7, img: udemy},
]

const EndContainer = () => {
  return (
    <div className='container-End'>
        <Projects/>
        <h2 id='cert-name'>
          Certificados
        </h2>
        <div className='cert-grid'>
        {certificados.map((cert) =>(
            <div id={cert.id} key={cert.id}>
                <img src={cert.img} alt="certificado" className='card-cert'/>
            </div>
        ))}
        </div>
    </div>
    
  )
}

export default EndContainer