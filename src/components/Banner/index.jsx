import './banner.scss'

function Banner({bannerImg, bannerTxt=''}) {
    return (
        <div className="banner">
            <img className='bannerImg' src={bannerImg} alt="Bannière"/>
            { bannerTxt !== '' &&
                <div className='bannerTxt'>{bannerTxt}</div>
            }
        </div>
    )
}

export default Banner