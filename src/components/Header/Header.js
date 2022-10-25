import logoImg from '../../img/logo.svg'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <div class="header-container">
        <div class="header-content">
          <div class="header-logo">
            <img src={logoImg} alt="Logotipo"/>
          </div>
        </div>
      </div>
    </header>
  )
}