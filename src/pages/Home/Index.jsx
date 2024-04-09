import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landscape1 from '../../assets/coast.jpg'
import Banner from '../../components/Banner'
import Card from '../../components/Card'

import "./home.scss"

function Home() {
  const [Lodging, setLodging] = useState([])
  useEffect(()=>{
    fetch("data/logements.json",{
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      }) 
    .then(function (reponse){
      return reponse.json()
    }) 
    .then(data => { 
      setLodging(data)
    }) 
  },[])

  return (
    <div className="home">
      <Banner
        bannerImg={Landscape1} 
        bannerTxt='Chez vous, partout et ailleurs' 
      />
      <div className='listCard'>
        {Lodging.map(({ id, title, cover }) => ( 
           <Link key={id} to={'/lodging/'+id}> 
             <Card
              title={title} 
              cover={cover} 
            /> 
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home