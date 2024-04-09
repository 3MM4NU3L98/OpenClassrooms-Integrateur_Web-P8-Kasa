
// import ArrowBackward from '../../assets/arrow_backward.svg'
// import ArrowForward from '../../assets/arrow_forward.svg'

import './slideshow.scss'

function Slideshow ({pictures}) {

    let  slidesIndex = 0

    // const slide = (direction) => {
    //     if (direction === 'backward') {
    //         slidesIndex--
    //         if (slidesIndex < 0) { slidesIndex = pictures.length - 1 }
    //     } else if (direction === 'foward') {
    //         slidesIndex++
    //         if (slidesIndex > pictures.length - 1) { slidesIndex = 0 }
    //     }
    // }
   
    console.log(slidesIndex)
    console.log(pictures[slidesIndex])

    return (
        <div className="slideshow">
            <img className='slideshow_img' src={pictures[slidesIndex]} alt= {`Photographie ${slidesIndex+1} sur ${pictures.length}`} />
            <div className='slideshow_arrow'>
                {/* <img className='slideshow_arrow_backward' src={ArrowBackward} alt="Flèche vers la précédante" onClick={slide('backward')}/> */}
                {/* <img className='slideshow_arrow_forward' src={ArrowForward} alt="Flèche vers la suivante" onClick={slide('forward')}/> */}
            </div>
            <div className="slideshow_caption">{`${++slidesIndex}/${pictures.length}`}</div>
        </div> 
    )
}

export default Slideshow

