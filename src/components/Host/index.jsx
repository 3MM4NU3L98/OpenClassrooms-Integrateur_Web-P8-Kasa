import './host.scss'

function Host({host}) {
    return (
        <div className="host">
            <div className="host_name">{host.name.replace(/ /g, ' \n')}</div>
            <img className="host_img" src={host.picture} alt={`Photographie de $`} />
        </div>
    )
} 

export default Host