import { Button } from "../utilidades/Button"
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
          <div class="perspective">
            <div class="card"></div>
          </div>
          </div>
        </div>
      </div>

    </section>
  )
}