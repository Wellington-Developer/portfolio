import logoImg from '../../img/logo.svg'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <img src={logoImg} alt="Logotipo"/>
          </div>
        </div>
      </div>
    </header>
  )
}