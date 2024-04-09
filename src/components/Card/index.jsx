import './card.scss'

function Card({ title, cover }) {
    return (
        <article className="card">
            <img className="card_Img" src={cover} alt={title} />
            <div className="card_Title">{title}</div>            
        </article>
    )
}

export default Card