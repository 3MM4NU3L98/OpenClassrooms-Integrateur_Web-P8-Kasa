import Banner from '../../components/Banner'
import Landscape2 from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'
import Collapse from '../../components/Collapse'
import './about.scss'


function About() {
  return (
    <div className='about'>
      <Banner bannerImg={Landscape2} />
      <div className='groupCollapse'>
        <Collapse title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
            et toutes les informations sont régulièrement vérifiées  par nos équipes.
        </Collapse>
        <Collapse title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse title="Service">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse title="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
            qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes.
        </Collapse>
      </div>
    </div>
  )
}

export default About