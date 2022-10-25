import meImg from '../../img/me.png'
import correctIcon from '../../img/icon/correct.svg'
import './About.css'

export const About = () => {
  return (
    <div class="about-bg">
      <section class="about-container">
        <div class="about-content">
          <h1 class="font-1-xl">Quem te ensinou sonhar?</h1>
          <p class="font-2-m">Meu nome é Wellington Santos e sou do Litoral Norte de SP. Minha jornada como Desenvovledor Front-End começou em 2017, quando iniciei um curso tecnico de Sistemas para Internet no IFSP que foi onde eu tive o pontapé inicial nesse mundo de criação de interfaces, o que logo se tornou uma paixão!</p>
          <ul class="font-1-s">
            <li><img src={correctIcon} alt="Correct" />5 Anos de experiência com Desenvolvimento Front-End</li>
            <li><img src={correctIcon} alt="Correct" />Entusiasta em UI Design e Motion</li>
            <li><img src={correctIcon} alt="Correct" />Atualmente me dedico a aprender Clean Architecture</li>
          </ul>

          <div class="cv-box">
            <h1 class="font-2-xm">Download CV</h1>
          </div>
        </div>

        <div class="about-image">
          <img src={meImg} alt="Eu :D" />
        </div>
      </section>
    </div>
  )
}