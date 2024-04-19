import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logoColored.svg'
import './header.scss'

function Header() {
    let location = useLocation();
    return (
        <header>
              <Link to="/">
                  <img src={Logo} alt='Logo de Kasa' />
              </Link>
          <nav>
              <Link to="/" className={location.pathname === "/" ? 'linkDecoration' : ''}>Accueil</Link>
              <Link to="/about" className={location.pathname === "/about" ? 'linkDecoration' : ''}>À Propos</Link>
          </nav>
      </header>
    )
}

export default Header