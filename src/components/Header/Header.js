import logoImg from '../../img/logo.svg'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <img src={logoImg} alt="Logotipo"/>
            <h1>WFRONT</h1>
          </div>
        </div>
      </div>
    </header>
  )
}