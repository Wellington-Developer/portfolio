import { Button } from "../utilidades/Button"
import imgIntro from '../../img/introducao.jpg'
import './Home.css'

export const Home = () => {
  return (
    <section>
      <div class="home-container">
        <div class="home-content">
          <div class="home-left-section">
            <span class="font-2-l">Eae 🤘🏻</span>
            <h1 class="font-1-xxl">Front-End Developer & UI Designer<span id="dot">.</span></h1>
            <p class="font-2-l">Desenvolvo Interfaces para produtos digitais que conectam pessoas e empresas</p>
            <Button text={"CONTATE-ME"}/>
          </div>
          <div class="home-right-section">
            <img src={imgIntro} alt="Imagem de código" />
          </div>
        </div>
      </div>
    </section>
  )
}