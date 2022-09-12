import React from 'react'
import '../styles/components/maincontent.sass'
import About from './About'
import Technologies from './Technologies'


const mainContent = () => {
  return (
    <section id='main-content'>
      <About/>
      <Technologies/>
    </section>
  )
}

export default mainContent