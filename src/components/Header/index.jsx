import { Link } from 'react-router-dom'
import Logo from '../../assets/logoColored.svg'
import './header.scss'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt='Logo de Kasa' />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header