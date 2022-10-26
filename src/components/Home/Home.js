import { Button } from "../utilidades/Button"
import imgIntro from '../../img/introducao.jpg'
import './Home.css'

import { useRef, useEffect } from 'react'
import { gsap, Power2 } from 'gsap'

export const Home = () => {
  let home = useRef(null)

  useEffect(() => {
    gsap.fromTo(home.current, 0.1, {width: '0%', opacity: 0},
      {width: '100%', opacity: 1, ease: Power2})
  }, [])

  return (
    <section>
      <div className="home-container" ref={home}>
        <div className="home-content">
          <div className="home-left-section">
            <span className="font-2-l">Eae 🤘🏻</span>
            <h1 className="font-1-xxl">Front-End Developer & UI Designer<span id="dot">.</span></h1>
            <p className="font-2-l">Desenvolvo Interfaces para produtos digitais que conectam pessoas e empresas</p>
            <Button text={"CONTATE-ME"}/>
          </div>
          <div className="home-right-section">
            <img src={imgIntro} alt="Imagem de código" />
          </div>
        </div>
      </div>
    </section>
  )
}