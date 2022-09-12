import React from 'react'

import '../styles/components/information.sass'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const Information = () => {
  return (
    <section id='information'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon'/>
            <div>
                <h3>
                    Telefone
                </h3>
                <p>
                    (81) 98161-8963
                </p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id='email-icon'/>
            <div>
                <h3>
                    Email
                </h3>
                <p>
                    lfar05071@gmail.com
                </p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id='pin-icon'/>
            <div>
                <h3>
                    Localização
                </h3>
                <p>
                    Paulista - PE
                </p>
            </div>
        </div>
    </section>
  )
}

export default Information