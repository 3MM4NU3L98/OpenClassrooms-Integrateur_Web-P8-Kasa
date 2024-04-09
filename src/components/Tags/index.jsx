import './tags.scss'

const Tags = ({itemTags}) => {
    return (
        <div className="tags">
            {itemTags.map((item) => ( <span key={item}>{item}</span> ))}
        </div>
    )
}

export default Tags