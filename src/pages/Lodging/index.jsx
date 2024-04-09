import { useState, useEffect } from 'react'
import { useParams , useNavigate } from 'react-router-dom'

import Collapse from '../../components/Collapse'
import Tags from '../../components/Tags/'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Slideshow from '../../components/Slideshow'

import './lodging.scss'


function Lodging() {
    const { idLodging } = useParams()
    const Redirection = useNavigate()

    const [Lodging, setLodging] = useState(null)
    useEffect(()=>{
        fetch("../data/logements.json",{
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            }
        }) 
        .then(function (reponse){
        return reponse.json()
        }) 
        .then(data => {
            const Housing = data.find(item =>  String(item.id) === idLodging )
            if (Housing) {
                setLodging(Housing)
            } else {
                Redirection('../../Error')
            }
        }) 
    },[idLodging, Redirection ])


    return (
        <>{Lodging !== null && (
            <div className='lodging'>
                <Slideshow pictures={Lodging.pictures} />
                <div className="infogroup">
                    <div className="infogroup_part1">
                        <div className="infogroup_part1_title">{Lodging.title}</div>
                        <div className="infogroup_part1_place">{Lodging.location}</div>
                        <Tags itemTags={Lodging.tags} />
                    </div>
                    <div className="infogroup_part2">
                        <Host host={Lodging.host} />
                        <Rating rating={Lodging.rating} />
                    </div>
                </div>
                <div className="collapsegroup">
                    <Collapse title='Description'>{Lodging.description}</Collapse>
                    <Collapse title='Équipements'>
                        {Lodging.equipments.map((item) => (
                            <div key={item} className='collapsegroup_equipment'>{item}</div>
                        ))}
                    </Collapse>
                </div>
            </div>
        )}</>
    )
}

export default Lodging