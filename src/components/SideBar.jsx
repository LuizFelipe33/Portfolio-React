import React from 'react'
import Social from './Social'

import img from '../imgs/Eu.png'
import '../styles/components/sidebar.sass'
import Information from './Information'

function sideBar() {
  return (
    <aside id='sidebar'>
        <img src={img} alt="Luiz Felipe" />
        <p className="title">Dev Frontend</p>
        <Social/>
        <Information/>
        <a href="https://www.canva.com/design/DAEiEIdmHtI/IkMmMSBFYUH-IukGb2j1PQ/view?utm_content=DAEiEIdmHtI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" className='btn'>
            Curriculo
        </a>
    </aside>
  )
}

export default sideBar