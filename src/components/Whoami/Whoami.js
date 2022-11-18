import imgMe from '../../img/me.png'
import imgCorrect from '../../img/icon/correct.svg'

// CSS
import './Whoami.css'

export const Whoami = () => {
  return (
    <div className="section-whoami-container">
      <div className="section-whoami">
        <div className="section-whoami-left">
          <span>CONHEÇA-ME</span>
          <h1>Conheça minha historia<span className="dot">.</span></h1>
          <p>Meu nome é Wellington Santos e sou do Litoral Norte de SP. Minha jornada como Desenvovledor Front-End começou em 2017, quando iniciei um curso tecnico de Sistemas para Internet no IFSP que foi onde eu tive o pontapé inicial nesse mundo de criação de interfaces, o que logo se tornou uma paixão!</p>

          <ul>
            <li>
              <img src={imgCorrect} alt="correct"/>
              5 Anos de experiência com Desenvolvimento Front-End
            </li>
            <li>
              <img src={imgCorrect} alt="correct"/>
              Entusiasta em UI Design e Motion
            </li>
            <li>
              <img src={imgCorrect} alt="correct"/>
              Atualmente me dedico a aprender Clean Architecture
            </li>
          </ul>
        </div>
        <div className="section-whoami-right">
          <img src={imgMe} alt="Uma foto minha." />
        </div>
      </div>
    </div>
  )
}