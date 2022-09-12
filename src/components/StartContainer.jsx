import '../styles/components/startContainer.sass'

import Fundo2 from '../imgs/Doido2.png'

const StartContainer = () => {
  return (
    <main className='start'>
        <main>
          <div>
            <img id='fundo2' src={Fundo2} alt="fundo2" />
            <section id='name'>
              <p>HI THERE. I'M</p>
              <h1>LUIZ</h1>
              <h2>FRONTEND DEVELOPER</h2>
            </section>
          </div> 

        </main>
    </main>
  )
}

export default StartContainer