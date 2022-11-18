import spidermanImg from '../../img/spiderman.png'
import dogsImg from '../../img/dogs.png'
import imgBikcraft from '../../img/bikcraft.png'
import './Projects.css'

export const Projects = () => {
  return (
    <div>
    <section>
      <div className="project project-container">
        <div className="project-image">
          <a href="https://frontwellingtonsantosspiderman.vercel.app" target="_blank" rel="noreferrer">
            <img src={spidermanImg} alt="Imagem representando o projeto Spiderman" />
          </a>
        </div>

        <div className="project-content">
          <h3 className="font-1-m">WEBSITE</h3>
          <h1 className="font-1-xl">Spider Man: Miles Morales</h1>
          <p className="font-1-s">Utilizei CSS puro e a biblioteca GSAP para as animações.</p>
          <a href="https://frontwellingtonsantosspiderman.vercel.app" target="_blank" rel="noreferrer">Ver projeto</a>
        </div>
      </div>
    </section>

    <section className="project-bg">
    <div className="project project-container">
      <div className="project-image">
        <a href="https://redesocialdogs.vercel.app" target="_blank" rel="noreferrer">
          <img src={dogsImg} alt="Imagem representando o projeto Spiderman" />
        </a>
      </div>

      <div className="project-content">
        <h3 className="font-1-m">WEBSITE</h3>
        <h1 className="font-1-xl">Dogs</h1>
        <p className="font-1-s">Desenvolvido com ReactJS e SASS. Dogs é uma rede social para cahorro, onde você pode logar / registrar, dar likes, comentar em posts e muito mais!</p>
        <a href="https://redesocialdogs.vercel.app" target="_blank" rel="noreferrer">Ver projeto</a>
      </div>
    </div>
    </section>

    <section>
      <div className="project project-container">
        <div className="project-image">
          <a href="https://wellingtonsantos-bikcraft.vercel.app" target="_blank" rel="noreferrer">
            <img src={imgBikcraft} alt="Imagem representando o projeto Spiderman" />
          </a>
        </div>

        <div className="project-content">
        <h3 className="font-1-m">WEBSITE</h3>
        <h1 className="font-1-xl">Bikcraft</h1>
        <p className="font-1-s">Desenvolvido com ReactJS e SASS. Futuramente pretendo adicionar algumas funcionalidades como login, registro...</p>
        <a href="https://wellingtonsantos-bikcraft.vercel.app" target="_blank" rel="noreferrer">Ver projeto</a>
        </div>
      </div>
    </section>
    </div>
  )
}