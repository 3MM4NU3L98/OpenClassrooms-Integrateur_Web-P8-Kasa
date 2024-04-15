import { useState } from 'react'
import ArrowBackward from '../../assets/arrow_backward.svg'
import ArrowForward from '../../assets/arrow_forward.svg'

import './slideshow.scss'

function Slideshow ({pictures}) {
    const [slidesIndex, setSlidesIndex ] = useState(0)

    const slide = (direction) => {
        if (direction === 'backward') {
            setSlidesIndex((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
        } else if (direction === 'forward') {
            setSlidesIndex((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
        }
    }
   
    return (
        <div className="slideshow">
            <img
                className='slideshow_img'
                src={pictures[slidesIndex]}
                alt= {`Photographie ${slidesIndex + 1} sur ${pictures.length}`}
             />
            { pictures.length !== 1 && 
                <>  
                    <div className='slideshow_arrow'>
                        <img onClick={() => slide('backward')}
                            className='slideshow_arrow_backward'
                            src={ArrowBackward}
                            alt="Flèche vers la photographie précédante" />
                        <img onClick={() => slide('forward')}
                            className='slideshow_arrow_forward'
                            src={ArrowForward}
                            alt="Flèche vers la photographie suivante" />
                    </div><div className="slideshow_caption">{`${slidesIndex + 1}/${pictures.length}`}</div>
                </>
            }
        </div> 
    )
}

export default Slideshow