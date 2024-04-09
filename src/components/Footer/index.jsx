import LogoWhite from '../../assets/logoWhite.svg'
import './footer.scss'

function Footer() {
  return (
    <footer>
      <img src={LogoWhite} alt='Logo de Kasa' />
      <div className="footerTxt">© 2020 Kasa. All rights reserved</div>
    </footer>
  
  )
}

export default Footer