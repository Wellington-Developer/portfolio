import { Button } from "../utilidades/Button"
import imgIntro from '../../img/introducao.jpg'
import './Home.css'

export const Home = () => {

  return (
    <section>
      <div className="home-container" >
        <div className="home-content">
          <div className="home-left-section">
            <span className="font-2-l">Eae 🤘🏻</span>
            <h1 className="font-1-xxl">Front-End Developer & UI Designer<span id="dot">.</span></h1>
            <p className="font-2-l">Desenvolvo Interfaces para produtos digitais que conectam pessoas e empresas</p>
            <Button text={"CONTATE-ME"}/>
          </div>
          <div className="home-right-section">
            <img src={imgIntro} alt="Imagem de código"/>
          </div>
        </div>
      </div>

    </section>
  )
}