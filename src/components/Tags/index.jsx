import './tags.scss'

const Tags = (itemTags) => {
    const items = itemTags.itemTags
    return (
        <div className="tags">
            {items.map((item) => ( <span key={item}>{item}</span> ))}
        </div>
    )
    
}

export default Tags