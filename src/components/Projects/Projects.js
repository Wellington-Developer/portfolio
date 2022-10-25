import spidermanImg from '../../img/spiderman.png'
import nubankImg from '../../img/nubank.png'
import codesecImg from '../../img/codesec.png'
import './Projects.css'

export const Projects = () => {
  return (
    <div>
    <section>
      <div class="project project-container">
        <div class="project-image">
          <img src={spidermanImg} alt="Imagem representando o projeto Spiderman" />
        </div>

        <div class="project-content">
          <h3 class="font-1-m">WEBSITE</h3>
          <h1 class="font-1-xl">Spider Man: Miles Morales</h1>
          <p class="font-1-s">Utilizei CSS puro e a biblioteca GSAP para as animações.</p>
        </div>
      </div>
    </section>

    <section class="project-bg">
    <div class="project project-container">
      <div class="project-image">
        <img src={nubankImg} alt="Imagem representando o projeto Spiderman" />
      </div>

      <div class="project-content">
        <h3 class="font-1-m">WEBSITE</h3>
        <h1 class="font-1-xl">NuBank - Redesign & Code</h1>
        <p class="font-1-s">É utilizado o CSS puro biblioteca GSAP para animações.</p>
      </div>
    </div>
    </section>

    <section>
      <div class="project project-container">
        <div class="project-image">
          <img src={codesecImg} alt="Imagem representando o projeto Spiderman" />
        </div>

        <div class="project-content">
          <h3 class="font-1-m">WEBSITE</h3>
          <h1 class="font-1-xl">CodeSec</h1>
          <p class="font-1-s">É utilizado o CSS puro biblioteca GSAP para animações.</p>
        </div>
      </div>
    </section>
    </div>
  )
}