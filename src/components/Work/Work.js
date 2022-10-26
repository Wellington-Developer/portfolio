import correctIcon from '../../img/icon/correct.svg'
import './Work.css'

export const Work = () => {
  return (
    <div className="work-bg">
    <section className="work-container">
      <div className="info">
        <h1 className="font-1-xl">Aí, olha o que sei fazer</h1>
        <p className="font-2-m">Sou focado na criação de interfaces digitais para sites e aplicativos. Projeto sempre tendo em vista a melhor experiência do usuário, alinhada com um bom visual e o propósito/objetivo do projeto.</p>
      </div>

      <div className="list font-1-s">
        <ul>
          <li><img src={correctIcon} alt="Correct"/>Protótipos de interfaces</li>
          <li><img src={correctIcon} alt="Correct"/>Código limpo e performado</li>
          <li><img src={correctIcon} alt="Correct"/>Animações com Motion</li>
        </ul>
      </div>

      <div className="box-container">
        <div className="box">
          <h1 className="font-1-xxs">Front-End Development</h1>
          <p className="font-1-s">
            Desenvolvimento sem templates ou modelos prontos. Garantindo a qualidade e atenção aos detalhes da interface.
          </p>
        </div>
        <div className="box">
          <h1 className="font-1-xxs">Design de interfaces web</h1>
          <p className="font-1-s">
            Interfaces para websites que funcionam em qualquer dispositivo, focado em seu público e forte apelo visual.
          </p>
        </div>
        <div className="box">
          <h1 className="font-1-xxs">Design de interfaces mobile</h1>
          <p className="font-1-s">
            Prototipação de interfaces para aplicativos, com foco em usabilidade e objetivos de seu negocio.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}