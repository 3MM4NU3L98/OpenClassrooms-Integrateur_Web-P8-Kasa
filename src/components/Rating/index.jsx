import Star0 from '../../assets/star0.svg'
import Star1 from '../../assets/star1.svg'
import Star2 from '../../assets/star2.svg'
import Star3 from '../../assets/star3.svg'
import Star4 from '../../assets/star4.svg'
import Star5 from '../../assets/star5.svg'
import './rating.scss'

function Rating({rating}) {
    const arryStar = [ Star0, Star1, Star2, Star3, Star4, Star5]
    return (
        <div className="rating">
            <img src={arryStar[rating]} alt={`Note : ${rating} étoile(s)`} />
        </div>
    )
} 

export default Rating